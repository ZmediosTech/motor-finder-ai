import React from "react";
import appleStore from "../assets/download_apple.png";
import playStore from "../assets/download_play.png";
import huwaiStore from "../assets/download_huawei.png";
import swiperImg from "../../src/assets/swiper.png";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const About = () => {
  return (
    <div className="w-full m-auto">
      <div className="md:p-14 p-8">
        <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-normal pt-10 text-white mb-[52px]">
          About Motors Finder Ai
        </h1>

        <h3 className="relative text-white 2xl:text-3xl lg:text-2xl text-xl font-[350] pb-3 mb-9 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-60 after:h-[2px] after:bg-[#5B42FF] after:rounded">
          About
        </h3>


        <div className="flex flex-col gap-5">
          <p className="lg:text-xl md:text-lg text-sm font-light text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris egestas vulputate ante sed imperdiet. In placerat euismod justo.
          </p>
          <p className="lg:text-xl md:text-lg text-sm font-light text-white">
            Aenean id dolor semper velit aliquam fermentum at id ex. Mauris placerat felis turpis, sit amet ornare sapien dignissim ut. Etiam ac est orci. Mauris ultricies, massa ac blandit scelerisque, odio diam ornare leo, ac lobortis nisl sapien sit amet erat. Fusce elementum lacinia velit eu fringilla. Suspendisse eu lobortis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-6 py-2 px-4">
        <div className="text-white">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide className="text-white flex">
              <img src={swiperImg} alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg} alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg} alt="swiper" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="sm:my-6 m-3 sm:mx-8 flex justify-center">
          <div className="flex space-x-5 md:space-x-8 lg:space-x-10">
            <img src={appleStore} alt="Apple Store" className="h-5 md:h-6 lg:h-auto" />
            <img src={playStore} alt="Play Store" className="h-5 md:h-6 lg:h-auto" />
            <img src={huwaiStore} alt="Huawei Store" className="h-5 md:h-6 lg:h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
