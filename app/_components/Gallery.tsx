"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./LightBox";
import "yet-another-react-lightbox/styles.css";

type GalleryProps = {
    slides: Slide[];
};

type Slide = {
    src: string;
    thumb?: string;
};
const Gallery = ({ slides }: GalleryProps) => {
    const [index, setIndex] = useState(-1);

    return (
        <div>
            <div className="grid grid-cols-3">
                {slides.map((image, index) => (
                    <Image
                        key={index}
                        className="object-cover aspect-square cursor-pointer transition-all brightness-90 hover:brightness-125 hover:ring-slate-400/50 hover:ring-1 hover:ring-offset-slate-50 hover:ring-offset-8 hover:shadow-2xl hover:z-50"
                        src={image.thumb || image.src}
                        alt={`Image ${index + 1}`}
                        onClick={() => setIndex(index)}
                        width={400}
                        height={400}
                        role="button"
                        aria-label="Expandir imagem"
                    />
                ))}
            </div>
            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
                render={{ slide: NextJsImage }}
            />
        </div>
    );
};

export default Gallery;
