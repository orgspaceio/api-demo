import {getSdk} from "./types";
import { TypedDocumentNode, VariablesOf } from "@graphql-typed-document-node/core"
import { request } from 'graphql-request'

const clientId = ""
const secret = ""

interface AuthResponse {
  expires: string
  expiresIn: number
  accessToken: string
  refreshToken: string
}

export const queryMembers = async () => {
  const auth = await fetch("https://api.orgspace.io/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ clientId, secret })
  })

  const { accessToken } = await auth.json() as AuthResponse

  const sdk = getSdk(<Query, V = VariablesOf<Query>>(doc: TypedDocumentNode<Query>, vars?: V): Promise<Query> =>
    request("https://api.orgspace.io/api/auth", doc, vars, {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    })
  )

  const response = await sdk.AllMembers({})

  console.log(JSON.stringify(response, null, 2))
}

await queryMembers()