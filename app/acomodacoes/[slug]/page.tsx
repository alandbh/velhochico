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
import { QUERY_SINGLE_ROOM } from "@/app/lib/queries";

import type { Metadata } from "next";

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

type Props = {
    params: {
        slug: string;
    };
};
export const generateMetadata = async ({ params }: Props) => {
    roomContentJson = await fetchData(QUERY_SINGLE_ROOM, {
        roomPath: "/acomodacao/chale-3-quartos-bla/",
    });

    title = roomContentJson.nodeByUri.title;
    textoDeChamada =
        roomContentJson.nodeByUri.informacoesDaAcomodacao.textoDeChamada;

    return {
        title: title,
        description: textoDeChamada,
    };
};

const images = [
    { src: "/arvore.png" },
    { src: "/cachoeira1.png" },
    { src: "/cachoeira2.png" },
    { src: "/ceu.png" },
    { src: "/queijos.jpg" },
    { src: "/chale.jpg" },
];

export default async function RoomDetails() {
    const roomsList = await fetchRooms();

    if (roomContentJson === undefined) {
        return null;
    }

    return (
        <>
            <Header backgroundImg="/chale.jpg">Acomodação</Header>
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <Debugg data={roomContentJson} filter="paaaa" />
                <section className="col-span-10 grid grid-cols-10 col-start-2 py-10">
                    <Intro title={title}>
                        <p className="text-sm md:text-[24px] leading-normal">
                            {textoDeChamada}
                        </p>
                    </Intro>
                    <div className="col-span-10">
                        <h2 className="text-3xl mb-4">
                            Características do chalé
                        </h2>
                        <p>Área do chalé: 12 m²</p>
                    </div>
                    <div className="col-span-3 mt-[14.4px] ">
                        <p>
                            <b>Na sua cozinha privativa:</b>
                        </p>
                        <ul className="list-disc ml-7 my-4">
                            <li>Utensílios de cozinha</li>
                            <li>Frigobar</li>
                            <li>Fogão</li>
                            <li>Mesa de jantar</li>
                        </ul>
                        <p>
                            <b>No seu banheiro privativo:</b>
                        </p>
                        <ul className="list-disc ml-7 my-4">
                            <li>Chuveiro</li>
                            <li>Vaso sanitário</li>
                            <li>Papel higiênicoFogão</li>
                        </ul>
                        <p>
                            <b>Vista:</b>
                        </p>
                        <ul className="list-disc ml-7 my-4">
                            <li>Varanda </li>
                            <li>Vista do jardim </li>
                            <li>Vista da montanha</li>
                            <li>Varanda térrea</li>
                        </ul>
                    </div>
                    <div className="col-start-6 col-span-3 mt-[14.4px]">
                        <p>
                            <b>Comodidades do chalé:</b>
                        </p>
                        <ul className="list-disc ml-7 mt-4 mb-12">
                            <li>TV</li>
                            <li>Roupa de cama</li>
                            <li>Frigobar</li>
                            <li>Mesa de jantar</li>
                            <li>Fogão</li>
                            <li>Piso de mármore/azulejo</li>
                            <li>Utensílios de cozinha</li>
                            <li>Cozinha</li>
                            <li>Ventilador</li>
                            <li>Varal para secar roupas</li>
                            <li>Toalhas</li>
                            <li>Mosquiteiro</li>
                            <li>Canais via satélite</li>
                            <li>Tomada perto da cama</li>
                            <li>Ar-condicionado</li>
                        </ul>

                        <p className="mb-4">
                            <b>Fumantes:</b>
                        </p>
                        <p>Não é permitido fumar</p>
                    </div>
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
                    <Gallery slides={images} />
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
            </main>
            <Footer />
        </>
    );
}
