import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { Image } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  config?: any;
  className?: string;
};

export default function Slider(props: Props) {
  const { children, config, className } = props;
  return (
    <>
      <Swiper
        slidesPerView={config?.slidesPerView || 1}
        spaceBetween={config?.spaceBetween || 0}
        pagination={config?.pagination || false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={config?.breakpoints || {}}
        modules={[Autoplay, Pagination]}
        className={`${className} `}
      >
        {children}
      </Swiper>
    </>
  );
}
