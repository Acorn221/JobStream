/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.scss' {
  const css: { [key: string]: string };
  export default css;
}
declare module '*.sass' {
  const css: { [key: string]: string };
  export default css;
}
declare module 'react-markup';
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

interface Window {
	createModal: any;
	deleteModal: any;
  editModal: any;
  FirstAuthModal: any;
  AddCVModal: any;
  EditDescriptionModal: any;
  AddCoverLetterTemplate: any;
  ActiveModal: any;
  addCreditsModal: any;
}
