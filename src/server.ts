import "dotenv/config";
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import path from "node:path";
import { buildSchemaSync } from "type-graphql";
import { Mongo } from "./lib/mongo";
import {
  CaseResolver,
  CustomerResolver,
  DebtResolver,
  InstitutionResolver,
  WorkflowResolver,
} from "./resolvers";
import authenticationChecker from "./middlewares/authentication-checker";
import { GraphQLError, GraphQLSchema } from "graphql";
import Container from "typedi";
import { KeycloakService } from "./services/keycloak-service";

export class ServerApplication {
  server: ApolloServer<Context>;
  mongo: Mongo;
  constructor(
    private readonly keycloakService = Container.get(KeycloakService)
  ) {
    this.mongo = new Mongo();
    this.mongo.connect().then(() => {
      this.server = new ApolloServer<Context>({
        schema: this.generateSchema(),
      });

      startStandaloneServer(this.server, {
        context: async ({ req }) => {
          try {
            const user = await this.keycloakService.getUserInfo(
              req.headers.authorization ?? ""
            );

            return {
              token: req.headers.authorization,
              user,
            };
          } catch (error) {
            throw new GraphQLError("User is not authenticated", {
              extensions: {
                code: "UNAUTHENTICATED",
                http: { status: 401 },
              },
            });
          }
        },
      }).then(({ url }) => {
        console.log(`🚀  Server ready at: ${url}`);
      });
    });
  }

  generateSchema(): GraphQLSchema {
    return buildSchemaSync({
      resolvers: [
        InstitutionResolver,
        CustomerResolver,
        DebtResolver,
        CaseResolver,
        WorkflowResolver,
      ],
      emitSchemaFile: path.resolve(__dirname, "schema.gql"),
      authChecker: authenticationChecker,
      validate: true,
    });
  }
}

new ServerApplication();
