const apiUrl:string | undefined = process.env.API_URL

type AnyObject = Record<string, any>;
export default async function fetchData<T>(queryString: string, variables?:AnyObject): Promise<T> {

    if (apiUrl !== undefined) {
        const dataRaw = await fetch(
            apiUrl,
            {
                method: "POST",
    
                headers: {
                    "Content-Type": "application/json",
                },
    
                body: JSON.stringify({
                    query: queryString,
                    variables
                }),
                cache: "force-cache",
            }
        );
    
        const dataJson =  await dataRaw.json() ;
        
        return dataJson.data as Promise<T>
    }

    return {} as Promise<T>

}