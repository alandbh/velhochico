"use client";
import * as React from "react";
import Image from "next/image";
import LogoLink from "./_components/LogoLink";
import Button from "./_components/Button";
import IconWhatsapp from "./_components/icons/Whatsapp";
import Title from "./_components/Title";
import NavMenu from "./_components/NavMenu";
import Header from "./_components/Header";
import Card from "./_components/Card";
import Footer from "./_components/Footer";
import NextJsImage from "./_components/LightBox";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/arvore.png" },
  { src: "/cachoeira1.png" },
  { src: "/cachoeira2.png" },
  { src: "/ceu.png" },
  { src: "/queijos.jpg" },
  { src: "/chale.jpg" },
];

export default function Home() {
  const [index, setIndex] = React.useState(-1);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LogoLink href="/" />
      <br />
      <Button
        text="reserve já"
        icon={<IconWhatsapp color="blue" />}
        style="primary"
        href="/#"
      />
      <br />
      <Button
        text="reserve já"
        href="/#"
        icon={<IconWhatsapp color="red" />}
      ></Button>

      <div className="w-[300px] grid grid-cols-12  border border-slate-500 h-[200px]">
        <div className="bg-red-500 h-5 col-span-2 start-2 col-start-2"></div>
        <div className="bg-green-500 h-5 "></div>
      </div>
      <Title>
        <h1 className="font-gideonRoman">chalé de 1 quarto</h1>
      </Title>

      <NavMenu></NavMenu>
      <Header backgroundImg="/rede.jpg">Acomodações</Header>
      <br />
      <Card image="/rede.jpg" title="Chalé de 1 quarto">
        Chalé com varanda, vista para a serra, ar-condicionado, frigobar e
        cozinha.
      </Card>
      <br />
      <div className="w-full flex">
        {images.map((image, index) => (
          <div key={index} className="h-81 w-81 relative">
            <Image
              key={index}
              className="object-cover"
              src={image.src}
              alt={`Image ${index + 1}`}
              onClick={() => setIndex(index)}
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        render={{ slide: NextJsImage }}
      />
      <Footer></Footer>
    </main>
  );
}
