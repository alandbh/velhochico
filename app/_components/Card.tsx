import Image from "next/image";
import Button from "./Button";
import { getPlaiceholder } from "plaiceholder";

type CardProps = {
    image: string;
    title: string;
    children: React.ReactNode;
    url: string;
    id: string;
};

const Card = async ({ image, title, children, url, id }: CardProps) => {
    const buffer = await fetch(image).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
    });

    const { base64 } = await getPlaiceholder(buffer);

    return (
        <div className="w-full md:h-[21rem] grid grid-cols-12 md:gap-x-5 gap-x-2 px-3 md:px-0">
            <div className="flex flex-col self-center gap-y-[0.9rem] content md:col-span-5 col-span-8 md:col-start-2 text-darkest-blue md:pl-8">
                <h2 className="text-xl md:text-4xl">{title}</h2>
                <p className="max-md:text-base">{children}</p>
                <div className="max-md:hidden">
                    <Button
                        size="medium"
                        text="confira"
                        href={`${url}?id=${id}`}
                    ></Button>
                </div>
                <div className="md:hidden">
                    <Button
                        size="small"
                        text="confira"
                        href={`${url}?id=${id}`}
                    ></Button>
                </div>
            </div>
            <div className="relative md:col-span-5 col-span-4 w-auto h-auto md:h-auto">
                <Image
                    className="object-cover"
                    alt=""
                    src={image}
                    quality={100}
                    fill
                    sizes="10"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={base64}
                />
            </div>
        </div>
    );
};

export default Card;
