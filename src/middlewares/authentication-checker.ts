import { AuthChecker } from "type-graphql";

const authenticationChecker: AuthChecker<Context> = async ({ context }) =>
  !!context.user;

export default authenticationChecker;
