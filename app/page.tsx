"use server";
import * as React from "react";
import Image from "next/image";
import Card from "./_components/Card";
import Footer from "./_components/Footer";
import "yet-another-react-lightbox/styles.css";
import Hero from "./_components/Hero/Hero";
import fetchData from "./lib/fetchData";
import { QUERY_HERO_DATA, QUERY_CHAMADA_HOME } from "./lib/queries";
import Intro from "./_components/Intro";
import Gallery from "./_components/Gallery";

const images = [
    { src: "/arvore.png" },
    { src: "/cachoeira1.png" },
    { src: "/cachoeira2.png" },
    { src: "/ceu.png" },
    { src: "/queijos.jpg" },
    { src: "/chale.jpg" },
];

export default async function Home() {
    /**
     *
     * Fetching Hero data from API
     * --------------------------------
     */
    const heroDataJson = await fetchData<any>(QUERY_HERO_DATA);

    const heroData = [
        {
            content:
                heroDataJson.pages.nodes[0].conteudoPaginaInicial.banner
                    .chamada,
            image: heroDataJson.pages.nodes[0].conteudoPaginaInicial.banner
                .imagemDeFundo.node.sourceUrl,
        },
        {
            content:
                heroDataJson.pages.nodes[0].conteudoPaginaInicial.banner2
                    .chamada,
            image: heroDataJson.pages.nodes[0].conteudoPaginaInicial.banner2
                .imagemDeFundo?.node.sourceUrl,
        },
    ];

    /**
     *
     * Fetching CHAMADA data from API
     * --------------------------------
     */

    const chamadaDataJson = await fetchData<any>(QUERY_CHAMADA_HOME);

    console.log("ola", chamadaDataJson);

    /**
     *
     * Fetching rooms data from API
     * --------------------------------
     */

    const rooms = [
        {
            title: "Chalé de 1 quarto",
            intro: "Chalé com varanda, vista para a serra, ar-condicionado, frigobar e cozinha.",
            url: "/chale-1-quarto",
            thumbnail: "/rede.jpg",
        },
        {
            title: "Chalé de 2 quartos",
            intro: "Chalé de 2 quartos com varanda, vista para a serra, ar-condicionado, frigobar e cozinha.",
            url: "/chale-2-quartos",
            thumbnail: "/chale.jpg",
        },
        {
            title: "Chalé de 3 quarto",
            intro: "Chalé de 3 quartos com varanda, vista para a serra, ar-condicionado, frigobar e cozinha.",
            url: "/chale-3-quartos",
            thumbnail: "/ceu.png",
        },
    ];

    return (
        <>
            <Hero data={heroData} />
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <section className="col-span-10 grid grid-cols-10 col-start-2">
                    <Intro
                        title={
                            chamadaDataJson.pages.nodes[0].conteudoPaginaInicial
                                .chamada.titulo
                        }
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: chamadaDataJson.pages.nodes[0]
                                    .conteudoPaginaInicial.chamada
                                    .textoDaChamada,
                            }}
                            className="text-sm md:text-[24px] leading-normal flex flex-col gap-4"
                        ></div>
                    </Intro>
                </section>
            </main>
            <section>
                <div className="grid grid-cols-12 gap-5 mt-12 bg-[#f2f2f2e6] max-md:flex-col-reverse">
                    <div className="md:col-start-2 md:col-span-5 2xl:col-start-3 2xl:col-span-3 3xl:col-start-4 3xl:col-span-2 text-xl flex flex-col  gap-y-8 py-10">
                        <p className="">
                            Aproveite as belas praias, piscinas naturais e
                            corredeiras para relaxar, nadar e praticar bóia
                            cross. Desfrute de vistas deslumbrantes da Serra da
                            Canastra,{" "}
                            <b>
                                visíveis de toda a pousada, especialmente das
                                varandas dos chalés.
                            </b>
                        </p>
                        <p>
                            Viva a experiência <b>autêntica de uma fazenda</b>,
                            tomando leite ao pé da vaca, saboreando o famoso
                            queijo canastra e passeando a cavalo. Divirta-se no
                            campo de futebol,
                            <b>explore com um guia turístico</b> e comece o dia
                            com um
                            <b>delicioso café da manhã mineiro</b>.
                        </p>
                        <p>
                            Ah! Não deixe de conferir o <b>mirante</b>{" "}
                            localizado na parte alta da pousada! Perfeito para
                            apreciar o pôr-do-sol com uma vista panorâmica da
                            Serra e do rio, ideal para momentos românticos
                            inesquecíveis.
                        </p>
                        <p>Estamos te esperando!</p>
                    </div>
                    <div className="col-span-6  3xl:col-span-7 w-auto relative">
                        <Image
                            className="object-cover"
                            alt=""
                            src="/image_4.jpg"
                            fill
                        />
                    </div>
                </div>
            </section>

            <main className="grid grid-cols-12 px-3 md:px-5 w-full max-w-screen-xl mx-auto text-darker-blue gap-4">
                <section className="col-span-12 col-start-1">
                    <Intro title="Acomodações">
                        <div className="text-sm md:text-[24px] leading-normal flex flex-col gap-4">
                            <p>
                                Aconchego, conforto e natureza! <br />
                                Temos várias opções de chalés, de acordo com sua
                                necessidade.
                            </p>
                        </div>
                    </Intro>
                    <div className="flex flex-col gap-10">
                        {rooms.map((room, index) => (
                            <Card
                                key={index}
                                image={room.thumbnail}
                                title={room.title}
                                url={room.url}
                            >
                                {room.intro}
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="col-span-10 col-start-2 my-20">
                    <Intro title="Algumas fotos" />

                    <div className="">
                        <Gallery slides={images} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
