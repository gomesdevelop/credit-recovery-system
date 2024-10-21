import axios from "axios";
import { Service } from "typedi";

@Service()
export class KeycloakService {
  async getToken() {
    return Promise.resolve("token");
  }

  async getUserInfo(token: string): Promise<User | null> {
    const response = await axios.get<User>(
      `${process.env.KEYCLOAK_HOST}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/userinfo`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.status !== 200) {
      return null;
    }

    return response.data;
  }
}
