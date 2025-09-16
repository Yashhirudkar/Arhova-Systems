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
        <title>Blog -  Arhova systems</title>
        <meta name="description" content="Read the latest articles and insights from arhovasystems" />
      </Head>

       <main className="max-w-9xl mx-auto px-0 sm:px-0 lg:px-0 mt-12">
        {/* Header Section */}
       <header
         className="text-center py-35 sm:py-24 md:py-32 lg:py-40 -mt-20 sm:-mt-20 lg:-mt-20"
          style={{
            background:
              'linear-gradient(150deg, rgba(222, 189, 246, 1), rgba(233, 226, 250, 0.72))',
          }}
        >     
          <h1
            className="mb-4 font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl"
            style={{
              fontFamily: '"Figtree", sans-serif',
              color: 'var(--e-global-color-text)',
            }}
          >
            Blog
          </h1>
          
          <p
            className="text-bkack-700 text-lg"
            style={{ 
              fontFamily: '"Figtree", sans-serif',
            }}
          >
            arhovasystems &raquo; Blog
          </p>
        </header>

        {/* Blog Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Main Blog Content */}
            <div className="w-full lg:w-3/4">
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
              <a href=" ">
                5 Ways Digital Ecosystems Are Changing Business in 2025
              </a>
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="flex items-center mr-4">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Ashish 
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                March 3, 2025
              </span>
            </div>
            <p className="text-gray-600 mb-4">
             The business world is evolving faster than ever — and companies that don’t adapt risk falling behind. In 2025...
            </p>
            <a 
              href=" " 
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
      src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA" 
      alt="Online Ads and Information Overload: Impact on the Consumer Behaviour"
      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
      <a href=" ">
    The Rise of Digital Minimalism: Why Less is More for Consumers in 2025
      </a>
    </h3>
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <span className="flex items-center mr-4">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        Akhilesh
      </span>
      <span className="flex items-center">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        February 26, 2025
      </span>
    </div>
    <p className="text-gray-600 mb-4">
      In a world where every scroll, click, and tap comes with a new notification, consumers are starting to push back. Digital minimalism..
    </p>
    <a 
      href=" " 
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
      src="https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8" 
      alt="Case Study: Transforming Website Performance at arhovasystems"
      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
      <a href=" ">
       Building Smarter CRMs: The Secret to Customer Loyaltys
      </a>
    </h3>
    <div className="flex items-center text-sm text-gray-500 mb-3">
      <span className="flex items-center mr-4">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        Ritesh
      </span>
      <span className="flex items-center">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        July 16, 2024
      </span>
    </div>
    <p className="text-gray-600 mb-4">
      A CRM isn’t just a database — it’s the brain of your business. Here’s how modern CRMs can predict customer needs, automate follow-ups, and drive repeat revenue..
    </p>
    <a 
      href=" " 
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
      src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I" 
      alt="Case Study: Big Growth for a Skincare D2C Indian Brand"
      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
      <a href=" ">
        AI + Human Creativity: The Perfect Duo for 2025...
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
      AI tools are everywhere, but they can’t replace human insight. Discover how businesses are combining AI speed with human strategy to build powerful campaigns....
    </p>
    <a 
      href=" " 
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
                      <a href="/blogs/page/2/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">2</a>
                    </li>
                    <li>
                      <a href="/blogs/page/3/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">3</a>
                    </li>
                    <li>
                      <a href="/blogs/page/4/" className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">4</a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
              {/* Search Widget */}
             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h4 className="text-lg font-bold mb-4">Search</h4>
  <form role="search" method="get" action="https://www.google.com/" className="relative">
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
                      src="https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8" 
                      alt="Is Google Search Still Relevant in 2025? The Truth About Search Trends" 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a 
                        href=" " 
                        className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                       5 Ways Digital Ecosystems Are Changing Business in 2025
                      </a>
                      <p className="text-sm text-gray-500">March 3, 2025</p>
                    </div>
                  </div>

                  {/* Recent Post 2 */}
                  <div className="flex items-start space-x-3">
                    <img 
                      src="https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ" 
                      alt="Online Ads and Information Overload: Impact on the Consumer Behaviour" 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a 
                        href=" " 
                        className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        The Rise of Digital Minimalism: Why Less is More for Consumers in 2025
                      </a>
                      <p className="text-sm text-gray-500">February 26, 2025</p>
                    </div>
                  </div>

                  {/* Recent Post 3 */}
                  <div className="flex items-start space-x-3">
                    <img 
                      src="https://fastly.picsum.photos/id/163/2000/1333.jpg?hmac=htdHeSJwlYOxS8b0TTpz2s8tD_QDlmsd3JHYa_HGrg8" 
                      alt="Case Study: Transforming Website Performance at arhovasystems" 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a 
                        href=" " 
                        className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        Building Smarter CRMs: The Secret to Customer Loyaltys
                      </a>
                      <p className="text-sm text-gray-500">July 16, 2024</p>
                    </div>
                  </div>

                  {/* Recent Post 4 */}
                  <div className="flex items-start space-x-3">
                    <img 
                      src="https://fastly.picsum.photos/id/635/2509/1673.jpg?hmac=O3P1jEnFp0FqGswH9gRKIuKI-inphuJBkZZ1-enTKEw" 
                      alt="Case Study: Big Growth for a Skincare D2C Indian Brand" 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a 
                        href=" " 
                        className="font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2"
                      >
                        AI + Human Creativity: The Perfect Duo for 2025...
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