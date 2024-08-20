import Image from "next/image";
import Button from "../_components/Button";
import Header from "../_components/Header";
import IconWhatsapp from "../_components/icons/Whatsapp";
import Title from "../_components/Title";
import Lightbox from "yet-another-react-lightbox";
import React from "react";
import NextJsImage from "../_components/LightBox";
import Footer from "../_components/Footer";
import Intro from "../_components/Intro";
import Gallery from "../_components/Gallery";
const images = [
    { src: "/arvore.png" },
    { src: "/cachoeira1.png" },
    { src: "/cachoeira2.png" },
    { src: "/ceu.png" },
    { src: "/queijos.jpg" },
    { src: "/chale.jpg" },
];
export default function Culinaria() {
    return (
        <>
            <Header backgroundImg="/queijos.jpg">Culinária</Header>
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <section className="col-span-10 grid grid-cols-10 col-start-2">
                    <Intro title="Sabor e simplicidade no ponto">
                        <p className="text-sm md:text-[24px] leading-normal">
                            Experimente os mais variados sabores da culinária
                            mineira! Na Pousada Velho Chico, você poderá se
                            deliciar com os sabores típicos da nossa terra.
                        </p>
                        <p className="text-sm md:text-[24px] leading-normal">
                            No café da manhã, iguarias como broas, bolos, pães,
                            doces, e o queijo canastra produzido na própria
                            pousada.
                        </p>
                        <p className="text-sm md:text-[24px] leading-normal">
                            Além disso, você poderá aproveitar frutas colhidas
                            diretamente do pé como laranja, abacate, manga,
                            caju, jambo, goiaba, pitanga, jaca, ameixa e amora.
                        </p>
                    </Intro>
                    <div className="flex justify-center col-span-10">
                        <Button
                            text="reserve já"
                            icon={<IconWhatsapp color="white" />}
                            style="primary"
                            href="https://wa.me/553799290110"
                        />
                    </div>
                </section>

                <section className="col-span-10 col-start-2 my-20">
                    <Intro title="Pra comer com os olhos" />
                    <Gallery slides={images} />
                    <div className="flex justify-center mt-11">
                        <Button
                            text="reserve já"
                            icon={<IconWhatsapp color="white" />}
                            style="primary"
                            href="https://wa.me/553799290110"
                        />
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}
