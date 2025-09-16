'use client';

import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { platforms } from '../data';

export default function PlatformsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [screenSize, setScreenSize] = useState("lg"); // "sm" | "md" | "lg"

  // Detect screen size (mobile, md, or large)
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 768) setScreenSize("sm");
      else if (window.innerWidth < 1024) setScreenSize("md");
      else setScreenSize("lg");
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Calculate number of visible items based on screen size
  const itemsToShow = screenSize === "sm" ? 3 : 5;

  // Prev & Next Handlers
  const handlePrev = () => {
    setActiveTab((prev) =>
      prev === 0 ? platforms.length - itemsToShow : prev - 1
    );
  };

  const handleNext = () => {
    setActiveTab((prev) =>
      prev >= platforms.length - itemsToShow ? 0 : prev + 1
    );
  };

  // Select visible platforms dynamically
  const visiblePlatforms = platforms.slice(activeTab, activeTab + itemsToShow);

  return (
    <section className="bg-[#F5F3FF] py-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-4 md:space-y-0 md:space-x-8">
        {/* Heading */}
        <h3 className="text-sm md:text-base font-semibold tracking-wide text-gray-800 text-center md:text-left">
          OUR PLATFORMS
        </h3>

        {/* Stepper Container */}
        <div className="flex items-center w-full md:w-auto justify-between md:justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-gray-600 hover:text-gray-900 transition p-2"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Platform Images */}
          <div className="flex items-center justify-center space-x-8 overflow-hidden px-2 md:px-2">
            {visiblePlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`flex-shrink-0 flex flex-col items-center transition-opacity duration-300 ${
                  index === 0 ? "opacity-100" : "opacity-80"
                }`}
              >
                <Image
                  src={platform.img}
                  alt={platform.name}
                  width={90}
                  height={40}
                  className="object-contain max-w-[70px] sm:max-w-[80px] md:max-w-[100px]"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-gray-600 hover:text-gray-900 transition p-2"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
