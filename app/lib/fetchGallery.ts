/**
 *
 * Fetching Home Gallery data from API
 * --------------------------------
 */

import fetchData from "./fetchData";


type AnyObject = Record<string, any>;

function findProperty(obj: AnyObject, propertyName: string): any {
    // Checks if property is defined in the object
    if (obj.hasOwnProperty(propertyName)) {
        return obj[propertyName];
    }

    // Iterates over properties of the object
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Busca recursivamente em objetos aninhados
            const result = findProperty(obj[key], propertyName);
            if (result) {
                return result;
            }
        }
    }

    // Returns null if property is not found
    return null;
}



export default async function fetchGallery(queryString: string, galleryName:string) {

    const galleryDataJson = await fetchData<any>(queryString);

        const galleryNodes = findProperty(galleryDataJson, galleryName);

        const galleryImages = galleryNodes.nodes.map(
                    (image: { sourceUrl: string }) => {
                        return {
                            src: image.sourceUrl,
                        };
                    }
                );

        return await galleryImages
}
