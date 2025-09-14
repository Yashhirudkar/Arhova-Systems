"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function OurPlatforms() {
  const platforms = [
    { img: "/22-removebg-preview.png" },
    { img: "/55-removebg-preview.png" },
    { img: "/facebook1-removebg-preview.png" },
    { img: "/44-removebg-preview.png" },
    { img: "/11-removebg-preview.png" },
    { img: "/Snapchat-removebg-preview.png" },
    { img: "/66-removebg-preview.png" },
  ];

  return (
    <section className="bg-[#f1edf9] py-8">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-10">
        
        {/* Heading */}
        <h2 className="text-base md:text-lg font-semibold text-gray-900 whitespace-nowrap">
          OUR PLATFORMS
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={1}   // 👈 gap kam kar diya
          slidesPerView={5}
          navigation
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {platforms.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center">
                <img
                  src={item.img}
                  alt={`platform-${i}`}
                  className="w-29 h-auto object-contain" // 👈 image size adjust
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
