import {
  DataGrid,
  GridColDef,
  GridRowModesModel,
  GridValueGetterParams,
  GridRowSelectionModel,
  GridSortModel,
} from '@mui/x-data-grid';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Experience,
  useGetAllExperienceQuery,
  useUpdateExperienceMutation,
  namedOperations,
  useCreateExperienceMutation,
  useDeleteMultipleExperienceMutation,
} from 'graphql-generated-code';
import { ToastStyle } from 'misc-glob';
import { EditToolbar } from './EditToolbar';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 160,
    sortable: true,
    description: 'The name you give to this experience.',
    editable: true,
  },
  {
    field: 'contentLength',
    headerName: 'Characters',
    width: 80,
    sortable: true,
    valueGetter: (params: GridValueGetterParams) => `${params.row.content?.length ?? 0}`,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 100,
    sortable: true,
  },
  {
    field: 'updatedAt',
    headerName: 'Updated At',
    width: 100,
    sortable: true,
  },
  {
    field: 'content',
    headerName: 'Content',
    sortable: false,
    description: 'The description of this experience.',
    flex: 1,
    editable: true,
  },
];

type ExperienceManagerProps = {
  setEditExperience: (experience: Experience) => void;
};

export const ExperienceManager: FC<ExperienceManagerProps> = ({ setEditExperience }) => {
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    [],
  );

  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'createdAt',
      sort: 'desc',
    },
  ]);

  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const { data, loading, error } = useGetAllExperienceQuery();

  const [updateExperience] = useUpdateExperienceMutation();

  const [deleteMultiple] = useDeleteMultipleExperienceMutation({
    refetchQueries: [namedOperations.Query.GetAllExperience],
  });

  const deleteSelected = () => new Promise((resolve) => {
    toast
      .promise(
        deleteMultiple({
          variables: {
            ids: selectionModel.map((x) => x.toString()),
          },
        }),
        {
          pending: 'Deleting Experience...',
          success: 'Deleted Experience! 🎉',
          error: 'Error deleting Experience 😢',
        },
        {
          ...ToastStyle,
        },
      )
      .then(() => {
        resolve({});
        setSelectionModel([]);
      });
  });

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  if (data?.user.__typename === 'QueryUserSuccess') {
    return (
      <div className="w-full h-[70vh] m-auto">
        <DataGrid
          className="bg-zinc-900"
          rows={data.user.data.Experience}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          // default sort to be the createdAt date
          sortModel={sortModel}
          onSortModelChange={(newSortModel) => setSortModel(newSortModel)}
          pageSizeOptions={[10, 25, 50, 100]}
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          checkboxSelection
          processRowUpdate={async (updatedRow: Experience, originalRow) => {
            if (!updatedRow.id) return originalRow;
            const newExperience = await updateExperience({
              variables: {
                id: updatedRow.id,
                name: updatedRow.name ?? '',
                content: updatedRow.content ?? '',
              },
            });

            if (newExperience.data?.UpdateExperience === true) {
              return updatedRow;
            }
            return originalRow;
          }}
          getRowId={(row) => row.id}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: {
              selectionModel, deleteSelected, setEditExperience,
            },
          }}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
          }}
        />
      </div>
    );
  }

  return (
    <div className="bg-white w-full h-[40vh]">
      <p>{loading ? 'Loading' : 'Error'}</p>
    </div>
  );
};
