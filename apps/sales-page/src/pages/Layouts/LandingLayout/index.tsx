import { Link, Outlet } from 'react-router-dom';
import icon from 'assets/icon-white.svg';

const LandingLayout = () => (
  <div className="min-h-screen flex flex-col bg-black">
    <div className="navbar py-0 px-4 border-b-2">
      <div className="flex-1">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="normal-case text-white text-2xl text-ellipsis truncate plexMono">
              JobStream
            </div>
            <img src={icon} alt="logo" className="h-8 w-8 m-auto" />
          </div>
        </Link>
      </div>
      <Link to="https://app.jobstream.uk/login">
        <div className="btn btn-primary hover:scale-105">
          Go To JobStream
        </div>
      </Link>
    </div>
    <Outlet />
    <div className="bottom-0 text-center w-full text-md font-medium flex-1 flex align-bottom plexMono">
      <div className="mx-auto mt-auto mb-4 flex gap-4">
        <div className="text-md text-blue-500 underline">
          <a href="https://jobstream.uk/terms-and-conditions">Terms and Conditions</a>
        </div>
        <div>-</div>
        <div className="text-md text-blue-500 underline">
          <a href="https://jobstream.uk/privacy-policy">Privacy Policy</a>
        </div>
        <div>-</div>
        By
        <a href="https://j4a.uk/" className="text-blue-500 underline">
          J4A Industries
        </a>
      </div>
    </div>
  </div>
);

export default LandingLayout;
