import Button from "@/app/_components/Button";
import Card from "@/app/_components/Card";
import Debugg from "@/app/_components/Debugg";
import Footer from "@/app/_components/Footer";
import Gallery from "@/app/_components/Gallery";
import Header from "@/app/_components/Header";
import IconWhatsapp from "@/app/_components/icons/Whatsapp";
import Intro from "@/app/_components/Intro";
import fetchData from "@/app/lib/fetchData";
import fetchRooms from "@/app/lib/fetchRooms";
import styles from "./page.module.css";
import { QUERY_SINGLE_ROOM } from "@/app/lib/queries";

import type { Metadata } from "next";
import fetchGallery from "@/app/lib/fetchGallery";

// let title;
// let description;

// export let metadata: Metadata = {
//     title: {
//         absolute: title || "",
//     },
//     description: "aasasasasasa",
// };

// or Dynamic metadata

let roomContentJson: any;
let title: string;
let textoDeChamada: string;
let caracteristicasDoChale: string;
let slides: any;
let thumbnail: any;

type Props = {
    params: {
        slug: string;
    };
};
export const generateMetadata = async ({ params }: Props) => {
    // console.log({ params });

    roomContentJson = await fetchData(QUERY_SINGLE_ROOM, {
        roomPath: `/acomodacao/${params.slug}/`,
    });

    title = roomContentJson.nodeByUri.title;
    textoDeChamada =
        roomContentJson.nodeByUri.informacoesDaAcomodacao.textoDeChamada;

    caracteristicasDoChale =
        roomContentJson.nodeByUri.informacoesDaAcomodacao
            .caracteristicasDoChale;

    slides =
        roomContentJson.nodeByUri.informacoesDaAcomodacao.fotosDesteChale.nodes.map(
            (node: { sourceUrl: string }) => {
                return {
                    src: node.sourceUrl,
                };
            }
        );
    thumbnail =
        roomContentJson.nodeByUri.informacoesDaAcomodacao.thumbnail.node
            .sourceUrl;

    return {
        title: title,
        description: textoDeChamada,
    };
};

export default async function RoomDetails({
    params,
}: {
    params: { slug: string };
}) {
    const roomsList = await fetchRooms();

    const otherRooms = roomsList.filter((room) => room.slug !== params.slug);

    if (roomContentJson === undefined) {
        return null;
    }

    return (
        <>
            <Header backgroundImg={thumbnail}>Acomodação</Header>
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <Debugg data={otherRooms} filter="paaaa" />
                <section className="col-span-10 grid grid-cols-10 col-start-2 pb-10">
                    <Intro title={title}>
                        <p className="text-sm md:text-[24px] leading-normal">
                            {textoDeChamada}
                        </p>
                    </Intro>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: caracteristicasDoChale,
                        }}
                        className={`col-span-10 md:columns-2 ${styles.mainContent}`}
                    ></div>
                </section>
                <div className="flex justify-center col-span-12">
                    <Button
                        text="reserve já"
                        icon={<IconWhatsapp color="white" />}
                        style="primary"
                        href="https://wa.me/553799290110"
                    />
                </div>

                <section className="col-span-10 col-start-2 mt-20">
                    <Intro title="fotos deste chalé" />
                    <Gallery slides={slides} />
                    <div className="flex justify-center mt-20">
                        <Button
                            text="reserve já"
                            icon={<IconWhatsapp color="white" />}
                            style="primary"
                            href="https://wa.me/553799290110"
                        />
                    </div>
                </section>

                <section className="col-span-12 col-start-1 my-20">
                    <Intro title="Confira outras opções">
                        <div className="text-sm md:text-[24px] leading-normal flex flex-col gap-4">
                            <p>
                                Além deste chalé, temos também outras opções à
                                sua escolha.
                            </p>
                        </div>
                    </Intro>
                    <div className="flex flex-col gap-10">
                        {otherRooms.map((room) => (
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
            </main>
            <Footer />
        </>
    );
}
