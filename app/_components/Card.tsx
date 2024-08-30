import Image from "next/image";
import Button from "./Button";

type CardProps = {
    image: string;
    title: string;
    children: React.ReactNode;
    url: string;
    id: string;
};

const Card = ({ image, title, children, url, id }: CardProps) => {
    return (
        <div className="w-full md:h-[21rem] grid grid-cols-12 md:gap-x-5 gap-x-3 px-3 md:px-0">
            <div className="flex flex-col self-center gap-y-[0.9rem] content md:col-span-5 col-span-7 md:col-start-2 text-darkest-blue md:pl-8">
                <h2 className="text-xl md:text-4xl">{title}</h2>
                <p className="max-md:text-sm">{children}</p>
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
            <div className="relative md:col-span-5 col-span-5 w-auto h-auto md:h-auto">
                <Image
                    className="object-cover"
                    alt=""
                    src={image}
                    quality={100}
                    fill
                />
            </div>
        </div>
    );
};

export default Card;
