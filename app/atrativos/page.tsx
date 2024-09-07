import Image from "next/image";
import Button from "../_components/Button";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import IconWhatsapp from "../_components/icons/Whatsapp";
import React from "react";
import Intro from "../_components/Intro";
import Article from "../_components/Article";
import Gallery from "../_components/Gallery";
import fetchData from "../lib/fetchData";
import { QUERY_ATRATIVOS } from "../lib/queries";
import Slideshow from "../_components/Slideshow/Index";

export default async function Atrativos() {
    /**
     *
     * Fetching Hero data from API
     * --------------------------------
     */
    const culinariaJson = await fetchData<any>(QUERY_ATRATIVOS);

    const pageData = culinariaJson.pages.nodes[0];

    const itensAtrativos = pageData.pageContent5.itens_atrativos.map(
        (item: {
            titulo: string;
            descricao: string;
            fotos: {
                nodes: { sourceUrl: string }[];
            };
        }) => {
            return {
                titulo: item.titulo,
                descricao: item.descricao,
                // imagem: item.imagem.node.sourceUrl,
                fotos: item.fotos.nodes,
            };
        }
    );

    const slides = pageData.pageContent5.galeriaDeFotos5.nodes.map(
        (item: { sourceUrl: string }) => {
            return {
                src: item.sourceUrl,
            };
        }
    );

    return (
        <>
            <Header
                backgroundImg={pageData.pageContent5.banner5.node.sourceUrl}
            >
                {pageData.title}
            </Header>
            <main className="grid grid-cols-12 px-3 md:px-5 text-darkest-blue">
                <div className="col-span-10 grid grid-cols-10 col-start-2 ">
                    <Intro title={pageData.pageContent5.chamada5.titulo}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: pageData.pageContent5.chamada5
                                    .textoDaChamada,
                            }}
                        ></div>
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

                <section className="col-span-10 col-start-2 mt-20 flex flex-col gap-11 mb-10">
                    {itensAtrativos.map(
                        (
                            item: {
                                titulo: string;
                                descricao: string;
                                fotos: { sourceUrl: string }[];
                            },
                            id: number
                        ) => (
                            <div
                                key={id}
                                className="grid grid-cols-10 max-sm:flex max-sm:flex-col-reverse "
                            >
                                {id !== itensAtrativos.length - 1 && (
                                    <div className=" flex justify-center mt-10  sm:hidden">
                                        <div className="h-1 bg-dark-blue/50 w-28"></div>
                                    </div>
                                )}
                                <div className="col-span-5 max-sm:col-span-10">
                                    <h2 className="text-4xl max-sm:text-2xl mb-10 max-sm:mt-5 max-sm:mb-5">
                                        {item.titulo}
                                    </h2>
                                    <p>{item.descricao}</p>
                                </div>
                                <div className="col-span-5 md:col-span-4 col-start-6 md:col-start-7 max-sm:col-span-10 relative min-h-[250px] max-sm:min-h-[150px]">
                                    <Slideshow slidesArr={item.fotos} />
                                </div>
                            </div>
                        )
                    )}

                    <div className="flex items-center justify-center mt-10">
                        <Button
                            text="reserve já"
                            icon={<IconWhatsapp color="white" />}
                            style="primary"
                            href="https://wa.me/553799290110"
                        />
                    </div>
                </section>
            </main>
            <section>
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
                            <h1 className="text-4xl">
                                Aventuras inesqueciveis
                            </h1>
                            <p className="text-xl leading-relaxed">
                                Sinta a adrenalina com atividades radicais como
                                bóia-cross e aproveite o campo de futebol para
                                momentos de descontração e diversão com amigos.
                                Se aventure nas trilhas maravilhosas e passeios
                                a cavalo, vivenciando a natureza de perto.
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
            </section>
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
                        <Intro title="Imagens de tirar o fôlego">
                            <p>
                                Confira algumas fotos cheias de aventura de
                                nossos hóspedes!
                            </p>
                        </Intro>

                        <Gallery slides={slides} />

                        <div className="flex items-center justify-center">
                            <Button
                                text="reserve já"
                                icon={<IconWhatsapp color="white" />}
                                style="primary"
                                href="https://wa.me/553799290110"
                            />
                        </div>
                    </Article>
                </div>
            </main>

            <Footer></Footer>
        </>
    );
}
