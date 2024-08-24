export default async function fetchData<T>(queryString: string): Promise<T> {
    const dataRaw = await fetch(
        "https://apivelhochico.alanvasconcelos.net/index.php?graphql",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                query: queryString,
            }),
            cache: "force-cache",
        }
    );

    const dataJson =  await dataRaw.json() ;

    return dataJson.data as Promise<T>
}