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

let metaTitle: string;
let metaTextoDeChamada: string;
let metaThumbnail: string;

type Props = {
    params: {
        slug: string;
    };
};

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams({ params }: Props) {
    const roomsList = await fetchRooms();
    return roomsList.map((room) => ({
        id: room.id,
        slug: room.slug,
        title: room.title,
        thumbnail: room.thumbnail,
        url: room.url,
    }));
}

export const generateMetadata = async ({ params }: Props) => {
    // console.log({ params });

    const roomContentJson: any = await fetchData(QUERY_SINGLE_ROOM, {
        roomPath: `/acomodacao/${params.slug}/`,
    });

    metaTitle = roomContentJson.nodeByUri.title;
    metaTextoDeChamada =
        roomContentJson.nodeByUri.informacoesDaAcomodacao.textoDeChamada;
    metaThumbnail =
        roomContentJson.nodeByUri.informacoesDaAcomodacao.thumbnail.node
            .sourceUrl;

    return {
        title: metaTitle,
        description: metaTextoDeChamada,
    };
};

export default async function RoomDetails({
    params,
}: {
    params: { slug: string };
}) {
    const roomContent: any = await fetchData(QUERY_SINGLE_ROOM, {
        roomPath: `/acomodacao/${params.slug}/`,
    });

    const title = roomContent.nodeByUri.title;
    const textoDeChamada =
        roomContent.nodeByUri.informacoesDaAcomodacao.textoDeChamada;

    const caracteristicasDoChale =
        roomContent.nodeByUri.informacoesDaAcomodacao.caracteristicasDoChale;

    const slides =
        roomContent.nodeByUri.informacoesDaAcomodacao.fotosDesteChale.nodes.map(
            (node: { sourceUrl: string }) => {
                return {
                    src: node.sourceUrl,
                };
            }
        );
    const thumbnail =
        roomContent.nodeByUri.informacoesDaAcomodacao.thumbnail.node.sourceUrl;
    const roomsList = await fetchRooms();

    const otherRooms = roomsList.filter((room) => room.slug !== params.slug);

    if (roomContent === undefined) {
        return null;
    }

    return (
        <>
            <Header backgroundImg={thumbnail}>Acomodação</Header>
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <Debugg data={roomsList} filter="paaaa" />
                <section className="col-span-10 grid grid-cols-10 col-start-2 pb-10">
                    <Intro title={title}>
                        <p>{textoDeChamada}</p>
                    </Intro>
                    <div className="flex col-span-12 justify-center mt-3 mb-10">
                        <Button
                            text="reserve já"
                            icon={<IconWhatsapp color="white" />}
                            style="primary"
                            href="https://wa.me/553799290110"
                        />
                    </div>
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

                <section className="col-span-10 col-start-2 mt-10">
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

                <section className="col-span-12 col-start-1 my-10">
                    <Intro title="Confira outras opções">
                        <p>
                            Além deste chalé, temos também outras opções à sua
                            escolha.
                        </p>
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
