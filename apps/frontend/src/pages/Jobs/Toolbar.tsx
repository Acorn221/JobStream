import Button from '@mui/material/Button';
import { GridRowSelectionModel, GridToolbarContainer } from '@mui/x-data-grid';
import { FC, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { toast } from 'react-toastify';
import { Status, StatusEnum, ToastStyle } from 'misc-glob';
import {
  Job, namedOperations, useDeleteJobsMutation, useUpdateJobMutation, useUpdateJobsMutation,
} from 'graphql-generated-code';

type ToolbarProps = {
	selectionModel: GridRowSelectionModel;
	setSelectionModel: (selectionModel: GridRowSelectionModel) => void;
};

type Modals = 'BulkJobEdit' | 'BulkJobDelete';

export const Toolbar: FC<ToolbarProps> = ({ selectionModel, setSelectionModel }) => {
  const [open, setOpen] = useState<Modals | undefined>();
  const [status, setStatus] = useState<Status>(StatusEnum.Pending);

  const [updateJobs] = useUpdateJobsMutation({
    variables: {
      ids: selectionModel.map((id) => id.toString()),
      status,
    },
    refetchQueries: [
      namedOperations.Query.GetJob,
    ],
  });

  const [deleteJobs] = useDeleteJobsMutation({
    variables: {
      ids: selectionModel.map((id) => id.toString()),
    },
    refetchQueries: [
      namedOperations.Query.GetJob,
    ],
  });

  const handleUpdateJobs = async () => {
    toast.promise(updateJobs(), {
      pending: 'Updating jobs...',
      success: 'Jobs updated',
      error: 'Error updating jobs',
    }, {
      ...ToastStyle,
    }).then(() => {
      setSelectionModel([]);
    });
  };

  const handleDeleteJobs = async () => {
    toast.promise(deleteJobs(), {
      pending: 'Deleting jobs...',
      success: 'Jobs deleted',
      error: 'Error deleting jobs',
    }, {
      ...ToastStyle,
    }).then(() => {
      setSelectionModel([]);
    });
  };

  return (
    <>
      <GridToolbarContainer className="flex">
        <Button color="primary" startIcon={<EditIcon />} onClick={() => setOpen('BulkJobEdit')}>
          Bulk Edit
        </Button>
        <Button color="error" startIcon={<DeleteIcon />} onClick={() => setOpen('BulkJobDelete')}>
          Delete Selected
        </Button>
      </GridToolbarContainer>
      <input type="checkbox" id="BulkJobEdit" className="modal-toggle" checked={open === 'BulkJobEdit'} />
      <dialog className="modal">
        <form method="dialog" className="modal-box flex flex-col gap-4">
          <div className="text-2xl">
            Bulk Edit
            {' '}
            {selectionModel.length}
            {' '}
            Jobs
          </div>
          <FormControl className="w-40">
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={(e) => {
                setStatus(e.target.value as Status);
              }}
            >
              <MenuItem value={StatusEnum.Pending}>{StatusEnum.Pending}</MenuItem>
              <MenuItem value={StatusEnum.Applied}>{StatusEnum.Applied}</MenuItem>
              <MenuItem value={StatusEnum.Interviewing}>{StatusEnum.Interviewing}</MenuItem>
              <MenuItem value={StatusEnum.Offered}>{StatusEnum.Offered}</MenuItem>
              <MenuItem value={StatusEnum.Rejected}>{StatusEnum.Rejected}</MenuItem>

            </Select>
          </FormControl>
          <div className="gap-2 flex justify-end align-bottom mr-2 mb-2">
            <div
              className="btn btn-error flex align-middle justify-center"
              onClick={() => { setOpen(undefined); }}
            >
              <div className="m-auto">
                Discard
              </div>
              <CloseIcon className="h-6 w-6 m-auto" />
            </div>
            <div
              className="btn btn-primary flex align-middle justify-center"
              onClick={() => { setOpen(undefined); handleUpdateJobs(); }}
            >
              <div className="m-auto">
                Submit
              </div>
              <CheckIcon className="h-6 w-6 m-auto" />
            </div>
          </div>

        </form>
        <div
          className="modal-backdrop bg-black opacity-30"
          onClick={() => { setOpen(undefined); }}
        />
      </dialog>
      <input type="checkbox" id="BulkDeleteJob" className="modal-toggle" checked={open === 'BulkJobDelete'} />
      <dialog className="modal">
        <form method="dialog" className="modal-box flex flex-col gap-4">
          <div className="text-2xl">
            Bulk Delete
            {' '}
            {selectionModel.length}
            {' '}
            Jobs
          </div>

          <div className="gap-2 flex">
            <div
              className="btn btn-primary flex align-middle justify-center flex-1"
              onClick={() => { setOpen(undefined); }}
            >
              <div className="m-auto">
                Go Back
              </div>
            </div>
            <div
              className="btn btn-error flex align-middle justify-center flex-1"
              onClick={() => { setOpen(undefined); handleDeleteJobs(); }}
            >
              <div className="m-auto">
                Delete
              </div>
              <DeleteIcon className="h-6 w-6 m-auto" />
            </div>
          </div>

        </form>
        <div
          className="modal-backdrop bg-black opacity-30"
          onClick={() => { setOpen(undefined); }}
        />
      </dialog>
    </>
  );
};
