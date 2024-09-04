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
                        <p>
                            Venha se encantar com o majestoso Rio São Francisco,
                            ideal para um banho refrescante ou mergulho
                            revigorante. Em apenas 18 km, explore a deslumbrante
                            Cachoeira Casca D’Anta, a maior do Parque Nacional
                            da Serra da Canastra.
                        </p>
                    </Intro>
                    <div className="col-span-10 flex flex-col gap-12 md:pb-22 pb-10">
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
            <div className="relative h-60 md:h-[37.25rem] w-full mt-12 text-darkest-blue">
                <Image
                    className="object-cover object-top"
                    alt=""
                    src="/cachoeira1.png"
                    fill
                />
            </div>
            <div className=" mb-11 bg-gray-6 pt-12 text-darker-blue">
                <div className="w-full grid grid-cols-12 gap-5 max-w-screen-xl mx-auto">
                    <div
                        style={{ gridColumnStart: 2 }}
                        className="lg:col-span-4 col-span-10 gap-y-10 flex flex-col"
                    >
                        <h1 className="text-4xl">Aventuras inesqueciveis</h1>
                        <p className="text-xl leading-relaxed">
                            Sinta a adrenalina com atividades radicais como
                            bóia-cross e aproveite o campo de futebol para
                            momentos de descontração e diversão com amigos. Se
                            aventure nas trilhas maravilhosas e passeios a
                            cavalo, vivenciando a natureza de perto.
                        </p>
                    </div>
                    <div className="col-span-9 lg:col-span-7 col-start-2 relative">
                        <div className="w-full max-w-[600px] relative">
                            <Image
                                className="object-fill"
                                alt=""
                                src="/img-atrativos.png"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <main className="grid grid-cols-12 px-3 md:px-5 text-darkest-blue max-w-screen-xl mx-auto">
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
