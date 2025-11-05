import {
  Experience,
  useGetAllExperienceQuery,
} from 'graphql-generated-code';
import { FC } from 'react';

type ExperienceBoxesProps = {
  setEditExperience: (experience: Experience) => void;
};

export const ExperienceBoxes: FC<ExperienceBoxesProps> = ({ setEditExperience }) => {
  const { data, loading, error } = useGetAllExperienceQuery();

  if (!data || loading) {
    // TODO: loading spinner
    return (
      <div>loading</div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 m-4 shadow-2xl">
      {
				data.user.__typename === 'QueryUserSuccess'
				&& data.user.data.Experience.map((experience) => (
  <div className="card bg-base-100 p-4 flex">
    <div className="card-header underline text-2xl h-10 truncate text-center">
      {experience.name}
    </div>
    <div className="card-body p-2">
      <div className="line-clamp-5">
        {experience.content}
      </div>
    </div>
    <div className="card-actions flex justify-end align-bottom">
      <div
        className="btn btn-primary m-auto"
        onClick={() => {
          setEditExperience(experience);
          window.editModal.showModal();
        }}
      >
        See More
      </div>
    </div>
  </div>
				))
			}
    </div>
  );
};
