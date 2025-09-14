// pages/digital-marketing.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CTASection from '@/components/ctasection/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faClipboardList, 
  faBell, 
  faCalendarAlt, 
  faChartBar, 
  faMinus, 
  faPlus, 
  faArrowCircleRight,
  faClipboardCheck,
  faMobileAlt,
  faLaptop
} from '@fortawesome/free-solid-svg-icons';
import WhyChooseUs from '@/components/whychoose/page';

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Digital Marketing - arhovasystems</title>
        <meta name="description" content="Professional digital marketing services from arhovasystems" />
      </Head>

             <main className="max-w-9xl mx-auto px-0 sm:px-0 lg:px-0 mt-12">

        {/* Header Section */}
        <header 
          className="text-center py-35 sm:py-24 md:py-32 lg:py-40 -mt-20 sm:-mt-20 lg:-mt-20"
          style={{ 
            background: 'linear-gradient(150deg, rgba(222, 189, 246, 1), rgba(233, 226, 250, 0.72))'
          }}
        >
          <h1
            className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: '"Figtree", sans-serif',
              lineHeight: '1.2',
              color: 'var(--e-global-color-text)',
            }}
          >
            Digital Marketing
          </h1>
          
          <p
            className="text-black-700 mt-2 sm:mt-4 text-base sm:text-lg"
            style={{ 
              fontFamily: '"Figtree", sans-serif',
            }}
          >
            Arhova Systems &raquo; Digital Marketing
          </p>
        </header>

        {/* Digital Marketing Section */}
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Content Section */}
          <div className="flex flex-col lg:flex-row items-center py-8 sm:py-12 px-4 sm:px-6">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <img 
                src="seo-Arhova-image.jpg" 
                alt="Digital Marketing" 
                className="w-full rounded-lg"
              />
            </div>

            <div className="lg:w-1/2 max-w-full lg:max-w-[550px]">
              <h2 className="text-xl font-bold text-purple-600 mb-4">Digital Marketing</h2>
              <h3 className="text-3xl sm:text-4xl font-semibold leading-tight sm:leading-[48px] text-gray-900 mb-6">
                We drive growth through strategic digital marketing solutions.
              </h3>

              <p className="text-gray-700 mb-4">
                Our comprehensive digital marketing strategy focuses on maximizing your online presence, 
                driving qualified traffic, and converting visitors into loyal customers.
              </p>
              <p className="text-gray-700 mb-6">
                Looking for a results-driven digital marketing agency? arhovasystems excels at driving 
                measurable results for key metrics like organic traffic, conversion rates, ROI, and customer acquisition.
              </p>
              <a 
                href="/web-development" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" />
                View Our Services
              </a>
            </div>
          </div>

          {/* What does Digital Marketing include Section */}
          <div className="py-12 px-4 sm:px-6 bg-gray-50 mt-10 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-base font-bold leading-[20px] text-purple-600 mb-4">
                Digital Marketing
              </h2>
              <h3 className="text-3xl sm:text-4xl font-semibold leading-tight sm:leading-[48px] text-gray-900">
                What does Digital Marketing include?
              </h3>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center border border-gray-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faClipboardCheck} className="text-purple-600 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-2">SEO Optimization</h4>
                <p className="text-gray-700 text-base">
                  Improve your search engine rankings and organic visibility
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center border border-gray-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faMobileAlt} className="text-purple-600 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Social Media Marketing</h4>
                <p className="text-gray-700 text-base">
                  Engage your audience across all major social platforms
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center border border-gray-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faLaptop} className="text-purple-600 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Content Marketing</h4>
                <p className="text-gray-700 text-base">
                  Create valuable content that attracts and converts
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center border border-gray-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faChartBar} className="text-purple-600 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Analytics & Reporting</h4>
                <p className="text-gray-700 text-base">
                  Data-driven insights to optimize your marketing strategy
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center border border-gray-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faClipboardList} className="text-purple-600 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-2">PPC Advertising</h4>
                <p className="text-gray-700 text-base">
                  Targeted paid campaigns for immediate results</p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center border border-gray-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBell} className="text-purple-600 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Email Marketing</h4>
                <p className="text-gray-700 text-base">
                  Nurture leads and maintain customer relationships
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-12 sm:py-16 bg-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Digital Marketing Impact</h2>
                <p className="text-sm sm:text-lg text-gray-600 mt-2 sm:mt-4">Driving measurable results for our clients</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600">87%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Increase in Organic Traffic</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600">45%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Higher Conversion Rates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600">3.2x</div>
                  <div className="text-gray-600 text-sm sm:text-base">ROI on Marketing Spend</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600">200+</div>
                  <div className="text-gray-600 text-sm sm:text-base">Successful Campaigns</div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Digital Marketing Process</h2>
                <p className="text-sm sm:text-lg text-gray-600 mt-2 sm:mt-4">A structured approach to your success</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
                  <p className="text-gray-600 text-sm">Understanding your business and goals</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                  <p className="text-gray-600 text-sm">Creating a customized marketing plan</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                  <p className="text-gray-600 text-sm">Executing the strategy across channels</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Optimization</h3>
                  <p className="text-gray-600 text-sm">Continuous improvement based on data</p>
                </div>
              </div>
            </div>
          </div>

          <WhyChooseUs />
        </div>
        <CTASection />
      </main>
    </div>
  );
}