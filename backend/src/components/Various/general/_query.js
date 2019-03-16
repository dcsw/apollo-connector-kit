import { isUser } from '../../../directives';
import { SCOPES } from '../../../config';

// right after cloning the repo
// isAdmin ---> only user ric0 is allowed
// canReadProfile ---> both users ric0 and kris are allowed


export const queryTypes = `
  type Query {
    test: String
    connection: String!
    _checkAuth: String @${isUser},
    _checkAdmin: Boolean @${isUser}
  }
`;

// NOTE:
// Keep in mind  that "_checkAuth: String!  @${isAdmin}" if not allowed would also throw
// TypeError: Cannot convert undefined or null to object
// when using non nullable objects

export const queryResolvers = {
  Query: {
    test: () => 'Server is up and running... working smoothly',
    connection: () => 'Connected',
    _checkAuth: (_, args, context) => `Authorized CurrentUserId: ${context.user.id}!`,
    _checkAdmin: (_, args, context) => context.user.roles.indexOf(SCOPES.ROLES.ADMIN) >= 0,
  },
};
