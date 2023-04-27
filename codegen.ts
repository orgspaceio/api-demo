import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://app.orgspace.io/api/gql",
  generates: {
    "lib/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-generic-sdk",
      ],
      documents: "lib/**/*.graphql",
    },
    "lib/schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
  ignoreNoDocuments: true,
  config: {},
};

export default config;
