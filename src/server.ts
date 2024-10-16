import "dotenv/config";
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import path from "node:path";
import { buildSchema } from "type-graphql";
import { connect } from "./lib/mongo";
import {
  CaseResolver,
  CustomerResolver,
  DebtResolver,
  InstitutionResolver,
  WorkflowResolver,
} from "./resolvers";
import { GraphQLError } from "graphql";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      InstitutionResolver,
      CustomerResolver,
      DebtResolver,
      CaseResolver,
      WorkflowResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({ schema });

  const getUser = (token: string) => {
    // get user from token
    return token;
  };

  startStandaloneServer(server, {
    // highlight-start
    context: async ({ req }) => {
      // get the user token from the headers
      const token = req.headers.authorization || "";

      // try to retrieve a user with the token
      const user = getUser(token);

      // optionally block the user
      // we could also check user roles/permissions here
      if (!user)
        // throwing a `GraphQLError` here allows us to specify an HTTP status code,
        // standard `Error`s will have a 500 status code by default
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });

      // add the user to the context
      return { user };
    },
    // highlight-end
  }).then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
  });
}

connect()
  .then(() => {
    bootstrap();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
