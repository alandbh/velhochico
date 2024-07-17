"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavMenu = ({ link }: { link: string[] }) => {
  const pathname = usePathname();
  return (
    <div>
      <nav>
        <ul className="flex gap-8 text-base">
          <li>
            <Link
              className={
                pathname === link[0]
                  ? "pb-1 px-1 border-b-2 border-black font-bold"
                  : ""
              }
              href={link[0]}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              className={
                pathname === link[1]
                  ? "pb-1 px-1 border-b-2 border-black font-bold"
                  : ""
              }
              href={link[1]}
            >
              Acomodações
            </Link>
          </li>
          <li>
            <Link className="focus:font-bold" href={link[2]}>
              Culinária
            </Link>
          </li>
          <li>
            <Link className="focus:font-bold" href={link[3]}>
              Atrativos
            </Link>
          </li>
          <li>
            <Link className="focus:font-bold" href={link[4]}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
