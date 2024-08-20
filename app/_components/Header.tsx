import React from "react";
import LogoLink from "./LogoLink";
import NavMenu from "./NavMenu";
import Image from "next/image";
import Hamburguer from "./icons/Hamburguer";
import LogoLinkExtended from "./LogoLinkExtended";

type HeaderProps = {
    backgroundImg: string;
    children: React.ReactNode;
};

const Header = ({ children, backgroundImg }: HeaderProps) => {
    return (
        <div className="before:content[''] before:h-full before:w-full before:absolute before:bg-header-bg before:z-10 relative h-97 w-full flex flex-col mb-8">
            <Image
                alt=""
                src={backgroundImg}
                quality={100}
                fill
                className="object-cover object-center"
            />
            <div className="hidden md:flex justify-around h-fit items-center z-10">
                <LogoLink href="/" />

                <NavMenu />
            </div>
            <div className="md:hidden flex justify-center z-10">
                <LogoLinkExtended href="/" />
                <button className="absolute right-5 top-5">
                    <Hamburguer />
                </button>
            </div>
            <h1 className="text-white z-10 font-licorice md:text-9xl text-6xl text-center flex items-center self-center h-97">
                {children}
            </h1>
        </div>
    );
};

export default Header;
