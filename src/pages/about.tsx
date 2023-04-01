import Head from "next/head";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "@/utils/apollo-client";
import {
    GET_HEADER_MENUS,
    GET_FOOTER_MENUS,
    ABOUT_PAGE_QUERY,
} from "@/queries";
import { ErrorMessage } from "@/components";

const About = () => {
    const { data, loading, error } = useQuery(ABOUT_PAGE_QUERY);

    if (error) return <ErrorMessage message={error.message} />;
    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Head>
                <title>{data.page.seoTitle}</title>
                <meta name="description" content={data.page.seoDescription} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                <section className="section">
                    <div className="text-center">
                        <h1 className="font-bold text-xl md:text-2xl leading-[108px]">
                            {data.page.pageTitle}
                        </h1>
                        <p className="font-normal text-lg leading-[21.6px] mt-4">
                            {data.page.subtitle}
                        </p>
                    </div>
                    <div className="flex flex-col items-center pt-10">
                        <Image
                            className="object-cover w-full h-[300px]"
                            src="/bang-about-us.jpg"
                            alt="Bang's team"
                            width={500}
                            height={300}
                        />
                        <p className="text-justify pt-6">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of by
                            Cicero, written in 45 BC. This book is a treatise on
                            the theory of ethics, very popular during the
                            Renaissance. The first line of Lorem Ipsum, comes
                            from a line in section 1.10.32. The standard chunk
                            of Lorem Ipsum used since the 1500s is reproduced
                            below for those interested. Sections 1.10.32 and
                            1.10.33 from by Cicero are also reproduced in their
                            exact original form, accompanied by English versions
                            from the 1914 translation by H. Rackham.
                        </p>
                    </div>
                    <div className="flex flex-row gap-10">
                        <div className="section_inner_container">
                            <h3 className="font-bold text-sm leading-[16.8px] text-lugar-blue">
                                Previous projects
                            </h3>
                            <p className="font-light text-xl leading-[57.6px]">
                                20+
                            </p>
                        </div>
                        <div className="section_inner_container">
                            <h3 className="font-bold text-sm leading-[16.8px] text-lugar-blue">
                                Years experience
                            </h3>
                            <p className="font-light text-xl leading-[57.6px]">
                                10y
                            </p>
                        </div>
                        <div className="section_inner_container">
                            <h3 className="font-bold text-sm leading-[16.8px] text-lugar-blue">
                                Ongoing projects
                            </h3>
                            <p className="font-light text-xl leading-[57.6px]">
                                3
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

// SSG - Static Site Generation.
// Initialise Apollo Client cache with property posts data.
export async function getStaticProps() {
    const apolloClient = initializeApollo();

    // Fetch menus data.
    await apolloClient.query({
        query: GET_HEADER_MENUS,
    });
    await apolloClient.query({
        query: GET_FOOTER_MENUS,
    });

    // Fetch About page data.
    await apolloClient.query({
        query: ABOUT_PAGE_QUERY,
    });

    return addApolloState(apolloClient, {
        props: {},
    });
}

export default About;
