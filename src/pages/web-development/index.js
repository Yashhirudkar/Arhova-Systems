// pages/contact.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CTASection from '@/components/ctasection/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClipboardList, faBell, faCalendarAlt, faChartBar, faMinus, faPlus, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import WhyChooseUs from '@/components/whychoose/page';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Web Development - arhovasystems</title>
        <meta name="description" content="Read the latest articles and insights from arhovasystems" />
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
            className="mb-4 font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl"
            style={{
              fontFamily: '"Figtree", sans-serif',
              lineHeight: '1.2'
            }}
          >
            Web Development
          </h1>

          <p
            className="text-gray-700 mb-6 text-base sm:text-lg"
            style={{
              fontFamily: '"Figtree", sans-serif',
            }}
          >
            Arhova Systems &raquo; Web Development
          </p>
        </header>

        {/* Retention Marketing Section */}
        <div className="bg-white rounded-lg overflow-hidden">

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row items-center py-12 px-4 sm:px-8 lg:px-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <img
                src="girl-image.webp"
                alt="Retention Marketing"
               className="w-full h-auto max-w-xs md:max-w-md lg:max-w-md mx-auto rounded-lg"
              />
            </div>

            <div className="lg:w-1/2 max-w-full lg:max-w-[550px] px-4 sm:px-0">
              <h2 className="text-base font-bold text-purple-600 mb-2">Web Development</h2>
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-tight sm:leading-[48px] text-gray-900 mb-4">
                We keep your customers coming back to you.
              </h3>

              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                Our strategy focuses on optimizing your website and web applications to increase conversions and user retention, emphasizing long-term engagement over one-time visits — ultimately boosting LTV and overall ROI.
              </p>
              <p className="text-gray-700 mb-6 text-base sm:text-lg">
                Looking for a results-driven web development partner? Arhova Systems specializes in building websites and web applications that drive key metrics like user engagement, repeat visits, conversion rates, and long-term business growth.
              </p>
              <a
                href="/crm-development"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" />
                View Our Services
              </a>
            </div>
          </div>

          {/* What does Retention include Section */}
          <div className="py-12 px-4 sm:px-8 bg-gray-50 mt-10 mb-20 ">
            <div className="text-center mb-12">
              <h2 className="text-base font-bold leading-5 text-purple-600 mb-2">
                Web Development
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-tight sm:leading-[48px] text-gray-900">
                What Retention Includes in Web Development
              </h3>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row items-start gap-4 border border-gray-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faClipboardList} className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-1">User Journey Creation</h4>
                  <p className="text-gray-700 text-sm sm:text-base font-normal">
                    Design intuitive user flows that guide visitors through your website or app, delivering the right content at the right time.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row items-start gap-4 border border-gray-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faBell} className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-1">Multiple Touchpoints</h4>
                  <p className="text-gray-700 text-sm sm:text-base font-normal">
                    Engage users through in-app messages, notifications, personalized dashboards, and interactive website elements.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row items-start gap-4 border border-gray-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-1">Content & Offer Calendar</h4>
                  <p className="text-gray-700 text-sm sm:text-base font-normal">
                    Plan and schedule content, updates, and feature highlights to encourage repeat visits and user engagement.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row items-start gap-4 border border-gray-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartBar} className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-1">Cohort Analysis</h4>
                  <p className="text-gray-700 text-sm sm:text-base font-normal">
                    Analyze user behavior and engagement patterns to optimize retention, improve website performance, and enhance long-term growth
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