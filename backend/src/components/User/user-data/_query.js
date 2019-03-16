import { canReadProfile } from '../../../directives';
import { prisma } from '../../../../database/generated/prisma-client';

export const queryTypes = `
  type Query {
    _currentUser: User @${canReadProfile}
  }`;

export const queryResolvers = {
  Query: {
    _currentUser: async (_, args, context) => {
      const users = await prisma.users({ where: { id: context.user.id }});
      const user = users.length ? users[0] : null;
      return user;
    },
  },
};
