"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoLink from "../LogoLink";
import NavMenu from "../NavMenu";
import Button from "../Button";
import IconWhatsapp from "../icons/Whatsapp";
import Link from "next/link";
import Arrow from "../icons/Arrow";

// import { Container } from './styles';
import styles from "./Hero.module.css";

const images = [
    {
        scr: "/header-img.jpg",
    },
    {
        scr: "/balanco.jpg",
    },
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState<number>(1);

    setTimeout(() => {
        if (currentImage === images.length) {
            setCurrentImage(1);

            return;
        }

        setCurrentImage(currentImage + 1);
    }, 15 * 1000);

    return (
        <header className="flex flex-col h-[80vh] before:content[''] before:h-full before:w-full before:absolute before:bg-header-bg before:z-10 relative w-full overflow-clip">
            <Image
                alt=""
                src={images[0].scr}
                quality={100}
                fill
                className={`object-cover object-center ${styles.images} ${styles.delay1}`}
                data-slide="1"
            />
            <Image
                alt=""
                src={images[1].scr}
                quality={100}
                fill
                className={`object-cover object-center ${styles.images}`}
                data-slide="1"
            />
            <div className="w-full max-w-screen-xl mx-auto z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between h-fit items-center z-10">
                    <div className="">
                        <LogoLink href="/"></LogoLink>
                    </div>
                    <div className="col-start-7 flex align-baseline">
                        <NavMenu />
                    </div>
                </div>
                <div className="text-white z-10 w-full">
                    <p className="text-[2rem]">Conheça os encantos da</p>
                    <h1 className="text-white z-10 font-licorice text-9xl text-center flex items-center self-center">
                        Serra da Canastra {currentImage}
                    </h1>
                    <p className="z-10 w-[30rem]">
                        Na <b>Pousada Velho Chico</b>, você encontra natureza,
                        comida boa, queijos deliciosos e muito mais!
                    </p>
                </div>
                <div className="z-20 flex justify-center items-center flex-col gap-10 mb-10">
                    <Button
                        text="reserve já"
                        icon={<IconWhatsapp color="white" />}
                        style="primary"
                        href="https://wa.me/553799290110"
                    />
                    <Link className="rotate-90" href="#content">
                        <Arrow color="white" height="40" width="40" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Hero;
