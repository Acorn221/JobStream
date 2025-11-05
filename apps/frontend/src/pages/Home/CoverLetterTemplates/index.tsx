import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  namedOperations,
  useCreateCoverLetterTemplateMutation,
  useGetCoverLetterTemplatesQuery,
} from 'graphql-generated-code';
import { toast } from 'react-toastify';
import { ToastStyle } from 'misc-glob';
import { CardLayout } from '../../Layouts/CardLayout';
import { GooglePickerUI } from '@/components/DriveFileList/GooglePickerUI';
import { TemplatesSelectedToolbar } from './TemplatesSelectedToolbar';
import { GAPIAuth } from '@/components/DriveFileList/GAPIAuth';

const actions = () => {
  const [createCoverLetterTemplate] = useCreateCoverLetterTemplateMutation({
    refetchQueries: [
      namedOperations.Query.GetCoverLetterTemplates,
      namedOperations.Query.GetUserStats,
    ],
  });

  const onFilesSelected = (fileIds: string[]) => {
    toast.promise(
      createCoverLetterTemplate({
        variables: {
          Ids: fileIds,
        },
      }),
      {
        pending: 'Adding template to Optimiser...',
        success: 'Added template to Optimiser! 🎉',
        error: 'Error adding template to Optimiser 😢',
      },
      ToastStyle,
    );
  };
  return (
    <div className="mb-2 mr-2 flex gap-4">
      <Link to="https://docs.google.com/document/d/16m-6EnaylXKF1kO04eVKdncTBj9732dM16e1mvZzseY/copy">
        <div className="btn btn-info flex justify-center align-middle">
          <div className="m-auto">
            See Example
          </div>
          <FiExternalLink className="w-6 h-6 m-auto" />
        </div>
      </Link>
      <div
        className="btn btn-primary mt-auto flex"
      >
        <GooglePickerUI
          onFilesSelected={onFilesSelected}
        />
      </div>
    </div>
  );
};
const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    sortable: true,
    flex: 1,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    sortable: true,
    valueGetter: (params) => new Date(params.row.createdAt).toLocaleDateString(),
  },
  {
    field: 'updatedAt',
    headerName: 'Updated At',
    sortable: true,
    valueGetter: (params) => new Date(params.row.updatedAt).toLocaleDateString(),
  },
  {
    field: 'active',
    headerName: 'Active',
    sortable: true,
    valueGetter: (params) => (params.row.active ? 'Yes' : 'No'),
  },
  {
    field: 'webViewLink',
    headerName: 'Link',
    width: 50,
    sortable: false,
    description: 'The link to the file',
    renderCell: (params) => (
      <Link to={`https://docs.google.com/document/d/${params.row.googleDocId}/edit`} target="_blank" rel="noopener noreferrer" className="w-full flex align-middle justify-center">
        <div className="btn btn-info btn-outline h-10 w-10 m-auto p-1"><FiExternalLink className="h-full w-full" /></div>
      </Link>
    ),
  },
];

export const CoverLetterTemplates = () => {
  const { data, loading, error } = useGetCoverLetterTemplatesQuery();

  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);

  if (error) {
    return (
      <div>
        Error!
        {' '}
        {error.message}
      </div>
    );
  }

  if (!data || loading) {
    return <div>Loading...</div>;
  }

  return (
    <CardLayout
      title="Cover Letter Templates"
      description="Here is where you can add templates for your cover letters, this let&apos;s you style them how you like and add pictures, headers and footers to them for example. {{job}} Will be replaced with the job title and {{content}} will be replaced by the content when you generate a cover letter."
      Actions={actions}
    >
      {/* TODO: add in a datagrid for viewing selected templates */}
      <DataGrid
        columns={columns}
        rows={data.CoverLetterTemplates}
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection);
        }}
        checkboxSelection
        className="bg-zinc-900 mr-8"
        // set the TemplatesSelectedToolbar
        slots={{
          toolbar: TemplatesSelectedToolbar,
        }}
        slotProps={{
          toolbar: {
            selectionModel, setSelectionModel,
          },
        }}
      />
      <GAPIAuth />
    </CardLayout>
  );
};
