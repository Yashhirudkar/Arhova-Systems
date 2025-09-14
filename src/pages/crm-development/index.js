// pages/crm-development.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CTASection from '@/components/ctasection/page';
import { FaArrowCircleRight, FaClipboardList, FaPaintBrush, FaVial, FaProjectDiagram, FaHeartbeat } from 'react-icons/fa';      
import { FaStore, FaLaptopCode, FaHandshake } from 'react-icons/fa';
import WhyChooseUs from '@/components/whychoose/page';
import Image from "next/image";


const steps = [
    { title: "1. Planning", icon: <FaClipboardList /> },
    { title: "2. Designing", icon: <FaPaintBrush /> },
    { title: "3. Development", icon: <FaLaptopCode /> },
    { title: "4. Testing", icon: <FaVial /> },
    { title: "5. Deployment", icon: <FaProjectDiagram /> },
    { title: "6. Maintenance", icon: <FaHeartbeat /> },
  ];


export default function CRMDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>CRM Development - arhovasystems</title>
        <meta name="description" content="Custom CRM development services from arhovasystems" />
      </Head>

      <main className="max-w-9xl mx-auto px-0 sm:px-0 lg:px-0 mt-12">

        {/* Header Section */}
        <header 
          className="text-center py-30 sm:py-24 md:py-32 lg:py-20 -mt-20 sm:-mt-20 lg:-mt-12"
          style={{ 
            background: 'linear-gradient(150deg, rgba(222, 189, 246, 1), rgba(233, 226, 250, 0.72))'
          }}
        >      
          <h1
            className="mt-19 mb-4 font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: '"Figtree", sans-serif',
              lineHeight: '1.1',
              color: 'var(--e-global-color-text)',
            }}
          >
            CRM Development
          </h1>

          <p
            className="text-black-700 mb-30 text-base sm:text-lg"
            style={{
              fontFamily: '"Figtree", sans-serif',
            }}
          >
            Arhova Systems &raquo; CRM Development
          </p>
        </header>

        {/* Digital Marketing Section */}
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Content Section */}
             <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA"
            alt="Website Development"
            width={900}
            height={900}
            className="rounded-lg w-full max-w-sm md:max-w-md"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 mt-10">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 animate-fadeInUp">
            CRM Development
          </h2>

          {/* Short Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed animate-fadeInUp">
            Experience cutting-edge CRM solutions with Arhova Systems, streamlining your sales, enhancing customer relationships, and driving measurable business growth.
          </p>

          {/* Detailed Description */}
          <p className="text-gray-600 leading-relaxed animate-fadeInUp text-sm md:text-base">
            We offer custom website design, responsive layouts, e-commerce
            solutions, content management systems, front-end and back-end
            development, API integrations, and website support & maintenance.
            We ensure your website is user-friendly, SEO-optimized, and tailored
            to your business needs.
          </p>

          {/* Button */}
          <div className="pt-4">
            <Link
              href="/web-development"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700 transition"
            >
              <i className="fas fa-arrow-circle-right"></i>
              View Our Services
            </Link>
          </div>
        </div>
      </div>

          {/* What does Digital Marketing include Section */}
          <div className="text-center mb-2 mt-20">
              <h2
            className="text-base font-bold leading-5 text-[#4E2FDA] animate-fadeInUp"
          >
            CRM Development
          </h2>
      </div>

      {/* Animated Sub Heading */}
          <div className="text-center mb-12">
            <h2
            className="text-3xl sm:text-4xl md:text-[44px] font-semibold leading-[40px] md:leading-[48px] text-black tracking-wide"
            >
              Our CRM Development Services
            </h2>

      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 animate-fadeInUp mb-30">
        {/* Service 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg border-[0.5px] border-[#C3C5C1]">
          <FaStore className="text-indigo-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Custom CRM Solutions</h3>
          <p className="text-gray-600 text-sm md:text-base">
            Tailored CRM systems to match your business workflows and goals
          </p>
        </div>

        {/* Service 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg border-[0.5px] border-[#C3C5C1]">
          <FaLaptopCode className="text-indigo-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            CRM Automation &amp; Analytics
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Automate processes, track leads, and gain actionable insights
          </p>
        </div>

        {/* Service 3 */}
       <div className="flex flex-col items-center text-center p-6 rounded-lg border-[0.5px] border-[#C3C5C1]">
          <FaHandshake className="text-indigo-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Support &amp; Maintenance
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Ongoing CRM updates, integrations, &amp;  technical support
          </p>
        </div>
      </div>

          <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-base font-bold leading-5 text-[#4E2FDA] text-center mb-2">
      CRM Development
      </h2>

      {/* Subheading */}
        <h3 className="text-3xl sm:text-4xl md:text-[44px] leading-[40px] md:leading-[48px] font-semibold text-black-600 text-center mb-10">
      Our Process
      </h3>


      {/* Steps Stair Layout */}
   <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left: Steps Staircase */}
  <div className="flex flex-col items-end md:items-start gap-4 ml-auto md:ml-0">
    {steps.map((step, index) => (
      <div
        key={index}
        className="flex items-center justify-between w-64 sm:w-72 p-3 bg-white rounded-lg shadow hover:shadow-lg transition"
        style={{
          marginLeft: `${index * 20}px`, // md+ screens
          marginLeft: `${index * 10}px` // small screens
        }}
      >
        <span className="font-semibold text-gray-800">{step.title}</span>
        <span className="text-gray-600 text-xl">{step.icon}</span>
      </div>
    ))}
  </div>

  {/* Right: Description + Button */}
  <div className="text-center md:text-left">
    <p className="text-sm sm:text-base font-normal leading-6 text-gray-600 max-w-xl mx-auto md:mx-0 mb-8">
      At Arhova Systems, our CRM development process ensures we deliver robust, scalable, and efficient customer relationship solutions. We follow a structured approach aligned with the Software Development Life Cycle (SDLC), guaranteeing high-quality, maintainable software tailored to your business needs.
    </p>

    <Link
      href="/seo-support"
      className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full transition"
    >
      <FaArrowCircleRight />
      View Our Services
    </Link>
  </div>
</div>


      </div>



          <WhyChooseUs />
        </div>
        <CTASection />
      </main>
    </div>
  )
}