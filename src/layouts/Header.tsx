import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { useQuery } from "@apollo/client";
import { ALL_MENUS_QUERY } from "@/queries";
import { TSiteNav } from "@/types";

const Header = () => {

    // Fetch menu data for Header from Apollo Client cache.
    const { data } = useQuery(ALL_MENUS_QUERY);
    
    // Filter fetched result and define header menus.
    const headerMenus : TSiteNav[] = useMemo(() => {
        const menus : TSiteNav[] = data.headerNavbarCollection.items;
        // Filter data to get only header menus.
        return menus.filter((menu) => menu.position.includes("Header"));
    }, [data])

    // Mobile navigation state.
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const toggleNav = () => {
        setShowMobileNav((prev) => !prev);
    };

    return (
        <header className="py-14 px-[50px] md:px-[100px] bg-lugar-blue w-screen">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl text-lugar-dark">방</h1>
                {/* Desktop navs */}
                <nav className="hidden md:block">
                    <ul className="flex flex-row gap-16">
                        {headerMenus.map((nav) => (
                            <li
                                key={nav.id}
                                className=" text-lugar-dark font-normal text-sm"
                            >
                                <Link href={`#`}>{nav.displayName.toUpperCase()}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile toggle */}
                <button className="md:hidden" hidden={showMobileNav} onClick={toggleNav}>
                    <CiMenuBurger size={20} />
                </button>
                <button
                    className="md:hidden"
                    hidden={!showMobileNav}
                    onClick={toggleNav}
                >
                    <GrClose size={20} />
                </button>
            </div>
            {/* Mobile navs */}
            {showMobileNav && (
                <div className="w-full">
                    <nav className="py-4">
                        <ul className="flex flex-col gap-2">
                            {headerMenus.map((nav) => (
                                <li
                                    key={nav.id}
                                    className=" text-lugar-dark font-normal text-sm"
                                >
                                    <Link href={`#`}>
                                        {nav.displayName.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;