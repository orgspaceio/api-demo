import { orgspaceClient } from "./orgspaceClient";
import { AllMembersQuery } from "./types";

export const allMembers = async (): Promise<AllMembersQuery> => {
  const client = await orgspaceClient();
  const response = await client.AllMembers({});

  return response;
};

console.log(await allMembers());
