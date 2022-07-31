import { GraphQLClient } from "graphql-request";

import { getSdk } from "./mirror";

if (!process.env.API_ENDPOINT) {
    throw new Error("API Endpoint is not defined");
}

if (!process.env.ADMIN_SECRET) {
    throw new Error("Admin Secret is not defined");
}

if (!process.env.PUBLIC_WEB_URL) {
    throw new Error("Public Web Url is not defined");
}

export const PublicWebUrl = process.env.PUBLIC_WEB_URL;

const gqlClient = new GraphQLClient(process.env.API_ENDPOINT, {
    headers: {
        Authorization: process.env.ADMIN_SECRET,
    },
});

export const gqlSdk = getSdk(gqlClient);
