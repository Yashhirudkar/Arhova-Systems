"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OurPlatforms from "./OurPlatforms";
import BlogSection from "./BlogSection";
import GoogleReviews from "./GoogleReviews";



export default function HomePage() {
  return (
    <main className="min-h-screen font-sans text-gray-900 bg-white">
      {/* HERO */}
 <section className="relative w-screen h-screen bg-gradient-to-r from-white to-slate-50 overflow-hidden flex items-center">
  <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
    
    

    {/* Left Content */}
    
    <motion.div
      initial={{ opacity: 1, y: 40 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
      className="space-y-6 z-10">
         <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-58 -left-40 "
      >

        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/Ellipse-120.webp"
          alt="Author"
          width={180}
          height={180}
          className=""
        />
      </motion.div>
        
    <h1 className="text-[64px] font-semibold leading-[65px] text-[#090B0E]">
 Arhova Systems<br/>
Web & Digital Marketing Experts
</h1>

      <p className="text-lg text-gray-600 max-w-xl">
        At Arhova Systems, we create strong digital experiences that help your business grow.
From website design and development services to custom CRM solutions and
ROI-driven marketing strategies, we deliver exactly what you need.
      </p>

      <div className="flex flex-wrap gap-3 items-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-full shadow hover:shadow-lg transition"
        >
          Get in Touch
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 px-4 py-3 rounded-full hover:bg-indigo-600 hover:text-white"
        >
          Explore Our Services
        </a>
      </div>
    </motion.div>

    {/* Right Content - Hero Image with floating elements */}
    <div className="relative w-full  flex justify-center items-center">
      {/* Background Image */}
      <Image
        src="https://toposel.com/wp-content/uploads/2025/07/header-imgbg-1.webp"
        alt="Hero Background"
        width={600}
        height={500}
        className="object-contain absolute z-10"
      />

      {/* Main Hero Image */}
      <Image
        src="https://toposel.com/wp-content/uploads/2025/07/hero-image.webp"
        alt="Hero Main"
        width={500}
        height={400}
        className="relative z-10 rounded-2xl"
        priority
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ x: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -bottom-12 -left-30 "
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/header-author-img1.webp"
          alt="Author"
          width={190}
          height={180}
          className="rounded-full border-4 border-white"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-12"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/instagram.png"
          alt="Instagram"
          width={45}
          height={45}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-16 right-20"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/facebook-1.png"
          alt="Facebook"
          width={45}
          height={45}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-6 right-10"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/Ellipse-120.webp"
          alt="Ellipse"
          width={60}
          height={60}
        />
      </motion.div>

      {/* Extra Small Floating Shapes */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-24 left-32"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/adwords.png"
          alt="Small Shape"
          width={40}
          height={40}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-24 right-32"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/Ellipse-120.webp"
          alt="Small Shape"
          width={35}
          height={35}
        />
      </motion.div>
      {/* / */}
    </div>
  </div>
</section>

<OurPlatforms />


{/* about section */}

<section className="relative bg-gradient-to-r from-purple-50 to-blue-50 py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
    
    {/* Left Image - Circle */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Image
        src="https://toposel.com/wp-content/uploads/2025/07/entertainer-presenting-tablet-from-sponsor-1.webp"
        alt="Author Image Left"
        width={280}
        height={380}
        className="rounded-full object-cover shadow-lg"
      />
    </motion.div>

    {/* Text Center */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center lg:text-left"
    >
      <h2 className="text-3xl font-bold text-gray-900 leading-tight">
        Industries We Empower
      </h2>
      <p className="mt-4 text-lg text-gray-600">
       From startups to established brands, we offer web development, CRM development, and digital marketing strategies that drive growth. No pressure, no sales pitches, just an open discussion about developing the best solution for your company.
      </p>

      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
      >
        Contact Us <span className="text-xl">➜</span>
      </motion.a>
    </motion.div>

    {/* Right Image - Rounded Rectangle */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <Image
        src="https://toposel.com/wp-content/uploads/2025/07/Frame-1437254183.webp"
        alt="Author Image Right"
        width={320}
        height={590}
        className="rounded-3xl object-cover shadow-lg"
      />
    </motion.div>
  </div>
</section>




      {/* SERVICES / FEATURES */}
      {/* <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Solutions
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Responsive, fast and scalable websites.",
              img: "/images/web.png",
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform apps for Android & iOS.",
              img: "/images/app.png",
            },
            {
              title: "Cloud Solutions",
              desc: "Secure and scalable cloud infrastructure.",
              img: "/images/cloud.png",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border bg-white shadow hover:shadow-lg transition"
            >
              <Image
                src={f.img}
                alt={f.title}
                width={60}
                height={60}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

   {/* rrr */}
   {/* BEST-IN-CLASS GROWTH SERVICES SECTION */}
{/* BEST-IN-CLASS GROWTH SERVICES SECTION */}
<section className="relative bg-gray-50 from-purple-50 to-blue-50 py-20">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-6 text-gray-900"
  >
    Growth Solutions That Deliver, Not Just Promise
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true }}
    className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
  >
    utting-edge paid advertising, CRO, content strategy, and automation—all designed around your vision. We build what works, not what fits a template. Maximize ROI. Scale with confidence.
  </motion.p>

  <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
    {[
      {
        title: "CRM Development",
        desc: "We provide CRM development services that enhance workflows, strengthen customer connections, and integrate data with CRM to help businesses thrive.",
        icon: "fas fa-user-friends",
      },
      {
        title: "Digital Marketing",
        desc: "Our digital marketing professionals create strategies for digital lead generation, social media marketing, and ROI-oriented campaigns that attract, engage, and convert audiences.",
        icon: "fas fa-chart-line",
      },
      {
        title: "Performance Marketing & CRO",
        desc: "Drive measurable growth through data-backed ad campaigns and continuous conversion rate optimization.",
        icon: "fas fa-bullhorn",
      },
      {
        title: "Website/Software Development",
        desc: "Your website represents your first impression. Our web development service creates quick, scalable, and visually appealing websites that turn visitors into loyal clients..",
        icon: "fas fa-laptop-code",
      },
    ].map((service, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="flex gap-5 p-8 border rounded-lg  shadow-md hover:shadow-xl transition"
      >
        {/* Icon with background */}
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-2xl flex-shrink-0 shadow">
          <i className={service.icon}></i>
        </div>

        {/* Text */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {service.title}
          </h3>
          <p className="mt-2 text-gray-600 text-sm">{service.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* google review */}



<GoogleReviews />
{/* google review end */}



      
      {/* BLOG */}
      
      <BlogSection />

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-indigo-50 to-white py-20 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <div className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        Get In Touch With Us Today
      </h2>
      <p className="text-lg text-gray-600">
        We collaborate with ambitious brands ready to scale. Share your details and our experts will connect with you to craft tailored strategies for success.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-2">
          <i className="fas fa-check-circle text-indigo-600"></i> 
          ROI-driven performance marketing
        </li>
        <li className="flex items-center gap-2">
          <i className="fas fa-check-circle text-indigo-600"></i> 
          Scalable website & CRM solutions
        </li>
        <li className="flex items-center gap-2">
          <i className="fas fa-check-circle text-indigo-600"></i> 
          Data-driven Google Ads campaigns
        </li>
      </ul>
    </div>

    {/* Right Side - Form */}
    <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            placeholder="+91 9876543210"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            placeholder="Tell us about your project..."
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

    </main>
  );
}
