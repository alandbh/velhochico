import Image from "next/image";
import Button from "./Button";

type CardProps = {
  image: string;
  title: string;
  children: React.ReactNode;
};

const Card = ({ image, title, children }: CardProps) => {
  return (
    <div className="w-full h-[21rem] grid grid-cols-12 gap-x-5">
      <div className="flex flex-col self-center gap-y-[0.9rem] content col-span-5 col-start-2 text-darkest-blue pl-8">
        <h2 className="text-4xl">{title}</h2>
        <p>{children}</p>
        <Button text="confira" style="primary" href="#"></Button>
      </div>
      <div className="relative col-span-5 w-auto">
        <Image
          className=""
          alt=""
          src={image}
          quality={100}
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Card;
