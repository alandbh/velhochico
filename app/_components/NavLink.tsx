"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ children, href }: NavLinkProps) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        className={`pb-1 px-1 ${
          pathName === href ? "border-b-2 border-black font-bold" : ""
        }`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
