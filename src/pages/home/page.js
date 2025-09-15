'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Import pagination styles
import { useEffect, useRef, useState } from 'react';
import { FaArrowCircleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import CTASection from '@/components/ctasection/page';

const platforms = [
  { name: "Google Ads", img: "/66-removebg-preview.png" },
  { name: "Facebook", img: "/facebook1-removebg-preview.png" },
  { name: "Instagram", img: "/22-removebg-preview.png" },
  { name: "YouTube", img: "/55-removebg-preview.png" },
  { name: "Shopify", img: "/11-removebg-preview.png" },
  { name: "LinkedIn", img: "/44-removebg-preview.png" },
  { name: "Snapchat", img: "/Snapchat-removebg-preview.png" },
];


const heading = 'Unbeatable Growth Solutions';

// Counter component for animation
const Counter = ({ to, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 2000;
            const step = Math.ceil(to / (duration / 10));

            const timer = setInterval(() => {
              start += step;
              if (start > to) {
                start = to;
                clearInterval(timer);
              }
              setCount(start);
            }, 10);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [to]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-500">
        {prefix}
        {count}
        {suffix}
      </div>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const reviews = [
    {
      name: 'Vivek Mohanta',
      date: '2024-04-24',
      content: 'good marketing consultancy provided',
    },
    {
      name: 'Dibya Devidutta Nayak',
      date: '2024-04-23',
      content:
        'It has honestly been an honor to work with the team here. they are dedicated and responsible and are personally invested in the brand.',
    },
    {
      name: 'Broscience',
      date: '2024-04-23',
      content: 'great service, roi improved',
    },
    {
      name: 'Arya Aditya Dash',
      date: '2024-04-23',
      content:
        'game changer. I want to thank Vipa who helped in achieving an impressive ROAS, giving us a competitive edge in the market. Highly recommended!',
    },
  ];

  const recommendations = [
    {
      id: 1,
      name: "Mihir Gadani (MG)",
      position: "Co-Founder at OZiva, Building India's Leading Clean & Plant based Nutrition brand",
      content: "Working with Ashish at Arhova Systems has been an incredible experience. From the early stages of the company, he consistently demonstrated exceptional vision, technical expertise, and a relentless drive to solve problems. His ability to navigate challenges, manage projects efficiently, and deliver high-quality solutions is truly impressive. Ashish combines creativity with strategic thinking, always keeping the bigger picture in mind while handling the details with precision. What stands out most is his dedication to innovation and continuous learning, ensuring that Arhova Systems stays ahead in a fast-paced industry. Collaborating with him has been inspiring, and anyone who works with Ashish can expect professionalism, insight, and a strong commitment to excellence.",
      avatar: "/ecom3.png", // Replace with actual image path
      connection: "3rd"
    },
     {
      id: 1,
      name: "yash Gadani (MG)",
      position: "Co-Founder at OZiva, Building India's Leading Clean & Plant based Nutrition brand",
      content: "Working with Ashish at Arhova Systems has been an incredible experience. From the early stages of the company, he consistently demonstrated exceptional vision, technical expertise, and a relentless drive to solve problems. His ability to navigate challenges, manage projects efficiently, and deliver high-quality solutions is truly impressive. Ashish combines creativity with strategic thinking, always keeping the bigger picture in mind while handling the details with precision. What stands out most is his dedication to innovation and continuous learning, ensuring that Arhova Systems stays ahead in a fast-paced industry. Collaborating with him has been inspiring, and anyone who works with Ashish can expect professionalism, insight, and a strong commitment to excellence.",
      avatar: "/ecom3.png", // Replace with actual image path
      connection: "3rd"
    },
    {
  id: 3,
  name: "Karan Malhotra",
  position: "Founder & CEO at TechSage, Driving AI-First Digital Products",
  content: "Ashish is one of those rare professionals who can combine technical depth with a strong sense of business strategy. During our collaboration, he demonstrated a unique ability to anticipate potential bottlenecks and proactively provide scalable solutions. His leadership style is calm, composed, and inspiring — he motivates his team to perform at their best. The work delivered by Arhova Systems under his guidance was robust, reliable, and aligned perfectly with our growth roadmap. Ashish is a true partner who cares deeply about the success of the businesses he works with.",
  avatar: "/ecom5.png", // Replace with actual image path
  connection: "3rd"
},
{
  id: 4,
  name: "Sneha Verma",
  position: "Head of Digital Marketing at Nykaa, Scaling Brand Engagement",
  content: "I had the privilege of working closely with Ashish on a complex digital ecosystem project, and I can confidently say that he exceeded all expectations. His attention to detail, commitment to timelines, and ability to translate marketing needs into seamless tech solutions were outstanding. Ashish was quick to adapt to changing requirements and provided valuable suggestions that improved the end product. His collaborative nature made the entire process smooth and efficient. If you are looking for a tech partner who can bring your ideas to life, Ashish is the right person.",
  avatar: "/ecom6.png", // Replace with actual image path
  connection: "2nd"
},
{
  id: 5,
  name: "Rohit Kulkarni",
  position: "CTO at FinEdge Solutions, Building Scalable Fintech Platforms",
  content: "Ashish and his team at Arhova Systems played a crucial role in the successful launch of our fintech platform. His technical knowledge is top-notch, but what really sets him apart is his strategic mindset. He focuses on building solutions that not only solve current challenges but also prepare the business for future growth. His dedication, responsiveness, and ability to stay calm under pressure made him a trusted partner throughout the project. I look forward to working with him again on future initiatives.",
  avatar: "/ecom7.png", // Replace with actual image path
  connection: "1st"
},
{
  id: 6,
  name: "Ananya Desai",
  position: "Entrepreneur & Angel Investor, Supporting Early-Stage Startups",
  content: "Ashish brings a refreshing mix of innovation, discipline, and customer-centric thinking to every project he undertakes. I’ve seen him manage complex deliverables with grace while ensuring that quality remains uncompromised. His solutions are thoughtfully crafted and always aligned with long-term business objectives. Beyond just delivering technology, Ashish also acts as a trusted advisor, helping founders make informed decisions about product direction and scalability. He is an invaluable asset to any organization looking to grow in today’s competitive digital landscape.",
  avatar: "/ecom8.png", // Replace with actual image path
  connection: "3rd"
}

  ];
const [activeIndex, setActiveIndex] = useState(0);
const [currentRecIndex, setCurrentRecIndex] = useState(0);
const [screenSize, setScreenSize] = useState("lg"); // "sm" | "md" | "lg"

// Detect screen size (mobile, md, or large)
useEffect(() => {
  const checkScreen = () => {
    if (window.innerWidth < 768) setScreenSize("sm");
    else if (window.innerWidth < 1024) setScreenSize("md");
    else setScreenSize("lg");
  };
  checkScreen();
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);

// Calculate number of visible items based on screen size
const itemsToShow = screenSize === "sm" ? 3 : 5;

// Prev & Next Handlers
const handlePrev = () => {
  setActiveIndex((prev) =>
    prev === 0 ? platforms.length - itemsToShow : prev - 1
  );
};

const handleNext = () => {
  setActiveIndex((prev) =>
    prev >= platforms.length - itemsToShow ? 0 : prev + 1
  );
};

// Select visible platforms dynamically
const visiblePlatforms = platforms.slice(activeIndex, activeIndex + itemsToShow);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const additionalFields = document.querySelector('.additional-fields');
    if (additionalFields) {
      if (value !== 'I need help with') {
        additionalFields.style.display = 'block';
      } else {
        additionalFields.style.display = 'none';
      }
    }
  };

  return (
    <div className="text-gray-200">
      <div className="antialiased font-sans">
        {/* Hero Section */}
        <section className="relative text-white py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative px-4 sm:px-6 md:px-12 lg:px-24">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 ">
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
              Unbeatable Growth Solutions
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

  <section className="bg-[#F5F3FF] py-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-4 md:space-y-0 md:space-x-8">
        {/* Heading */}
        <h3 className="text-sm md:text-base font-semibold tracking-wide text-gray-800 text-center md:text-left">
          OUR PLATFORMS
        </h3>

        {/* Stepper Container */}
        <div className="flex items-center w-full md:w-auto justify-between md:justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-gray-600 hover:text-gray-900 transition p-2"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Platform Images */}
          <div className="flex items-center justify-center space-x-8 overflow-hidden px-2 md:px-2">
            {visiblePlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`flex-shrink-0 flex flex-col items-center transition-opacity duration-300 ${
                  index === 0 ? "opacity-100" : "opacity-80"
                }`}
              >
                <Image
                  src={platform.img}
                  alt={platform.name}
                  width={90}
                  height={40}
                  className="object-contain max-w-[70px] sm:max-w-[80px] md:max-w-[100px]"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-gray-600 hover:text-gray-900 transition p-2"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>

{/* CTA Section */}
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

  <div className="max-w-4xl mx-auto px-4 py-8">
  <h2
    className="text-center mb-3 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-tight"
    style={{ fontSize: "44px", lineHeight: "48px", color: "#1f2937" }}
  >
    LinkedIn Recommendations
  </h2>

  <p className="text-center text-gray-600 mb-8">
    See what industry leaders have to say about our founders
  </p>

  {recommendations.length > 0 && (
    <div className="mb-10 relative flex items-center justify-center">
      {/* Left Button */}
      <button
        onClick={() =>
          setCurrentRecIndex((prev) =>
            prev === 0 ? recommendations.length - 1 : prev - 1
          )
        }
        className="absolute left-0 text-gray-600 hover:text-gray-900 transition p-2"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Testimonial Content */}
      <div className="flex-1 max-w-2xl">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-20 h-20">
            <Image
              src={recommendations[currentRecIndex].avatar}
              alt={recommendations[currentRecIndex].name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-gray-900 text-center -mb-1">
            {recommendations[currentRecIndex].name}
          </h3>
          <p className="text-sm text-gray-600 text-center">
            {recommendations[currentRecIndex].position}
          </p>
        </div>

        <div className="mt-3 p-4 rounded-md bg-[#f8f8f8] text-black leading-relaxed text-center">
          <p>{recommendations[currentRecIndex].content}</p>
        </div>

        {/* Counter */}
        <span className="block text-center text-sm text-gray-600 mt-3">
          {currentRecIndex + 1} / {recommendations.length}
        </span>
      </div>

      {/* Right Button */}
      <button
        onClick={() =>
          setCurrentRecIndex((prev) =>
            prev === recommendations.length - 1 ? 0 : prev + 1
          )
        }
        className="absolute right-0 text-gray-600 hover:text-gray-900 transition p-2"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  )}
</div>


 {/* Blog Posts Section */}
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
                        Is Google Search Still Relevant in 2025? The Truth About
                        Search Trends
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
                        Bara
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
                      Is Google Search Dying Out? For years, Google Search has
                      been the go-to for finding...
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
                        Is Google Search Still Relevant in 2025? The Truth About
                        Search Trends
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
                        Bara
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
                      Is Google Search Dying Out? For years, Google Search has
                      been the go-to for finding...
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
                        Is Google Search Still Relevant in 2025? The Truth About
                        Search Trends
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
                        Bara
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
                      Is Google Search Dying Out? For years, Google Search has
                      been the go-to for finding...
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
      </div>
    </div>
  );
}