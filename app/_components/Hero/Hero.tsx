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
        if (currentImage === images.length - 1) {
            setCurrentImage(0);

            return;
        }
        setCurrentImage(currentImage + 1);
    }, 15 * 1000);

    const fade = {
        out: {
            opacity: 0,
        },
        in: {
            opacity: 1,
        },
    };

    return (
        <header className="flex flex-col h-[80vh] before:content[''] before:h-full before:w-full before:absolute before:bg-header-bg before:z-10 relative w-full overflow-clip">
            <div className={styles.currentImage1}>
                <Image
                    alt=""
                    src={images[1].scr}
                    quality={100}
                    fill
                    className={`object-cover object-center ${styles.images} `}
                    data-slide="0"
                />
                <Image
                    alt=""
                    src={images[0].scr}
                    quality={100}
                    fill
                    style={currentImage === 1 ? fade.out : fade.in}
                    className={`object-cover  object-center ${styles.images} `}
                    data-slide="0"
                />
                <Image
                    alt=""
                    src={images[1].scr}
                    quality={100}
                    fill
                    style={currentImage === 1 ? fade.in : fade.out}
                    className={`object-cover object-center ${styles.images} `}
                    data-slide="0"
                />
            </div>
            <div className="w-full max-w-screen-xl mx-auto z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between h-fit items-center z-10">
                    <div className="">
                        <LogoLink href="/"></LogoLink>
                    </div>
                    <div className="col-start-7 flex align-baseline">
                        <NavMenu />
                    </div>
                </div>
                <div className="relative flex flex-1 items-center">
                    <div
                        className={`text-white absolute z-10 w-full ${
                            currentImage === 1
                                ? styles.letteringIn
                                : styles.letteringOut
                        }`}
                    >
                        <div className="flex flex-col gap-5">
                            <p className="text-[2rem]">Pousada</p>
                            <h1 className="text-white z-10 font-licorice text-9xl">
                                Velho Chico
                            </h1>
                            <p className="z-10 w-[30rem]">
                                Aqui você encontra natureza, comida boa, queijos
                                deliciosos e muito mais!
                            </p>
                        </div>
                    </div>
                    <div
                        className={`text-white absolute z-10 w-full ${
                            currentImage === 0
                                ? styles.letteringIn
                                : styles.letteringOut
                        }`}
                    >
                        <div className="flex flex-col gap-5">
                            <p className="text-[2rem]">
                                Conheça os encantos da
                            </p>
                            <h1 className="text-white z-10 font-licorice text-9xl">
                                Serra da Canastra
                            </h1>
                            <p className="z-10 w-[30rem]">
                                Na <b>Pousada Velho Chico</b>, você encontra
                                natureza, comida boa, queijos deliciosos e muito
                                mais!
                            </p>
                        </div>
                    </div>
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

function Slide() {
    const [currentImage, setCurrentImage] = useState<number>(1);
    const [previousImage, setPreviousImage] = useState<number>(0);
    const [animateClass, setAnimateClass] = useState<string>("");

    setTimeout(() => {
        if (currentImage === images.length - 1) {
            setAnimateClass("");
            setPreviousImage(currentImage);
            setCurrentImage(0);
            setAnimateClass(styles.animate);

            return;
        }
        setAnimateClass("");
        setPreviousImage(currentImage);
        setCurrentImage(currentImage + 1);
        setAnimateClass(styles.animate);
    }, 5 * 1000);

    if (currentImage === 0) {
        return (
            <Image
                alt=""
                src={images[currentImage].scr}
                quality={100}
                fill
                className={`object-cover transition-all object-center ${styles.images} ${styles.animate}`}
                data-slide="0"
            />
        );
    }

    return (
        <>
            <Image
                alt=""
                src={images[currentImage].scr}
                quality={100}
                fill
                className={`object-cover transition-all object-center ${styles.images} ${styles.animate}`}
                data-slide="1"
            />
        </>
    );
}
