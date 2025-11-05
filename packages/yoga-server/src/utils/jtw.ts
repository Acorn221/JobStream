import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';

/**
 * Handles the request, to create the user context in the yoga server.
 */
export const handleRequest = (request: Request) => {
  const token = request.headers.get('Authorization');

  if (!token) throw new GraphQLError('No token provided');

  const splitToken = token.split(' ')[1];

  try {
    const tokenContents = jwt.decode(splitToken, { json: true });

    if (!tokenContents?.sub) throw new GraphQLError('Token does not contain userId');

    if (!tokenContents?.exp) throw new GraphQLError('Token does not contain expiry date');

    // check for the expiry date of the token
    if (tokenContents?.exp < (new Date().getTime() / 1000)) {
      throw new GraphQLError('Token has expired');
    }

    return {
      currentUser: {
        userId: tokenContents.sub,
      },
    };
  } catch (e) {
    throw new GraphQLError(`Error when decoding access token ${e}`);
  }
};
