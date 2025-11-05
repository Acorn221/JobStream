/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Routes, ToastStyle } from 'misc-glob';
import {
  Experience as ExperienceType,
  namedOperations,
  useCreateExperienceMutation,
  useDeleteExperienceMutation,
  useUpdateExperienceMutation,
} from 'graphql-generated-code';
import { TextField } from '@mui/material';

import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import { ExperienceBoxes } from './ExperienceBoxes';
import { ExperienceManager } from './manager';
import 'react-multi-carousel/lib/styles.css';
import { CardLayout } from '@/pages/Layouts/CardLayout';

// TODO: change this up to be better
const exampleExperiences: { name: string, content: string }[] = [
  {
    name: 'Software Development',
    content: 'Build and maintain software applications running on a variety of platform including Windows, Linux, Android, and iOS. Participate in full software development life cycle from system design, development, testing and maintenance. Collaborate with team members to establish project specifications and timelines.',
  },
  {
    name: 'Data Analysis',
    content: 'Design, develop and maintain relational databases for data storage and data mining. Perform data warehouse design and testing, including data design, database architecture, metadata and repository creation. Use data mining for business intelligence needs.',
  },
  {
    name: 'Project Management',
    content: 'Manage projects by detailed project planning, monitor project progress by tracking activities, resolving problems, publishing progress reports, and recommending actions. Preserve standards by developing improvements, ensuring adherence to requirements, advising senior management on needed actions.',
  },
  {
    name: 'Digital Marketing',
    content: "Strategize and execute digital marketing campaigns and gather data to measure the impact of those campaigns. Leverage the strengths of each social media platform, SEO, and SEM to boost the company's online presence. Analyze site traffic and user engagement metrics.",
  },
  {
    name: 'Graphic Design',
    content: 'Create and design print and digital materials. Collaborate with the marketing team to develop a wide range of projects. Receive and interpret complex ideas to produce unique designs. Adhere to brand guidelines in ways that still pushed creative boundaries.',
  },
];

type EditModalProps = {
	experience: ExperienceType | undefined;
}

export const EditModal: FC<EditModalProps> = ({ experience }) => {
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [editExperience] = useUpdateExperienceMutation({
    refetchQueries: [
      namedOperations.Query.GetAllExperience,
    ],
  });
  const [createExperience] = useCreateExperienceMutation({
    refetchQueries: [
      namedOperations.Query.GetAllExperience,
    ],
  });

  const [deleteExperience] = useDeleteExperienceMutation({
    refetchQueries: [
      namedOperations.Query.GetAllExperience,
    ],
  });

  const submit = async () => {
    if (!experience) {
      // todo: create experience
      await toast.promise(
        createExperience({
          variables: {
            name,
            content,
          },
        }),
        {
          pending: 'Creating Experience...',
          success: 'Experience Created!',
          error: 'Failed to create experience',
        },
        ToastStyle,
      );
    } else {
      // check if name or content changed
      if (name === experience.name && content === experience.content) {
        return;
      }

      // update experience
      await toast.promise(editExperience({
        variables: {
          id: experience.id,
          name,
          content,
        },
      }), {
        pending: 'Updating Experience...',
        success: 'Experience Updated!',
        error: 'Failed to update experience',
      }, ToastStyle);
    }

    window.editModal.close();
  };

  const deleteExp = async () => {
    if (!experience) {
      setName('');
      setContent('');
      window.editModal.close();
      return;
    }
    if (!experience.id) return;
    await toast.promise(deleteExperience({
      variables: {
        id: experience?.id || '',
      },
    }), {
      pending: 'Deleting Experience...',
      success: 'Experience Deleted!',
      error: 'Failed to delete experience',
    }, ToastStyle);

    window.editModal.close();
  };

  useEffect(() => {
    if (experience) {
      setName(experience.name || '');
      setContent(experience.content);
    } else {
      setName('');
      setContent('');
    }
  }, [experience]);

  return (
    <dialog className="modal" id="editModal">
      <form method="dialog" className="modal-box bg-neutral-800 text-white max-w-5xl">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg mb-4">Experience</h3>
        {/** Insert form here for name, content (text area) and submit */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <div>
              Write about specific or general experiences, that you could see relating back to a job
              description that you are applying for. Make sure to include they key elements of the
              experience and how it helped you professionally.
            </div>
            <div className="card bg-base-200">
              <div className="card-header p-2">
                Example: Software Development
              </div>
              <div className="card-body p-3">
                I built a platform to help people apply for jobs called JobStream, it uses ReactJS,
                Typescript, GraphQL and Postgresql. I learnt a lot about how to build a full stack
                applications and how to deploy them to the cloud.
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-4 flex-1">
            <TextField label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} value={name} />
            <TextField
              placeholder="Your Experience"
              multiline
              rows={8}
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <div className="flex gap-2">
              <div
                className="btn btn-error flex justify-center align-middle"
                onClick={() => {
                  deleteExp();
                }}
              >
                <div className="m-auto">
                  Delete
                </div>
                <DeleteIcon className="m-auto" />
              </div>
              <div className="btn btn-primary flex-1" onClick={() => submit()}>
                Submit
              </div>
            </div>
          </div>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

type ActionsProps = {
  setEditExperience: (experience: ExperienceType | undefined) => void;
}

const Actions: FC<ActionsProps> = ({ setEditExperience }) => (
  <div className="card-actions flex justify-end align-bottom m-2">
    <div
      className="btn btn-primary mt-auto mr-auto"
      onClick={() => {
        setEditExperience(undefined);
        window.editModal.showModal();
      }}
    >
      Create Experience
    </div>
  </div>
);

export const Experience = () => {
  const [editExperience, setEditExperience] = useState<ExperienceType | undefined>(undefined);
  const [showDatagrid, setShowDatagrid] = useState<boolean>(false);

  return (
    <CardLayout
      title="Your Experiences"
      description="Add New Experience, Describe what you did, how it was useful,
    what you learnt and how it made you better, then
    submit your exprience!"
      ActionsElement={<Actions setEditExperience={setEditExperience} />}
      className="flex flex-col gap-4"
    >
      <div className="w-full flex justify-center align-middle flex-col">
        <ExperienceBoxes setEditExperience={setEditExperience} />
        <div className="btn btn-primary m-4" onClick={() => setShowDatagrid(!showDatagrid)}>
          {showDatagrid ? 'Hide' : 'Show'}
          {' '}
          Bulk Edit Table
        </div>
        {
            showDatagrid && (
              <ExperienceManager setEditExperience={setEditExperience} />
            )
          }
        <EditModal experience={editExperience} />
      </div>
    </CardLayout>
  );
};
