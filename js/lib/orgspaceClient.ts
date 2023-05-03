import { getSdk } from "./types";
import {
  TypedDocumentNode,
  VariablesOf,
} from "@graphql-typed-document-node/core";
import { request } from "graphql-request";
import { Sdk } from "./types";

interface AuthResponse {
  expires: string;
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}

export interface OrgspaceClientConfig {
  clientId: string;
  secret: string;
}

export type OrgspaceClient = Sdk;

let accessToken: string;
let client: OrgspaceClient;

const ORGSPACE_API_URL = "https://app.orgspace.io";

export const orgspaceClient = async (
  clientConfig?: OrgspaceClientConfig
): Promise<OrgspaceClient> => {
  if (clientConfig == null) {
    const { ORGSPACE_CLIENT_ID, ORGSPACE_SECRET } = process.env;

    if (ORGSPACE_CLIENT_ID == null || ORGSPACE_SECRET == null) {
      throw new Error(
        "Configuration not found; please provide an ORGSPACE_CLIENT_ID and ORGSPACE_SECRET to access the API."
      );
    }

    clientConfig = {
      clientId: ORGSPACE_CLIENT_ID,
      secret: ORGSPACE_SECRET,
    };
  }

  if (accessToken == null) {
    const auth = await fetch(`${ORGSPACE_API_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientConfig),
    });

    const response = (await auth.json()) as AuthResponse;
    accessToken = response.accessToken;

    console.log(accessToken);
  }

  if (client == null) {
    client = getSdk(
      <Query, V = VariablesOf<Query>>(
        doc: TypedDocumentNode<Query>,
        vars?: V
      ): Promise<Query> =>
        request(
          `${ORGSPACE_API_URL}/api/gql`,
          doc,
          vars as Record<string, any>,
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          }
        )
    );
  }

  return client;
};
