import {
  useGetUserStatsQuery,
  GetUserStatsQuery,
} from 'graphql-generated-code';
import { Routes } from 'misc-glob';
import { FC, useContext } from 'react';
import {
  AiFillCheckSquare,
  AiFillCloseSquare,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ExtensionContext } from '@/App';

type ExtractTypeIfPropertyExists<T, P extends string> = T extends {
  [K in P]?: infer R;
}
  ? R
  : never;

type DataReturned = ExtractTypeIfPropertyExists<
	GetUserStatsQuery['user'],
  'data'
>;

type todoBoxProps = {
	goal: string;
	achieved: boolean | undefined;
	route: string;
};

export const TodoBox: FC<todoBoxProps> = ({ goal, achieved, route }) => (
  <Link to={route} className="flex flex-col justify-center bg-base-300 p-2 rounded-xl hover:scale-105 cursor-pointer flex-auto">
    <div className="m-auto flex-1">{goal}</div>
    <div className="m-auto h-8 w-8">{achieved ? <AiFillCheckSquare className="fill-green-500 bg-black h-full w-full" /> : <AiFillCloseSquare className="fill-red-500 bg-black h-full w-full" />}</div>
  </Link>
);

type todoBoxesProps = {
	data?: DataReturned | undefined;
};

const TodoBoxes:FC<todoBoxesProps> = ({ data }) => {
  const extensionContext = useContext(ExtensionContext);

  return (
    <div className="card-body md:grid-cols-3 lg:grid-cols-4 grid grid-cols-2 text-center gap-4">
      <TodoBox
        goal="Install The Extension"
        achieved={extensionContext.extension?.isInstalled}
        route="https://chromewebstore.google.com/detail/jobstream/ifflolleankklchmbldadfafffobjocj"
      />
      <TodoBox goal="Add at least 5 Experiences" achieved={data && data.Experience.length >= 5} route={Routes.Experiences} />
      <TodoBox goal="Add a Cover Letter Template" achieved={data && data.coverLetterTemplate.length >= 1} route={Routes.CoverLetterTemplates} />
      <TodoBox goal="Select Job Descriptions" achieved={data && data.job.length >= 1} route={Routes.Jobs} />
      <TodoBox goal="Generate Cover Letters" achieved={data && data.generatedCoverLetter.length >= 1} route={Routes.Jobs} />
      { /* Set to open extension popup, or a tutorial video */ }
      <TodoBox goal="Answer Application Questions" achieved={data && data.answeredQuestion.length >= 1} route={Routes.Jobs} />
      <TodoBox goal="Add your CV" achieved={data && data.CV.length >= 1} route={Routes.CVs} />
      <TodoBox goal="Set a folder to save your generated documents" achieved={data && data.GoogleAuthToken?.driveFolderId !== null} route={Routes.Settings} />
    </div>
  );
};

export const HomeStats = () => {
  const { data, loading, error } = useGetUserStatsQuery();

  if (data?.user.__typename === 'QueryUserSuccess') {
    const user = data?.user?.data;
    return (
      <div className="card bg-base-100 text-white shadow-2xl m-4">
        <div className="card-header flex align-middle justify-center">
          <div className="card-title m-auto p-4 text-2xl">JobStream Home</div>
        </div>
        <TodoBoxes data={user} />
      </div>
    );
  }
  return (
    <div className="card bg-base-100 text-white shadow-2xl m-4">
      <div className="card-header flex align-middle justify-center">
        <div className="card-title m-auto p-4 text-2xl">JobStream Home</div>
      </div>
      <TodoBoxes />
    </div>
  );
};
