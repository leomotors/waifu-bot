import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../../apps/server/src/@generated/schema.graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "src/generated/types.ts": {
      plugins: ["typescript"],
    },
    "src/generated/bot/sdk.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        useTypeImports: true,
      },
      hooks: {
        afterOneFileWrite: ["node tools/rewriteImport.js"],
      },
    },
    "src/generated/react": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "../types.ts",
        folder: "generated/react",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        useTypeImports: true,
      },
    },
  },
};

export default config;
