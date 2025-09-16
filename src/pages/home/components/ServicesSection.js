'use client';

import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading animate-fadeInUp text-[#090B0E] text-[32px] md:text-[44px] font-semibold leading-tight md:leading-[48px]">
          Best-in-Class Growth Services
        </h2>

        <p className="mt-4 text-sm md:text-lg text-[#3D4C5E] max-w-2xl mx-auto animate-fadeInUp">
          Unlock your brand’s full potential with performance-driven
          solutions—ranging from paid ads to CRO, content, and
          automation—to accelerate scale and maximize ROI.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {/* Box 1 */}
          <div className="p-7 border border-gray-300 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp max-w-lg mx-auto md:mr-1 md:ml-auto">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 text-purple-500 bg-purple-400 p-4 rounded-full">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <div className="ml-4 text-left text-[#090B0E]">
                <h3 className="text-xl font-bold">Web Development</h3>
              </div>
            </div>
            <p className="mt-4 text-left text-[#3D4C5E]">
              Build fast, scalable, and custom websites that deliver seamless user experiences and align perfectly with your business goals.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-7 border border-gray-300 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp max-w-lg mx-auto md:ml-1 md:mr-auto">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 text-purple-500 bg-purple-400 p-4 rounded-full">
                <i className="fas fa-search text-xl"></i>
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-xl font-bold text-[#090B0E]">
                  CRM Development
                </h3>
              </div>
            </div>
            <p className="mt-4 text-left text-[#3D4C5E]">
              Implement tailored CRM solutions to streamline operations, improve customer relationships, and boost overall efficiency.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-7 border border-gray-300 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp max-w-lg mx-auto md:mr-1 md:ml-auto">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 text-purple-500 bg-purple-400 p-4 rounded-full">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-xl font-bold text-[#090B0E]">
                  Digital Marketing
                </h3>
              </div>
            </div>
            <p className="mt-4 text-left text-[#3D4C5E]">
              Drive measurable growth with performance-focused strategies, including paid ads, content marketing, automation, and retention campaigns.
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-7 border border-gray-300 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp max-w-lg mx-auto md:ml-1 md:mr-auto">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 text-purple-500 bg-purple-400 p-4 rounded-full">
                <i className="fas fa-laptop-code text-xl"></i>
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-xl font-bold text-[#090B0E]">
                  SEO & AI Optimization
                </h3>
              </div>
            </div>
            <p className="mt-4 text-left text-[#3D4C5E]">
              Ensure your brand is discoverable and visible, leveraging both traditional SEO and AI-powered techniques to reach your audience effectively.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            <FaArrowCircleRight className="mr-2" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
