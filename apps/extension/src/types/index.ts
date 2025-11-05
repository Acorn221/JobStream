export type JobDescription = {
  content: string[];
  url: string;
};

export type JobDescriptionResponse = {
  status: 'SUCCESS';
  payload: {
    id: string;
  };
} | {
  status: 'FAILURE';
  payload: {
    error: string;
  };
};
