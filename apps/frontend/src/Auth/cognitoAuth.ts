export const AwsConfigAuth = {
  region: import.meta.env.VITE_AUTH_REGION,
  userPoolId: import.meta.env.VITE_AUTH_USER_POOL_ID,
  userPoolWebClientId: import.meta.env.VITE_AUTH_CLIENT_ID,
  cookieStorage: {
    domain: import.meta.env.VITE_AUTH_DOMAIN,
    path: '/',
    expires: 365,
    sameSite: 'strict',
    secure: true,
  },
  authenticationFlowType: 'USER_SRP_AUTH',
};
