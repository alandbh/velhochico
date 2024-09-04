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
    const pageData = culinariaJson.pages.nodes[0];

    const slides = pageData.pageContent.galeriaDeFotos.edges.map(
        (item: { node: { sourceUrl: string } }) => {
            return {
                src: item.node.sourceUrl,
            };
        }
    );

    return (
        <>
            <Header backgroundImg={pageData.pageContent.banner.node.sourceUrl}>
                {pageData.title}
            </Header>
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <section className="col-span-10 grid grid-cols-10 col-start-2">
                    <Debugg data={pageData} filter="cul" />
                    <Intro title={pageData.pageContent.chamada.titulo}>
                        <div
                            className="flex flex-col gap-12 leading-normal"
                            dangerouslySetInnerHTML={{
                                __html: pageData.pageContent.chamada
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
                    {pageData.pageContent.itensDaCulinaria?.map(
                        (
                            item: {
                                titulo: string;
                                descricao: string;
                                imagem: { node: { sourceUrl: string } };
                            },
                            id: number
                        ) => (
                            <div
                                key={id}
                                className="grid grid-cols-10 max-sm:flex max-sm:flex-col-reverse "
                            >
                                {id !==
                                    pageData.pageContent.itensDaCulinaria
                                        .length -
                                        1 && (
                                    <div className=" flex justify-center mt-10">
                                        <div className="h-1 bg-dark-blue/50 w-28 sm:hidden"></div>
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
                                        src={item.imagem.node.sourceUrl}
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
