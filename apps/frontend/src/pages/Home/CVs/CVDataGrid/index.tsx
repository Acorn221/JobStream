import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridSortModel,
} from '@mui/x-data-grid';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiSolidCrown } from 'react-icons/bi';
import { useGetCVsQuery } from 'graphql-generated-code';
import { DisplayedCV } from './DisplayedCV';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    sortable: true,
    width: 150,
    description: 'The name of the CV',
  },
  {
    field: 'createdAt',
    headerName: 'Added At',
    sortable: true,
    width: 150,
    description: 'The date the CV was added to the Optimiser',
    valueGetter: (params) => new Date(params.row.createdAt).toLocaleDateString(),
  },
  // TODO: add google doc link in here
  {
    field: 'googleDocLink',
    headerName: 'Link',
    sortable: false,
    width: 50,
    description: 'The link to the Google Doc',
    renderCell: (params) => (
      <Link
        to={params.row.googleDocLink}
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
    field: 'highlightedText',
    headerName: 'Highlighted Text',
    sortable: true,
    flex: 1,
    description: 'The text that has been highlighted in the CV',
    valueGetter: (params) => 'TODO',
  },
  {
    field: 'default',
    headerName: 'Default',
    sortable: true,
    width: 80,
    description: 'Whether the CV is the default CV',
    renderCell: (params) => params.row.isDefault && <BiSolidCrown className="w-6 h-6 m-auto" />,
  },
];

export const CVDataGrid = () => {
  const { data, error, loading } = useGetCVsQuery();

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    [],
  );

  const [sortModel, setSortModel] = useState<GridSortModel>([
    { field: 'createdAt', sort: 'desc' },
  ]);

  useEffect(() => {}, [selectionModel]);

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

  return (
    <div>
      <DataGrid
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newSelectionModel) => {
          // removing the previous selection and only keeping the new one
          const newSelection = newSelectionModel.filter(
            (id) => !selectionModel.includes(id),
          );
          if (newSelection.length <= 1) {
            setSelectionModel(newSelection);
          }
        }}
        sortModel={sortModel}
        onSortModelChange={(newSortModel) => {
          setSortModel(newSortModel);
        }}
        checkboxSelection
        hideFooterSelectedRowCount
        className="bg-zinc-900 my-4 mr-8"
        columns={columns}
        rows={data.user.data.CV}
        getRowId={(row) => row.id}
        // disabling select all as it's not needed
        sx={{
          '& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer':
            {
              display: 'none',
            },
        }}
      />
      {selectionModel.length > 0 && (
        <DisplayedCV
          CV={data.user.data.CV.find(
            (x) => x.id === selectionModel[0].toString(),
          )}
        />
      )}
      {selectionModel.length === 0 && data.user.data.CV.length > 0 && (
        <div className="card bg-base-200 mr-8">
          <div className="card-body">
            <h3 className="card-title">No Resume Selected</h3>
            <p className="card-text">
              You have not selected any Resume to optimise, click on one of the
              checkboxes in the table above to get started!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
