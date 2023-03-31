import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "@/utils/apollo-client";
import { GET_HEADER_MENUS, GET_FOOTER_MENUS, HOME_PAGE_QUERY } from "@/queries";
import { TProperty } from "@/types";
import { GridProperties, Filter, Button, ErrorMessage } from "@/components";

export default function Home() {
    // Fetch server side data for properties from Apollo Client.
    const { data, loading, error } = useQuery(HOME_PAGE_QUERY);
    const [properties, setProperties] = useState<TProperty[]>(
        data.propertyCollection.items
    );

    // Define state of active categories filter.
    const [activeFilter, setActiveFilter] = useState<string>("");

    // Memoized the filtered list of properties.
    const filteredList = useMemo(() => {
        if (activeFilter !== "") {
            return properties.filter(
                (property) =>
                    property.category.toLowerCase() ===
                    activeFilter.toLowerCase()
            );
        }

        return properties;
    }, [activeFilter, properties]);

    if (error) return <ErrorMessage message={error.message} />;
    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Head>
                <title>{data.page.seoTitle}</title>
                <meta
                    name="description"
                    content={data.page.seoDescription}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                {/* Hero */}
                <section className="w-screen min-h-[100vh] relative">
                    <div className="absolute top-0 bg-lugar-blue w-full h-full -z-10">
                        <Image
                            className="object-cover w-full h-full"
                            src="/bang-hero-image.png"
                            alt="Bang Hero Background"
                            width={872}
                            height={800}
                        />
                    </div>
                    <div className="px-[50px] pb-[50px] md:px-[100px] md:pb-[100px] max-w-[635px]">
                        <h1 className="font-bold text-xl md:text-2xl leading-[108px]">
                            A home is built with love and dreams
                        </h1>
                        <p className="font-normal text-lg leading-[21.6px] mt-4">
                            Real estate farm that makes your dreams true
                        </p>
                        <div className="flex flex-row gap-14 mt-4">
                            <Button text="Our projects" isDark={true} />
                            <Button text="Contact us" isDark={false} />
                        </div>
                    </div>
                </section>

                {/* Properties Section */}
                <section className="section">
                    {/* Header */}
                    <div>
                        <h2 className="section_title">Properties</h2>
                        <p className="section_description">
                            Properties developed with true love and care,
                            guaranteed with highest craftmanship.
                        </p>
                    </div>

                    {/* Filter */}
                    <div className="flex justify-end py-2">
                        <Filter
                            filters={[
                                "Apartment",
                                "House",
                                "Penthouse",
                                "Villa",
                            ]}
                            setFilter={setActiveFilter}
                        />
                    </div>

                    {/* {Properties Grid} */}
                    <GridProperties posts={filteredList} />
                </section>

                {/* Award Winning Section */}
                <section className="section">
                    <div className="flex flex-col-reverse items-start gap-4 lg:flex-row lg:justify-between lg:items-center">
                        <div className="min-w-[445px] h-full">
                            <Image
                                className="object-cover"
                                src="/bang-award-image.png"
                                alt="Award Wining Image"
                                width={445}
                                height={500}
                            />
                        </div>
                        <div className="lg:pl-10">
                            <h2 className="section_title">
                                Award winning real estate company based in South
                                Korea
                            </h2>
                            <p className="section_description">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. It has survived not
                                only five centuries, but also the leap into
                                electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem
                                Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </p>
                            <div className="flex flex-row gap-10">
                                <div className={styles.section_inner_container}>
                                    <h3 className="font-bold text-sm leading-[16.8px] text-lugar-blue">
                                        Previous projects
                                    </h3>
                                    <p className="font-light text-xl leading-[57.6px]">
                                        20+
                                    </p>
                                </div>
                                <div className={styles.section_inner_container}>
                                    <h3 className="font-bold text-sm leading-[16.8px] text-lugar-blue">
                                        Years experience
                                    </h3>
                                    <p className="font-light text-xl leading-[57.6px]">
                                        10y
                                    </p>
                                </div>
                                <div className={styles.section_inner_container}>
                                    <h3 className="font-bold text-sm leading-[16.8px] text-lugar-blue">
                                        Ongoing projects
                                    </h3>
                                    <p className="font-light text-xl leading-[57.6px]">
                                        3
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

// SSG - Static Site Generation.
// Initialise Apollo Client cache with property posts data.
export async function getStaticProps() {
    const apolloClient = initializeApollo();

    // Fetch data specific to homepage.
    await apolloClient.query({
        query: HOME_PAGE_QUERY,
    });

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
