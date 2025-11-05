import { Link } from 'react-router-dom';
import React, { FC, useContext, useEffect } from 'react';
import jwt from 'jwt-decode';
import { Routes } from 'misc-glob';
import { BsGoogle } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { AwsConfigAuth } from '@/Auth/cognitoAuth';
import { CognitoTokensRes } from '@/Auth/isTokenValid';
import { AuthContext } from '@/App';

const getLink = (url: string) => {
  const urlParams = new URLSearchParams({
    client_id: AwsConfigAuth.userPoolWebClientId,
    response_type: 'code',
    scope: 'email openid profile',
    redirect_uri: url,
  });
  return `${import.meta.env.VITE_AUTH_DOMAIN}/oauth2/authorize?${urlParams.toString()}`;
};

type Props = {
  type: 'Login' | 'Logout' | 'Tokens';
};

const AuthenticatePage: FC<Props> = ({ type }) => {
  const authContext = useContext(AuthContext);

  const getTokens = async (authCode: string) => {
    const res = await fetch(`${import.meta.env.VITE_AUTH_DOMAIN}/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: AwsConfigAuth.userPoolWebClientId,
        code: authCode,
        redirect_uri: `${window.location.origin}${Routes.Tokens}`,
      }),
    });
    return res;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (type === 'Logout') {
      window.localStorage.removeItem('refresh');
      window.localStorage.removeItem('access');
      window.localStorage.removeItem('idToken');

      authContext.setNewAuth(null);

      window.location.href = Routes.Landing;
    } else if (type === 'Tokens') {
      // cognito decides to give us a hash, which we have to treat as a query string :(
      const authCode = urlParams.get('code');

      if (authCode) {
      // request to the cognito backend to get the tokens
        getTokens(authCode).then(async (res) => {
          const body: CognitoTokensRes = await res.json();

          if ('error' in body) {
            throw new Error(body.error);
          }

          console.log(body);

          window.localStorage.setItem('refresh', body.refresh_token);
          window.localStorage.setItem('access', body.access_token);
          window.localStorage.setItem('idToken', body.id_token);

          authContext.setNewAuth({
            access: jwt(body.access_token),
            accessRaw: body.access_token,
            refresh: body.refresh_token,
            id: jwt(body.id_token),
          });
          window.location.href = `${window.location.origin}${Routes.Home}`;

        // if(body.)
        }).catch((err) => {
          console.log(err);
        });
      }
    }

    if (urlParams.get('error')) {
      toast.error('There was an error logging in, please try again.');
    }
  }, [type]);

  useEffect(() => {
    if (type === 'Login') {
      // if they are already logged in, redirect them to the home page
      if (authContext.authContext !== null) {
        window.location.href = `${window.location.origin}${Routes.Home}`;
      }
    }
  }, [type, authContext.authContext]);

  if (type !== 'Tokens') {
    return (
      <div className="flex-1 w-full flex justify-center align-middle">
        <div className="m-auto card bg-base-200 p-4 max-w-md">
          <div className="card-header">
            <h3 className="card-title text-center">Login / Sign Up</h3>
          </div>
          <div className="card-body block">
            We use google for signing in and registering,
            which means you don&apos;t have to remember another password!
            <br />
            <br />
            By clicking the button below, you agree to our
            {' '}
            <Link
              to="https://jobstream.uk/terms-and-conditions"
              className="underline text-blue-500"
              target="_blank"
            >
              terms and conditions

            </Link>
            ,
            and
            {' '}
            <Link
              to="https://jobstream.uk/privacy-policy"
              className="underline text-blue-500"
              target="_blank"
            >
              privacy policy

            </Link>
            .
          </div>
          <div className="card-actions gap-3 text-white w-full">
            <Link to={`${getLink(`${window.location.origin}/tokens`)}`} className="flex justify-center align-middle w-full">
              <button className="btn btn-primary m-auto flex justify-center align-middle" onClick={() => {}}>
                <div className="m-auto">
                  Login / Sign Up with Google
                </div>
                <BsGoogle className="h-8 w-8 m-auto" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex-1 w-full flex justify-center align-middle">
      <div className="m-auto card bg-base-200 p-4 max-w-md">
        <div className="card-header">
          <h3 className="card-title text-center">Logging In</h3>
        </div>
        <div className="card-body">
          Logging you in...
        </div>
      </div>
    </div>
  );
};

export default AuthenticatePage;
