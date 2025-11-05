import { GridDeleteIcon, GridRowSelectionModel, GridToolbarContainer } from '@mui/x-data-grid';
import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import { GoogleDocsFile, ToastStyle } from 'misc-glob';
import { namedOperations, useRemoveCoverLetterTemplateMutation, useUpdateCoverLetterTemplateMutation } from 'graphql-generated-code';

type TemplatesSelectedToolbarProps = {
	selectionModel: GridRowSelectionModel;
	setSelectionModel: (selectionModel: GridRowSelectionModel) => void;
};

export const TemplatesSelectedToolbar: FC<TemplatesSelectedToolbarProps> = ({
  selectionModel, setSelectionModel,
}) => {
  const [removeCoverLetters] = useRemoveCoverLetterTemplateMutation({
    refetchQueries: [
      namedOperations.Query.GetCoverLetterTemplates,
    ],
    variables: {
      Ids: selectionModel.map((id) => id.toString()),
    },
  });

  const [updateCoverLetters] = useUpdateCoverLetterTemplateMutation({
    refetchQueries: [
      namedOperations.Query.GetCoverLetterTemplates,
    ],
  });

  const handleUpdateCoverLetters = async (active: boolean) => {
    window.ActiveModal.close();
    toast.promise(updateCoverLetters({
      variables: {
        Ids: selectionModel.map((id) => id.toString()),
        active,
      },
    }), {
      pending: 'Setting Cover Letter Templates Active...',
      success: 'Cover Letter Templates Set Active!',
      error: 'Error Setting Cover Letter Templates Active!',
    }, {
      ...ToastStyle,
    }).then(() => {
      setSelectionModel([]);
    });
  };

  const handleRemoveCoverLetters = async () => {
    window.deleteModal.close();
    toast.promise(removeCoverLetters(), {
      pending: 'Removing Cover Letter Templates...',
      success: 'Cover Letter Templates Removed!',
      error: 'Error Removing Cover Letter Templates!',
    }, {
      ...ToastStyle,
    }).then(() => {
      setSelectionModel([]);
    });
  };

  return (
    <>
      <GridToolbarContainer>
        <Button
          color="primary"
          disabled={selectionModel.length === 0}
          startIcon={<AddIcon />}
          onClick={() => {
            window.ActiveModal.showModal();
          }}
        >
          Set Active
        </Button>
        <Button
          color="error"
          disabled={selectionModel.length === 0}
          startIcon={<GridDeleteIcon />}
          onClick={() => {
            window.deleteModal.showModal();
          }}
        >
          Remove
        </Button>
      </GridToolbarContainer>
      <dialog className="modal" id="deleteModal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-4">
            Remove
            {' '}
            {selectionModel.length}
            {' '}
            Cover Letter Template
            {selectionModel.length !== 1 && 's'}
            ?
          </h3>
          {/** Insert form here for name, content (text area) and submit */}
          <div className="flex flex-col gap-4">
            <div
              className="btn btn-error"
              onClick={() => {
                handleRemoveCoverLetters();
              }}
            >
              Delete
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog className="modal" id="ActiveModal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-4">
            Set
            {' '}
            {selectionModel.length}
            {' '}
            Cover Letter Template
            {selectionModel.length !== 1 && 's'}
            {' '}
            Active Status
            ?
          </h3>
          {/** Insert form here for name, content (text area) and submit */}
          <div className="flex gap-4 w-full">
            <div
              className="btn btn-error flex-1"
              onClick={() => {
                handleUpdateCoverLetters(false);
              }}
            >
              Inactive
            </div>
            <div
              className="btn btn-primary flex-1"
              onClick={() => {
                handleUpdateCoverLetters(true);
              }}
            >
              Active
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>

  );
};
