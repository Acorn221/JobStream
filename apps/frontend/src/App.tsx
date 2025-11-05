/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-await-in-loop */
import {
  createContext, useState, useMemo, useEffect,
} from 'react';
import { RouterProvider } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider } from '@mui/material/styles';
import {
  MuiTheme, AccessToken, IDToken,
} from 'misc-glob';
import * as Sentry from '@sentry/react';
import { ToastContainer } from 'react-toastify';
import { router } from '@/Router';
import { BACKEND_GRAPHQL_URL } from '@/utils/environment';
import { createAuthContext } from '@/Auth/isTokenValid';
import {
  CheckForNotifications,
  ExtensionCommunication,
  FrontendNotificationManager,
} from './utils/ExtensionCommunication';

export type tokenType = null | {
  access: AccessToken;
  accessRaw: string;
  id: IDToken;
  refresh: string;
};

type AuthContextType = {
  setNewAuth: (token: tokenType) => void;
  authContext: tokenType;
};

export const AuthContext = createContext<AuthContextType>({
  setNewAuth: (token: tokenType) => {},
  authContext: null,
});

type Extension = {
  isInstalled: boolean;
};

type ExtensionContextType = {
  setNewExtension: (e: Extension | null) => void;
  extension: Extension | null;
};

export const ExtensionContext = createContext<ExtensionContextType>({
  setNewExtension: (e: Extension | null) => {},
  extension: null,
});

const httpLink = createHttpLink({
  uri: BACKEND_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('idToken');
  return {
    headers: {
      ...headers, // TODO: this doesn't check if the token is valid
      authorization: `Bearer ${token ?? ''}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

Sentry.init({
  dsn: 'https://a6e4161c321b6dce9d706cc5dd2fa79e@o4505968978690048.ingest.sentry.io/4505998330494976',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be added
      // TODO: include API endpoint (whatever that is in production)
      tracePropagationTargets: ['localhost'],
    }),
    new Sentry.Replay(),
  ],

  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
});

const notificationManager = new FrontendNotificationManager();

const App = () => {
  const [authContext, setAuthContext] = useState<tokenType>(null); // Initialize with null
  const [extension, setExtension] = useState<Extension | null>(null);

  const setNewExtension = (e: Extension | null) => {
    setExtension(e);
  };

  const setNewAuth = (token: AuthContextType['authContext']) => {
    setAuthContext(token);
  };

  const authProviderVal = useMemo(() => ({ authContext, setNewAuth }), [authContext]);
  const extensionProviderVal = useMemo(() => ({ extension, setNewExtension }), [extension]);

  useEffect(() => {
    createAuthContext().then((auth) => {
      setAuthContext(auth);
    });
    ExtensionCommunication(localStorage.getItem('refresh')).then((msg) => {
      if (msg) {
        if (msg.type === 'RefreshKeyReceived') {
          setNewExtension({ isInstalled: true });
        }
      }
    }).catch((e) => {
      console.log(e);
    });

    const notificationLoop = async () => {
      let notifications = await CheckForNotifications(false);
      while (true) {
        notifications.forEach((n) => {
          notificationManager.addNotification(n);
        });
        notifications = await CheckForNotifications(true);
      }
    };

    notificationLoop();
  }, []);

  return (
    <AuthContext.Provider value={authProviderVal}>
      <ExtensionContext.Provider value={extensionProviderVal}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={MuiTheme}>
            <RouterProvider router={router} />
            <ToastContainer />
          </ThemeProvider>
        </ApolloProvider>
      </ExtensionContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
