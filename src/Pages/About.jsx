import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import React, { useRef, useState } from "react";
const About = () => {
  return (
    <>
      <div className="2xl:w-[1400px] xl:w-[1200px] lg:w-[992px] md:w-[700px] sm:w-[600px] p-4 w-98% m-auto">
        <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl  font-normal pt-24 text-white mb-[52px]">
          Abut Motors Finder Ai
        </h1>

        <h3 className="w-24 text-white 2xl:text-3xl lg:text-2xl text-lg  font-[350] pb-5 border-b-2 border-b-[#5B42FF] mb-9">
          About
        </h3>

        <div className="mb-20 flex flex-col gap-5">
          <p className="md:text-xl  text-sm  font-light text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus,
            quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec
            nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit
            est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit
            amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id
            ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt
            id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris
            egestas vulputate ante sed imperdiet. In placerat euismod justo.
          </p>
          <p className="text-xl font-light text-white">
            Aenean id dolor semper velit aliquam fermentum at id ex. Mauris
            placerat felis turpis, sit amet ornare sapien dignissim ut. Etiam ac
            est orci. Mauris ultricies, massa ac blandit scelerisque, odio diam
            ornare leo, ac lobortis nisl sapien sit amet erat. Fusce elementum
            lacinia velit eu fringilla. Suspendisse eu lobortis odio. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </div>
        <div className="text-white">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide className="text-white flex">
              <img src="../../src/assets/swiper.png" alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="../../src/assets/swiper.png" alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="../../src/assets/swiper.png" alt="swiper" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-wrap  gap-16 justify-center py-10">
          <img
            src="../../src/assets/download_apple.png"
            alt="apple"
            className="h-5 md:h-6 lg:h-auto"
          />
          <img
            src="../../src/assets/download_play.png"
            alt="play"
            className="h-5 md:h-6 lg:h-auto"
          />
          <img
            src="../../src/assets/download_huawei.png"
            alt="huawei"
            className="h-5 md:h-6 lg:h-auto"
          />
        </div>
      </div>
    </>
  );
};
export default About;
