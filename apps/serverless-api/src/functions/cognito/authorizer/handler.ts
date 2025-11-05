import {
  APIGatewayAuthorizerResult,
  APIGatewayRequestAuthorizerEvent,
  PolicyDocument,
} from 'aws-lambda';
import { checkToken } from 'serverless-helpers';

export interface ClaimVerifyRequest {
  readonly token?: string;
}

const cookieStartStr = 'Authorization=Bearer ';

export const main = async (
  request: APIGatewayRequestAuthorizerEvent,
): Promise<APIGatewayAuthorizerResult> => {
  let result: APIGatewayAuthorizerResult;
  try {
    console.log(`user claim verify invoked for ${JSON.stringify(request)}`);

    if (!request!.headers!.Cookie) throw new Error('No Cookie header :(');

    const rawCookieHeader = request!.headers!.Cookie;

    const token = rawCookieHeader.slice(rawCookieHeader.indexOf(cookieStartStr) + cookieStartStr.length, rawCookieHeader.lastIndexOf(';'));

    const claim = await checkToken(token);

    if (!claim) throw new Error('Invalid token');

    const policyDocument: PolicyDocument = {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: request.methodArn,
        },
      ],
    };

    result = {
      principalId: claim.sub,
      policyDocument,
    };
  } catch (error) {
    console.error(`Error verifying JWT: ${error}`);
    const policyDocument: PolicyDocument = {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Deny',
          Resource: request.methodArn,
        },
      ],
    };
    result = {
      principalId: '',
      policyDocument,
    };
  }
  return result;
};
