import { ToastStyle } from 'misc-glob';
import { namedOperations, useCreateCvMutation } from 'graphql-generated-code';
import { toast } from 'react-toastify';
import { GAPIAuth } from '@/components/DriveFileList/GAPIAuth';
import { CVDataGrid } from './CVDataGrid';
import { DriveDatagridAuthCheck } from '@/pages/Home/CVs/DriveDatagridAuthCheck';
import { CardLayout } from '@/pages/Layouts/CardLayout';

const Actions = () => {
  const [addCv] = useCreateCvMutation({
    refetchQueries: [
      namedOperations.Query.GetCVs,
    ],
  });
  return (
    <DriveDatagridAuthCheck
      onFilesSelected={(ids) => {
        toast.promise(
          addCv({
            variables: {
              googleDocIds: ids,
            },
          }),
          {
            pending: 'Adding CV to Optimiser...',
            success: 'Added CV to Optimiser! 🎉',
            error: 'Error adding CV to Optimiser 😢',
          },
          ToastStyle,
        );
      }}
    />
  );
};

export const CVs = () => (
  <CardLayout
    title="Your Resumes"
    description={(
      <div>
        Here you can add multiple different Resume, dependent on the
        job and the skills you want to highlight. This could be to apply for
        different types of jobs, or to just have a varying look for your Resume!
        <br />
        <br />

        Can&apos;t find your Resume?
        {' '}
        <a href="https://youtu.be/OvnMFYe45O8?t=22" className="text-blue-500 underline">
          Go here to learn how to convert it to a Google Doc!
        </a>
      </div>
)}
    Actions={Actions}
    className="flex flex-col gap-4"
  >
    <CVDataGrid />
    <GAPIAuth />
  </CardLayout>
);
