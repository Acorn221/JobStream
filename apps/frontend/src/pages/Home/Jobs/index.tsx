import { IoArrowBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Routes } from 'misc-glob';
import { JobDataGrid } from './JobDataGrid';

export const Jobs = () => (
  <div className="text-white flex flex-col justify-center">
    <div className="m-auto w-full md:w-2/3">
      <div className="flex">
        <Link className="m-4" to={Routes.Home}>
          <div className="btn btn-primary text-xl h-full">
            <IoArrowBackSharp className="w-6 h-6" />
          </div>
        </Link>
        <div className="card card-normal bg-info m-4 flex md:flex-row justify-center align-middle flex-1">
          <div className="card-header m-auto">
            <div className="text-2xl font-bold px-2 text-center">Your Jobs</div>
          </div>
          <div className="card-body m-auto">
            Here&apos;s where your jobs are that you&apos;ve added through the browser
            extension, you can edit them here to remove or add any details you want, and you can see
            your CVs that have been generated from them!
            You can manually add them here, or use the browser extension to add them as you
            browse/apply!
          </div>
        </div>
      </div>
      <JobDataGrid />
    </div>
  </div>
);
