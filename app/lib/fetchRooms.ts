import fetchData from "./fetchData";
import { QUERY_ROOMS_LIST } from "./queries";

/**
     *
     * Fetching rooms data from API
     * --------------------------------
     */
async function fetchRooms() {
    const roomsListJson = await fetchData<any>(QUERY_ROOMS_LIST);
    
    type Room = {
        title: string;
        intro: string;
        url: string;
        thumbnail: string;
        id: string;
    };
    
    const roomsList: Room[] = roomsListJson.acomodacoes.nodes.map(
        (room: any) => {
            return {
                title: room.title,
                intro: room.informacoesDaAcomodacao.textoDeChamada,
                url: `/acomodacoes/${room.slug}`,
                thumbnail:
                    room.informacoesDaAcomodacao.thumbnail.node.mediaDetails
                        .filteredSizes[0].sourceUrl,
                id:room.databaseId
            };
        }
    );

    return roomsList

}
export default fetchRooms