import Button from "../_components/Button";
import Header from "../_components/Header";
import IconWhatsapp from "../_components/icons/Whatsapp";
import Footer from "../_components/Footer";
import Intro from "../_components/Intro";
import fetchData from "../lib/fetchData";
import { QUERY_ACOMODACOES } from "../lib/queries";
import Debugg from "../_components/Debugg";
import Card from "../_components/Card";
import fetchRooms from "../lib/fetchRooms";

export default async function Acomodacoes() {
    /**
     *
     * Fetching Hero data from API
     * --------------------------------
     */
    const pageDataJson = await fetchData<any>(QUERY_ACOMODACOES);
    const pageData = pageDataJson.pages.nodes[0];

    const roomsList = await fetchRooms();

    return (
        <>
            <Header backgroundImg={pageData.pageContent.banner.node.sourceUrl}>
                {pageData.title}
            </Header>
            <main className="grid grid-cols-12 px-3 md:px-5 max-w-screen-xl mx-auto text-darker-blue">
                <section className="col-span-10 grid grid-cols-10 col-start-2">
                    <Debugg data={pageData} filter="acomo" />
                    <Intro title={pageData.pageContent.chamada.titulo}>
                        <div
                            className="flex flex-col gap-12 leading-normal"
                            dangerouslySetInnerHTML={{
                                __html: pageData.pageContent.chamada
                                    .textoDaChamada,
                            }}
                        ></div>
                    </Intro>
                </section>

                <section className="col-span-12 col-start-1 my-20">
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
                    <div className="flex justify-center col-span-10 mt-20">
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
