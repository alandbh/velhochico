"use server";
import * as React from "react";
import Image from "next/image";
import Title from "./_components/Title";
import Card from "./_components/Card";
import Footer from "./_components/Footer";
import "yet-another-react-lightbox/styles.css";
import Hero from "./_components/Hero/Hero";
import fetchData from "./lib/fetchData";
import { QUERY_HERO_DATA } from "./lib/queries";
import Intro from "./_components/Intro";

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
                    <Intro title="A pousada">
                        <div className="text-sm md:text-[24px] leading-normal flex flex-col gap-4">
                            <p>
                                Desfrute da tranquilidade e da beleza da Serra
                                da Canastra na Pousada Velho Chico.
                            </p>
                            <p>
                                Um refúgio cercado por belas árvores como
                                pau-brasil, jacarandá e ipê, a apenas 300 metros
                                do Rio São Francisco.
                            </p>
                        </div>
                    </Intro>
                </section>
            </main>
            <section>
                <div className="grid grid-cols-12 gap-5 mt-12 bg-[#f2f2f2e6]">
                    <div className="col-start-2 col-span-5 text-xl flex flex-col gap-y-8 py-10">
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
                    <div className="col-span-6 w-auto relative">
                        <Image
                            className="object-cover"
                            alt=""
                            src="/image_4.jpg"
                            fill
                        />
                    </div>
                </div>
            </section>

            <section>
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
            <main
                id="content"
                className="flex min-h-screen flex-col items-center py-22"
            >
                <div className="py-22 w-full">
                    <Title>Acomodações</Title>
                    <div className="text-center text-2xl mt-[3.3rem] mb-12">
                        <p>Aconchego, conforto e natureza!</p>
                        <p>
                            Temos várias opções de chalés, de acordo com sua
                            necessidade.
                        </p>
                    </div>
                    <Card url="www" image="/rede.jpg" title="Chalé de 1 quarto">
                        Chalé com varanda, vista para a serra, ar-condicionado,
                        frigobar e cozinha.
                    </Card>
                </div>
                <div className="py-22 w-full">
                    <Title>Algumas fotos</Title>
                    <div className="text-2xl text-center my-12">
                        <p>Aconchego, conforto e natureza!</p>
                        <p>
                            Temos várias opções de chalés, de acordo com sua
                            necessidade.
                        </p>
                    </div>
                    <div className="w-full grid grid-cols-12 gap-5">
                        <div className="col-start-2 col-span-10 w-full grid grid-cols-3 grid-rows-2 grid-flow-col">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="h-81 w-auto relative hover:cursor-pointer"
                                >
                                    {/* <Image
                                        key={index}
                                        className="object-cover"
                                        src={image.src}
                                        alt={`Image ${index + 1}`}
                                        onClick={() => setIndex(index)}
                                        fill
                                    /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <Lightbox
                    index={index}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={images}
                    render={{ slide: NextJsImage }}
                /> */}
            </main>
            <Footer></Footer>
        </>
    );
}
