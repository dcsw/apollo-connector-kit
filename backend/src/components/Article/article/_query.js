export const queryTypes = `
  type Query {
    articles: [Article]
  }
`;

export const queryResolvers = {
  Query: {
    articles: (_, args, context, info) => {
      return context.prisma.articles({}, info);
    },
  },
};
