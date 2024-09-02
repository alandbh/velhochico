"use client";
import React, { RefObject, useRef, useState } from "react";
import LogoLink from "./LogoLink";
import NavMenu from "./NavMenu";
import Image from "next/image";
import Hamburguer from "./icons/Hamburguer";
import LogoLinkExtended from "./LogoLinkExtended";
import Close from "./icons/Close";
import NavMenuMobile from "./NavMenuMobile";

type HeaderProps = {
    backgroundImg: string;
    children: React.ReactNode;
};

const Header = ({ children, backgroundImg }: HeaderProps) => {
    const modalContainer = useRef<null | any>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    function handleHamburguerClick() {
        console.log("modalContainer", modalOpen);

        setModalOpen(modalOpen ? false : true);

        if (!modalOpen) {
            modalContainer.current.classList.add("fixed");
            modalContainer.current.classList.add("z-20");
            modalContainer.current.classList.remove(
                "scale-0",
                "h-[0px]",
                "absolute",
                "z-0"
            );
            modalContainer.current.classList.add(
                "h-[0%]",
                "w-full",
                "fixed",
                "z-20",
                "scale-100"
            );

            setTimeout(() => {
                modalContainer.current.classList.add("h-[100%]");
                modalContainer.current.style.opacity = 1;
            }, 100);
        } else {
            modalContainer.current.classList.remove("scale-100");
            modalContainer.current.classList.remove("h-[100%]");
            modalContainer.current.classList.add("h-[0%]");
            modalContainer.current.classList.add("scale-0");
            modalContainer.current.style.opacity = 0;

            setTimeout(() => {
                modalContainer.current.classList.remove(
                    "h-[0%]",
                    "w-full",
                    "fixed"
                );
                modalContainer.current.classList.remove("z-20");
                modalContainer.current.classList.add("z-0");
                modalContainer.current.classList.add("absolute");
                modalContainer.current.classList.add("h-[0px]");
                modalContainer.current.style;
            }, 310);
        }
    }
    return (
        <div>
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
                    <div>
                        {/* <LogoLinkExtended href="/" /> */}
                        <LogoLink href="/" />
                    </div>
                    <button
                        onClick={handleHamburguerClick}
                        className="absolute right-3 top-2 size-10"
                    >
                        <Hamburguer width={32} height={32} />
                    </button>
                </div>
                <h1 className="text-white z-10 font-licorice md:text-9xl text-6xl text-center flex items-center self-center h-97">
                    {children}
                </h1>
                <div
                    ref={modalContainer}
                    style={{
                        transition: "all .3s",
                        transformOrigin: "right top",
                        opacity: 0,
                    }}
                    className="bg-darker-blue overflow-clip h-[0px] absolute z-0 scale-0"
                >
                    <button
                        onClick={handleHamburguerClick}
                        className="absolute right-3 top-2 size-10"
                    >
                        <Close width={32} height={32} />
                    </button>
                    <div className="h-full">
                        <NavMenuMobile />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
