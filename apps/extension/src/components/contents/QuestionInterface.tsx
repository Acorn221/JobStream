import { Autocomplete, TextField, TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  useEffect, type FC, useState,
} from 'react';
import { sendToBackground } from '@plasmohq/messaging';
import { toast } from 'react-toastify';
import { ToastStyle, dateXAgo, getGradientFromId } from 'misc-glob';
import 'react-toastify/dist/ReactToastify.css';
import { DataGrid, type GridColDef, type GridRowId } from '@mui/x-data-grid';

import { FiExternalLink } from 'react-icons/fi';
import type { GetJobsRequest, GetJobsResponse, Job } from '@/background/messages/getJobs';

type QuestionInterfaceProps = {
	setShowQuestionInterface: (show: boolean) => void;
	questionText: string;
	setQuestionText: (text: string) => void;
  getAnswer: (text: string, jobId: string) => Promise<void>;
};

const jobColumns: GridColDef[] = [
  {
    field: 'url',
    headerName: 'Link',
    sortable: false,
    width: 50,
    description: 'The link to where the Job was found',
    renderCell: (params) => (
      <a
        href={params.row.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex align-middle justify-center"
      >
        <div className="btn btn-info btn-outline h-10 w-10 m-auto p-1"><FiExternalLink className="h-full w-full" /></div>
      </a>
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 80,
  },
  {
    field: 'colour',
    headerName: 'Colour',
    width: 55,
    sortable: false,
    cellClassName: 'Colour',
    renderCell: (params) => (
      <div
        className="h-12 w-12 hover:invert-[0.1] hover:scale-[1.03] text-white"
        style={{
          backgroundImage: getGradientFromId(params.row.id),
        }}
      />
    ),
  },
  {
    field: 'site',
    headerName: 'Site',
    sortable: false,
    width: 100,
    description: 'The URL of the site where the Job was found',
    valueGetter: (params) => {
      const url = new URL(params.row.url);
      return url.hostname.replace('www.', '');
    },
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
  },
  {
    field: 'createdAt',
    headerName: 'Added',
    width: 100,
    renderCell: (params) => (
      <div>
        {dateXAgo(params.value)}
      </div>
    ),
  },
];

export const QuestionInterface: FC<QuestionInterfaceProps> = ({
  setShowQuestionInterface,
  questionText,
  setQuestionText,
  getAnswer,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);

  const getJobs = async () => {
    const res = await sendToBackground<
    GetJobsRequest,
    GetJobsResponse
   >({
     name: 'getJobs',
     body: {
       newestFirst: true,
       take: 10,
     },
   });

    if (res.status === 'FAILURE') {
      console.error(res.payload.error);
    }

    if (res.status === 'SUCCESS') {
      setJobs(res.payload.jobs);
      setSelectionModel([res.payload.jobs[0].id]);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div
      className="fixed bottom-0 right-0 z-50 bg-[#1d232a] outline-black outline-2 flex flex-col max-w-4xl pb-4 px-4 rounded-tl-2xl gap-2"
    >
      <div className="text-center text-xl flex justify-center align-middle gap-2">
        <div className="flex-1 m-auto text-white">
          Edit Your Question And Extra Context As Needed
        </div>
        <div className="btn btn-ghost flex justify-center align-middle rounded-full m-2 invert">
          <CloseIcon className="h-8 w-8 m-auto" onClick={() => setShowQuestionInterface(false)} />
        </div>
      </div>
      {/* TODO: make the autocomplete function work for selecting a job */}
      <DataGrid
        className="w-full min-w-[500px] flex-grow-1 text-xl"
        columns={jobColumns}
        rows={jobs}
        pageSizeOptions={[]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        rowSelectionModel={selectionModel}
        checkboxSelection={!isLoading}
        onRowSelectionModelChange={(newSelection) => {
          if (isLoading) return;
          // only allow 1 to be selected at a time
          if (newSelection.length > 1) {
            setSelectionModel([newSelection.pop()]);
          } else {
            setSelectionModel(newSelection);
          }
        }}
        sx={{
          '& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer': {
            display: 'none',
          },
        }}
      />
      <TextareaAutosize
        aria-label="minimum height"
        className="p-4 rounded-xl resize-none montserrat bg-slate-800 text-white"
        minRows={3}
        maxRows={20}
        placeholder="Your question and context"
        disabled={isLoading}
        value={questionText}
        onChange={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setQuestionText(e.target.value);
        }}
      />
      {
      isLoading
        ? <div className="btn btn-disabled bg-[#434343] hover:bg-[#434343] text-xl flex-none plex-mono text-white">Loading...</div>
        : (
          <div
            className="btn btn-primary bg-[#641ae6] hover:bg-[#835dc5] text-xl flex-none plex-mono text-white"
            onClick={async () => {
              setIsLoading(true);
              try {
                await toast.promise(
                  getAnswer(questionText, selectionModel[0] as string),
                  {
                    pending: 'Loading...',
                    success: 'Answer generated!',
                    error: 'Error generating answer',
                  },
                  {
                    ...ToastStyle,
                  },
                );
              } catch (error) {
                // Handle error here
              }
              setIsLoading(false);
            }}
          >
            Generate Answer
          </div>
        )
    }
    </div>
  );
};
