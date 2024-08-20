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
};
const Gallery = ({ slides }: GalleryProps) => {
    const [index, setIndex] = useState(-1);

    return (
        <div>
            <div className="grid grid-cols-3">
                {slides.map((image, index) => (
                    <Image
                        key={index}
                        className="object-cover aspect-square cursor-pointer"
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        onClick={() => setIndex(index)}
                        width={3000}
                        height={3000}
                        role="button"
                        aria-label="Expandir imagem"
                    />
                ))}
                <Image
                    className="object-cover aspect-square"
                    src={slides[0].src}
                    alt={`Image ${index + 1}`}
                    onClick={() => setIndex(index)}
                    width={3000}
                    height={3000}
                />
                <Image
                    className="object-cover aspect-square"
                    src={slides[1].src}
                    alt={`Image ${index + 1}`}
                    onClick={() => setIndex(index)}
                    width={3000}
                    height={3000}
                />
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
