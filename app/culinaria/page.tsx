import Button from "../_components/Button";
import Header from "../_components/Header";
import IconWhatsapp from "../_components/icons/Whatsapp";
import Footer from "../_components/Footer";
import Intro from "../_components/Intro";
import Gallery from "../_components/Gallery";
import Image from "next/image";
import fetchData from "../lib/fetchData";
import { QUERY_CULINARIA } from "../lib/queries";
import Debugg from "../_components/Debugg";

export default async function Culinaria() {
    /**
     *
     * Fetching Hero data from API
     * --------------------------------
     */
    const culinariaJson = await fetchData<any>(QUERY_CULINARIA);
    console.log({ culinariaJson });

    const pageData = culinariaJson.pages.nodes[0];

    const slides = pageData.pageContent.galeriaDeFotos3.nodes.map(
        (item: { sourceUrl: string }) => {
            return {
                src: item.sourceUrl,
            };
        }
    );

    const itensDaCulinaria = pageData.pageContent.itensdaculinaria3.map(
        (item: {
            titulo: string;
            descricao: string;
            imagem: {
                node: {
                    sourceUrl: string;
                };
            };
        }) => {
            return {
                titulo: item.titulo,
                descricao: item.descricao,
                imagem: item.imagem.node.sourceUrl,
            };
        }
    );

    return (
        <>
            <Header backgroundImg={pageData.pageContent.banner3.node.sourceUrl}>
                {pageData.title}
            </Header>
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <section className="col-span-10 grid grid-cols-10 col-start-2">
                    <Debugg data={pageData} filter="cuu" />
                    <Intro title={pageData.pageContent.chamada3.titulo}>
                        <div
                            className="flex flex-col gap-12 leading-normal"
                            dangerouslySetInnerHTML={{
                                __html: pageData.pageContent.chamada3
                                    .textoDaChamada,
                            }}
                        ></div>
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

                <section className="col-span-10 col-start-2 mt-20 mb-0 flex flex-col gap-11">
                    {itensDaCulinaria.map(
                        (
                            item: {
                                titulo: string;
                                descricao: string;
                                imagem: string;
                            },
                            id: number
                        ) => (
                            <div
                                key={id}
                                className="grid grid-cols-10 max-sm:flex max-sm:flex-col-reverse "
                            >
                                {id !== itensDaCulinaria.length - 1 && (
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
                                    <Image
                                        src={item.imagem}
                                        fill
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )
                    )}
                </section>

                <section className="col-span-10 col-start-2 my-20 max-sm:my-10">
                    <Intro title="Pra comer com os olhos" />
                    <Gallery slides={slides} />
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
