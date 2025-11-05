import {
  GridToolbarContainer,
  GridRowSelectionModel,
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { FC, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { ToastStyle } from 'misc-glob';
import { Experience } from 'graphql-generated-code';

interface EditToolbarProps {
  deleteSelected: () => Promise<any>;
  selectionModel: GridRowSelectionModel;
  setEditExperience: (experience: Experience | undefined) => void;
}

// eslint-disable-next-line max-len
export const EditToolbar: FC<EditToolbarProps> = ({
  selectionModel,
  deleteSelected,
  setEditExperience,
}) => {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  return (
    <GridToolbarContainer>
      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => {
          setEditExperience(undefined);
          window.editModal.showModal();
        }}
      >
        Add new Experience
      </Button>
      <Button
        color="error"
        disabled={selectionModel.length === 0}
        startIcon={<DeleteIcon />}
        onClick={() => selectionModel.length > 0 && window.deleteModal.showModal()}
      >
        Delete selected
      </Button>
      <dialog className="modal" id="deleteModal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-4">
            Delete
            {' '}
            {selectionModel.length}
            {' '}
            Experience
            {selectionModel.length !== 1 && 's'}
            ?
          </h3>
          {/** Insert form here for name, content (text area) and submit */}
          <div className="flex flex-col gap-4">
            <div
              className="btn btn-error"
              onClick={() => {
                window.deleteModal.close();
                deleteSelected();
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
    </GridToolbarContainer>
  );
};
