type RoutesType = {
  [key: string]: string;
};

export const Routes: RoutesType = {
  Landing: '/',
  Login: '/login',
  Logout: '/logout',
  Register: '/register',
  Tokens: '/tokens',
  Home: '/home',
  Help: '/help',
  Settings: '/home/settings',
  Experiences: '/home/experiences',
  Jobs: '/home/experiences/jobs',
  Job: '/home/experiences/job/:id',
  CVs: '/home/cvs',
  CoverLetterTemplates: '/home/cover-letter-templates',
  Generated: '/home/cvs/generated',
  Credits: '/home/credits',
  PurchaseSuccess: '/home/credits/purchase-success',
  PurchaseCancel: '/home/credits/purchase-cancel',
  PrivacyPolicy: '/privacy-policy',
  OnInstall: '/on-install',
};
