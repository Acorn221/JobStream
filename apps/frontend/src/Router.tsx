import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Routes } from 'misc-glob';
import { ProtectedRoute } from '@/Auth/ProtectedRoute';
import AuthenticatePage from '@/pages/AuthenticatePage';
import HomePage from '@/pages/Home/HomePage';
import LandingLayout from './pages/Layouts/LandingLayout';
import Help from './pages/Help';
import { Experience } from './pages/Home/Experience';
import { PrivacyPolicy } from '@/pages/Legal/PrivacyPolicy';
import { CVs } from './pages/Home/CVs';
import { CoverLetterTemplates } from './pages/Home/CoverLetterTemplates';
import { Credits } from './pages/Home/Credits';
import { PurchaseStatus } from './pages/Home/Credits/PurchaseStatus';
import { JobPage, JobsDash } from './pages';
import { Settings } from './pages/Home/Settings';
import OnInstall from './pages/OnInstall';

export const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      {
        path: Routes.Logout,
        element: <AuthenticatePage type="Logout" />,
      },
      {
        path: Routes.Tokens,
        element: <AuthenticatePage type="Tokens" />,
      },
      {
        path: Routes.Help,
        element: <Help />,
      },
      {
        path: Routes.PrivacyPolicy,
        element: <PrivacyPolicy />,
      },
      {
        path: Routes.Login,
        element: <AuthenticatePage type="Login" />,
      },
      {
        path: Routes.OnInstall,
        element: <OnInstall />,
      },
    ],
  },
  {
    path: '/home',
    element: <ProtectedRoute />,
    children: [
      {
        element: <LandingLayout />,
        children: [
          {
            path: Routes.Experiences,
            element: <Experience />,
          },
          {
            path: Routes.Jobs,
            element: <JobsDash />,
          },
          {
            path: Routes.Job,
            element: <JobPage />,
          },
          {
            path: Routes.CVs,
            element: <CVs />,
          },
          {
            path: Routes.CoverLetterTemplates,
            element: <CoverLetterTemplates />,
          },
          {
            path: Routes.Settings,
            element: <Settings />,
          },
          {
            path: Routes.Credits,
            element: <Credits />,
            children: [
              {
                path: Routes.PurchaseSuccess,
                element: <PurchaseStatus status="success" />,
              },
              {
                path: Routes.PurchaseFailure,
                element: <PurchaseStatus status="failure" />,
              },
            ],
          },
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
]);
