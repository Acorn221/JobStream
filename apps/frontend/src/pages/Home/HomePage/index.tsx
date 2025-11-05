import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, useGetUserStatsQuery } from 'graphql-generated-code';
import { Routes } from 'misc-glob';
import { HomeStats } from './HomeStats';

const HomePage = () => (
  <div className="flex flex-col justify-center">
    <div className="m-auto w-full md:w-2/3">
      <HomeStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full">
        <div className="card bg-zinc-800 text-white flex-1">
          <div className="card-header flex align-middle justify-center">
            <div className="card-title m-auto text-2xl pt-2">Experience</div>
          </div>
          <div className="card-body">
            Experiences help give context to the optimiser, so it can better optimise your CVs
            based on your skills and experiences, so make sure to add as many as you can!
            Add things like projects you&apos;ve done, jobs you&apos;ve worked,
            volunteering you&apos;ve done and where you&apos;ve studied!
          </div>
          <div className="card-actions justify-end m-2">
            <Link to={Routes.Experiences}>
              <button className="btn btn-primary">Add an Experience</button>
            </Link>
          </div>
        </div>
        <div className="card bg-zinc-800 text-white flex-1 shadow-2xl">
          <div className="card-header flex align-middle justify-center">
            <div className="card-title m-auto text-2xl pt-2">Job Descriptions</div>
          </div>
          <div className="card-body">
            <p>
              Here&apos;s where your job descriptions are that you&apos;ve added through the
              browser extension, you can edit them here to remove or add any details you
              want, and you can see your CVs that have been generated from them!
              You can manually add them here, or use the browser extension to add them as you
              browse/apply!

            </p>
          </div>
          <div className="card-actions justify-end m-2">
            <Link to={Routes.Jobs}>
              <button className="btn btn-primary">Go To Job Descriptions</button>
            </Link>
          </div>
        </div>
        <div className="card bg-zinc-800 text-white flex-1 shadow-2xl">
          <div className="card-header flex align-middle justify-center">
            <div className="card-title m-auto text-2xl pt-2">Resumes</div>
          </div>
          <div className="card-body">
            <p>
              Here is where you can select the Resumes you want to add,
              you can add more than one and choose which optimised resumes
              you prefer for the job! These need to be Google Docs from your
              Google Drive as that&apos;s how we&apos;ve decided to store and edit them.
              Don&apos;t worry if you have a PDF or Word Document, you can easily convert
              it over.
            </p>
          </div>
          <div className="card-actions justify-end m-2">
            <Link to={Routes.CVs}>
              <button className="btn btn-primary">Go To Resumes</button>
            </Link>
          </div>
        </div>
        <div className="card bg-zinc-800 text-white flex-1 shadow-2xl">
          <div className="card-header flex align-middle justify-center">
            <div className="card-title m-auto text-2xl pt-2">Cover Letter Templates</div>
          </div>
          <div className="card-body">
            <p>
              Here is where you can add templates for your cover letters, this let&apos;s you
              style them how you like and add pictures, headers and footers to them for example.
            </p>
          </div>
          <div className="card-actions justify-end m-2">
            <Link to={Routes.CoverLetterTemplates}>
              <button className="btn btn-primary">Go To Cover Letter Templates</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  </div>
);
export default HomePage;
