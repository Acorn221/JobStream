import { MenuItem, Select } from '@mui/material';
import {
  GetJobQuery,
  Job,
  namedOperations,
  useGetJobQuery,
  useUpdateJobMutation,
  useUpdateJobNameMutation,
} from 'graphql-generated-code';
import {
  StatusEnum, Routes, ToastStyle, getGradientFromId,
} from 'misc-glob';
import {
  FC, useCallback, useContext, useEffect, useRef, useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoArrowBackSharp } from 'react-icons/io5';
import { FiExternalLink } from 'react-icons/fi';
import { UIDashLayout } from './UIDashLayout';
import { generateCV, generateCoverLetter } from '@/utils/wsRequests';
import { AuthContext, client } from '@/App';

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

export type JobType = ExtractTypeIfPropertyExists<
  ExtractedDataType,
  'job'
> extends Array<infer R>
  ? R
  : never;

interface UseJobStatusReturn {
  GenCoverLetter: () => void;
  GenCV: () => void;
  ChangeStatus: (status: StatusEnum) => void;
}

const useJobStatus = (jobId: string, authToken: string) => {
  const [updateJob] = useUpdateJobMutation({
    refetchQueries: [namedOperations.Query.GetJob],
  });

  const ChangeStatus = useCallback<UseJobStatusReturn['ChangeStatus']>(
    (status) => {
      updateJob({
        variables: {
          id: jobId,
          status,
        },
      });
    },
    [jobId],
  );

  const GenCoverLetter = async () => {
    await generateCoverLetter(jobId, authToken);
    client.refetchQueries({
      include: [
        namedOperations.Query.GetJob,
        namedOperations.Query.GetUserCreditsSum,
        namedOperations.Query.GetCredits,
      ],
    });
    return true;
  };

  const GenCV = async () => {
    await generateCV(jobId, authToken);
    client.refetchQueries({
      include: [
        namedOperations.Query.GetJob,
        namedOperations.Query.GetUserCreditsSum,
        namedOperations.Query.GetCredits,
      ],
    });
    return true;
  };

  return {
    GenCV: () => {
      toast.promise(GenCV(), {
        pending: 'Generating CV...',
        success: 'Generated CV! 🎉🎉',
        error: 'Error generating CV',
      }, {
        ...ToastStyle,
      });
    },

    GenCoverLetter: () => {
      toast.promise(GenCoverLetter(), {
        pending: 'Generating Cover Letter...',
        success: 'Generated Cover Letter! 🎉🎉',
        error: 'Error generating Cover Letter',
      }, {
        ...ToastStyle,
      });
    },
    ChangeStatus,
  };
};

/**
 * Renders the page specific for one job.
 */
export const JobPage: FC = () => {
  // TODO: make this only get the current job
  const { data, loading } = useGetJobQuery();
  const params = useParams();

  const [updateJobName] = useUpdateJobNameMutation({
    refetchQueries: [
      namedOperations.Query.GetJob,
      namedOperations.Query.GetUser,
    ],
  });

  const [isEditingTitle, setIsEditingTitle] = useState<string | null | undefined>(
    undefined,
  );

  const [job, setJob] = useState<JobType | null | undefined>();
  const [jobName, setJobName] = useState<string | null | undefined>(job?.name);

  useEffect(() => {
    if (!isEditingTitle && job != null) {
      if (job.name !== jobName && jobName != null) {
        updateJobName({
          variables: {
            id: job.id,
            name: jobName,
          },
        });
      }
    }
  }, [isEditingTitle, job]);

  useEffect(() => {
    if (data?.user.__typename === 'QueryUserSuccess') {
      const foundJob = data.user.data.job.find((j) => j.id === params.id);
      setJob(foundJob);
      setJobName(job?.name);
    }
  }, [data]);

  const formRef = useRef<HTMLFormElement>(null);

  const context = useContext(AuthContext);

  if (!params.id) {
    throw new Error('Should always have an ID in this route');
  }

  const {
    GenCoverLetter,
    GenCV,
    ChangeStatus,
  } = useJobStatus(params.id, context?.authContext?.accessRaw ?? '');

  if (loading) {
    return <>Loading...</>;
  }

  if (data?.user.__typename === 'Error') {
    return <>Big error</>;
  }

  if (!job) {
    return <>Hmm... Couldnt find the job</>;
  }

  return (
    <UIDashLayout>
      <div className="grid grid-cols-2 gap-4">
        <div className="pb-4">
          <div className="flex align-middle">
            <Link className="mr-4 h-20" to={Routes.Jobs}>
              <div className="btn btn-primary text-xl h-full">
                <IoArrowBackSharp className="w-6 h-6" />
              </div>
            </Link>
            {isEditingTitle == null ? (
              <h1
                className="text-5xl font-bold my-auto cursor-pointer"
                onDoubleClick={() => setIsEditingTitle(jobName)}
              >
                {jobName ?? 'Untitled'}
              </h1>
            ) : (
              <form ref={formRef} onSubmit={() => setIsEditingTitle(undefined)} className="my-auto">
                <input
                  className="input input-bordered"
                  value={jobName ?? ''}
                  onChange={(e) => setJobName(e.target.value)}
                  onBlur={formRef.current?.submit}
                />
                <input type="submit" hidden />
              </form>
            )}
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: getGradientFromId(job.id),
            }}
            className="p-4 text-white rounded-2xl"
          >
            <Select
              className="w-full bg-base-100"
              label="Status"
              variant="outlined"
              value={job.status}
              onChange={(e) => ChangeStatus(e.target.value as StatusEnum)}
            >
              <MenuItem value={StatusEnum.Pending}>{StatusEnum.Pending}</MenuItem>
              <MenuItem value={StatusEnum.Applied}>{StatusEnum.Applied}</MenuItem>
              <MenuItem value={StatusEnum.Interviewing}>
                {StatusEnum.Interviewing}
              </MenuItem>
              <MenuItem value={StatusEnum.Offered}>{StatusEnum.Offered}</MenuItem>
              <MenuItem value={StatusEnum.Rejected}>
                {StatusEnum.Rejected}
              </MenuItem>
            </Select>
          </div>
        </div>
        <div className="rounded-xl bg-base-100 shadow-xl p-4 flex flex-col justify-center align-middle">
          <h3 className="text-xl font-bold">CVs</h3>
          {
            /*
                      {job.GeneratedCv.length === 0 && <p>No CVs currently</p>}
          {job.GeneratedCv.map((cv) => (
            <div>{cv.id}</div>
          ))}
          <button className="btn btn-primary hover:scale-105" disabled onClick={GenCV}>
            Generate CVs
          </button>
            */
          }
          <div className="m-auto text-2xl">
            CV Optimisation is coming soon!
          </div>

        </div>
        <div className="rounded-xl bg-base-100 shadow-xl p-4 flex flex-col gap-2">
          <h3 className="text-xl font-bold">Cover Letters</h3>
          {job.GeneratedCoverLetter.length === 0 && (
            <p>No Cover Letters currently</p>
          )}
          {job.GeneratedCoverLetter.map((cl) => (
            <Link
              to={`https://docs.google.com/document/d/${cl.googleDocId}/edit`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn btn-info text-black hover:scale-105 flex justify-center align-middle">
                <div className="flex-1 m-auto">{cl.name ?? 'Cover Letter'}</div>
                <FiExternalLink className="m-auto w-10 h-10" />
              </div>
            </Link>
          ))}
          <button className="btn btn-primary hover:scale-105 mt-4" onClick={GenCoverLetter}>
            Generate A New Cover Letter
          </button>
        </div>
        <div className="col-span-2 rounded-xl bg-base-100 shadow-xl p-4 flex flex-col">
          <h3 className="text-xl font-bold">Experiences</h3>
          <p className="text-md">
            {
							job.suitabilityScore ? (
  <>
    Your suitability score based off your experiences is
    {' '}
    {`${job.suitabilityScore}%`}
  </>
							) : (
  <>
    Add more experiences to get a suitability score
  </>
							)
						}

          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="text-2xl">
          Job Description:
        </div>
        {
          job.description.map((desc) => (
            <div className="rounded-xl bg-base-100 shadow-xl p-4 flex flex-col">
              <p className="text-md">{desc}</p>
            </div>
          ))
        }
      </div>
    </UIDashLayout>
  );
};
