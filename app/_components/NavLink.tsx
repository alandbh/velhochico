"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

const NavLink = ({ children, href }: NavLinkProps) => {
    const pathName = usePathname();
    let path = pathName.split("/");
    path.shift();
    const currentPath = href.split("/")[1];

    return (
        <li>
            <Link
                className={`pb-1 px-1 text-white ${
                    path.includes(currentPath)
                        ? "border-b-4 border-white font-bold hover:border-b-4"
                        : ""
                } hover:border-b-2 border-white`}
                href={href}
            >
                {children}
            </Link>
        </li>
    );
};

export default NavLink;
