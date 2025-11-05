import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  CVExtractedTextType: any;
  Date: any;
  GoogleDocs: any;
  GoogleDocsFile: any;
  JSON: any;
};

export type AnsweredQuestion = {
  __typename?: 'AnsweredQuestion';
  answer: Scalars['String'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  question: Scalars['String'];
  updatedAt: Scalars['Date'];
  user: User;
};

export type Cv = {
  __typename?: 'CV';
  /** The JSON content of the CV from google docs */
  CvContent: Scalars['JSON'];
  createdAt: Scalars['Date'];
  googleDocId: Scalars['String'];
  googleDocLink: Scalars['String'];
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  /** The user assigned name of the CV */
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

/** The extracted text from the CV */
export type CvExtractedText = {
  __typename?: 'CVExtractedText';
  /** The extracted text from the CV */
  extracted: Array<Scalars['String']>;
  /** The google doc id of the CV */
  googleDocId: Scalars['String'];
  /** The id of the CV */
  id: Scalars['String'];
};

export type CoverLetterTemplate = {
  __typename?: 'CoverLetterTemplate';
  active: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  googleDocId: Scalars['String'];
  id: Scalars['ID'];
  /** The user assigned name of the cover letter template */
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  user: User;
};

export type Credits = {
  __typename?: 'Credits';
  amount: Scalars['Int'];
  createdAt: Scalars['Date'];
  generatedCoverLetter?: Maybe<GeneratedCoverLetter>;
  generatedCv?: Maybe<GeneratedCv>;
  id: Scalars['ID'];
  note: Scalars['String'];
  updatedAt: Scalars['Date'];
  userId: Scalars['String'];
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
};

export type Experience = {
  __typename?: 'Experience';
  /** The experience description, eg. "I worked on this project for 2 years and did this and that" */
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  /** The user assigned name of the experience */
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type ExperiencesUsed = {
  __typename?: 'ExperiencesUsed';
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  experience: Experience;
  generatedCv: GeneratedCv;
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
  user: User;
};

export type GeneratedCoverLetter = {
  __typename?: 'GeneratedCoverLetter';
  content: Array<Scalars['String']>;
  coverLetterTemplate?: Maybe<CoverLetterTemplate>;
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  googleDocId: Scalars['String'];
  id: Scalars['ID'];
  job: Job;
  /** The user assigned name of the cover letter */
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  user: User;
};

export type GeneratedCv = {
  __typename?: 'GeneratedCv';
  content: Scalars['JSON'];
  createdAt: Scalars['Date'];
  cv?: Maybe<Cv>;
  deletedAt?: Maybe<Scalars['Date']>;
  experiences: Array<ExperiencesUsed>;
  googleDocId: Scalars['String'];
  id: Scalars['ID'];
  job: Job;
  updatedAt: Scalars['Date'];
  user: User;
};

export type GoogleAuthToken = {
  __typename?: 'GoogleAuthToken';
  createdAt: Scalars['Date'];
  driveFolderId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  scope: Array<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

/** A list of google docs files */
export type GoogleDocsFiles = {
  __typename?: 'GoogleDocsFiles';
  /** The list of google docs files */
  files: Array<Scalars['GoogleDocsFile']>;
  nextPageToken?: Maybe<Scalars['String']>;
};

export type Job = {
  __typename?: 'Job';
  GeneratedCoverLetter: Array<GeneratedCoverLetter>;
  GeneratedCv: Array<GeneratedCv>;
  createdAt: Scalars['Date'];
  /** The job description, eg. "You will be paid a ***COMPETITIVE SALARY*** I really promise 🥺🥺🥺" */
  description: Array<Scalars['String']>;
  id: Scalars['ID'];
  /** The user assigned name of the job */
  name?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  suitabilityScore?: Maybe<Scalars['Float']>;
  suitabilityScoreDate?: Maybe<Scalars['Date']>;
  updatedAt: Scalars['Date'];
  url: Scalars['String'];
};

/** Root Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  AnswerQuestion: Scalars['String'];
  CreateCV: Scalars['Int'];
  CreateCoverLetterTemplate: Scalars['Int'];
  CreateExperience: Scalars['Boolean'];
  CreateGeneratedCoverLetter: MutationCreateGeneratedCoverLetterResult;
  CreateGeneratedCv: MutationCreateGeneratedCvResult;
  CreateGoogleAuthToken: GoogleAuthToken;
  Createjob: Job;
  DeleteCV: Scalars['Boolean'];
  DeleteExperience: Scalars['Boolean'];
  DeleteJobs: Array<Scalars['ID']>;
  Deletejob: Job;
  GetRefreshedCredits: Array<Credits>;
  RemoveCoverLetterTemplate: Scalars['Int'];
  UpdateCV: Scalars['Boolean'];
  UpdateCoverLetterTemplate: Scalars['Int'];
  UpdateDriveFolderId: GoogleAuthToken;
  UpdateExperience: Scalars['Boolean'];
  UpdateJobs: Array<Scalars['ID']>;
  Updatejob: Job;
};


/** Root Mutation */
export type MutationAnswerQuestionArgs = {
  jobId?: InputMaybe<Scalars['String']>;
  question: Scalars['String'];
};


/** Root Mutation */
export type MutationCreateCvArgs = {
  googleDocIds: Array<Scalars['String']>;
};


/** Root Mutation */
export type MutationCreateCoverLetterTemplateArgs = {
  googleDocIds: Array<Scalars['String']>;
};


/** Root Mutation */
export type MutationCreateExperienceArgs = {
  content: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};


/** Root Mutation */
export type MutationCreateGeneratedCoverLetterArgs = {
  jobId: Scalars['String'];
  model?: InputMaybe<Scalars['String']>;
  templateIds?: InputMaybe<Array<Scalars['String']>>;
};


/** Root Mutation */
export type MutationCreateGeneratedCvArgs = {
  jobId: Scalars['String'];
};


/** Root Mutation */
export type MutationCreateGoogleAuthTokenArgs = {
  authCode: Scalars['String'];
  redirectUri: Scalars['String'];
  scope: Array<Scalars['String']>;
};


/** Root Mutation */
export type MutationCreatejobArgs = {
  autoGenerateCoverLetter?: InputMaybe<Scalars['Boolean']>;
  autoGenerateCv?: InputMaybe<Scalars['Boolean']>;
  description: Array<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};


/** Root Mutation */
export type MutationDeleteCvArgs = {
  id: Scalars['String'];
};


/** Root Mutation */
export type MutationDeleteExperienceArgs = {
  id?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
};


/** Root Mutation */
export type MutationDeleteJobsArgs = {
  ids: Array<Scalars['String']>;
};


/** Root Mutation */
export type MutationDeletejobArgs = {
  id: Scalars['String'];
};


/** Root Mutation */
export type MutationRemoveCoverLetterTemplateArgs = {
  templateIds: Array<Scalars['String']>;
};


/** Root Mutation */
export type MutationUpdateCvArgs = {
  id: Scalars['String'];
  refreshGoogleDoc?: InputMaybe<Scalars['Boolean']>;
  setDefault?: InputMaybe<Scalars['Boolean']>;
};


/** Root Mutation */
export type MutationUpdateCoverLetterTemplateArgs = {
  Ids: Array<Scalars['String']>;
  active: Scalars['Boolean'];
};


/** Root Mutation */
export type MutationUpdateDriveFolderIdArgs = {
  folderId: Scalars['String'];
};


/** Root Mutation */
export type MutationUpdateExperienceArgs = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};


/** Root Mutation */
export type MutationUpdateJobsArgs = {
  ids: Array<Scalars['String']>;
  status: Scalars['String'];
};


/** Root Mutation */
export type MutationUpdatejobArgs = {
  description?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  refreshSuitabilityScore?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
};

export type MutationCreateGeneratedCoverLetterResult = Error | MutationCreateGeneratedCoverLetterSuccess;

export type MutationCreateGeneratedCoverLetterSuccess = {
  __typename?: 'MutationCreateGeneratedCoverLetterSuccess';
  data: Array<GeneratedCoverLetter>;
};

export type MutationCreateGeneratedCvResult = Error | MutationCreateGeneratedCvSuccess;

export type MutationCreateGeneratedCvSuccess = {
  __typename?: 'MutationCreateGeneratedCvSuccess';
  data: Scalars['Boolean'];
};

/** Root Query */
export type Query = {
  __typename?: 'Query';
  CoverLetterTemplates: Array<CoverLetterTemplate>;
  GetCVExtractedText: Scalars['CVExtractedTextType'];
  GetFilesFromDrive: Scalars['GoogleDocs'];
  GetGeneratedCoverLetters: Array<GeneratedCoverLetter>;
  GetGeneratedCvs: Array<GeneratedCv>;
  GetGoogleAccessToken: Scalars['String'];
  GetGoogleAuthURL: Scalars['String'];
  GetStripeBuyLink: Scalars['String'];
  user: QueryUserResult;
};


/** Root Query */
export type QueryCoverLetterTemplatesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


/** Root Query */
export type QueryGetCvExtractedTextArgs = {
  id: Scalars['String'];
};


/** Root Query */
export type QueryGetFilesFromDriveArgs = {
  fields: Scalars['String'];
  pageSize?: InputMaybe<Scalars['Int']>;
  pageToken?: InputMaybe<Scalars['String']>;
  q: Scalars['String'];
};


/** Root Query */
export type QueryGetGoogleAuthUrlArgs = {
  scope: Array<Scalars['String']>;
  urlRedirect?: InputMaybe<Scalars['String']>;
};


/** Root Query */
export type QueryGetStripeBuyLinkArgs = {
  priceId: Scalars['String'];
};

export type QueryUserResult = Error | QueryUserSuccess;

export type QueryUserSuccess = {
  __typename?: 'QueryUserSuccess';
  data: User;
};

export type StripeCustomer = {
  __typename?: 'StripeCustomer';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
};

export type User = {
  __typename?: 'User';
  CV: Array<Cv>;
  Experience: Array<Experience>;
  GoogleAuthToken?: Maybe<GoogleAuthToken>;
  answeredQuestion: Array<AnsweredQuestion>;
  coverLetterTemplate: Array<CoverLetterTemplate>;
  createdAt: Scalars['Date'];
  credits: Array<Credits>;
  creditsSum?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  generatedCoverLetter: Array<GeneratedCoverLetter>;
  id: Scalars['ID'];
  job: Array<Job>;
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};


export type UserJobArgs = {
  newestFirst?: InputMaybe<Scalars['Boolean']>;
  take?: InputMaybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes = {
  MutationCreateGeneratedCoverLetterResult: ( Error ) | ( MutationCreateGeneratedCoverLetterSuccess );
  MutationCreateGeneratedCvResult: ( Error ) | ( MutationCreateGeneratedCvSuccess );
  QueryUserResult: ( Error ) | ( QueryUserSuccess );
};

/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
  MutationCreateGeneratedCoverLetterResult: ( Error ) | ( MutationCreateGeneratedCoverLetterSuccess );
  MutationCreateGeneratedCvResult: ( Error ) | ( MutationCreateGeneratedCvSuccess );
  QueryUserResult: ( Error ) | ( QueryUserSuccess );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AnsweredQuestion: ResolverTypeWrapper<AnsweredQuestion>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CV: ResolverTypeWrapper<Cv>;
  CVExtractedText: ResolverTypeWrapper<CvExtractedText>;
  CVExtractedTextType: ResolverTypeWrapper<Scalars['CVExtractedTextType']>;
  CoverLetterTemplate: ResolverTypeWrapper<CoverLetterTemplate>;
  Credits: ResolverTypeWrapper<Credits>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Error: ResolverTypeWrapper<Error>;
  Experience: ResolverTypeWrapper<Experience>;
  ExperiencesUsed: ResolverTypeWrapper<ExperiencesUsed>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GeneratedCoverLetter: ResolverTypeWrapper<GeneratedCoverLetter>;
  GeneratedCv: ResolverTypeWrapper<GeneratedCv>;
  GoogleAuthToken: ResolverTypeWrapper<GoogleAuthToken>;
  GoogleDocs: ResolverTypeWrapper<Scalars['GoogleDocs']>;
  GoogleDocsFile: ResolverTypeWrapper<Scalars['GoogleDocsFile']>;
  GoogleDocsFiles: ResolverTypeWrapper<GoogleDocsFiles>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Job: ResolverTypeWrapper<Job>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationCreateGeneratedCoverLetterResult: ResolverTypeWrapper<ResolversUnionTypes['MutationCreateGeneratedCoverLetterResult']>;
  MutationCreateGeneratedCoverLetterSuccess: ResolverTypeWrapper<MutationCreateGeneratedCoverLetterSuccess>;
  MutationCreateGeneratedCvResult: ResolverTypeWrapper<ResolversUnionTypes['MutationCreateGeneratedCvResult']>;
  MutationCreateGeneratedCvSuccess: ResolverTypeWrapper<MutationCreateGeneratedCvSuccess>;
  Query: ResolverTypeWrapper<{}>;
  QueryUserResult: ResolverTypeWrapper<ResolversUnionTypes['QueryUserResult']>;
  QueryUserSuccess: ResolverTypeWrapper<QueryUserSuccess>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StripeCustomer: ResolverTypeWrapper<StripeCustomer>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AnsweredQuestion: AnsweredQuestion;
  Boolean: Scalars['Boolean'];
  CV: Cv;
  CVExtractedText: CvExtractedText;
  CVExtractedTextType: Scalars['CVExtractedTextType'];
  CoverLetterTemplate: CoverLetterTemplate;
  Credits: Credits;
  Date: Scalars['Date'];
  Error: Error;
  Experience: Experience;
  ExperiencesUsed: ExperiencesUsed;
  Float: Scalars['Float'];
  GeneratedCoverLetter: GeneratedCoverLetter;
  GeneratedCv: GeneratedCv;
  GoogleAuthToken: GoogleAuthToken;
  GoogleDocs: Scalars['GoogleDocs'];
  GoogleDocsFile: Scalars['GoogleDocsFile'];
  GoogleDocsFiles: GoogleDocsFiles;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Job: Job;
  Mutation: {};
  MutationCreateGeneratedCoverLetterResult: ResolversUnionParentTypes['MutationCreateGeneratedCoverLetterResult'];
  MutationCreateGeneratedCoverLetterSuccess: MutationCreateGeneratedCoverLetterSuccess;
  MutationCreateGeneratedCvResult: ResolversUnionParentTypes['MutationCreateGeneratedCvResult'];
  MutationCreateGeneratedCvSuccess: MutationCreateGeneratedCvSuccess;
  Query: {};
  QueryUserResult: ResolversUnionParentTypes['QueryUserResult'];
  QueryUserSuccess: QueryUserSuccess;
  String: Scalars['String'];
  StripeCustomer: StripeCustomer;
  User: User;
};

export type AnsweredQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnsweredQuestion'] = ResolversParentTypes['AnsweredQuestion']> = {
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CvResolvers<ContextType = any, ParentType extends ResolversParentTypes['CV'] = ResolversParentTypes['CV']> = {
  CvContent?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  googleDocId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  googleDocLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CvExtractedTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['CVExtractedText'] = ResolversParentTypes['CVExtractedText']> = {
  extracted?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  googleDocId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CvExtractedTextTypeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CVExtractedTextType'], any> {
  name: 'CVExtractedTextType';
}

export type CoverLetterTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CoverLetterTemplate'] = ResolversParentTypes['CoverLetterTemplate']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  googleDocId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Credits'] = ResolversParentTypes['Credits']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  generatedCoverLetter?: Resolver<Maybe<ResolversTypes['GeneratedCoverLetter']>, ParentType, ContextType>;
  generatedCv?: Resolver<Maybe<ResolversTypes['GeneratedCv']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  note?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperiencesUsedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperiencesUsed'] = ResolversParentTypes['ExperiencesUsed']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  experience?: Resolver<ResolversTypes['Experience'], ParentType, ContextType>;
  generatedCv?: Resolver<ResolversTypes['GeneratedCv'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeneratedCoverLetterResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeneratedCoverLetter'] = ResolversParentTypes['GeneratedCoverLetter']> = {
  content?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  coverLetterTemplate?: Resolver<Maybe<ResolversTypes['CoverLetterTemplate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  googleDocId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  job?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeneratedCvResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeneratedCv'] = ResolversParentTypes['GeneratedCv']> = {
  content?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  cv?: Resolver<Maybe<ResolversTypes['CV']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  experiences?: Resolver<Array<ResolversTypes['ExperiencesUsed']>, ParentType, ContextType>;
  googleDocId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  job?: Resolver<ResolversTypes['Job'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GoogleAuthTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoogleAuthToken'] = ResolversParentTypes['GoogleAuthToken']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  driveFolderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scope?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GoogleDocsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleDocs'], any> {
  name: 'GoogleDocs';
}

export interface GoogleDocsFileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleDocsFile'], any> {
  name: 'GoogleDocsFile';
}

export type GoogleDocsFilesResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoogleDocsFiles'] = ResolversParentTypes['GoogleDocsFiles']> = {
  files?: Resolver<Array<ResolversTypes['GoogleDocsFile']>, ParentType, ContextType>;
  nextPageToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  GeneratedCoverLetter?: Resolver<Array<ResolversTypes['GeneratedCoverLetter']>, ParentType, ContextType>;
  GeneratedCv?: Resolver<Array<ResolversTypes['GeneratedCv']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suitabilityScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  suitabilityScoreDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  AnswerQuestion?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationAnswerQuestionArgs, 'question'>>;
  CreateCV?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationCreateCvArgs, 'googleDocIds'>>;
  CreateCoverLetterTemplate?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationCreateCoverLetterTemplateArgs, 'googleDocIds'>>;
  CreateExperience?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateExperienceArgs, 'content'>>;
  CreateGeneratedCoverLetter?: Resolver<ResolversTypes['MutationCreateGeneratedCoverLetterResult'], ParentType, ContextType, RequireFields<MutationCreateGeneratedCoverLetterArgs, 'jobId'>>;
  CreateGeneratedCv?: Resolver<ResolversTypes['MutationCreateGeneratedCvResult'], ParentType, ContextType, RequireFields<MutationCreateGeneratedCvArgs, 'jobId'>>;
  CreateGoogleAuthToken?: Resolver<ResolversTypes['GoogleAuthToken'], ParentType, ContextType, RequireFields<MutationCreateGoogleAuthTokenArgs, 'authCode' | 'redirectUri' | 'scope'>>;
  Createjob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationCreatejobArgs, 'description' | 'url'>>;
  DeleteCV?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCvArgs, 'id'>>;
  DeleteExperience?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationDeleteExperienceArgs>>;
  DeleteJobs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationDeleteJobsArgs, 'ids'>>;
  Deletejob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationDeletejobArgs, 'id'>>;
  GetRefreshedCredits?: Resolver<Array<ResolversTypes['Credits']>, ParentType, ContextType>;
  RemoveCoverLetterTemplate?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationRemoveCoverLetterTemplateArgs, 'templateIds'>>;
  UpdateCV?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateCvArgs, 'id'>>;
  UpdateCoverLetterTemplate?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUpdateCoverLetterTemplateArgs, 'Ids' | 'active'>>;
  UpdateDriveFolderId?: Resolver<ResolversTypes['GoogleAuthToken'], ParentType, ContextType, RequireFields<MutationUpdateDriveFolderIdArgs, 'folderId'>>;
  UpdateExperience?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateExperienceArgs, 'id'>>;
  UpdateJobs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationUpdateJobsArgs, 'ids' | 'status'>>;
  Updatejob?: Resolver<ResolversTypes['Job'], ParentType, ContextType, RequireFields<MutationUpdatejobArgs, 'id'>>;
};

export type MutationCreateGeneratedCoverLetterResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationCreateGeneratedCoverLetterResult'] = ResolversParentTypes['MutationCreateGeneratedCoverLetterResult']> = {
  __resolveType: TypeResolveFn<'Error' | 'MutationCreateGeneratedCoverLetterSuccess', ParentType, ContextType>;
};

export type MutationCreateGeneratedCoverLetterSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationCreateGeneratedCoverLetterSuccess'] = ResolversParentTypes['MutationCreateGeneratedCoverLetterSuccess']> = {
  data?: Resolver<Array<ResolversTypes['GeneratedCoverLetter']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationCreateGeneratedCvResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationCreateGeneratedCvResult'] = ResolversParentTypes['MutationCreateGeneratedCvResult']> = {
  __resolveType: TypeResolveFn<'Error' | 'MutationCreateGeneratedCvSuccess', ParentType, ContextType>;
};

export type MutationCreateGeneratedCvSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationCreateGeneratedCvSuccess'] = ResolversParentTypes['MutationCreateGeneratedCvSuccess']> = {
  data?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  CoverLetterTemplates?: Resolver<Array<ResolversTypes['CoverLetterTemplate']>, ParentType, ContextType, Partial<QueryCoverLetterTemplatesArgs>>;
  GetCVExtractedText?: Resolver<ResolversTypes['CVExtractedTextType'], ParentType, ContextType, RequireFields<QueryGetCvExtractedTextArgs, 'id'>>;
  GetFilesFromDrive?: Resolver<ResolversTypes['GoogleDocs'], ParentType, ContextType, RequireFields<QueryGetFilesFromDriveArgs, 'fields' | 'q'>>;
  GetGeneratedCoverLetters?: Resolver<Array<ResolversTypes['GeneratedCoverLetter']>, ParentType, ContextType>;
  GetGeneratedCvs?: Resolver<Array<ResolversTypes['GeneratedCv']>, ParentType, ContextType>;
  GetGoogleAccessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  GetGoogleAuthURL?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetGoogleAuthUrlArgs, 'scope'>>;
  GetStripeBuyLink?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryGetStripeBuyLinkArgs, 'priceId'>>;
  user?: Resolver<ResolversTypes['QueryUserResult'], ParentType, ContextType>;
};

export type QueryUserResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryUserResult'] = ResolversParentTypes['QueryUserResult']> = {
  __resolveType: TypeResolveFn<'Error' | 'QueryUserSuccess', ParentType, ContextType>;
};

export type QueryUserSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['QueryUserSuccess'] = ResolversParentTypes['QueryUserSuccess']> = {
  data?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StripeCustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['StripeCustomer'] = ResolversParentTypes['StripeCustomer']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  CV?: Resolver<Array<ResolversTypes['CV']>, ParentType, ContextType>;
  Experience?: Resolver<Array<ResolversTypes['Experience']>, ParentType, ContextType>;
  GoogleAuthToken?: Resolver<Maybe<ResolversTypes['GoogleAuthToken']>, ParentType, ContextType>;
  answeredQuestion?: Resolver<Array<ResolversTypes['AnsweredQuestion']>, ParentType, ContextType>;
  coverLetterTemplate?: Resolver<Array<ResolversTypes['CoverLetterTemplate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  credits?: Resolver<Array<ResolversTypes['Credits']>, ParentType, ContextType>;
  creditsSum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generatedCoverLetter?: Resolver<Array<ResolversTypes['GeneratedCoverLetter']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  job?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<UserJobArgs, 'newestFirst' | 'take'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AnsweredQuestion?: AnsweredQuestionResolvers<ContextType>;
  CV?: CvResolvers<ContextType>;
  CVExtractedText?: CvExtractedTextResolvers<ContextType>;
  CVExtractedTextType?: GraphQLScalarType;
  CoverLetterTemplate?: CoverLetterTemplateResolvers<ContextType>;
  Credits?: CreditsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Error?: ErrorResolvers<ContextType>;
  Experience?: ExperienceResolvers<ContextType>;
  ExperiencesUsed?: ExperiencesUsedResolvers<ContextType>;
  GeneratedCoverLetter?: GeneratedCoverLetterResolvers<ContextType>;
  GeneratedCv?: GeneratedCvResolvers<ContextType>;
  GoogleAuthToken?: GoogleAuthTokenResolvers<ContextType>;
  GoogleDocs?: GraphQLScalarType;
  GoogleDocsFile?: GraphQLScalarType;
  GoogleDocsFiles?: GoogleDocsFilesResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Job?: JobResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationCreateGeneratedCoverLetterResult?: MutationCreateGeneratedCoverLetterResultResolvers<ContextType>;
  MutationCreateGeneratedCoverLetterSuccess?: MutationCreateGeneratedCoverLetterSuccessResolvers<ContextType>;
  MutationCreateGeneratedCvResult?: MutationCreateGeneratedCvResultResolvers<ContextType>;
  MutationCreateGeneratedCvSuccess?: MutationCreateGeneratedCvSuccessResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryUserResult?: QueryUserResultResolvers<ContextType>;
  QueryUserSuccess?: QueryUserSuccessResolvers<ContextType>;
  StripeCustomer?: StripeCustomerResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


export type CreateCvMutationVariables = Exact<{
  googleDocIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateCvMutation = { __typename?: 'Mutation', CreateCV: number };

export type CreateGeneratedCvMutationVariables = Exact<{
  jobId: Scalars['String'];
}>;


export type CreateGeneratedCvMutation = { __typename?: 'Mutation', CreateGeneratedCv: { __typename: 'Error', message: string } | { __typename?: 'MutationCreateGeneratedCvSuccess', data: boolean } };

export type GetCvExtractedTextQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCvExtractedTextQuery = { __typename?: 'Query', GetCVExtractedText: any };

export type GetCVsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCVsQuery = { __typename?: 'Query', user: { __typename?: 'Error' } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', CV: Array<{ __typename?: 'CV', createdAt: any, googleDocId: string, id: string, name?: string | null, updatedAt: any, googleDocLink: string, isDefault: boolean }> } } };

export type RefreshCvMutationVariables = Exact<{
  id: Scalars['String'];
  setDefault?: InputMaybe<Scalars['Boolean']>;
  refreshGoogleDoc?: InputMaybe<Scalars['Boolean']>;
}>;


export type RefreshCvMutation = { __typename?: 'Mutation', UpdateCV: boolean };

export type CreateCoverLetterTemplateMutationVariables = Exact<{
  Ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateCoverLetterTemplateMutation = { __typename?: 'Mutation', CreateCoverLetterTemplate: number };

export type CreateGeneratedCoverLetterMutationVariables = Exact<{
  jobId: Scalars['String'];
}>;


export type CreateGeneratedCoverLetterMutation = { __typename?: 'Mutation', CreateGeneratedCoverLetter: { __typename: 'Error', message: string } | { __typename: 'MutationCreateGeneratedCoverLetterSuccess', data: Array<{ __typename?: 'GeneratedCoverLetter', id: string, googleDocId: string, name?: string | null }> } };

export type GetCoverLetterTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoverLetterTemplatesQuery = { __typename?: 'Query', CoverLetterTemplates: Array<{ __typename?: 'CoverLetterTemplate', id: string, name?: string | null, updatedAt: any, googleDocId: string, deletedAt?: any | null, createdAt: any, active: boolean }> };

export type RemoveCoverLetterTemplateMutationVariables = Exact<{
  Ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type RemoveCoverLetterTemplateMutation = { __typename?: 'Mutation', RemoveCoverLetterTemplate: number };

export type UpdateCoverLetterTemplateMutationVariables = Exact<{
  Ids: Array<Scalars['String']> | Scalars['String'];
  active: Scalars['Boolean'];
}>;


export type UpdateCoverLetterTemplateMutation = { __typename?: 'Mutation', UpdateCoverLetterTemplate: number };

export type GetCreditsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreditsQuery = { __typename?: 'Query', user: { __typename?: 'Error' } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', credits: Array<{ __typename?: 'Credits', id: string, amount: number, note: string, createdAt: any, updatedAt: any, userId: string, generatedCoverLetter?: { __typename?: 'GeneratedCoverLetter', id: string, createdAt: any, name?: string | null, googleDocId: string } | null, generatedCv?: { __typename?: 'GeneratedCv', id: string, createdAt: any, googleDocId: string, job: { __typename?: 'Job', id: string } } | null }> } } };

export type GetUserCreditsSumQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserCreditsSumQuery = { __typename?: 'Query', user: { __typename: 'Error', message: string } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', creditsSum?: number | null } } };

export type AddGoogleAuthTokenMutationVariables = Exact<{
  authCode: Scalars['String'];
  scope: Array<Scalars['String']> | Scalars['String'];
  redirectUri: Scalars['String'];
}>;


export type AddGoogleAuthTokenMutation = { __typename?: 'Mutation', CreateGoogleAuthToken: { __typename?: 'GoogleAuthToken', id: string } };

export type CheckIfTokenExistsQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckIfTokenExistsQuery = { __typename?: 'Query', user: { __typename?: 'Error' } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', GoogleAuthToken?: { __typename?: 'GoogleAuthToken', id: string, scope: Array<string> } | null } } };

export type GetGoogleAccessTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGoogleAccessTokenQuery = { __typename?: 'Query', GetGoogleAccessToken: string };

export type GetGoogleAuthUrlQueryVariables = Exact<{
  scope: Array<Scalars['String']> | Scalars['String'];
  urlRedirect: Scalars['String'];
}>;


export type GetGoogleAuthUrlQuery = { __typename?: 'Query', GetGoogleAuthURL: string };

export type UpdateDriveFolderIdMutationVariables = Exact<{
  folderId: Scalars['String'];
}>;


export type UpdateDriveFolderIdMutation = { __typename?: 'Mutation', UpdateDriveFolderId: { __typename?: 'GoogleAuthToken', id: string } };

export type GetFilesQueryVariables = Exact<{
  q: Scalars['String'];
  fields: Scalars['String'];
  pageSize?: InputMaybe<Scalars['Int']>;
  pageToken?: InputMaybe<Scalars['String']>;
}>;


export type GetFilesQuery = { __typename?: 'Query', GetFilesFromDrive: any };

export type CreateJobMutationVariables = Exact<{
  description: Array<Scalars['String']> | Scalars['String'];
  url: Scalars['String'];
  autoGenerateCoverLetter?: InputMaybe<Scalars['Boolean']>;
  autoGenerateCV?: InputMaybe<Scalars['Boolean']>;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', Createjob: { __typename?: 'Job', id: string, GeneratedCoverLetter: Array<{ __typename?: 'GeneratedCoverLetter', googleDocId: string }> } };

export type DeleteJobsMutationVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteJobsMutation = { __typename?: 'Mutation', DeleteJobs: Array<string> };

export type GetJobQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobQuery = { __typename?: 'Query', user: { __typename?: 'Error' } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', job: Array<{ __typename?: 'Job', description: Array<string>, status: string, createdAt: any, id: string, name?: string | null, updatedAt: any, url: string, suitabilityScore?: number | null, GeneratedCv: Array<{ __typename?: 'GeneratedCv', id: string, createdAt: any, googleDocId: string, cv?: { __typename?: 'CV', id: string } | null }>, GeneratedCoverLetter: Array<{ __typename?: 'GeneratedCoverLetter', id: string, name?: string | null, createdAt: any, googleDocId: string, coverLetterTemplate?: { __typename?: 'CoverLetterTemplate', id: string } | null }> }> } } };

export type GetXJobsQueryVariables = Exact<{
  newestFirst?: InputMaybe<Scalars['Boolean']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type GetXJobsQuery = { __typename?: 'Query', user: { __typename?: 'Error' } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', job: Array<{ __typename?: 'Job', description: Array<string>, status: string, createdAt: any, id: string, name?: string | null, updatedAt: any, url: string }> } } };

export type UpdateJobMutationVariables = Exact<{
  id: Scalars['String'];
  description?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
}>;


export type UpdateJobMutation = { __typename?: 'Mutation', Updatejob: { __typename?: 'Job', id: string } };

export type UpdateJobNameMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateJobNameMutation = { __typename?: 'Mutation', Updatejob: { __typename?: 'Job', id: string } };

export type UpdateJobsMutationVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
  status: Scalars['String'];
}>;


export type UpdateJobsMutation = { __typename?: 'Mutation', UpdateJobs: Array<string> };

export type AnswerQuestionMutationVariables = Exact<{
  question: Scalars['String'];
  jobId?: InputMaybe<Scalars['String']>;
}>;


export type AnswerQuestionMutation = { __typename?: 'Mutation', AnswerQuestion: string };

export type GetStripeBuyLinkQueryVariables = Exact<{
  priceId: Scalars['String'];
}>;


export type GetStripeBuyLinkQuery = { __typename?: 'Query', GetStripeBuyLink: string };

export type AllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUserQuery = { __typename?: 'Query', user: { __typename: 'Error', message: string } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', createdAt: any, email: string, id: string, name: string, updatedAt: any, creditsSum?: number | null, CV: Array<{ __typename?: 'CV', CvContent: any, id: string, createdAt: any, name?: string | null, updatedAt: any }>, Experience: Array<{ __typename?: 'Experience', content: string, createdAt: any, id: string, name?: string | null, updatedAt: any }>, job: Array<{ __typename?: 'Job', description: Array<string>, createdAt: any, id: string, name?: string | null, updatedAt: any }> } } };

export type GetUserStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserStatsQuery = { __typename?: 'Query', user: { __typename?: 'Error' } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', id: string, createdAt: any, email: string, name: string, updatedAt: any, creditsSum?: number | null, job: Array<{ __typename?: 'Job', id: string, updatedAt: any }>, Experience: Array<{ __typename?: 'Experience', id: string, updatedAt: any }>, CV: Array<{ __typename?: 'CV', id: string, updatedAt: any }>, coverLetterTemplate: Array<{ __typename?: 'CoverLetterTemplate', id: string, updatedAt: any }>, generatedCoverLetter: Array<{ __typename?: 'GeneratedCoverLetter', id: string, updatedAt: any }>, answeredQuestion: Array<{ __typename?: 'AnsweredQuestion', id: string, updatedAt: any }>, GoogleAuthToken?: { __typename?: 'GoogleAuthToken', id: string, driveFolderId?: string | null } | null } } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename: 'Error', message: string } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', createdAt: any, email: string, id: string, name: string, updatedAt: any, creditsSum?: number | null } } };

export type CreateExperienceMutationVariables = Exact<{
  name: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreateExperienceMutation = { __typename?: 'Mutation', CreateExperience: boolean };

export type DeleteExperienceMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteExperienceMutation = { __typename?: 'Mutation', DeleteExperience: boolean };

export type DeleteMultipleExperienceMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type DeleteMultipleExperienceMutation = { __typename?: 'Mutation', DeleteExperience: boolean };

export type GetAllExperienceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllExperienceQuery = { __typename?: 'Query', user: { __typename?: 'Error' } | { __typename: 'QueryUserSuccess', data: { __typename?: 'User', Experience: Array<{ __typename?: 'Experience', content: string, createdAt: any, id: string, name?: string | null, updatedAt: any }> } } };

export type UpdateExperienceMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  content: Scalars['String'];
}>;


export type UpdateExperienceMutation = { __typename?: 'Mutation', UpdateExperience: boolean };


export const CreateCvDocument = gql`
    mutation CreateCV($googleDocIds: [String!]!) {
  CreateCV(googleDocIds: $googleDocIds)
}
    `;
export type CreateCvMutationFn = Apollo.MutationFunction<CreateCvMutation, CreateCvMutationVariables>;

/**
 * __useCreateCvMutation__
 *
 * To run a mutation, you first call `useCreateCvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCvMutation, { data, loading, error }] = useCreateCvMutation({
 *   variables: {
 *      googleDocIds: // value for 'googleDocIds'
 *   },
 * });
 */
export function useCreateCvMutation(baseOptions?: Apollo.MutationHookOptions<CreateCvMutation, CreateCvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCvMutation, CreateCvMutationVariables>(CreateCvDocument, options);
      }
export type CreateCvMutationHookResult = ReturnType<typeof useCreateCvMutation>;
export type CreateCvMutationResult = Apollo.MutationResult<CreateCvMutation>;
export type CreateCvMutationOptions = Apollo.BaseMutationOptions<CreateCvMutation, CreateCvMutationVariables>;
export const CreateGeneratedCvDocument = gql`
    mutation CreateGeneratedCv($jobId: String!) {
  CreateGeneratedCv(jobId: $jobId) {
    ... on Error {
      __typename
      message
    }
    ... on MutationCreateGeneratedCvSuccess {
      data
    }
  }
}
    `;
export type CreateGeneratedCvMutationFn = Apollo.MutationFunction<CreateGeneratedCvMutation, CreateGeneratedCvMutationVariables>;

/**
 * __useCreateGeneratedCvMutation__
 *
 * To run a mutation, you first call `useCreateGeneratedCvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGeneratedCvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGeneratedCvMutation, { data, loading, error }] = useCreateGeneratedCvMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useCreateGeneratedCvMutation(baseOptions?: Apollo.MutationHookOptions<CreateGeneratedCvMutation, CreateGeneratedCvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGeneratedCvMutation, CreateGeneratedCvMutationVariables>(CreateGeneratedCvDocument, options);
      }
export type CreateGeneratedCvMutationHookResult = ReturnType<typeof useCreateGeneratedCvMutation>;
export type CreateGeneratedCvMutationResult = Apollo.MutationResult<CreateGeneratedCvMutation>;
export type CreateGeneratedCvMutationOptions = Apollo.BaseMutationOptions<CreateGeneratedCvMutation, CreateGeneratedCvMutationVariables>;
export const GetCvExtractedTextDocument = gql`
    query GetCVExtractedText($id: String!) {
  GetCVExtractedText(id: $id)
}
    `;

/**
 * __useGetCvExtractedTextQuery__
 *
 * To run a query within a React component, call `useGetCvExtractedTextQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCvExtractedTextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCvExtractedTextQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCvExtractedTextQuery(baseOptions: Apollo.QueryHookOptions<GetCvExtractedTextQuery, GetCvExtractedTextQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCvExtractedTextQuery, GetCvExtractedTextQueryVariables>(GetCvExtractedTextDocument, options);
      }
export function useGetCvExtractedTextLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCvExtractedTextQuery, GetCvExtractedTextQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCvExtractedTextQuery, GetCvExtractedTextQueryVariables>(GetCvExtractedTextDocument, options);
        }
export type GetCvExtractedTextQueryHookResult = ReturnType<typeof useGetCvExtractedTextQuery>;
export type GetCvExtractedTextLazyQueryHookResult = ReturnType<typeof useGetCvExtractedTextLazyQuery>;
export type GetCvExtractedTextQueryResult = Apollo.QueryResult<GetCvExtractedTextQuery, GetCvExtractedTextQueryVariables>;
export const GetCVsDocument = gql`
    query GetCVs {
  user {
    ... on QueryUserSuccess {
      __typename
      data {
        CV {
          createdAt
          googleDocId
          id
          name
          updatedAt
          googleDocLink
          isDefault
        }
      }
    }
  }
}
    `;

/**
 * __useGetCVsQuery__
 *
 * To run a query within a React component, call `useGetCVsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCVsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCVsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCVsQuery(baseOptions?: Apollo.QueryHookOptions<GetCVsQuery, GetCVsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCVsQuery, GetCVsQueryVariables>(GetCVsDocument, options);
      }
export function useGetCVsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCVsQuery, GetCVsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCVsQuery, GetCVsQueryVariables>(GetCVsDocument, options);
        }
export type GetCVsQueryHookResult = ReturnType<typeof useGetCVsQuery>;
export type GetCVsLazyQueryHookResult = ReturnType<typeof useGetCVsLazyQuery>;
export type GetCVsQueryResult = Apollo.QueryResult<GetCVsQuery, GetCVsQueryVariables>;
export const RefreshCvDocument = gql`
    mutation RefreshCV($id: String!, $setDefault: Boolean, $refreshGoogleDoc: Boolean) {
  UpdateCV(id: $id, setDefault: $setDefault, refreshGoogleDoc: $refreshGoogleDoc)
}
    `;
export type RefreshCvMutationFn = Apollo.MutationFunction<RefreshCvMutation, RefreshCvMutationVariables>;

/**
 * __useRefreshCvMutation__
 *
 * To run a mutation, you first call `useRefreshCvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshCvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshCvMutation, { data, loading, error }] = useRefreshCvMutation({
 *   variables: {
 *      id: // value for 'id'
 *      setDefault: // value for 'setDefault'
 *      refreshGoogleDoc: // value for 'refreshGoogleDoc'
 *   },
 * });
 */
export function useRefreshCvMutation(baseOptions?: Apollo.MutationHookOptions<RefreshCvMutation, RefreshCvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshCvMutation, RefreshCvMutationVariables>(RefreshCvDocument, options);
      }
export type RefreshCvMutationHookResult = ReturnType<typeof useRefreshCvMutation>;
export type RefreshCvMutationResult = Apollo.MutationResult<RefreshCvMutation>;
export type RefreshCvMutationOptions = Apollo.BaseMutationOptions<RefreshCvMutation, RefreshCvMutationVariables>;
export const CreateCoverLetterTemplateDocument = gql`
    mutation CreateCoverLetterTemplate($Ids: [String!]!) {
  CreateCoverLetterTemplate(googleDocIds: $Ids)
}
    `;
export type CreateCoverLetterTemplateMutationFn = Apollo.MutationFunction<CreateCoverLetterTemplateMutation, CreateCoverLetterTemplateMutationVariables>;

/**
 * __useCreateCoverLetterTemplateMutation__
 *
 * To run a mutation, you first call `useCreateCoverLetterTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCoverLetterTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCoverLetterTemplateMutation, { data, loading, error }] = useCreateCoverLetterTemplateMutation({
 *   variables: {
 *      Ids: // value for 'Ids'
 *   },
 * });
 */
export function useCreateCoverLetterTemplateMutation(baseOptions?: Apollo.MutationHookOptions<CreateCoverLetterTemplateMutation, CreateCoverLetterTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCoverLetterTemplateMutation, CreateCoverLetterTemplateMutationVariables>(CreateCoverLetterTemplateDocument, options);
      }
export type CreateCoverLetterTemplateMutationHookResult = ReturnType<typeof useCreateCoverLetterTemplateMutation>;
export type CreateCoverLetterTemplateMutationResult = Apollo.MutationResult<CreateCoverLetterTemplateMutation>;
export type CreateCoverLetterTemplateMutationOptions = Apollo.BaseMutationOptions<CreateCoverLetterTemplateMutation, CreateCoverLetterTemplateMutationVariables>;
export const CreateGeneratedCoverLetterDocument = gql`
    mutation CreateGeneratedCoverLetter($jobId: String!) {
  CreateGeneratedCoverLetter(jobId: $jobId) {
    ... on Error {
      __typename
      message
    }
    ... on MutationCreateGeneratedCoverLetterSuccess {
      __typename
      data {
        id
        googleDocId
        name
      }
    }
  }
}
    `;
export type CreateGeneratedCoverLetterMutationFn = Apollo.MutationFunction<CreateGeneratedCoverLetterMutation, CreateGeneratedCoverLetterMutationVariables>;

/**
 * __useCreateGeneratedCoverLetterMutation__
 *
 * To run a mutation, you first call `useCreateGeneratedCoverLetterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGeneratedCoverLetterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGeneratedCoverLetterMutation, { data, loading, error }] = useCreateGeneratedCoverLetterMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useCreateGeneratedCoverLetterMutation(baseOptions?: Apollo.MutationHookOptions<CreateGeneratedCoverLetterMutation, CreateGeneratedCoverLetterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGeneratedCoverLetterMutation, CreateGeneratedCoverLetterMutationVariables>(CreateGeneratedCoverLetterDocument, options);
      }
export type CreateGeneratedCoverLetterMutationHookResult = ReturnType<typeof useCreateGeneratedCoverLetterMutation>;
export type CreateGeneratedCoverLetterMutationResult = Apollo.MutationResult<CreateGeneratedCoverLetterMutation>;
export type CreateGeneratedCoverLetterMutationOptions = Apollo.BaseMutationOptions<CreateGeneratedCoverLetterMutation, CreateGeneratedCoverLetterMutationVariables>;
export const GetCoverLetterTemplatesDocument = gql`
    query GetCoverLetterTemplates {
  CoverLetterTemplates {
    id
    name
    updatedAt
    googleDocId
    deletedAt
    createdAt
    active
  }
}
    `;

/**
 * __useGetCoverLetterTemplatesQuery__
 *
 * To run a query within a React component, call `useGetCoverLetterTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoverLetterTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoverLetterTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCoverLetterTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<GetCoverLetterTemplatesQuery, GetCoverLetterTemplatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCoverLetterTemplatesQuery, GetCoverLetterTemplatesQueryVariables>(GetCoverLetterTemplatesDocument, options);
      }
export function useGetCoverLetterTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoverLetterTemplatesQuery, GetCoverLetterTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCoverLetterTemplatesQuery, GetCoverLetterTemplatesQueryVariables>(GetCoverLetterTemplatesDocument, options);
        }
export type GetCoverLetterTemplatesQueryHookResult = ReturnType<typeof useGetCoverLetterTemplatesQuery>;
export type GetCoverLetterTemplatesLazyQueryHookResult = ReturnType<typeof useGetCoverLetterTemplatesLazyQuery>;
export type GetCoverLetterTemplatesQueryResult = Apollo.QueryResult<GetCoverLetterTemplatesQuery, GetCoverLetterTemplatesQueryVariables>;
export const RemoveCoverLetterTemplateDocument = gql`
    mutation RemoveCoverLetterTemplate($Ids: [String!]!) {
  RemoveCoverLetterTemplate(templateIds: $Ids)
}
    `;
export type RemoveCoverLetterTemplateMutationFn = Apollo.MutationFunction<RemoveCoverLetterTemplateMutation, RemoveCoverLetterTemplateMutationVariables>;

/**
 * __useRemoveCoverLetterTemplateMutation__
 *
 * To run a mutation, you first call `useRemoveCoverLetterTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCoverLetterTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCoverLetterTemplateMutation, { data, loading, error }] = useRemoveCoverLetterTemplateMutation({
 *   variables: {
 *      Ids: // value for 'Ids'
 *   },
 * });
 */
export function useRemoveCoverLetterTemplateMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCoverLetterTemplateMutation, RemoveCoverLetterTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCoverLetterTemplateMutation, RemoveCoverLetterTemplateMutationVariables>(RemoveCoverLetterTemplateDocument, options);
      }
export type RemoveCoverLetterTemplateMutationHookResult = ReturnType<typeof useRemoveCoverLetterTemplateMutation>;
export type RemoveCoverLetterTemplateMutationResult = Apollo.MutationResult<RemoveCoverLetterTemplateMutation>;
export type RemoveCoverLetterTemplateMutationOptions = Apollo.BaseMutationOptions<RemoveCoverLetterTemplateMutation, RemoveCoverLetterTemplateMutationVariables>;
export const UpdateCoverLetterTemplateDocument = gql`
    mutation UpdateCoverLetterTemplate($Ids: [String!]!, $active: Boolean!) {
  UpdateCoverLetterTemplate(Ids: $Ids, active: $active)
}
    `;
export type UpdateCoverLetterTemplateMutationFn = Apollo.MutationFunction<UpdateCoverLetterTemplateMutation, UpdateCoverLetterTemplateMutationVariables>;

/**
 * __useUpdateCoverLetterTemplateMutation__
 *
 * To run a mutation, you first call `useUpdateCoverLetterTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCoverLetterTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCoverLetterTemplateMutation, { data, loading, error }] = useUpdateCoverLetterTemplateMutation({
 *   variables: {
 *      Ids: // value for 'Ids'
 *      active: // value for 'active'
 *   },
 * });
 */
export function useUpdateCoverLetterTemplateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCoverLetterTemplateMutation, UpdateCoverLetterTemplateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCoverLetterTemplateMutation, UpdateCoverLetterTemplateMutationVariables>(UpdateCoverLetterTemplateDocument, options);
      }
export type UpdateCoverLetterTemplateMutationHookResult = ReturnType<typeof useUpdateCoverLetterTemplateMutation>;
export type UpdateCoverLetterTemplateMutationResult = Apollo.MutationResult<UpdateCoverLetterTemplateMutation>;
export type UpdateCoverLetterTemplateMutationOptions = Apollo.BaseMutationOptions<UpdateCoverLetterTemplateMutation, UpdateCoverLetterTemplateMutationVariables>;
export const GetCreditsDocument = gql`
    query GetCredits {
  user {
    ... on QueryUserSuccess {
      __typename
      data {
        credits {
          id
          amount
          note
          createdAt
          updatedAt
          userId
          generatedCoverLetter {
            id
            createdAt
            name
            googleDocId
          }
          generatedCv {
            id
            createdAt
            googleDocId
            job {
              id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCreditsQuery__
 *
 * To run a query within a React component, call `useGetCreditsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreditsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreditsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCreditsQuery(baseOptions?: Apollo.QueryHookOptions<GetCreditsQuery, GetCreditsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCreditsQuery, GetCreditsQueryVariables>(GetCreditsDocument, options);
      }
export function useGetCreditsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCreditsQuery, GetCreditsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCreditsQuery, GetCreditsQueryVariables>(GetCreditsDocument, options);
        }
export type GetCreditsQueryHookResult = ReturnType<typeof useGetCreditsQuery>;
export type GetCreditsLazyQueryHookResult = ReturnType<typeof useGetCreditsLazyQuery>;
export type GetCreditsQueryResult = Apollo.QueryResult<GetCreditsQuery, GetCreditsQueryVariables>;
export const GetUserCreditsSumDocument = gql`
    query GetUserCreditsSum {
  user {
    ... on Error {
      __typename
      message
    }
    ... on QueryUserSuccess {
      __typename
      data {
        creditsSum
      }
    }
  }
}
    `;

/**
 * __useGetUserCreditsSumQuery__
 *
 * To run a query within a React component, call `useGetUserCreditsSumQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCreditsSumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCreditsSumQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserCreditsSumQuery(baseOptions?: Apollo.QueryHookOptions<GetUserCreditsSumQuery, GetUserCreditsSumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserCreditsSumQuery, GetUserCreditsSumQueryVariables>(GetUserCreditsSumDocument, options);
      }
export function useGetUserCreditsSumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserCreditsSumQuery, GetUserCreditsSumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserCreditsSumQuery, GetUserCreditsSumQueryVariables>(GetUserCreditsSumDocument, options);
        }
export type GetUserCreditsSumQueryHookResult = ReturnType<typeof useGetUserCreditsSumQuery>;
export type GetUserCreditsSumLazyQueryHookResult = ReturnType<typeof useGetUserCreditsSumLazyQuery>;
export type GetUserCreditsSumQueryResult = Apollo.QueryResult<GetUserCreditsSumQuery, GetUserCreditsSumQueryVariables>;
export const AddGoogleAuthTokenDocument = gql`
    mutation AddGoogleAuthToken($authCode: String!, $scope: [String!]!, $redirectUri: String!) {
  CreateGoogleAuthToken(
    authCode: $authCode
    scope: $scope
    redirectUri: $redirectUri
  ) {
    id
  }
}
    `;
export type AddGoogleAuthTokenMutationFn = Apollo.MutationFunction<AddGoogleAuthTokenMutation, AddGoogleAuthTokenMutationVariables>;

/**
 * __useAddGoogleAuthTokenMutation__
 *
 * To run a mutation, you first call `useAddGoogleAuthTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGoogleAuthTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGoogleAuthTokenMutation, { data, loading, error }] = useAddGoogleAuthTokenMutation({
 *   variables: {
 *      authCode: // value for 'authCode'
 *      scope: // value for 'scope'
 *      redirectUri: // value for 'redirectUri'
 *   },
 * });
 */
export function useAddGoogleAuthTokenMutation(baseOptions?: Apollo.MutationHookOptions<AddGoogleAuthTokenMutation, AddGoogleAuthTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGoogleAuthTokenMutation, AddGoogleAuthTokenMutationVariables>(AddGoogleAuthTokenDocument, options);
      }
export type AddGoogleAuthTokenMutationHookResult = ReturnType<typeof useAddGoogleAuthTokenMutation>;
export type AddGoogleAuthTokenMutationResult = Apollo.MutationResult<AddGoogleAuthTokenMutation>;
export type AddGoogleAuthTokenMutationOptions = Apollo.BaseMutationOptions<AddGoogleAuthTokenMutation, AddGoogleAuthTokenMutationVariables>;
export const CheckIfTokenExistsDocument = gql`
    query CheckIfTokenExists {
  user {
    ... on QueryUserSuccess {
      __typename
      data {
        GoogleAuthToken {
          id
          scope
        }
      }
    }
  }
}
    `;

/**
 * __useCheckIfTokenExistsQuery__
 *
 * To run a query within a React component, call `useCheckIfTokenExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckIfTokenExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckIfTokenExistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckIfTokenExistsQuery(baseOptions?: Apollo.QueryHookOptions<CheckIfTokenExistsQuery, CheckIfTokenExistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckIfTokenExistsQuery, CheckIfTokenExistsQueryVariables>(CheckIfTokenExistsDocument, options);
      }
export function useCheckIfTokenExistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckIfTokenExistsQuery, CheckIfTokenExistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckIfTokenExistsQuery, CheckIfTokenExistsQueryVariables>(CheckIfTokenExistsDocument, options);
        }
export type CheckIfTokenExistsQueryHookResult = ReturnType<typeof useCheckIfTokenExistsQuery>;
export type CheckIfTokenExistsLazyQueryHookResult = ReturnType<typeof useCheckIfTokenExistsLazyQuery>;
export type CheckIfTokenExistsQueryResult = Apollo.QueryResult<CheckIfTokenExistsQuery, CheckIfTokenExistsQueryVariables>;
export const GetGoogleAccessTokenDocument = gql`
    query GetGoogleAccessToken {
  GetGoogleAccessToken
}
    `;

/**
 * __useGetGoogleAccessTokenQuery__
 *
 * To run a query within a React component, call `useGetGoogleAccessTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoogleAccessTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoogleAccessTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGoogleAccessTokenQuery(baseOptions?: Apollo.QueryHookOptions<GetGoogleAccessTokenQuery, GetGoogleAccessTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGoogleAccessTokenQuery, GetGoogleAccessTokenQueryVariables>(GetGoogleAccessTokenDocument, options);
      }
export function useGetGoogleAccessTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGoogleAccessTokenQuery, GetGoogleAccessTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGoogleAccessTokenQuery, GetGoogleAccessTokenQueryVariables>(GetGoogleAccessTokenDocument, options);
        }
export type GetGoogleAccessTokenQueryHookResult = ReturnType<typeof useGetGoogleAccessTokenQuery>;
export type GetGoogleAccessTokenLazyQueryHookResult = ReturnType<typeof useGetGoogleAccessTokenLazyQuery>;
export type GetGoogleAccessTokenQueryResult = Apollo.QueryResult<GetGoogleAccessTokenQuery, GetGoogleAccessTokenQueryVariables>;
export const GetGoogleAuthUrlDocument = gql`
    query GetGoogleAuthURL($scope: [String!]!, $urlRedirect: String!) {
  GetGoogleAuthURL(scope: $scope, urlRedirect: $urlRedirect)
}
    `;

/**
 * __useGetGoogleAuthUrlQuery__
 *
 * To run a query within a React component, call `useGetGoogleAuthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGoogleAuthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGoogleAuthUrlQuery({
 *   variables: {
 *      scope: // value for 'scope'
 *      urlRedirect: // value for 'urlRedirect'
 *   },
 * });
 */
export function useGetGoogleAuthUrlQuery(baseOptions: Apollo.QueryHookOptions<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>(GetGoogleAuthUrlDocument, options);
      }
export function useGetGoogleAuthUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>(GetGoogleAuthUrlDocument, options);
        }
export type GetGoogleAuthUrlQueryHookResult = ReturnType<typeof useGetGoogleAuthUrlQuery>;
export type GetGoogleAuthUrlLazyQueryHookResult = ReturnType<typeof useGetGoogleAuthUrlLazyQuery>;
export type GetGoogleAuthUrlQueryResult = Apollo.QueryResult<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>;
export const UpdateDriveFolderIdDocument = gql`
    mutation UpdateDriveFolderId($folderId: String!) {
  UpdateDriveFolderId(folderId: $folderId) {
    id
  }
}
    `;
export type UpdateDriveFolderIdMutationFn = Apollo.MutationFunction<UpdateDriveFolderIdMutation, UpdateDriveFolderIdMutationVariables>;

/**
 * __useUpdateDriveFolderIdMutation__
 *
 * To run a mutation, you first call `useUpdateDriveFolderIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDriveFolderIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDriveFolderIdMutation, { data, loading, error }] = useUpdateDriveFolderIdMutation({
 *   variables: {
 *      folderId: // value for 'folderId'
 *   },
 * });
 */
export function useUpdateDriveFolderIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDriveFolderIdMutation, UpdateDriveFolderIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDriveFolderIdMutation, UpdateDriveFolderIdMutationVariables>(UpdateDriveFolderIdDocument, options);
      }
export type UpdateDriveFolderIdMutationHookResult = ReturnType<typeof useUpdateDriveFolderIdMutation>;
export type UpdateDriveFolderIdMutationResult = Apollo.MutationResult<UpdateDriveFolderIdMutation>;
export type UpdateDriveFolderIdMutationOptions = Apollo.BaseMutationOptions<UpdateDriveFolderIdMutation, UpdateDriveFolderIdMutationVariables>;
export const GetFilesDocument = gql`
    query GetFiles($q: String!, $fields: String!, $pageSize: Int, $pageToken: String) {
  GetFilesFromDrive(
    q: $q
    fields: $fields
    pageSize: $pageSize
    pageToken: $pageToken
  )
}
    `;

/**
 * __useGetFilesQuery__
 *
 * To run a query within a React component, call `useGetFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesQuery({
 *   variables: {
 *      q: // value for 'q'
 *      fields: // value for 'fields'
 *      pageSize: // value for 'pageSize'
 *      pageToken: // value for 'pageToken'
 *   },
 * });
 */
export function useGetFilesQuery(baseOptions: Apollo.QueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
      }
export function useGetFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
        }
export type GetFilesQueryHookResult = ReturnType<typeof useGetFilesQuery>;
export type GetFilesLazyQueryHookResult = ReturnType<typeof useGetFilesLazyQuery>;
export type GetFilesQueryResult = Apollo.QueryResult<GetFilesQuery, GetFilesQueryVariables>;
export const CreateJobDocument = gql`
    mutation CreateJob($description: [String!]!, $url: String!, $autoGenerateCoverLetter: Boolean, $autoGenerateCV: Boolean) {
  Createjob(
    description: $description
    url: $url
    autoGenerateCoverLetter: $autoGenerateCoverLetter
    autoGenerateCv: $autoGenerateCV
  ) {
    id
    GeneratedCoverLetter {
      googleDocId
    }
  }
}
    `;
export type CreateJobMutationFn = Apollo.MutationFunction<CreateJobMutation, CreateJobMutationVariables>;

/**
 * __useCreateJobMutation__
 *
 * To run a mutation, you first call `useCreateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJobMutation, { data, loading, error }] = useCreateJobMutation({
 *   variables: {
 *      description: // value for 'description'
 *      url: // value for 'url'
 *      autoGenerateCoverLetter: // value for 'autoGenerateCoverLetter'
 *      autoGenerateCV: // value for 'autoGenerateCV'
 *   },
 * });
 */
export function useCreateJobMutation(baseOptions?: Apollo.MutationHookOptions<CreateJobMutation, CreateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJobMutation, CreateJobMutationVariables>(CreateJobDocument, options);
      }
export type CreateJobMutationHookResult = ReturnType<typeof useCreateJobMutation>;
export type CreateJobMutationResult = Apollo.MutationResult<CreateJobMutation>;
export type CreateJobMutationOptions = Apollo.BaseMutationOptions<CreateJobMutation, CreateJobMutationVariables>;
export const DeleteJobsDocument = gql`
    mutation DeleteJobs($ids: [String!]!) {
  DeleteJobs(ids: $ids)
}
    `;
export type DeleteJobsMutationFn = Apollo.MutationFunction<DeleteJobsMutation, DeleteJobsMutationVariables>;

/**
 * __useDeleteJobsMutation__
 *
 * To run a mutation, you first call `useDeleteJobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJobsMutation, { data, loading, error }] = useDeleteJobsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteJobsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJobsMutation, DeleteJobsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJobsMutation, DeleteJobsMutationVariables>(DeleteJobsDocument, options);
      }
export type DeleteJobsMutationHookResult = ReturnType<typeof useDeleteJobsMutation>;
export type DeleteJobsMutationResult = Apollo.MutationResult<DeleteJobsMutation>;
export type DeleteJobsMutationOptions = Apollo.BaseMutationOptions<DeleteJobsMutation, DeleteJobsMutationVariables>;
export const GetJobDocument = gql`
    query GetJob {
  user {
    ... on QueryUserSuccess {
      __typename
      data {
        job {
          description
          status
          createdAt
          id
          name
          updatedAt
          url
          suitabilityScore
          GeneratedCv {
            id
            createdAt
            googleDocId
            cv {
              id
            }
          }
          GeneratedCoverLetter {
            id
            name
            createdAt
            googleDocId
            coverLetterTemplate {
              id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetJobQuery__
 *
 * To run a query within a React component, call `useGetJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJobQuery(baseOptions?: Apollo.QueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
      }
export function useGetJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobQuery, GetJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobQuery, GetJobQueryVariables>(GetJobDocument, options);
        }
export type GetJobQueryHookResult = ReturnType<typeof useGetJobQuery>;
export type GetJobLazyQueryHookResult = ReturnType<typeof useGetJobLazyQuery>;
export type GetJobQueryResult = Apollo.QueryResult<GetJobQuery, GetJobQueryVariables>;
export const GetXJobsDocument = gql`
    query GetXJobs($newestFirst: Boolean, $take: Int) {
  user {
    ... on QueryUserSuccess {
      __typename
      data {
        job(newestFirst: $newestFirst, take: $take) {
          description
          status
          createdAt
          id
          name
          updatedAt
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetXJobsQuery__
 *
 * To run a query within a React component, call `useGetXJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetXJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetXJobsQuery({
 *   variables: {
 *      newestFirst: // value for 'newestFirst'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetXJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetXJobsQuery, GetXJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetXJobsQuery, GetXJobsQueryVariables>(GetXJobsDocument, options);
      }
export function useGetXJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetXJobsQuery, GetXJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetXJobsQuery, GetXJobsQueryVariables>(GetXJobsDocument, options);
        }
export type GetXJobsQueryHookResult = ReturnType<typeof useGetXJobsQuery>;
export type GetXJobsLazyQueryHookResult = ReturnType<typeof useGetXJobsLazyQuery>;
export type GetXJobsQueryResult = Apollo.QueryResult<GetXJobsQuery, GetXJobsQueryVariables>;
export const UpdateJobDocument = gql`
    mutation UpdateJob($id: String!, $description: [String!], $name: String, $status: String) {
  Updatejob(
    id: $id
    description: $description
    name: $name
    status: $status
    refreshSuitabilityScore: true
  ) {
    id
  }
}
    `;
export type UpdateJobMutationFn = Apollo.MutationFunction<UpdateJobMutation, UpdateJobMutationVariables>;

/**
 * __useUpdateJobMutation__
 *
 * To run a mutation, you first call `useUpdateJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobMutation, { data, loading, error }] = useUpdateJobMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *      name: // value for 'name'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateJobMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobMutation, UpdateJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJobMutation, UpdateJobMutationVariables>(UpdateJobDocument, options);
      }
export type UpdateJobMutationHookResult = ReturnType<typeof useUpdateJobMutation>;
export type UpdateJobMutationResult = Apollo.MutationResult<UpdateJobMutation>;
export type UpdateJobMutationOptions = Apollo.BaseMutationOptions<UpdateJobMutation, UpdateJobMutationVariables>;
export const UpdateJobNameDocument = gql`
    mutation UpdateJobName($id: String!, $name: String!) {
  Updatejob(id: $id, name: $name) {
    id
  }
}
    `;
export type UpdateJobNameMutationFn = Apollo.MutationFunction<UpdateJobNameMutation, UpdateJobNameMutationVariables>;

/**
 * __useUpdateJobNameMutation__
 *
 * To run a mutation, you first call `useUpdateJobNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobNameMutation, { data, loading, error }] = useUpdateJobNameMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateJobNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobNameMutation, UpdateJobNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJobNameMutation, UpdateJobNameMutationVariables>(UpdateJobNameDocument, options);
      }
export type UpdateJobNameMutationHookResult = ReturnType<typeof useUpdateJobNameMutation>;
export type UpdateJobNameMutationResult = Apollo.MutationResult<UpdateJobNameMutation>;
export type UpdateJobNameMutationOptions = Apollo.BaseMutationOptions<UpdateJobNameMutation, UpdateJobNameMutationVariables>;
export const UpdateJobsDocument = gql`
    mutation UpdateJobs($ids: [String!]!, $status: String!) {
  UpdateJobs(ids: $ids, status: $status)
}
    `;
export type UpdateJobsMutationFn = Apollo.MutationFunction<UpdateJobsMutation, UpdateJobsMutationVariables>;

/**
 * __useUpdateJobsMutation__
 *
 * To run a mutation, you first call `useUpdateJobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJobsMutation, { data, loading, error }] = useUpdateJobsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateJobsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJobsMutation, UpdateJobsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJobsMutation, UpdateJobsMutationVariables>(UpdateJobsDocument, options);
      }
export type UpdateJobsMutationHookResult = ReturnType<typeof useUpdateJobsMutation>;
export type UpdateJobsMutationResult = Apollo.MutationResult<UpdateJobsMutation>;
export type UpdateJobsMutationOptions = Apollo.BaseMutationOptions<UpdateJobsMutation, UpdateJobsMutationVariables>;
export const AnswerQuestionDocument = gql`
    mutation AnswerQuestion($question: String!, $jobId: String) {
  AnswerQuestion(question: $question, jobId: $jobId)
}
    `;
export type AnswerQuestionMutationFn = Apollo.MutationFunction<AnswerQuestionMutation, AnswerQuestionMutationVariables>;

/**
 * __useAnswerQuestionMutation__
 *
 * To run a mutation, you first call `useAnswerQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnswerQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [answerQuestionMutation, { data, loading, error }] = useAnswerQuestionMutation({
 *   variables: {
 *      question: // value for 'question'
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useAnswerQuestionMutation(baseOptions?: Apollo.MutationHookOptions<AnswerQuestionMutation, AnswerQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnswerQuestionMutation, AnswerQuestionMutationVariables>(AnswerQuestionDocument, options);
      }
export type AnswerQuestionMutationHookResult = ReturnType<typeof useAnswerQuestionMutation>;
export type AnswerQuestionMutationResult = Apollo.MutationResult<AnswerQuestionMutation>;
export type AnswerQuestionMutationOptions = Apollo.BaseMutationOptions<AnswerQuestionMutation, AnswerQuestionMutationVariables>;
export const GetStripeBuyLinkDocument = gql`
    query GetStripeBuyLink($priceId: String!) {
  GetStripeBuyLink(priceId: $priceId)
}
    `;

/**
 * __useGetStripeBuyLinkQuery__
 *
 * To run a query within a React component, call `useGetStripeBuyLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStripeBuyLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStripeBuyLinkQuery({
 *   variables: {
 *      priceId: // value for 'priceId'
 *   },
 * });
 */
export function useGetStripeBuyLinkQuery(baseOptions: Apollo.QueryHookOptions<GetStripeBuyLinkQuery, GetStripeBuyLinkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStripeBuyLinkQuery, GetStripeBuyLinkQueryVariables>(GetStripeBuyLinkDocument, options);
      }
export function useGetStripeBuyLinkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStripeBuyLinkQuery, GetStripeBuyLinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStripeBuyLinkQuery, GetStripeBuyLinkQueryVariables>(GetStripeBuyLinkDocument, options);
        }
export type GetStripeBuyLinkQueryHookResult = ReturnType<typeof useGetStripeBuyLinkQuery>;
export type GetStripeBuyLinkLazyQueryHookResult = ReturnType<typeof useGetStripeBuyLinkLazyQuery>;
export type GetStripeBuyLinkQueryResult = Apollo.QueryResult<GetStripeBuyLinkQuery, GetStripeBuyLinkQueryVariables>;
export const AllUserDocument = gql`
    query AllUser {
  user {
    ... on Error {
      __typename
      message
    }
    ... on QueryUserSuccess {
      __typename
      data {
        createdAt
        email
        id
        name
        updatedAt
        creditsSum
        CV {
          CvContent
          id
          createdAt
          name
          updatedAt
        }
        Experience {
          content
          createdAt
          id
          name
          updatedAt
        }
        job {
          description
          createdAt
          id
          name
          updatedAt
        }
      }
    }
  }
}
    `;

/**
 * __useAllUserQuery__
 *
 * To run a query within a React component, call `useAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUserQuery(baseOptions?: Apollo.QueryHookOptions<AllUserQuery, AllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUserQuery, AllUserQueryVariables>(AllUserDocument, options);
      }
export function useAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUserQuery, AllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUserQuery, AllUserQueryVariables>(AllUserDocument, options);
        }
export type AllUserQueryHookResult = ReturnType<typeof useAllUserQuery>;
export type AllUserLazyQueryHookResult = ReturnType<typeof useAllUserLazyQuery>;
export type AllUserQueryResult = Apollo.QueryResult<AllUserQuery, AllUserQueryVariables>;
export const GetUserStatsDocument = gql`
    query GetUserStats {
  user {
    ... on QueryUserSuccess {
      __typename
      data {
        id
        createdAt
        email
        name
        updatedAt
        creditsSum
        job {
          id
          updatedAt
        }
        Experience {
          id
          updatedAt
        }
        CV {
          id
          updatedAt
        }
        coverLetterTemplate {
          id
          updatedAt
        }
        generatedCoverLetter {
          id
          updatedAt
        }
        answeredQuestion {
          id
          updatedAt
        }
        GoogleAuthToken {
          id
          driveFolderId
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserStatsQuery__
 *
 * To run a query within a React component, call `useGetUserStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserStatsQuery, GetUserStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserStatsQuery, GetUserStatsQueryVariables>(GetUserStatsDocument, options);
      }
export function useGetUserStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserStatsQuery, GetUserStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserStatsQuery, GetUserStatsQueryVariables>(GetUserStatsDocument, options);
        }
export type GetUserStatsQueryHookResult = ReturnType<typeof useGetUserStatsQuery>;
export type GetUserStatsLazyQueryHookResult = ReturnType<typeof useGetUserStatsLazyQuery>;
export type GetUserStatsQueryResult = Apollo.QueryResult<GetUserStatsQuery, GetUserStatsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser {
  user {
    ... on Error {
      __typename
      message
    }
    ... on QueryUserSuccess {
      __typename
      data {
        createdAt
        email
        id
        name
        updatedAt
        creditsSum
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateExperienceDocument = gql`
    mutation CreateExperience($name: String!, $content: String!) {
  CreateExperience(name: $name, content: $content)
}
    `;
export type CreateExperienceMutationFn = Apollo.MutationFunction<CreateExperienceMutation, CreateExperienceMutationVariables>;

/**
 * __useCreateExperienceMutation__
 *
 * To run a mutation, you first call `useCreateExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExperienceMutation, { data, loading, error }] = useCreateExperienceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateExperienceMutation(baseOptions?: Apollo.MutationHookOptions<CreateExperienceMutation, CreateExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExperienceMutation, CreateExperienceMutationVariables>(CreateExperienceDocument, options);
      }
export type CreateExperienceMutationHookResult = ReturnType<typeof useCreateExperienceMutation>;
export type CreateExperienceMutationResult = Apollo.MutationResult<CreateExperienceMutation>;
export type CreateExperienceMutationOptions = Apollo.BaseMutationOptions<CreateExperienceMutation, CreateExperienceMutationVariables>;
export const DeleteExperienceDocument = gql`
    mutation DeleteExperience($id: String!) {
  DeleteExperience(id: $id)
}
    `;
export type DeleteExperienceMutationFn = Apollo.MutationFunction<DeleteExperienceMutation, DeleteExperienceMutationVariables>;

/**
 * __useDeleteExperienceMutation__
 *
 * To run a mutation, you first call `useDeleteExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExperienceMutation, { data, loading, error }] = useDeleteExperienceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExperienceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteExperienceMutation, DeleteExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteExperienceMutation, DeleteExperienceMutationVariables>(DeleteExperienceDocument, options);
      }
export type DeleteExperienceMutationHookResult = ReturnType<typeof useDeleteExperienceMutation>;
export type DeleteExperienceMutationResult = Apollo.MutationResult<DeleteExperienceMutation>;
export type DeleteExperienceMutationOptions = Apollo.BaseMutationOptions<DeleteExperienceMutation, DeleteExperienceMutationVariables>;
export const DeleteMultipleExperienceDocument = gql`
    mutation DeleteMultipleExperience($ids: [String!]) {
  DeleteExperience(ids: $ids)
}
    `;
export type DeleteMultipleExperienceMutationFn = Apollo.MutationFunction<DeleteMultipleExperienceMutation, DeleteMultipleExperienceMutationVariables>;

/**
 * __useDeleteMultipleExperienceMutation__
 *
 * To run a mutation, you first call `useDeleteMultipleExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMultipleExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMultipleExperienceMutation, { data, loading, error }] = useDeleteMultipleExperienceMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteMultipleExperienceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMultipleExperienceMutation, DeleteMultipleExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMultipleExperienceMutation, DeleteMultipleExperienceMutationVariables>(DeleteMultipleExperienceDocument, options);
      }
export type DeleteMultipleExperienceMutationHookResult = ReturnType<typeof useDeleteMultipleExperienceMutation>;
export type DeleteMultipleExperienceMutationResult = Apollo.MutationResult<DeleteMultipleExperienceMutation>;
export type DeleteMultipleExperienceMutationOptions = Apollo.BaseMutationOptions<DeleteMultipleExperienceMutation, DeleteMultipleExperienceMutationVariables>;
export const GetAllExperienceDocument = gql`
    query GetAllExperience {
  user {
    ... on QueryUserSuccess {
      __typename
      data {
        Experience {
          content
          createdAt
          id
          name
          updatedAt
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllExperienceQuery__
 *
 * To run a query within a React component, call `useGetAllExperienceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllExperienceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllExperienceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllExperienceQuery(baseOptions?: Apollo.QueryHookOptions<GetAllExperienceQuery, GetAllExperienceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllExperienceQuery, GetAllExperienceQueryVariables>(GetAllExperienceDocument, options);
      }
export function useGetAllExperienceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllExperienceQuery, GetAllExperienceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllExperienceQuery, GetAllExperienceQueryVariables>(GetAllExperienceDocument, options);
        }
export type GetAllExperienceQueryHookResult = ReturnType<typeof useGetAllExperienceQuery>;
export type GetAllExperienceLazyQueryHookResult = ReturnType<typeof useGetAllExperienceLazyQuery>;
export type GetAllExperienceQueryResult = Apollo.QueryResult<GetAllExperienceQuery, GetAllExperienceQueryVariables>;
export const UpdateExperienceDocument = gql`
    mutation UpdateExperience($id: String!, $name: String!, $content: String!) {
  UpdateExperience(id: $id, name: $name, content: $content)
}
    `;
export type UpdateExperienceMutationFn = Apollo.MutationFunction<UpdateExperienceMutation, UpdateExperienceMutationVariables>;

/**
 * __useUpdateExperienceMutation__
 *
 * To run a mutation, you first call `useUpdateExperienceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExperienceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExperienceMutation, { data, loading, error }] = useUpdateExperienceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateExperienceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExperienceMutation, UpdateExperienceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExperienceMutation, UpdateExperienceMutationVariables>(UpdateExperienceDocument, options);
      }
export type UpdateExperienceMutationHookResult = ReturnType<typeof useUpdateExperienceMutation>;
export type UpdateExperienceMutationResult = Apollo.MutationResult<UpdateExperienceMutation>;
export type UpdateExperienceMutationOptions = Apollo.BaseMutationOptions<UpdateExperienceMutation, UpdateExperienceMutationVariables>;
export const namedOperations = {
  Query: {
    GetCVExtractedText: 'GetCVExtractedText',
    GetCVs: 'GetCVs',
    GetCoverLetterTemplates: 'GetCoverLetterTemplates',
    GetCredits: 'GetCredits',
    GetUserCreditsSum: 'GetUserCreditsSum',
    CheckIfTokenExists: 'CheckIfTokenExists',
    GetGoogleAccessToken: 'GetGoogleAccessToken',
    GetGoogleAuthURL: 'GetGoogleAuthURL',
    GetFiles: 'GetFiles',
    GetJob: 'GetJob',
    GetXJobs: 'GetXJobs',
    GetStripeBuyLink: 'GetStripeBuyLink',
    AllUser: 'AllUser',
    GetUserStats: 'GetUserStats',
    GetUser: 'GetUser',
    GetAllExperience: 'GetAllExperience'
  },
  Mutation: {
    CreateCV: 'CreateCV',
    CreateGeneratedCv: 'CreateGeneratedCv',
    RefreshCV: 'RefreshCV',
    CreateCoverLetterTemplate: 'CreateCoverLetterTemplate',
    CreateGeneratedCoverLetter: 'CreateGeneratedCoverLetter',
    RemoveCoverLetterTemplate: 'RemoveCoverLetterTemplate',
    UpdateCoverLetterTemplate: 'UpdateCoverLetterTemplate',
    AddGoogleAuthToken: 'AddGoogleAuthToken',
    UpdateDriveFolderId: 'UpdateDriveFolderId',
    CreateJob: 'CreateJob',
    DeleteJobs: 'DeleteJobs',
    UpdateJob: 'UpdateJob',
    UpdateJobName: 'UpdateJobName',
    UpdateJobs: 'UpdateJobs',
    AnswerQuestion: 'AnswerQuestion',
    CreateExperience: 'CreateExperience',
    DeleteExperience: 'DeleteExperience',
    DeleteMultipleExperience: 'DeleteMultipleExperience',
    UpdateExperience: 'UpdateExperience'
  }
}