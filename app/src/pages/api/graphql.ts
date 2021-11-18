import { ApolloServer } from "apollo-server-micro";
import { loadTypedefsSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { NextApiRequest, NextApiResponse } from "next";
import { DocumentNode } from "graphql";

const schemas = loadTypedefsSync(`./src/pages/api/business/schema.graphql`, {
  loaders: [new GraphQLFileLoader()],
});

const typeDefs = schemas.map((schema) => schema.document) as DocumentNode[];

const resolvers = {
  Query: {
    getBusinessByUserId(parent, args, context) {
      return { id: "Nextjs" };
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "https://studio.apollographql.com");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.method === "OPTIONS") {
    res.end();

    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);

  return null;
}

export const config = {
  api: {
    bodyParser: false,
  },
};
