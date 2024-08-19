import Link from "next/link";
import Header from "../_components/Header";
import Button from "../_components/Button";
import IconWhatsapp from "../_components/icons/Whatsapp";
import Waze from "../_components/icons/Waze";
import IconGoogleMaps from "../_components/icons/IconGoogleMaps";
import Footer from "../_components/Footer";
import Intro from "../_components/Intro";
import Article from "../_components/Article";
import Content from "../_components/Content";

export default function Contato() {
    return (
        <>
            <Header backgroundImg="/chale.jpg">Contato</Header>
            <main className="grid grid-cols-12 px-3 md:px-5 text-darkest-blue">
                <div className="col-span-10 grid grid-cols-10 col-start-2 ">
                    <Intro title="estamos sempre de portas abertas">
                        <p className="text-sm md:text-[24px] leading-normal">
                            Atualmente, nosso atendimento é feito,
                            exclusivamente, via telefone ou WhatsApp no seguinte
                            número:
                        </p>
                        <p>
                            <Link
                                href={"tel:+55 37 99929-0110"}
                                className="text-2xl"
                            >
                                +55 37 99929-0110
                            </Link>
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
                        <Article>
                            <h2 className="text-4xl">Como chegar</h2>
                            <Content>
                                <p>
                                    Pegue a rodovia MG 050 com destino a Piumhi,
                                    MG.
                                </p>
                                <p>
                                    Chegando lá, pegue a rodovia MG 341, sentido
                                    São Roque de Minas. Entre à esquerda no
                                    trevo para Vargem Bonita.
                                </p>
                                <p>
                                    Em Vargem Bonita, pegue a estrada de terra
                                    para Casca D’anta e ande por mais 5 Km.
                                </p>
                            </Content>
                        </Article>

                        <div className="flex w-full justify-center gap-x-[10px]">
                            <Button
                                text="ROTA PARA WAZE"
                                icon={<Waze color="#27AE60" />}
                                href="https://wa.me/553799290110"
                            />
                            <Button
                                text="ROTA PARA GOOGLE MAPS"
                                icon={<IconGoogleMaps color="#27AE60" />}
                                href="https://wa.me/553799290110"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
