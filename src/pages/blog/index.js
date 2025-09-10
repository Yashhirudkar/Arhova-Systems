// pages/contact.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CTASection from '@/components/ctasection/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Blog - Toposel</title>
        <meta name="description" content="Read the latest articles and insights from Toposel" />
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
            Blog
          </h1>
          
          <p
            className="text-bkack-700 mb-30 text-lg"
            style={{ 
              fontFamily: '"Figtree", sans-serif',
            }}
          >
            Toposel &raquo; Blog
          </p>
        </header>

        {/* Blog Content */}
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Blog Content */}
            <div className="w-full lg:w-6/12 ml-40">
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="relative overflow-hidden">
            <img 
              src="https://picsum.photos/400/250?random" 
              alt="Is Google Search Still Relevant in 2025? The Truth About Search Trends"
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
              <a href="https://toposel.com/is-google-search-still-relevant-in-2025-the-truth-about-search-trends/">
                Is Google Search Still Relevant in 2025? The Truth About Search Trends
              </a>
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="flex items-center mr-4">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Bara
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                March 3, 2025
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Is Google Search Dying Out? For years, Google Search has been the go-to for finding...
            </p>
            <a 
              href="https://toposel.com/is-google-search-still-relevant-in-2025-the-truth-about-search-trends/" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Read More 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>



                {/* Blog Post 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
  <div className="relative overflow-hidden">
    <img 
      src="https://toposel.com/wp-content/uploads/2025/02/man-5901349_1920.jpg" 
      alt="Online Ads and Information Overload: Impact on the Consumer Behaviour"
      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
      <a href="https://toposel.com/online-ads-and-information-overload-impact-on-the-consumer-behaviour/">
        Online Ads and Information Overload: Impact on the Consumer Behaviour
      </a>
    </h3>
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <span className="flex items-center mr-4">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        Bara
      </span>
      <span className="flex items-center">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        February 26, 2025
      </span>
    </div>
    <p className="text-gray-600 mb-4">
      We're constantly bombarded with information from all directions—social media updates...
    </p>
    <a 
      href="https://toposel.com/online-ads-and-information-overload-impact-on-the-consumer-behaviour/" 
      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
    >
      Read More 
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </a>
  </div>
</div>


                {/* Blog Post 3 */}
               <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
  <div className="relative overflow-hidden">
    <img 
      src="https://toposel.com/wp-content/uploads/2024/07/image.png" 
      alt="Case Study: Transforming Website Performance at Toposel"
      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
      <a href="https://toposel.com/case-study-transforming-website-performance-at-toposel/">
        Case Study: Transforming Website Performance at Toposel
      </a>
    </h3>
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <span className="flex items-center mr-4">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        Vipa J
      </span>
      <span className="flex items-center">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        July 16, 2024
      </span>
    </div>
    <p className="text-gray-600 mb-4">
      Introduction At Toposel, we pride ourselves on delivering top-notch website...
    </p>
    <a 
      href="https://toposel.com/case-study-transforming-website-performance-at-toposel/" 
      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
    >
      Read More 
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </a>
  </div>
</div>


                {/* Blog Post 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
  <div className="relative overflow-hidden">
    <img 
      src="https://toposel.com/wp-content/uploads/2024/07/image.jpg" 
      alt="Case Study: Big Growth for a Skincare D2C Indian Brand"
      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
      <a href="https://toposel.com/case-study-big-growth-for-a-skincare-d2c-indian-brand/">
        Case Study: Big Growth for a Skincare D2C Indian Brand
      </a>
    </h3>
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <span className="flex items-center mr-4">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        Vipa J
      </span>
      <span className="flex items-center">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        July 16, 2024
      </span>
    </div>
    <p className="text-gray-600 mb-4">
      Overview Last month, our brand saw amazing growth in online sessions and sales. We...
    </p>
    <a 
      href="https://toposel.com/case-study-big-growth-for-a-skincare-d2c-indian-brand/" 
      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
    >
      Read More 
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </a>
  </div>
</div>

              </div>

              {/* Pagination */}
              {/* <div className="mt-12 flex justify-center">
                <nav aria-label="Blog pagination">
                  <ul className="flex space-x-2">
                    <li>
                      <span className="px-3 py-2 bg-blue-600 text-white rounded-md">1</span>
                    </li>
                    <li>
                      <a href="https://toposel.com/blogs/page/2/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">2</a>
                    </li>
                    <li>
                      <a href="https://toposel.com/blogs/page/3/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">3</a>
                    </li>
                    <li>
                      <a href="https://toposel.com/blogs/page/4/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">4</a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-4/12">
              {/* Search Widget */}
             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h4 className="text-lg font-bold mb-4">Search</h4>
  <form role="search" method="get" action="https://toposel.com/" className="relative">
    <input 
      type="search" 
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
      placeholder="Search" 
      name="s" 
      required 
    />
    <button 
      type="submit" 
      className="absolute right-0 top-0 h-full px-3 text-white bg-blue-600 rounded-r-md hover:bg-blue-700 transition-colors"
    >
      <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
    </button>
  </form>
</div>


              {/* Recent Posts Widget */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-4">Recent Posts</h4>
                <div className="space-y-4">
                  {/* Recent Post 1 */}
                  <div className="flex items-start space-x-3">
                    <img 
                      src="https://toposel.com/wp-content/uploads/2025/03/2149416732-150x150.jpg" 
                      alt="Is Google Search Still Relevant in 2025? The Truth About Search Trends" 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a 
                        href="https://toposel.com/is-google-search-still-relevant-in-2025-the-truth-about-search-trends/" 
                        className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        Is Google Search Still Relevant in 2025? The Truth About Search Trends
                      </a>
                      <p className="text-sm text-gray-500">March 3, 2025</p>
                    </div>
                  </div>

                  {/* Recent Post 2 */}
                  <div className="flex items-start space-x-3">
                    <img 
                      src="https://toposel.com/wp-content/uploads/2025/02/man-5901349_1920-150x150.jpg" 
                      alt="Online Ads and Information Overload: Impact on the Consumer Behaviour" 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a 
                        href="https://toposel.com/online-ads-and-information-overload-impact-on-the-consumer-behaviour/" 
                        className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        Online Ads and Information Overload: Impact on the Consumer Behaviour
                      </a>
                      <p className="text-sm text-gray-500">February 26, 2025</p>
                    </div>
                  </div>

                  {/* Recent Post 3 */}
                  <div className="flex items-start space-x-3">
                    <img 
                      src="https://toposel.com/wp-content/uploads/2024/07/image-150x150.png" 
                      alt="Case Study: Transforming Website Performance at Toposel" 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a 
                        href="https://toposel.com/case-study-transforming-website-performance-at-toposel/" 
                        className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        Case Study: Transforming Website Performance at Toposel
                      </a>
                      <p className="text-sm text-gray-500">July 16, 2024</p>
                    </div>
                  </div>

                  {/* Recent Post 4 */}
                  <div className="flex items-start space-x-3">
                    <img 
                      src="https://toposel.com/wp-content/uploads/2024/07/image-150x150.jpg" 
                      alt="Case Study: Big Growth for a Skincare D2C Indian Brand" 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a 
                        href="https://toposel.com/case-study-big-growth-for-a-skincare-d2c-indian-brand/" 
                        className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        Case Study: Big Growth for a Skincare D2C Indian Brand
                      </a>
                      <p className="text-sm text-gray-500">July 16, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTASection />
      </main>
    </div>
  )
}