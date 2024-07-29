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
        <div className="row-start-3 col-span-10 z-20 col-start-2 flex justify-center items-end">
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
        className="flex min-h-screen flex-col items-center py-22"
      >
        <Title>A pousada</Title>
        <p className="text-2xl text-center mt-12">
          Desfrute da tranquilidade e da beleza da Serra da Canastra na Pousada
          Velho Chico.
        </p>
        <p className="text-2xl text-center">
          Um refúgio cercado por belas árvores como pau-brasil, jacarandá e ipê,
          a apenas 300 metros do Rio São Francisco.
        </p>
        <div className="grid grid-cols-12 gap-5 pt-12">
          <div className="col-start-2 col-span-5 text-xl flex flex-col gap-y-8">
            <p>
              Aproveite as belas praias, piscinas naturais e corredeiras para
              relaxar, nadar e praticar bóia cross. Desfrute de vistas
              deslumbrantes da Serra da Canastra, visíveis de toda a pousada,
              especialmente das varandas dos chalés.
            </p>
            <p>
              Viva a experiência autêntica de uma fazenda, tomando leite ao pé
              da vaca, saboreando o famoso queijo canastra e passeando a cavalo.
              Divirta-se no campo de futebol, explore com um guia turístico e
              comece o dia com um delicioso café da manhã mineiro.
            </p>
            <p>
              Ah! Não deixe de conferir o mirante localizado na parte alta da
              pousada! Perfeito para apreciar o pôr-do-sol com uma vista
              panorâmica da Serra e do rio, ideal para momentos românticos
              inesquecíveis.
            </p>
            <p>Estamos te esperando!</p>
          </div>
          <div className="col-span-6 w-auto relative">
            <Image alt="" src="/image_4.jpg" fill />
          </div>
        </div>
        <div className="py-22 w-full">
          <Title>Acomodações</Title>
          <div className="text-center text-2xl mt-[3.3rem] mb-12">
            <p>Aconchego, conforto e natureza!</p>
            <p>Temos várias opções de chalés, de acordo com sua necessidade.</p>
          </div>
          <Card image="/rede.jpg" title="Chalé de 1 quarto">
            Chalé com varanda, vista para a serra, ar-condicionado, frigobar e
            cozinha.
          </Card>
        </div>
        <div className="py-22 w-full">
          <Title>Algumas fotos</Title>
          <div className="text-2xl text-center my-12">
            <p>Aconchego, conforto e natureza!</p>
            <p>Temos várias opções de chalés, de acordo com sua necessidade.</p>
          </div>
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
        </div>
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
          render={{ slide: NextJsImage }}
        />
      </main>
      <Footer></Footer>
    </>
  );
}
