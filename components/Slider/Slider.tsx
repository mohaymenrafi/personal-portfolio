import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay
      >
        <SwiperSlide>
          <img
            className="w-32 h-32"
            src="/project-images/amazon-clone.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 h-32"
            src="/project-images/blog-banner.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 h-32"
            src="/project-images/shopr-banner.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
