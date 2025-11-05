import { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import { useGetUserCreditsSumQuery } from 'graphql-generated-code';
import { Routes } from 'misc-glob';
import icon from 'assets/icon-white.svg';
import {
  IoMdHelpCircleOutline, IoIosSettings, IoIosLogOut, IoIosLogIn,
} from 'react-icons/io';
import { AuthContext } from '@/App';

const LandingLayout = () => {
  const authInfo = useContext(AuthContext);
  const [credits, setCredits] = useState<number | null>(null);
  const { data } = useGetUserCreditsSumQuery();

  // Refactor: global store/context for this information.
  useEffect(() => {
    if (data?.user.__typename === 'QueryUserSuccess') {
      setCredits(data.user.data.creditsSum ?? null);
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0b0b] Montserrat">
      <div className="navbar bg-base-100 py-0 px-4">
        <div className="flex-1">
          <Link to={authInfo?.authContext != null ? Routes.Home : Routes.Landing}>
            <div className="flex items-center gap-2">
              <div className="normal-case text-white text-2xl text-ellipsis truncate plexMono">
                JobStream
              </div>
              <img src={icon} alt="logo" className="h-8 w-8 m-auto" />
            </div>
          </Link>
        </div>
        {authInfo?.authContext != null && credits != null && (
          <Link to={Routes.Credits}>
            <div className="btn btn-secondary join-item flex justify-center align-middle">
              <div className="m-auto flex-1 hidden md:block text-2xl">
                {credits}
              </div>
              <FaCoins className="w-8 h-8" />
            </div>
          </Link>
        )}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
            <div className="join">
              <Link to={Routes.Help}>
                <div className="btn btn-info join-item flex justify-center align-middle">
                  <div className="m-auto flex-1 hidden md:block">
                    Help
                  </div>
                  <IoMdHelpCircleOutline className="w-8 h-8" />
                </div>
              </Link>
              {authInfo.authContext == null ? (
                <Link to={Routes.Login}>
                  <div className="btn btn-secondary join-item flex justify-center align-middle">
                    <div className="m-auto flex-1 hidden md:block">
                      Login/Register
                    </div>
                    <IoIosLogIn className="w-8 h-8" />
                  </div>
                </Link>
              ) : (
                <>
                  <Link to={Routes.Settings}>
                    <div className="btn btn-primary join-item flex justify-center align-middle">
                      <div className="m-auto flex-1 hidden md:block">
                        Settings
                      </div>
                      <IoIosSettings className="w-8 h-8" />
                    </div>
                  </Link>
                  <Link to={Routes.Logout}>
                    <div className="btn btn-accent join-item flex justify-center align-middle">
                      <div className="m-auto flex-1 hidden md:block">
                        Logout
                      </div>
                      <IoIosLogOut className="w-8 h-8" />
                    </div>
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
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
};

export default LandingLayout;
