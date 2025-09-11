"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Ravi Kumar",
      review:
        "Great service! The team was very professional and delivered on time.",
    },
    {
      name: "Priya Sharma",
      review: "Amazing experience, customer support was excellent!",
    },
    {
      name: "Ankit Verma",
      review: "Best company to work with. Highly recommended!",
    },
    {
      name: "Sneha Patel",
      review: "Quality work with affordable pricing. Totally worth it!",
    },
    {
      name: "Ankit Verma",
      review: "Best company to work with. Highly recommended!",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Google Reviews
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-12">
          Here’s what our clients say about us
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((rev, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow-md min-h-[220px] flex flex-col justify-between hover:shadow-lg transition">
                {/* Review */}
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {rev.review}
                </p>

                {/* Author + Stars */}
                <div>
                  <h4 className="font-semibold text-gray-900">{rev.name}</h4>
                  <div className="flex text-yellow-500 mt-2 text-lg">
                    {"⭐".repeat(5)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
