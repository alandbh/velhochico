"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import Image from "next/image";
// import { Container } from './styles';

type SlideType = {
    sourceUrl: string;
};

type SlidesType = SlideType[];

function Slideshow(props: { slidesArr: SlidesType }) {
    console.log("slider", props.slidesArr);

    return (
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            className="mySwiper h-full"
        >
            {props.slidesArr.map((slide: { sourceUrl: string }) => (
                <SwiperSlide
                    key={slide.sourceUrl}
                    style={{ filter: "drop-shadow(-10px -4px 60px #44444477)" }}
                >
                    <div className="w-full h-full aspect-square max-sm:max-w-36">
                        <Image
                            className="rounded-lg aspect-square object-cover"
                            src={slide.sourceUrl}
                            fill
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slideshow;
