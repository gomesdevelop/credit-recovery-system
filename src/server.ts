import "dotenv/config";
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import path from "node:path";
import { buildSchemaSync } from "type-graphql";
import { connect } from "./lib/mongo";
import {
  CaseResolver,
  CustomerResolver,
  DebtResolver,
  InstitutionResolver,
  WorkflowResolver,
} from "./resolvers";
import authenticationChecker from "./middlewares/authentication-checker";
import { Context } from "./types";

async function bootstrap() {
  const schema = buildSchemaSync({
    resolvers: [
      InstitutionResolver,
      CustomerResolver,
      DebtResolver,
      CaseResolver,
      WorkflowResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    authChecker: authenticationChecker,
  });

  const server = new ApolloServer<Context>({
    schema,
  });

  startStandaloneServer(server, {
    context: async ({ req }) => ({
      token: req.headers.authorization,
    }),
  }).then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
  });
}

console.log("Initializing MongoDB...");
connect()
  .then(() => {
    console.log("MongoDB Initialized.");
    bootstrap();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
