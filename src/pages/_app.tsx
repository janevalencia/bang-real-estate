import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import { Montserrat } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/utils/apollo-client";

// Setup default @next/font to Montserrat.
// https://nextjs.org/docs/basic-features/font-optimization
const montserrat = Montserrat({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    // Initialise apollo client so we can use it in our components.
    const apolloClient = useApollo(pageProps);

    return (
        <>
            <style jsx global>{`
                :root {
                    --font-primary: ${montserrat.style.fontFamily};
                }
            `}</style>
            <ApolloProvider client={apolloClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </>
    );
}
