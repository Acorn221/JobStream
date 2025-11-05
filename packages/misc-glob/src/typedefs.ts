/**
 * Response Body Types for Auth
 */
export interface ResponseBody<TType extends 'success' | 'error', TData extends object> {
  readonly type: TType;
  readonly body: TData;
}

export namespace Auth {
  type Success = ResponseBody<'success', {
    readonly refresh: string;
    readonly access: string;
  }>

  type SuccessRefresh = ResponseBody<'success', {
    readonly access: string;
  }>

  type Error = ResponseBody<'error', {
    readonly error: string;
  }>

  export type Response = Success | Error;
  export type RefreshResponse = SuccessRefresh | Error;

  export interface LoginReqBody {
    email: string;
    password: string;
  }

  export interface RegisterReqBody {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }

  export interface RefreshReqBody {
    refresh: string;
  }
}

/**
 * JWT Types
 */

export interface AccessToken {
	sub: string;
  'cognito:groups': string[];
  iss: string;
  version: number;
  client_id: string;
  origin_jti: string;
  token_use: 'access';
  scope: string;
  exp: number;
  iat: number;
  jti: string;
  username: string;
}

export interface IDToken {
  at_hash: string;
  sub: string;
  'cognito:groups': string[];
  email_verified: boolean;
  iss: string;
  'cognito:username': string;
  'origin_jti': string;
  aud: string;
  identities: {
    userId: string;
    providerName: string;
    providerType: string;
    issuer: string;
    primary: string;
    dateCreated: string;
  }[];
  token_use: 'id';
  auth_time: number;
  name: string;
  exp: number;
  iat: number;
  email: string;
  jti: string;
}

/**
 * Graphql Types
 */

export type GoogleDocsFile = {
  id: string;
  name: string;
  lastModified?: Date;
  createdAt?: Date;
  ownedByMe?: boolean;
  webViewLink?: string;
  added?: boolean;
};

export type GoogleDocs = {
  files: GoogleDocsFile[];
  nextPageToken?: string;
};

export type CVExtractedTextType = {
  extracted: string[];
  id: string;
  googleDocId: string;
};

/**
 * Misc Types
 */
export type Status = 'Pending' | 'Applied' | 'Interviewing' | 'Offered' | 'Rejected';

export enum StatusEnum {
  Pending = 'Pending',
  Applied = 'Applied',
  Interviewing = 'Interviewing',
  Offered = 'Offered',
  Rejected = 'Rejected',
}
