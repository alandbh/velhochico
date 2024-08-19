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
            <div className="flex flex-wrap">
                {slides.map((image, index) => (
                    <div
                        key={index}
                        className="size-80 relative hover:cursor-pointer"
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
