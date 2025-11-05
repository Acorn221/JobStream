import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IoMdRefresh } from 'react-icons/io';
import { FiExternalLink } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { BiSolidCrown } from 'react-icons/bi';
import {
  useGetCvExtractedTextQuery, Scalars, Maybe, useRefreshCvMutation, namedOperations, GetCVsQuery,
} from 'graphql-generated-code';
import { ToastStyle } from 'misc-glob';

// Step 1: Create a helper type
type ExtractTypeIfPropertyExists<T, P extends string> =
  T extends { [K in P]?: infer R } ? R : never

type ExtractedDataType = ExtractTypeIfPropertyExists<GetCVsQuery['user'], 'data'>

export type Cv = ExtractTypeIfPropertyExists<ExtractedDataType, 'CV'> extends Array<infer R> ? R : never;

type DisplayedCVProps = {
	CV?: Cv;
}

export const DisplayedCV: FC<DisplayedCVProps> = ({ CV }) => {
  if (!CV) return null;
  const {
    data,
    error,
    loading,
  } = useGetCvExtractedTextQuery({ variables: { id: CV.id } });

  const [refreshCV] = useRefreshCvMutation({
    refetchQueries: [
      namedOperations.Query.GetCVExtractedText,
      namedOperations.Query.GetCVs,
    ],
    variables: {
      id: CV.id,
      refreshGoogleDoc: true,
    },
  });

  const [setDefault] = useRefreshCvMutation({
    refetchQueries: [
      namedOperations.Query.GetCVExtractedText,
      namedOperations.Query.GetCVs,
    ],
    variables: {
      id: CV.id,
      setDefault: true,
    },
  });

  if (loading) return <div>Loading...</div>;

  if (error || !data) {
    return (
      <div>
        Error:
        {' '}
        {error?.message}
      </div>
    );
  }

  return (
    <div className="card m-4 bg-neutral-focus shadow-2xl">
      <div className="card-title pt-4 pl-4 text-center w-full flex">
        <div className="flex-1 text-left ml-4 underline underline-offset-2">
          {CV.name}
        </div>
        <Link to={CV.googleDocLink} target="_blank" rel="noopener noreferrer">
          <div className="btn btn-info">
            <FiExternalLink className="w-6 h-6" />
          </div>
        </Link>
        <div
          className={`btn ${CV.isDefault ? 'btn-ghost' : 'btn-secondary'}  flex justify-center align-middle`}
          onClick={() => {
            if (!CV.isDefault) {
              toast.promise(
                setDefault(),
                {
                  pending: 'Setting as default...',
                  success: 'Set as default!',
                  error: 'Error setting as default',
                },
                {
                  ...ToastStyle,
                },
              );
            }
          }}
        >
          <div className="m-auto">
            {
              CV.isDefault ? 'Is default' : 'Set as default'
            }
          </div>
          <BiSolidCrown className="w-6 h-6 m-auto" />
        </div>
        <div
          className="btn btn-primary mr-4"
          onClick={() => {
            toast.promise(
              refreshCV(),
              {
                pending: 'Refreshing...',
                success: 'Refreshed!',
                error: 'Error refreshing',
              },
              {
                ...ToastStyle,
              },
            );
          }}
        >
          <div className="m-auto">
            Refresh from Google Docs
          </div>
          <IoMdRefresh className="w-6 h-6" />
        </div>
      </div>
      <div className="card-body pt-4">
        Selected Content:
        <ul className="list-disc">
          {
          data.GetCVExtractedText.extracted.map((text: string) => (
            <li>{text}</li>
          ))
        }
        </ul>

      </div>
    </div>
  );
};
