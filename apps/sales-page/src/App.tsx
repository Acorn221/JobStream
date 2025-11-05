import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PrivacyPolicy } from '@/pages/Legal/PrivacyPolicy';
import Home from '@/pages/Home';
import LandingLayout from '@/pages/Layouts/LandingLayout';
import { TermsAndConditions } from './pages/Legal/TermsAndConditions';
import Uninstall from './pages/Uninstall';

export const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: '/uninstall',
        element: <Uninstall />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
