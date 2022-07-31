// Entry Point for React (@waifu-bot/client)
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export function createApolloClient(url: string) {
    const httpLink = createHttpLink({
        uri: url,
    });

    const authLink = setContext((_, { headers }) => {
        const token = localStorage.getItem("token");

        return {
            headers: {
                ...headers,
                authorization: token ?? "",
            },
        };
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
}

export * from "./generated/types";

export * from "./generated/react/bot.generated";
export * from "./generated/react/general.generated";
export * from "./generated/react/user.generated";
