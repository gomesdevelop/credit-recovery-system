import { verify } from "jsonwebtoken";
import { Context } from "src/types";
import { AuthChecker } from "type-graphql";

const authenticationChecker: AuthChecker<Context> = async ({ context }) => {
  const token = context.token;

  if (!token) {
    return false;
  }

  try {
    const decoded = verify(
      token,
      process.env.JWT_SECRET || "5eb63bbbe01eeed093cb22bb8f5acdc3"
    );

    return !!decoded;
  } catch {
    return false;
  }
};

export default authenticationChecker;
