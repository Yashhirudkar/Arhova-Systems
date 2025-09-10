// pages/contact.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CTASection from '@/components/ctasection/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClipboardList, faBell, faCalendarAlt, faChartBar, faMinus, faPlus, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import WhyChooseUs from '@/components/whychoose/page';

export default function Marketing() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Digital-Marketing - arhovasystems</title>
        <meta name="description" content="Read the latest articles and insights from arhovasystems" />
      </Head>

      <main className="max-w-9xl mx-auto px-10 sm:px-20 lg:px-0">
        {/* Header Section */}
        <header 
          className="text-center mb-4 mt-0 text-gray-900 py-20"
          style={{ 
            background: 'linear-gradient(150deg, rgba(222, 189, 246, 1), rgba(233, 226, 250, 0.72))'
          }}
        >         
          <h1
            className="mt-19 mb-4 font-bold text-gray-900"
            style={{
              fontFamily: '"Figtree", sans-serif',
              fontSize: '56px',
              lineHeight: '60px',
              color: 'var(--e-global-color-text)',
            }}
          >
            Digital-Marketing

          </h1>
          
          <p
            className="text-bkack-700 mb-30 text-lg"
            style={{ 
              fontFamily: '"Figtree", sans-serif',
            }}
          >
            Arhova Systems &raquo; Digital-Marketing

          </p>
        </header>

        {/* Retention Marketing Section */}
          <div className="bg-white rounded-lg overflow-hidden">

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center py-12 px-8">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <img 
                  src="https://toposel.com/wp-content/uploads/2025/07/Image-3.webp" 
                  alt="Retention Marketing" 
                  className="w-120 rounded-lg  ml-37"
                />
              </div>


          <div className="lg:w-1/2 -mt-[70px] max-w-[550px] ml-20 ">
                <h2 className="text-1xl font-bold text-purple-600 mb-4 ">Retention Marketing</h2>
                <h3 className=" text-[44px] font-semibold leading-[48px] text-gray-900 mb-6">
                We keep your customers keep coming back to you.
                </h3>

                <p className="text-gray-700 mb-4">
                  Our strategy focuses on reducing cost per order and improving ROAS by prioritizing customer retention over acquisition, thereby enhancing LTV/CAC.
                </p>
                <p className="text-gray-700 mb-6">
                  Looking for a number-driven digital and retention marketing agency? arhovasystems excels at driving results for key metrics like sales from repeating customers, customer cohorts, returning user ROAS and more.
                </p>
                <a 
                  href="/services" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" />
                  View Our Services
                </a>
              </div>
            </div>

            {/* What does Retention include Section */}
            <div className="py-12 px-8 bg-gray-50 mt-10 mb-20 ">
              <div className="text-center mb-12">
                <h2 className="text-[16px] font-bold leading-[20px] text-purple-600 mb-4">
                    Retention Marketing
                    </h2>

                <h3 className="text-[44px] font-semibold leading-[48px] text-gray-900">
                        What does Retention include?
                        </h3>
              </div>

                   <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Feature 1 */}
                   <div className="bg-white p-6 rounded-lg flex items-start gap-4 border border-gray-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faClipboardList} className="text-purple-600 text-xl" />
                        </div>
                        <div>
                        <h4 className="text-2xl font-semibold mb-1">User Journey Creation</h4>
                        <p className="text-gray-700 text-base font-normal">
                            Reach out to your users in the right stage with the right message
                        </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-6 rounded-lg flex items-start gap-4 border border-gray-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faBell} className="text-purple-600 text-xl" />
                        </div>
                        <div>
                        <h4 className="text-2xl font-semibold mb-1">Multiple Channels</h4>
                        <p className="text-gray-700 text-base font-normal">
                            WhatsApp, push notifications, Email and more
                        </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-6 rounded-lg flex items-start gap-4 border border-gray-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-600 text-xl" />
                        </div>
                        <div>
                        <h4 className="text-2xl font-semibold mb-1">Calendar Creation</h4>
                       <p className="text-gray-700 text-base font-normal">
                            Creating a content & offer calendar for returning users
                            </p>

                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white p-6 rounded-lg flex items-start gap-4 border border-gray-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faChartBar} className="text-purple-600 text-xl" />
                        </div>
                        <div>
                        <h4 className="text-2xl font-semibold mb-1">Cohort Analysis</h4>
                        <p className="text-gray-700 text-base font-normal">
                            Understanding the retention efforts and reporting
                        </p>
                        </div>
                    </div>
                    </div>
            </div>
            {/* here */}
            <WhyChooseUs />
          </div>
        <CTASection />
      </main>
    </div>
  )
}