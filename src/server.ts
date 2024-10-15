import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import path from "node:path";
import { buildSchema } from "type-graphql";
import { InstitutionResolver } from "./resolvers/institution";
import { CustomerResolver } from "./resolvers/customer";
import { CaseResolver } from "./resolvers/case";
import { WorkflowResolver } from "./resolvers/workflow";
import { connect } from "./lib/mongo";

import "dotenv/config";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      InstitutionResolver,
      CustomerResolver,
      CaseResolver,
      WorkflowResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen({ port: process.env.PORT || 4000 });

  console.log(`🚀  Server ready at: ${url}`);
}

connect()
  .then(() => {
    bootstrap();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
