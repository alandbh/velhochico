"use server";
import * as React from "react";
import Image from "next/image";
import Card from "./_components/Card";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero/Hero";
import fetchData from "./lib/fetchData";
import {
    QUERY_HERO_DATA,
    QUERY_CHAMADA_HOME,
    QUERY_CONTEUDO_DESTAQUE,
    QUERY_GALLERY_HOME,
} from "./lib/queries";
import Intro from "./_components/Intro";
import Gallery from "./_components/Gallery";
import Debugg from "./_components/Debugg";
import fetchRooms from "./lib/fetchRooms";
import fetchGallery from "./lib/fetchGallery";
import Button from "./_components/Button";
import IconWhatsapp from "./_components/icons/Whatsapp";

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

    /**
     *
     * Fetching Destaque data from API
     * --------------------------------
     */

    const destaqueDataJson = await fetchData<any>(QUERY_CONTEUDO_DESTAQUE);

    /**
     *
     * Fetching rooms data from API
     * --------------------------------
     */

    const roomsList = await fetchRooms();

    /**
     *
     * Fetching Home Gallery data from API
     * --------------------------------
     */

    const galleryImages = await fetchGallery(
        QUERY_GALLERY_HOME,
        "galeriaDeFotosDaHome"
    );

    return (
        <>
            <Hero data={heroData} />
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <div
                    id="content"
                    className="col-span-10 grid grid-cols-10 col-start-2"
                >
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
                            className="flex flex-col gap-4"
                        ></div>
                    </Intro>
                </div>
            </main>
            <section>
                <div className="md:grid md:grid-cols-12 max-md:mt-0 max-md:mb-10 gap-5 mt-12 bg-[#f2f2f2e6] max-md:flex max-md:flex-col-reverse">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: destaqueDataJson.pages.nodes[0]
                                .conteudoPaginaInicial.destaque.texto,
                        }}
                        className="md:col-start-2 max-md:px-5 md:col-span-5 2xl:col-start-3 2xl:col-span-3 3xl:col-start-4 3xl:col-span-2 text-xl max-md:text-lg flex flex-col gap-y-8 py-10"
                    ></div>
                    <div className="md:col-span-6 max-md:h-[300px] 3xl:col-span-7 w-auto relative">
                        <Image
                            className="object-cover"
                            alt=""
                            src={
                                destaqueDataJson.pages.nodes[0]
                                    .conteudoPaginaInicial.destaque.imagem.node
                                    .sourceUrl
                            }
                            fill
                            sizes="200"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="/blur.svg"
                        />
                    </div>
                </div>
            </section>

            <main className="grid grid-cols-12 px-3 md:px-5 w-full max-w-screen-xl mx-auto text-darker-blue gap-4">
                <section className="col-span-12 col-start-1">
                    <Intro title="Acomodações">
                        <div className="flex flex-col gap-4">
                            <p>
                                Aconchego, conforto e natureza! <br />
                                Temos várias opções de chalés, de acordo com sua
                                necessidade.
                            </p>
                        </div>
                    </Intro>
                    <div className="flex flex-col gap-10 mt-10">
                        {roomsList.map((room) => (
                            <Card
                                key={room.id}
                                image={room.thumbnail}
                                title={room.title}
                                url={room.url}
                                id={room.id}
                            >
                                {room.intro}
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="col-span-10 col-start-2 max-md:my-10 md:my-20">
                    <Intro title="Algumas fotos" />

                    <div className="">
                        <Gallery slides={galleryImages} />
                    </div>
                </section>

                <div className="col-span-12 flex justify-center">
                    <Button
                        text="reserve já"
                        icon={<IconWhatsapp color="white" />}
                        href="https://wa.me/553799290110"
                        size="large"
                        style="primary"
                    />
                </div>
            </main>

            <Footer />
        </>
    );
}
