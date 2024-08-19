import Image from "next/image";
import Button from "../_components/Button";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import IconWhatsapp from "../_components/icons/Whatsapp";
import React from "react";
import Intro from "../_components/Intro";
import Article from "../_components/Article";
import Gallery from "../_components/Gallery";
const images = [
    { src: "/arvore.png" },
    { src: "/cachoeira1.png" },
    { src: "/cachoeira2.png" },
    { src: "/ceu.png" },
    { src: "/queijos.jpg" },
    { src: "/chale.jpg" },
];

export default function Atrativos() {
    return (
        <>
            <Header backgroundImg="/fusca.jpg">Atrativos</Header>
            <main className="grid grid-cols-12 px-3 md:px-5 text-darkest-blue">
                <div className="col-span-10 grid grid-cols-10 col-start-2 ">
                    <Intro title="natureza, aventura e diversão">
                        <p className="text-sm md:text-[24px] leading-normal">
                            Venha se encantar com o majestoso Rio São Francisco,
                            ideal para um banho refrescante ou mergulho
                            revigorante. Em apenas 18 km, explore a deslumbrante
                            Cachoeira Casca D’Anta, a maior do Parque Nacional
                            da Serra da Canastra.
                        </p>
                    </Intro>
                    <div className="col-span-10 flex flex-col gap-12 pb-22">
                        <div className="flex items-center justify-center">
                            <Button
                                text="reserve já"
                                icon={<IconWhatsapp color="white" />}
                                style="primary"
                                href="https://wa.me/553799290110"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <div className="relative h-[37.25rem] w-full mt-12">
                <Image
                    className="object-cover object-top"
                    alt=""
                    src="/cachoeira1.png"
                    fill
                />
            </div>
            <div className="w-full grid grid-cols-12 gap-5 mb-[7.625rem] bg-gray-6 pt-12">
                <div className="col-start-2 col-span-4 gap-y-10 flex flex-col">
                    <h1 className="text-4xl">Aventuras inesqueciveis</h1>
                    <p className="text-xl leading-relaxed">
                        Sinta a adrenalina com atividades radicais como
                        bóia-cross e aproveite o campo de futebol para momentos
                        de descontração e diversão com amigos. Se aventure nas
                        trilhas maravilhosas e passeios a cavalo, vivenciando a
                        natureza de perto.
                    </p>
                </div>
                <div className="col-span-6 relative">
                    <div className="md:h-[527px] md:w-[661px] relative">
                        <Image alt="" src="/img-atrativos.png" fill />
                    </div>
                </div>
            </div>
            <main className="grid grid-cols-12 px-3 md:px-5 text-darkest-blue">
                <div className="col-span-10 grid grid-cols-10 col-start-2 ">
                    <Article>
                        <div className="flex items-center justify-center">
                            <Button
                                text="reserve já"
                                icon={<IconWhatsapp color="white" />}
                                style="primary"
                                href="https://wa.me/553799290110"
                            />
                        </div>
                        <Intro title="Imagens de tirar o fôlego"></Intro>

                        <Gallery slides={images} />
                    </Article>
                </div>
            </main>

            <Footer></Footer>
        </>
    );
}
