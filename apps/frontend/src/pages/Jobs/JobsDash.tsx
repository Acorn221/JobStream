import { MenuItem, Select } from '@mui/material';
import {
  GetJobQuery,
  useGetJobQuery,
} from 'graphql-generated-code';
import { Routes, dateXAgo, getGradientFromId } from 'misc-glob';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoArrowBackSharp } from 'react-icons/io5';
import Carousel from 'react-multi-carousel';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { JobDataGrid } from './JobDataGrid';
import { UIDashLayout } from './UIDashLayout';
import 'react-multi-carousel/lib/styles.css';

interface UIJobsPageProps {
  // This typing is dumb.
  jobs: Extract<
    GetJobQuery['user'],
    { __typename: 'QueryUserSuccess' }
  >['data']['job'];
}

const UIJobsPage: FC<UIJobsPageProps> = ({ jobs }) => (
  <UIDashLayout>
    <div className="grid grid-cols-6 gap-y-8">
      <div className="pb-4 col-span-full">
        <div className="flex align-middle">
          <Link className="mr-4 h-20" to={Routes.Home}>
            <div className="btn btn-primary text-xl h-full">
              <IoArrowBackSharp className="w-6 h-6" />
            </div>
          </Link>
          <h1 className="text-5xl font-bold flex-1 m-auto">Your Jobs</h1>
        </div>
      </div>
    </div>
    <Carousel
      additionalTransfrom={0}
      arrows
      swipeable={false}
      draggable
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          // slidesToSlide: 2, // optional, default to 1.
        },
      }}
      deviceType="desktop"
      showDots
      infinite={false}
      autoPlay={false}
      keyBoardControl
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={(
        <div className="left-0 bottom-0 absolute z-10 h-full flex justify-center align-middle">
          <div className="m-auto btn btn-lg btn-circle btn-ghost text-2xl p-1 flex justify-center align-middle">
            <BsFillArrowLeftCircleFill className="m-auto h-10 w-10" />
          </div>
        </div>
      )}
      customRightArrow={(
        <div className="right-0 bottom-0 absolute z-10 h-full flex justify-center align-middle">
          <div className="m-auto btn btn-lg btn-circle btn-ghost text-2xl p-1 flex justify-center align-middle">
            <BsFillArrowRightCircleFill className="m-auto h-10 w-10" />
          </div>
        </div>
      )}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      focusOnSelect={false}
      minimumTouchDrag={80}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
    >
      {jobs.map((job, i) => (
        <div
          key={job.id}
          className="card bg-base-100 shadow-xl rounded-xl transition-all carousel-item relative select-none m-2"
        >
          <figure>
            <div
              style={{
                backgroundImage: getGradientFromId(job.id),
                height: '5em',
                width: '100%',
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{job.name ?? 'no name'}</h2>
            <div className="card-actions">
              <span>
                Status:
                <span>{job.status}</span>
              </span>
              <span>
                Added
                {' '}
                {dateXAgo(job.createdAt)}
              </span>
            </div>
          </div>
          <div className="card-actions w-full justify-end">
            <Link to={`/home/experiences/job/${job.id}`} className="">
              <div className="btn btn-primary mb-2 mr-2 hover:scale-105">
                Go to job
              </div>
            </Link>

          </div>
        </div>
      ))}
    </Carousel>
    <div className="flex-1">
      <JobDataGrid />
    </div>

  </UIDashLayout>
);

export const JobsDash: FC = () => {
  const { data, loading } = useGetJobQuery();

  if (loading) {
    return <>Loading...</>;
  }

  if (data?.user.__typename === 'Error') {
    return <>Big error</>;
  }

  const jobs = data?.user.__typename === 'QueryUserSuccess' ? data.user.data.job : [];

  const sorted = jobs;// .filter((x) => x.createdAt)
  // .sort((a, b) => (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? 1 : -1));

  return (
    <UIJobsPage
      jobs={
				sorted
      }
    />
  );
};
