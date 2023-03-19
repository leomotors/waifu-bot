/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const fs = require("node:fs").promises;

const target = process.argv[2];

async function main() {
  const content = await fs.readFile(target, "utf-8");

  await fs.writeFile(
    target,
    content.replace(
      "graphql-request/dist/types.dom",
      "graphql-request/src/types.dom"
    )
  );
}

main();
