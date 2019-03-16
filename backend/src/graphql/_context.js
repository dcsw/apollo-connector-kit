
import { prisma } from '../../database/generated/prisma-client';

export const context = async ({ res, req }) => {
  // Attach additional properties to context if needed
  return { user: req.user, prisma, res, req };
};

