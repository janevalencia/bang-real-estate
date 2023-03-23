import { useMemo } from "react";
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    from,
    NormalizedCacheObject,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";

// Environment variables to Contentful space.
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const TOKEN =
    process.env.NODE_ENV !== "production"
        ? process.env.CONTENTFUL_DEV_ACCESS_TOKEN_PUBLISHED
        : process.env.CONTENTFUL_PROD_ACCESS_TOKEN_PUBLISHED;
const ENVIRONMENT =
    process.env.NODE_ENV !== "production" ? "development" : "master";
const GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

type ApolloClientType = ApolloClient<NormalizedCacheObject>;

let apolloClient: ApolloClientType | null = null;

// Logging errors from calling to GraphQL url.
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Read More: https://www.apollographql.com/docs/react/api/link/apollo-link-http/#headers
// HttpLink adding authentication and authorisation bearer token on GraphQL Api.
const httpLink = new HttpLink({
    uri: GRAPHQL_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
});

// Create new instance of Apollo Client.
function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined", // If we are on the server, this will return true.
        link: from([errorLink, httpLink]), // from() is used to combine multiple links to be passed to Apollo.
        cache: new InMemoryCache(),
    });
}

// Initialize Apollo Client.
export function initializeApollo(initialState: any = null) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here.
    if (initialState) {
        // Get existing cache, loaded during client side data fetching.
        const existingCache = _apolloClient.extract();

        // Merge the initialState from getStaticProps/getServerSideProps in the existing cache.
        const data = merge(existingCache, initialState, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter((d) =>
                    sourceArray.every((s) => !isEqual(d, s))
                ),
            ],
        });

        // Restore the cache with the merged data.
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client.
    if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client.
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

// Add Apollo State to pageProps, so we can use it in getStaticProps (SSG) / getServerSideProps (SSR).
export function addApolloState(
    client: ApolloClientType,
    pageProps: { props: any }
) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    return pageProps;
}

// Return Apollo store from pageProps so we can use it inside our components.
export function useApollo(pageProps: any) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = useMemo(() => initializeApollo(state), [state]);
    return store;
}
