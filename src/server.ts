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

  startStandaloneServer(server).then(({ url }) => {
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
