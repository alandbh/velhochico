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
            <div className="flex flex-wrap items-center justify-center">
                {slides.map((image, index) => (
                    <div
                        key={index}
                        className="xl:size-80 lg:size-64 md:size-56 sm:size-40 size-32 relative hover:cursor-pointer"
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
