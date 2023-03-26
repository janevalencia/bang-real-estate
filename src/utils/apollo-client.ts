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
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN_CDA;
const GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

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

/**
 * Initialize Apollo Client.
 * It merges the initial state (data passed in from getStaticProps() 
 * or getServerSideProps()) with the existing client-side Apollo cache, 
 * then sets that new, merged data set as the new cache for Apollo Client.
 */
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

/**
 * Takes the pageProps returned from getStaticProps/getServerSideProps for
 * the current page and adds them to Apollo Client's cache.
 * Next.js will then take care of passing the Apollo's cache data, along
 * with any other page-specific props into the page component 
 * (i.e. revalidate ISR).
 * 
 * @param client 
 * @param pageProps 
 * @returns pageProps with Apollo state.
 */
export function addApolloState(
    client: ApolloClientType,
    pageProps: any
) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    }

    return pageProps
}

/**
 * Calls initialiseApollo() to get an instance of Apollo Client with cache data.
 * Then, the Apollo Client is passed to the ApolloProvider.
 * From this, we can use Apollo Client for CLIENT-SIDE data fetching.
 * 
 * @param pageProps 
 * @returns apolloState
 */
export function useApollo(pageProps: any) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = useMemo(() => initializeApollo(state), [state]);
    return store;
}
