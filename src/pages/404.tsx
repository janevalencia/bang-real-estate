import { initializeApollo, addApolloState } from "@/utils/apollo-client";
import {
    GET_HEADER_MENUS,
    GET_FOOTER_MENUS,
} from "@/queries";

export default function Custom404() {
    return (
        <main className="justify-center items-center">
            <h1 className="text-xl text-lugar-dark">404 - Page Not Found</h1>
        </main>
    );
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    // Fetch menus data.
    await apolloClient.query({
        query: GET_HEADER_MENUS,
    });

    await apolloClient.query({
        query: GET_FOOTER_MENUS,
    });

    return addApolloState(apolloClient, {
        props: {},
    });
}
