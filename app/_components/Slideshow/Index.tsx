"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import Image from "next/image";
import styles from "./Index.module.css";
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
                delay: 2000 + Math.random() * 1200,
                disableOnInteraction: true,
            }}
            className="mySwiper h-full"
        >
            {props.slidesArr.map((slide: { sourceUrl: string }) => (
                <SwiperSlide
                    key={slide.sourceUrl}
                    className={styles.slideContainer}
                >
                    <div className="w-full h-full aspect-square max-sm:aspect-video ">
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
