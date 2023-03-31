import Head from "next/head";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { initializeApollo, addApolloState } from "@/utils/apollo-client";
import {
    GET_HEADER_MENUS,
    GET_FOOTER_MENUS,
    CONTACT_PAGE_QUERY,
} from "@/queries";
import { ErrorMessage } from "@/components";

interface FormPost {
    fullName?: string;
    email?: string;
    queryType?: string;
    message?: string;
}

const Contact = () => {
    const { data, loading, error } = useQuery(CONTACT_PAGE_QUERY);

    const [state, setState] = useState<FormPost>();
    const [submitted, setSubmitted] = useState(false);

    const encode = (data: any) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...state }),
        })
            .then(() => console.log("Success!"))
            .catch((error) => console.log(error));

        event.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
        setState({
            ...state,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

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
                    {!submitted && (
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={onSubmit}
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 pt-6 w-full">
                                <div>
                                    <div className="flex flex-col text-lugar-dark mb-4">
                                        <label className="text-lugar-dark text-sm lg:text-base">
                                            Full name:
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            className="border border-lugar-gray rounded-md p-2 mt-2 text-sm lg:text-base"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col text-lugar-dark mb-4">
                                        <label className="text-lugar-dark text-sm lg:text-base">
                                            Email:
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email address"
                                            className="border border-lugar-gray rounded-md p-2 mt-2 text-sm lg:text-base"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col text-lugar-dark mb-4">
                                        <label className="text-lugar-dark text-sm lg:text-base">
                                            Query type:
                                        </label>
                                        <select
                                            id="queryType"
                                            name="queryType"
                                            className="border border-lugar-gray rounded-md p-2 mt-2 text-sm lg:text-base"
                                            onChange={handleSelect}
                                            required
                                        >
                                            <option value="General">
                                                General inquiries
                                            </option>
                                            <option value="Sell">
                                                I want to sell
                                            </option>
                                            <option value="Buy">
                                                I want to buy
                                            </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <div className="flex flex-col text-lugar-dark">
                                        <label className="text-lugar-dark text-sm lg:text-base">
                                            Your message:
                                        </label>
                                        <textarea
                                            name="message"
                                            placeholder="Tell us how we can help you"
                                            className="border border-lugar-gray rounded-md p-2 mt-2 text-sm lg:text-base"
                                            rows={15}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end pt-6">
                                <button
                                    className="bg-lugar-dark text-lugar-white py-4 px-6"
                                    type="submit"
                                >
                                    Send your inquiry
                                </button>
                            </div>
                        </form>
                    )}
                    {submitted && (
                        <div className="text-center py-4">
                            <h5 className="font-bold text-lg">
                                Thank you for your message!
                            </h5>
                            <p>
                                We&apos;ll get in touch with you in 1x24 hour.
                            </p>
                        </div>
                    )}
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
        query: CONTACT_PAGE_QUERY,
    });

    return addApolloState(apolloClient, {
        props: {},
    });
}

export default Contact;
