import Link from "next/link";
import { useMemo } from "react";
import { BiMap } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { GET_FOOTER_MENUS } from "@/queries";
import { TSiteNav } from "@/types";

// Default Footer props.
const defaultFooterProps = {
    author: "Jane Valencia",
    year: new Date().getFullYear(),
};

// Footer props.
type FooterProps = {
    author: string;
    year: number;
} & typeof defaultFooterProps;

const Footer = ({ author, year }: FooterProps) => {
    // Fetch menu data for Header from Apollo Client cache.
    const { data } = useQuery(GET_FOOTER_MENUS);

    // Filter fetched result and define header menus.
    const footerMenus: TSiteNav[] = useMemo(() => {
        const menus: TSiteNav[] = data?.headerNavbarCollection.items;
        return menus;
    }, [data]);

    return (
        <footer className="w-full bg-lugar-dark py-14 px-[50px] md:px-[100px]">
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <h3 className="text-lg text-lugar-white">방 | South Korea Real Estate Champion</h3>
                    <div className="py-4">
                        <div className="text-lugar-gray flex flex-row justify-start items-center gap-2">
                            <BiMap size={15} />
                            <p className="font-normal text-sm text-lugar-white">
                                83-21 Wangsimni-ro, Seongdong-gu, Seoul, South
                                Korea
                            </p>
                        </div>
                        <div className="text-lugar-gray flex flex-row justify-start items-center gap-2">
                            <IoIosCall size={15} />
                            <p className="font-normal text-sm text-lugar-white">
                                +82 2-6240-9800
                            </p>
                        </div>
                        <div className="text-lugar-gray flex flex-row justify-start items-center gap-2">
                            <AiOutlineMail size={15} />
                            <p className="font-normal text-sm underline text-lugar-white">
                                contact@bang.co.kr
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-14">
                    <div>
                        <h3 className="font-bold text-lg text-lugar-white">
                            QUICK LINKS
                        </h3>
                        <ul className="flex flex-col gap-2 mt-3">
                            {footerMenus
                                .filter(
                                    (menu) => menu.category === "Quick Links"
                                )
                                .map((nav) => (
                                    <li
                                        key={nav.id}
                                        className=" text-lugar-gray font-normal text-sm"
                                    >
                                        <Link href={`#`}>
                                            {nav.displayName}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-lugar-white">
                            LEGAL LINKS
                        </h3>
                        <ul className="flex flex-col gap-2 mt-3">
                            {footerMenus
                                .filter(
                                    (menu) => menu.category === "Legal Links"
                                )
                                .map((nav) => (
                                    <li
                                        key={nav.id}
                                        className=" text-lugar-gray font-normal text-sm"
                                    >
                                        <Link href={`#`}>
                                            {nav.displayName}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-lugar-white">
                            SOCIAL MEDIA
                        </h3>
                        <ul className="flex flex-col gap-2 mt-3">
                            <li>TBA</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="font-normal text-[12px] text-lugar-white mt-8">
                Copyright &copy; {year} {author}.
            </p>
        </footer>
    );
};
Footer.defaultProps = defaultFooterProps;

export default Footer;
