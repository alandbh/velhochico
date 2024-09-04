import React from "react";
import IconLogo from "./icons/Logo";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import IconWhatsapp from "./icons/Whatsapp";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="md:h-65 h-auto py-10 md:py-0 w-full bg-darkest-blue flex justify-between items-center text-white relative px-5 lg:px-20 mt-[5.5rem]">
            <div className="h-5 w-20 absolute -top-4  -translate-x-[50%]	left-[50%] -z-10">
                <Image alt="" src={"/triangle.svg"} fill />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5 max-w-screen-xl mx-auto text-white/75">
                <div className="flex flex-col gap-4 flex-1 items-center md:items-start text-center">
                    <div className="mb-5">
                        <IconLogo color="#ffffff" />
                    </div>
                    <p>
                        Estrada Vargem Bonita a{" "}
                        <span className="whitespace-nowrap">
                            Casca D&apos;Anta, km 05.
                        </span>
                    </p>
                    <p>
                        <a href="tel:+55 37 99929-0110">+55 37 99929-0110</a>
                    </p>
                    <p>
                        <a
                            className="hover:underline hover:text-white/100"
                            href="mailto:contato@pousadavelhochico.com.br"
                        >
                            contato@pousadavelhochico.com.br
                        </a>
                    </p>
                </div>
                <div className="flex justify-between flex-1 flex-col-reverse md:flex-row gap-5">
                    <div className="pt-20 flex flex-col items-center md:items-start">
                        <h3 className="sr-only">
                            Siga-nos em nossas redes sociais
                        </h3>
                        <ul className="flex flex-col items-stretch self-center gap-3 content w-32">
                            <li>
                                <a
                                    href="/#"
                                    className="flex gap-4 hover:underline hover:text-white/100"
                                >
                                    <Facebook />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex gap-4 hover:underline hover:text-white/100"
                                >
                                    <Twitter />
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex gap-4 hover:underline hover:text-white/100"
                                >
                                    <Instagram />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-20 flex flex-col items-center md:items-start">
                        <h3 className="text-2xl mb-5">Reservas</h3>
                        <p>
                            <a
                                href=" https://wa.me/553799290110"
                                className="flex items-center gap-4 text-2xl hover:underline hover:text-white/100"
                            >
                                <IconWhatsapp color="#ffffff" />
                                37 99929-0110
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
