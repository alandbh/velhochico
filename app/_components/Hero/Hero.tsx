"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoLink from "../LogoLink";
import NavMenu from "../NavMenu";
import Button from "../Button";
import IconWhatsapp from "../icons/Whatsapp";
import Link from "next/link";
import Arrow from "../icons/Arrow";

import styles from "./Hero.module.css";
import Hamburguer from "../icons/Hamburguer";

type HeroProps = {
    data: {
        image: string;
        content: string;
    }[];
};

const Hero = ({ data }: HeroProps) => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    console.log("ola", data);

    if (data[1].image && data[1].content) {
        setTimeout(() => {
            if (currentImage === data.length - 1) {
                setCurrentImage(0);

                return;
            }
            setCurrentImage(currentImage + 1);
        }, 15 * 1000);
    }

    const fade = {
        out: {
            opacity: 0,
        },
        in: {
            opacity: 1,
        },
    };

    return (
        <header className="flex flex-col h-[100vh] md:h-[80vh] before:content[''] before:h-full before:w-full before:absolute before:bg-header-bg before:z-10 relative w-full overflow-clip">
            <div className={styles.currentImage1}>
                <Image
                    alt=""
                    src={data[0].image}
                    quality={100}
                    fill
                    style={currentImage === 1 ? fade.out : fade.in}
                    className={`object-cover  object-center ${styles.images} `}
                    data-slide="0"
                />
                {data[1].content && data[1].image && (
                    <Image
                        alt=""
                        src={data[1].image}
                        quality={100}
                        fill
                        style={currentImage === 1 ? fade.in : fade.out}
                        className={`object-cover object-center ${styles.images} `}
                        data-slide="0"
                    />
                )}
            </div>
            <div className="w-full max-w-screen-lg mx-auto z-10 flex flex-col h-full justify-between">
                <div className="flex md:justify-between justify-center h-fit items-center z-10 relative">
                    <LogoLink href="/" />
                    <button className="absolute top-2 right-3 p-1 md:hidden">
                        <Hamburguer height={32} width={32} />
                    </button>
                    <NavMenu />
                </div>
                <div className="relative flex flex-1 items-center">
                    {data[1].content && (
                        <div
                            className={`text-white absolute z-10 w-full ${
                                currentImage === 1
                                    ? styles.letteringIn
                                    : styles.letteringOut
                            }`}
                        >
                            <div className="flex flex-col gap-5">
                                <div
                                    className={styles.lettering}
                                    dangerouslySetInnerHTML={{
                                        __html: data[1].content,
                                    }}
                                ></div>
                            </div>
                        </div>
                    )}
                    <div
                        className={`text-white absolute z-10 w-full ${
                            currentImage === 0
                                ? styles.letteringIn
                                : styles.letteringOut
                        }`}
                    >
                        <div className="flex flex-col gap-5">
                            <div
                                className={styles.lettering}
                                dangerouslySetInnerHTML={{
                                    __html: data[0].content,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="z-20 flex justify-center items-center flex-col gap-10 mb-10">
                    <div className="max-md:hidden">
                        <Button
                            text="reserve já"
                            icon={<IconWhatsapp color="white" />}
                            href="https://wa.me/553799290110"
                            size="large"
                            style="primary"
                        />
                    </div>
                    <div className="md:hidden">
                        <Button
                            text="reserve já"
                            icon={<IconWhatsapp color="white" />}
                            href="https://wa.me/553799290110"
                            size="medium"
                            style="primary"
                        />
                    </div>

                    <Link className="rotate-90" href="#content">
                        <Arrow color="white" height="40" width="40" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Hero;
