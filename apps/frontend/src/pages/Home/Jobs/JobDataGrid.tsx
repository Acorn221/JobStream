import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridSortModel,
} from '@mui/x-data-grid';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sendToBackgroundViaRelay } from '@plasmohq/messaging';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import {
  GetJobQuery,
  namedOperations,
  useGetJobQuery,
  useUpdateJobNameMutation,
} from 'graphql-generated-code';
import { messagesFromExtension, messagesToExtension } from 'misc-glob';
import { Toolbar } from './Toolbar';

// Step 1: Create a helper type
type ExtractTypeIfPropertyExists<T, P extends string> = T extends {
  [K in P]?: infer R;
}
  ? R
  : never;

type ExtractedDataType = ExtractTypeIfPropertyExists<
  GetJobQuery['user'],
  'data'
>;

export type Job = ExtractTypeIfPropertyExists<
  ExtractedDataType,
  'job'
> extends Array<infer R>
  ? R
  : never;

export const JobDataGrid = () => {
  const {
    data, error, loading, refetch,
  } = useGetJobQuery();

  useEffect(() => {
    sendToBackgroundViaRelay<messagesToExtension, messagesFromExtension>({
      name: 'persistentListener' as never,
    })
      .then((response) => {
        if (response.type === 'JobSelected') {
          refetch();
        }
      })
      .catch((err) => {});
    // any error here is fine
  });

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    [],
  );

  const [suitabilityScoreRange, setSuitabilityScoreRange] = useState<
    [number, number]
  >([100, 0]);

  useEffect(() => {
    if (data?.user?.__typename !== 'QueryUserSuccess') return;
    const range = data.user.data.job
      .map((x) => x.suitabilityScore)
      .reduce(
        (acc, curr) => {
          if (!curr) return acc;
          if (curr === 0) return acc;
          if (curr < acc[0]) acc[0] = curr;
          if (curr > acc[1]) acc[1] = curr;
          return acc;
        },
        [100, 0],
      ) as [number, number];
    console.log(
      `range: ${range}, ${JSON.stringify(data.user.data.job, null, 2)}`,
    );
    setSuitabilityScoreRange(range);
  }, [data]);

  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'createdAt',
      sort: 'desc',
    },
  ]);

  const [currentlySelected, setCurrentlySelected] = useState<Job | undefined>(
    undefined,
  );

  const [open, setOpen] = useState(false);

  const [updateJobName] = useUpdateJobNameMutation({
    refetchQueries: [namedOperations.Query.GetJob],
  });

  useEffect(() => {
    if (data?.user?.__typename !== 'QueryUserSuccess') return;
    if (selectionModel.length === 1) {
      const currentlySelectedID = selectionModel[0];
      const jobDesc = data.user.data.job.find(
        (x) => x.id === currentlySelectedID,
      );
      if (!jobDesc) return;
      setCurrentlySelected(jobDesc);
    } else {
      setCurrentlySelected(undefined);
    }
  }, [selectionModel]);

  useEffect(() => {
    if (data?.user?.__typename !== 'QueryUserSuccess') return;
    const selected = data?.user?.data.job.find(
      (x) => x.id === currentlySelected?.id,
    );
    if (selected) {
      setCurrentlySelected(selected);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;

  if (error) {
    return (
      <div>
        Error!
        {' '}
        {error.message}
      </div>
    );
  }
  if (data?.user.__typename !== 'QueryUserSuccess') {
    return (
      <div>
        Error!
        {' '}
        {data?.user.__typename}
      </div>
    );
  }

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      sortable: true,
      width: 150,
      description: 'The assigned name of the Job Description',
      valueGetter: (params) => params.row.name || 'Untitled',
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: true,
      width: 120,
      description: 'The status of the Job Application',
    },
    {
      field: 'createdAt',
      headerName: 'Added At',
      sortable: true,
      width: 110,
      description: 'The date the Job was added to the Optimiser',
      sortComparator: (v1, v2) => {
        const d1 = new Date(v1).getTime();
        const d2 = new Date(v2).getTime();
        return d1 - d2 > 0 ? 1 : -1;
      },
      renderCell: (params) => new Date(params.row.createdAt).toLocaleDateString(),
    },
    {
      field: 'suitabilityScore',
      headerName: 'Suitability',
      sortable: true,
      width: 80,
      description: 'The number of words in the Job Description',
      // valueGetter: (params) => (
      //   Math.ceil(((params.row.suitabilityScore !== null && params.row.suitabilityScore !== 0)
      //     ? (params.row.suitabilityScore - suitabilityScoreRange[0])
      //   / (suitabilityScoreRange[1] - suitabilityScoreRange[0]) * 100
      //     : 0))
      // ),
      valueGetter: (params) => {
        if (
          params.row.suitabilityScore === null
          || params.row.suitabilityScore === 0
        ) { return 0; }
        const scaledValue = ((params.row.suitabilityScore - suitabilityScoreRange[0])
            / (suitabilityScoreRange[1] - suitabilityScoreRange[0]))
            * 9
          + 1;
        return parseFloat(scaledValue.toFixed(1));
      },

      renderCell: (params) => (
        <div>{params.value !== 0 && `${params.value}/10`}</div>
      ),
    },
    {
      field: 'site',
      headerName: 'Site',
      sortable: false,
      flex: 1,
      description: 'The URL of the site where the Job was found',
      valueGetter: (params) => params.row.url.split('/')[2],
    },
    {
      field: 'url',
      headerName: 'Link',
      sortable: false,
      width: 50,
      description: 'The link to where the Job was found',
      renderCell: (params) => (
        <Link
          to={params.row.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex align-middle justify-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="btn btn-info btn-outline h-10 w-10 m-auto p-1">
            <FiExternalLink className="h-full w-full" />
          </div>
        </Link>
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Edit',
      width: 50,
      sortable: false,
      cellClassName: 'actions',
      renderCell: (params) => (
        <div
          className="w-full flex align-middle justify-center"
          onClick={(e) => {
            e.stopPropagation();
            if (data.user.__typename === 'QueryUserSuccess') {
              const ownJob = data.user.data.job.find(
                (x) => params.row.id === x.id,
              );
              if (!ownJob) return;
              setCurrentlySelected(ownJob);
              setOpen(true);
            }
          }}
        >
          <div className="btn btn-primary h-10 w-10 m-auto p-1">
            <OpenInFullIcon className="h-full w-full" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {data.user.data.job.length > 0 && (
        <DataGrid
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          sortModel={sortModel}
          onSortModelChange={(newSortModel) => {
            setSortModel(newSortModel);
          }}
          checkboxSelection
          pageSizeOptions={[5, 10, 25, 50]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          disableRowSelectionOnClick
          hideFooterSelectedRowCount
          className="bg-zinc-900 m-4"
          columns={columns}
          rows={data.user.data.job}
          getRowId={(row) => row.id}
          slots={{
            toolbar: Toolbar,
          }}
          slotProps={{
            toolbar: {
              selectionModel,
              setSelectionModel,
            },
          }}
        />
      )}
      {data.user.data.job.length === 0 && (
        <div className="card bg-info m-4">
          <div className="card-body">
            <h3 className="card-title">No Job Descriptions Added!</h3>
            <p className="card-text">
              You can manually add them, or get the browser extension to quickly
              add them!
            </p>
          </div>
        </div>
      )}
    </>
  );
};
