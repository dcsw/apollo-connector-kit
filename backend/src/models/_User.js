import { encryptor } from '../utils/';
import { ERROR } from '../environment';
import { prisma } from '../../database/generated/prisma-client';

export default {
  validate: async (username, password) => {
    const users = await prisma.users({ where: { username: username }});
    const validUser = users.length ? users[0] : null;
    if (validUser) {
      const validPassword = await encryptor.verify({ digest: password }, validUser.password);
     if (!validPassword) {
        throw new Error(ERROR.USER.WRONG_PASSWORD);
      }
      return validUser;
    }
    throw new Error(ERROR.USER.WRONG_CREDENTIALS);
  },
  getPassword: async (id) => {
    const users = await prisma.users({ where: { id: id }});
    const validUser = users.length ? users[0] : null;
    if (validUser) {
      return validUser.password;
    }
    throw new Error(ERROR.USER.DOES_NOT_EXIST);
  },
  all: async () => users,
};
