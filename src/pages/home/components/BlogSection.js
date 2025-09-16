export default function BlogSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading animate-fadeInUp text-[32px] md:text-[44px] font-semibold leading-tight md:leading-[48px] text-[#090B0E]">
          Our Latest Blog Posts
        </h2>
        <p className="mt-4 max-w-[1200px] mx-auto animate-fadeInUp text-[14px] md:text-[16px] font-normal leading-[24px] text-[#3D4C5E]">
          Explore real-world case studies and expert insights that showcase
          how we help brands grow. From scaling D2C revenue with performance
          marketing to optimizing customer retention, our blog brings you
          actionable strategies and proven results from the field.
        </p>

        <div className="w-full mt-8 px-4 md:px-20 lg:px-40">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/250?random"
                  alt="Is Google Search Still Relevant in 2025? The Truth About Search Trends"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 text-black text-left transition-colors">
                  <a href=" ">
                    AI + Human Creativity: The Perfect Duo for 2025
                  </a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3 ">
                  <span className="flex items-center mr-4">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    lara
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    March 3, 2025
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-left">
                  AI tools are everywhere, but they can’t replace human insight. Discover how businesses ...
                </p>
                <a
                  href=" "
                  className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                  Read More
                </a>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/250?random"
                  alt="Is Google Search Still Relevant in 2025? The Truth About Search Trends"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 text-black text-left transition-colors">
                  <a href=" ">
                    Why Website Speed Is Your New Competitive Edge
                  </a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3 ">
                  <span className="flex items-center mr-4">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    Tom 
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    March 3, 2025
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-left">
                  If your site takes longer than 3 seconds to load, you’re losing customers. Learn how optimizing for speed can..
                </p>
                <a
                  href=" "
                  className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                  Read More
                </a>
              </div>
            </div>
            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/250?random"
                  alt="Is Google Search Still Relevant in 2025? The Truth About Search Trends"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 text-black text-left transition-colors">
                  <a href=" ">
                    The Social Media Discovery Shift in 2025
                  </a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3 ">
                  <span className="flex items-center mr-4">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    David
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    March 3, 2025
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-left">
                  Search isn’t just on Google anymore — consumers are discovering brands through Instagram, LinkedIn, and TikTok..
                </p>
                <a
                  href=" "
                  className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
