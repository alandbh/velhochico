"use client";
import Image from "next/image";
import Button from "../_components/Button";
import Card from "../_components/Card";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import IconWhatsapp from "../_components/icons/Whatsapp";
import Title from "../_components/Title";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "../_components/LightBox";
const images = [
  { src: "/arvore.png" },
  { src: "/cachoeira1.png" },
  { src: "/cachoeira2.png" },
  { src: "/ceu.png" },
  { src: "/queijos.jpg" },
  { src: "/chale.jpg" },
];

export default function Atrativos() {
  const [index, setIndex] = React.useState(-1);
  return (
    <>
      <Header backgroundImg="/fusca.jpg">Atrativos</Header>
      <main className="py-22 ">
        <div className="text-center  w-full grid grid-cols-12 gap-5 gap-y-12">
          <div className="col-span-12">
            <Title>natureza, aventura e diversão</Title>
          </div>
          <p className="text-2xl row-start-2 col-span-8 col-start-3 text-center">
            Venha se encantar com o majestoso Rio São Francisco, ideal para um
            banho refrescante ou mergulho revigorante. Em apenas 18 km, explore
            a deslumbrante Cachoeira Casca D’Anta, a maior do Parque Nacional da
            Serra da Canastra.
          </p>
          <div className="w-full flex justify-center row-start-3 col-span-12">
            <Button
              text="reserve já"
              icon={<IconWhatsapp color="white" />}
              style="primary"
              href="https://wa.me/553799290110"
            />
          </div>
        </div>
        <div className="relative h-[37.25rem] w-full mt-12">
          <Image
            className="object-cover object-top"
            alt=""
            src="/cachoeira1.png"
            fill
          />
        </div>
        <div className="w-full grid grid-cols-12 gap-5 mb-[7.625rem] bg-gray-6 pt-12 h-[536px]">
          <div className="col-start-2 col-span-4 gap-y-10 flex flex-col">
            <h1 className="text-4xl">Aventuras inesqueciveis</h1>
            <p className="text-xl text">
              Sinta a adrenalina com atividades radicais como bóia-cross e
              aproveite o campo de futebol para momentos de descontração e
              diversão com amigos. Se aventure nas trilhas maravilhosas e
              passeios a cavalo, vivenciando a natureza de perto.
            </p>
          </div>
          <div className="col-span-6 relative">
            <div className="relative w-[12.75rem] h-[20.68rem]">
              <Image alt="" src="/ponte.jpg" fill />
            </div>
            <div className="relative h-[225px] w-[300px] top-[-316px] left-[203px]">
              <Image alt="" src="/futebol.jpg" fill />
            </div>
            <div className="relative w-[265px] h-[174px] top-[-310px] z-10">
              <Image alt="" src="/fusca.jpg" fill />
            </div>
            <div className="relative w-[340px] h-[234px] top-[-520px] left-[203px]">
              <Image alt="" src="/cavalo.jpg" fill />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            text="reserve já"
            icon={<IconWhatsapp color="white" />}
            style="primary"
            href="https://wa.me/553799290110"
          />
        </div>
        <div className="py-22">
          <Title>imagens de tiar o folego</Title>
          <div className="w-full grid grid-cols-12 gap-5 mt-12">
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
        <div className="w-full flex justify-center">
          <Button
            text="reserve já"
            icon={<IconWhatsapp color="white" />}
            style="primary"
            href="https://wa.me/553799290110"
          />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
