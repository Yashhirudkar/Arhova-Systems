'use client';

import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative text-white py-12 md:py-24 lg:py-32 overflow-hidden ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0  mt-6 lg:mt-0">
          <div className="flex items-center justify-center lg:justify-start mb-4 ">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-semibold text-green-500">
              Meta and Google Certified Consultants
            </span>
          </div>
          <h1
            className="
              font-semibold
              text-[34px] leading-[38px]   /* mobile default */
              sm:text-[44px] sm:leading-[48px]  /* tablets */
              md:text-[54px] md:leading-[58px]  /* small laptops */
              lg:text-[64px] lg:leading-[65px]  /* large screens */
            "
          >
            <span className="inline-block mr-2 animate-fadeInUp text-black" style={{ animationDelay: '0s' }}>
              Building Future-Ready
            </span>
            <span className="inline-block mr-2 animate-fadeInUp text-black" style={{ animationDelay: '0.2s' }}>
              Digital Ecosystems
            </span>
            <span className="inline-block mr-2 animate-fadeInUp text-black" style={{ animationDelay: '0.4s' }}>
              for Your 
            </span>
            <span className="inline-block mr-2 animate-fadeInUp text-black" style={{ animationDelay: '0.6s' }}>
              Business
            </span>
          </h1>

          <p
            className="mt-4 text-lg md:text-xl text-gray-400 animate-fadeInUp"
            style={{ animationDelay: '0.8s' }}
          >
            Our expertise in performance marketing, AI optimization, CRO, and custom development helps your brand stay ahead in the digital world.
          </p>

          <div
            className="mt-8 flex flex-row space-x-4 justify-center lg:justify-start animate-fadeInUp"
            style={{ animationDelay: '1s' }}
          >
            <a
              href="/web-development"
              className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-300 font-bold text-white flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Our Services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300 font-bold text-white flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Contact Now
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative mt-10 lg:mt-0">
          <Image
            src="/hero-image.webp"
            alt="Digital marketing agency services"
            width={900}
            height={727}
            className="relative z-10 w-full rounded-md"
          />
          <Image
            src="/header-author-img1.webp"
            alt="Report icon"
            width={240}
            height={223}
            className="absolute bottom-5 left-0 animate-pulse-slow hidden lg:block"
          />
          <Image
            src="/instagram.png"
            alt="Instagram icon"
            width={50}
            height={50}
            className="absolute top-10 left-5 transform rotate-15 animate-spin-slow hidden lg:block"
          />
          <Image
            src="/facebook-1.png"
            alt="Facebook icon"
            width={50}
            height={50}
            className="absolute top-20 right-5 transform rotate-10 animate-spin-slow hidden lg:block"
          />
          <Image
            src="/shopify.png"
            alt="Shopify icon"
            width={50}
            height={50}
            className="absolute bottom-5 right-20 transform -rotate-10 animate-spin-slow hidden lg:block"
          />
          <Image
            src="/adwords.png"
            alt="AdWords icon"
            width={50}
            height={50}
            className="absolute bottom-10 left-40 transform -rotate-15 animate-spin-slow hidden lg:block"
          />
          <Image
            src="/Ellipse-120.webp"
            alt="Ellipse"
            width={198}
            height={198}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fadeInUp hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
