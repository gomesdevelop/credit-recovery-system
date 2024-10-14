import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import path from "node:path";
import { buildSchema } from "type-graphql";
import { InstitutionResolver } from "./resolvers/institution";
import { CustomerResolver } from "./resolvers/customer";
import { CaseResolver } from "./resolvers/case";
import { WorkflowResolver } from "./resolvers/workflow";

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

  const { url } = await server.listen({ port: 4000 });

  console.log(`🚀  Server ready at: ${url}`);
}

bootstrap();
