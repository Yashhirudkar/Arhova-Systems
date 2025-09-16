'use client';

import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { recommendations } from '../../../data/homeData';

export default function RecommendationsSection() {
  const [currentRecIndex, setCurrentRecIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2
        className="text-center mb-3 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-tight"
        style={{ fontSize: "44px", lineHeight: "48px", color: "#1f2937" }}
      >
        LinkedIn Recommendations
      </h2>

      <p className="text-center text-gray-600 mb-8">
        See what industry leaders have to say about our founders
      </p>

      {recommendations.length > 0 && (
        <div className="mb-10 relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={() =>
              setCurrentRecIndex((prev) =>
                prev === 0 ? recommendations.length - 1 : prev - 1
              )
            }
            className="absolute left-0 text-gray-600 hover:text-gray-900 transition p-2"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Testimonial Content */}
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="relative w-20 h-20">
                <Image
                  src={recommendations[currentRecIndex].avatar}
                  alt={recommendations[currentRecIndex].name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-center -mb-1">
                {recommendations[currentRecIndex].name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {recommendations[currentRecIndex].position}
              </p>
            </div>

            <div className="mt-3 p-4 rounded-md bg-[#f8f8f8] text-black leading-relaxed text-center">
              <p>{recommendations[currentRecIndex].content}</p>
            </div>

            {/* Counter */}
            <span className="block text-center text-sm text-gray-600 mt-3">
              {currentRecIndex + 1} / {recommendations.length}
            </span>
          </div>

          {/* Right Button */}
          <button
            onClick={() =>
              setCurrentRecIndex((prev) =>
                prev === recommendations.length - 1 ? 0 : prev + 1
              )
            }
            className="absolute right-0 text-gray-600 hover:text-gray-900 transition p-2"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
