import { Link, useSearchParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import {
  namedOperations, useAddGoogleAuthTokenMutation,
  useCheckIfTokenExistsQuery, useGetGoogleAuthUrlQuery,
} from 'graphql-generated-code';
import { googleAuthScopes } from 'misc-glob';

export const GAPIAuth = () => {
  const { data: authURL, error: authURLError, loading: authURLLoading } = useGetGoogleAuthUrlQuery({
    variables: {
      scope: googleAuthScopes,
      urlRedirect: window.location.pathname,
    },
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [addGoogleAuthToken] = useAddGoogleAuthTokenMutation({
    refetchQueries: [
      namedOperations.Query.CheckIfTokenExists,
      namedOperations.Query.GetGoogleAccessToken,
    ],
  });
  const { data: tokenExists, error, loading } = useCheckIfTokenExistsQuery();

  const [hasGoogleAuth, setHasGoogleAuth] = useState(true);

  useEffect(() => {
    if (!loading && tokenExists?.user.__typename === 'QueryUserSuccess') {
      setHasGoogleAuth(!!tokenExists.user.data.GoogleAuthToken);
    } else {
      const code = searchParams.get('code');
      const scope = searchParams.get('scope');
      if (scope && code) {
        console.log(`code: ${code}, scope: ${scope}`);
        addGoogleAuthToken({
          variables: {
            authCode: code,
            scope: scope.split(' '),
            redirectUri: window.location.origin + window.location.pathname,
          },
        }).then(() => {
          setSearchParams('');
          setHasGoogleAuth(true);
        });
      }
      if (!loading) setHasGoogleAuth(false);
    }
  }, [loading]);

  if (authURLLoading) return <div>Loading...</div>;

  if (authURLError || !authURL) {
    return (
      <div>
        Error!
        {' '}
        {error?.message}
      </div>
    );
  }

  return (
    <div>
      <input type="checkbox" id="authenticateWithGoogleModal" className="modal-toggle" checked={!hasGoogleAuth} />
      <dialog className="modal" id="authenticateWithGoogleModal">
        <form method="dialog" className="modal-box bg-neutral-800 text-white">
          <h3 className="font-bold text-lg mb-4">Login With Google!</h3>
          {/** Insert form here for name, content (text area) and submit */}
          <div className="flex flex-col gap-4">
            <div>
              You will be redirected to Google to authenticate your account,
              this lets us access your Google Drive to store generated documents.
            </div>
            <Link to={authURL.GetGoogleAuthURL}>
              <div className="btn btn-primary w-full">
                Login with Google
              </div>
            </Link>
          </div>
        </form>
        <div className="modal-backdrop bg-black opacity-60" />
      </dialog>
    </div>
  );
};
