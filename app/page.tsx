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
import Arrow from "./_components/icons/Arrow";
import Link from "next/link";

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
    <>
      <header className="h-[80vh] before:content[''] before:h-full before:w-full before:absolute before:bg-header-bg before:z-10 relative w-full   grid grid-cols-12 gap-5 grid-rows-4">
        <Image
          alt=""
          src={"/header-img.jpg"}
          quality={100}
          fill
          className="object-fill object-center"
        />
        <div className="flex justify-between h-fit items-center z-10 col-span-10 col-start-2">
          <div className="">
            <LogoLink href="/"></LogoLink>
          </div>
          <div className="col-start-7 flex align-baseline">
            <NavMenu></NavMenu>
          </div>
        </div>
        <div className="text-white z-10 w-full col-start-2 col-span-10">
          <p className="text-[2rem]">Conheça os encantos da</p>
          <h1 className="text-white z-10 font-licorice text-9xl text-center flex items-center self-center">
            Serra da Canastra
          </h1>
          <p className="z-10 w-[30rem]">
            Na <b>Pousada Velho Chico</b>, você encontra natureza, comida boa,
            queijos deliciosos e muito mais!
          </p>
        </div>
        <div className="row-start-3 col-span-10 z-10 col-start-2 flex justify-center items-end">
          <Button
            text="reserve já"
            icon={<IconWhatsapp color="white" />}
            style="primary"
            href="https://wa.me/553799290110"
          />
        </div>
        <div className="z-10 row-start-4 col-span-12 flex justify-center items-center rotate-90">
          <Link href="#content">
            <Arrow color="white" height="40" width="40" />
          </Link>
        </div>
      </header>
      <main
        id="content"
        className="flex min-h-screen flex-col items-center p-24"
      >
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
        <div className="w-full grid grid-cols-12 gap-5">
          <div className="col-start-2 col-span-10 w-full grid grid-cols-3 grid-rows-2 grid-flow-col">
            {images.map((image, index) => (
              <div
                key={index}
                className="h-81 w-auto relative hover:cursor-pointer"
              >
                <Image
                  key={index}
                  className="object-cover"
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  onClick={() => setIndex(index)}
                  fill
                />
              </div>
            ))}
          </div>
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
    </>
  );
}
