/* eslint-disable no-param-reassign */
import * as Axios from 'axios';

import {
  verify,
} from 'jsonwebtoken';

import {
  VITE_AUTH_USER_POOL_ID,
  VITE_AUTH_REGION,
  VITE_AUTH_CLIENT_ID,
  VITE_AUTH_DOMAIN,
} from 'backend-env';

import jwkToPem, { JWK } from 'jwk-to-pem';
import {
  APIGatewayAuthorizerResult,
  APIGatewayRequestAuthorizerEvent,
  PolicyDocument,
} from 'aws-lambda';

export interface ClaimVerifyRequest {
  readonly token?: string;
}

export interface ClaimVerifyResult {
  readonly userName: string;
  readonly clientId: string;
  readonly isValid: boolean;
  readonly error?: any;
}

interface TokenHeader {
  kid: string;
  alg: string;
}
interface PublicKey {
  alg: string;
  e: string;
  kid: string;
  kty: string;
  n: string;
  use: string;
}
interface PublicKeyMeta {
  instance: PublicKey;
  pem: string;
}

interface PublicKeys {
  keys: PublicKey[];
}

interface MapOfKidToPublicKey {
  [key: string]: PublicKeyMeta;
}

interface Claim {
  token_use: string;
  auth_time: number;
  iss: string;
  exp: number;
  username: string;
  client_id: string;
	sub: string;
}

const cognitoIssuer = `https://cognito-idp.${VITE_AUTH_REGION}.amazonaws.com/${VITE_AUTH_USER_POOL_ID}`;

let cacheKeys: MapOfKidToPublicKey | undefined;
const getPublicKeys = async (): Promise<MapOfKidToPublicKey> => {
  if (!cacheKeys) {
    const url = `${cognitoIssuer}/.well-known/jwks.json`;
    const publicKeys = await Axios.default.get<PublicKeys>(url);
    cacheKeys = publicKeys.data.keys.reduce((agg, current) => {
      const pem = jwkToPem(current as JWK);
      agg[current.kid] = { instance: current, pem };
      return agg;
    }, {} as MapOfKidToPublicKey);
    return cacheKeys;
  }
  return cacheKeys;
};

export const checkToken = async (token: string | undefined) => {
  if (!token) {
    throw new Error('requested token is not a string');
  }
  const tokenSections = token.split('.');
  if (tokenSections.length < 2) {
    throw new Error(`requested token is invalid: ${token}`);
  }
  try {
    const headerJSON = Buffer.from(tokenSections[0], 'base64').toString('utf8');
    const header = JSON.parse(headerJSON) as TokenHeader;
    const keys = await getPublicKeys();
    const key = keys[header.kid];
    if (key === undefined) {
      throw new Error('claim made for unknown kid');
    }
    const claim = await new Promise((resolve, reject) => {
      verify(token, key.pem, (err, decoded) => {
        if (err) {
          reject(err);
        }
        resolve(decoded as Claim);
      });
    }) as Claim;
    const currentSeconds = Math.floor((new Date()).valueOf() / 1000);
    if (currentSeconds > claim.exp || currentSeconds < claim.auth_time) {
      throw new Error('claim is expired or invalid');
    }
    if (claim.iss !== cognitoIssuer) {
      throw new Error('claim issuer is invalid');
    }
    if (claim.token_use !== 'access') {
      throw new Error('claim use is not access');
    }
    console.log(`claim confirmed for ${claim.username}`);
    return claim;
  } catch (error) {
    console.log(error);
    return false;
  }
};
