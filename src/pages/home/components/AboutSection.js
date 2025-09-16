import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';
import { heading } from '../data';

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      {/* Left Image */}
      <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
        <Image
          src="/entertainer-presenting-tablet-from-sponsor-1.webp"
          alt="Left Image"
          width={250}
          height={420}
          className="rounded-[200px] object-cover object-center w-[250px] h-[420px]"
        />
      </div>

      {/* Middle Text */}
      <div className="flex-1 text-center md:text-left px-4 md:px-10 md:ml-10">
        <h1 className="text-3xl text-black font-bold mb-4">
          {heading}
        </h1>
        <p className="text-gray-700 mb-6">
          Arhova Systems is a technology-driven digital agency delivering best-in-class services to help your business scale across the digital landscape. Our approach combines data, creativity, and AI-powered solutions to drive measurable growth and lasting impact.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          <FaArrowCircleRight className="mr-2" />
          <span>Contact Us</span>
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center md:justify-start mt-8 md:mt-0">
        <Image
          src="/entertainer-presenting-tablet-from-sponsor-1.webp"
          alt="Right Image"
          width={250}
          height={420}
          className="rounded-[200px] object-cover object-center w-[250px] h-[420px]"
        />
      </div>
    </div>
  );
}
