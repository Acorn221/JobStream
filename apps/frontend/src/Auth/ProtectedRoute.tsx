import {
  FC, useContext, useEffect, useState,
} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '@/App';
import { refreshTokens } from './isTokenValid';

export const ProtectedRoute: FC = () => {
  const authContext = useContext(AuthContext);

  const [checkedTokens, setCheckedTokens] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const refresh = localStorage.getItem('refresh');
    if (refresh != null && refresh !== '') {
      setLoggedIn(true);
    }
    setCheckedTokens(true);
  }, []);

  useEffect(() => {
    if (authContext.authContext) {
      const { access } = authContext.authContext;
      if (access.exp < (Date.now() / 1000)) {
        refreshTokens();
      }
      // set timeout to refresh tokens
      setTimeout(() => {
        refreshTokens();
      }, (access.exp - 60) * 1000);

      setCheckedTokens(true);
    }
  }, [authContext.authContext]);

  if (!loggedIn && checkedTokens) {
    return <Navigate to="/login" />;
  }

  if (!checkedTokens) {
    return (<div>Loading...</div>);
  }

  return <Outlet />;
};
