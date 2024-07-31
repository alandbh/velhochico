"use client";
import Image from "next/image";
import Button from "../_components/Button";
import Header from "../_components/Header";
import IconWhatsapp from "../_components/icons/Whatsapp";
import Title from "../_components/Title";
import Lightbox from "yet-another-react-lightbox";
import React from "react";
import NextJsImage from "../_components/LightBox";
import Footer from "../_components/Footer";
const images = [
  { src: "/arvore.png" },
  { src: "/cachoeira1.png" },
  { src: "/cachoeira2.png" },
  { src: "/ceu.png" },
  { src: "/queijos.jpg" },
  { src: "/chale.jpg" },
];
export default function Culinaria() {
  const [index, setIndex] = React.useState(-1);
  return (
    <>
      <Header backgroundImg="/queijos.jpg">Culinária</Header>
      <div className="py-22 text-center">
        <Title>Sabor e Simplicidade No ponto</Title>
        <div className="text-2xl mt-12 gap-y-6 flex flex-col">
          <p>
            Experimente os mais variados sabores da culinária mineira! Na
            Pousada Velho Chico, você poderá se deliciar com os sabores típicos
            da nossa terra.
          </p>
          <p>
            No café da manhã, iguarias como broas, bolos, pães, doces, e o
            queijo canastra produzido na própria pousada.
          </p>
          <p>
            Além disso, você poderá aproveitar frutas colhidas diretamente do pé
            como laranja, abacate, manga, caju, jambo, goiaba, pitanga, jaca,
            ameixa e amora.
          </p>
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
      <div className="py-22 text-center">
        <Title>Para comer com os olhos</Title>

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

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
          render={{ slide: NextJsImage }}
        />
      </div>
      <div className="w-full flex justify-center mb-24">
        <Button
          text="reserve já"
          icon={<IconWhatsapp color="white" />}
          style="primary"
          href="https://wa.me/553799290110"
        />
      </div>
      <Footer></Footer>
    </>
  );
}
