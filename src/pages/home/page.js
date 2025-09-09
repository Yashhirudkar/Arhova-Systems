"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen font-sans text-gray-900 bg-white">
      {/* HERO */}
   <section className="relative bg-gradient-to-r from-white to-slate-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-black">
        Empowering Digital Solutions for Your Business
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Build, scale and transform your business with our innovative
        digital products and services.
      </p>

      <div className="flex flex-wrap gap-3 items-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition"
        >
          Get started
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-100"
        >
          Learn more
        </a>
      </div>
    </motion.div>

    {/* Right Content - Hero Image with floating elements */}
    <motion.div
      initial={{ opacity: 0.8, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: Infinity }}
      className="relative w-full flex justify-center"
    >
      {/* Background Image behind hero */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/header-imgbg-1.webp"
          alt="Hero Background"
          width={600}
          height={450}
          className="object-contain"
        />
      </div>

      {/* Main Hero Image */}
      <Image
        src="https://toposel.com/wp-content/uploads/2025/07/hero-image.webp"
        alt="Hero Main"
        width={500}
        height={350}
        className="relative z-10 rounded-2xl"
        priority
      />

      {/* Floating Author Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -bottom-6 -left-8"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/header-author-img1.webp"
          alt="Author"
          width={80}
          height={80}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>

      {/* Floating Ellipse */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-4 right-6"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/Ellipse-120.webp"
          alt="Ellipse"
          width={60}
          height={60}
        />
      </motion.div>

      {/* Floating Facebook Icon */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-10 right-20"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/facebook-1.png"
          alt="Facebook"
          width={40}
          height={40}
        />
      </motion.div>

      {/* Floating Instagram Icon */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute top-10 left-10"
      >
        <Image
          src="https://toposel.com/wp-content/uploads/2025/07/instagram.png"
          alt="Instagram"
          width={40}
          height={40}
        />
      </motion.div>
    </motion.div>
  </div>
</section>




      {/* SERVICES / FEATURES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
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
      </section>

   {/* rrr */}
   {/* BEST-IN-CLASS GROWTH SERVICES SECTION */}
<section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-6"
  >
    Best-in-Class Growth Services
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true }}
    className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
  >
    Unlock your brand’s full potential with performance-driven solutions—ranging from paid ads to CRO, content, and automation—to accelerate scale and maximize ROI.
  </motion.p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
    {[
      {
        title: "Retention Marketing",
        desc: "Engage and retain customers through targeted email, WhatsApp, and loyalty strategies that boost lifetime value.",
        icon: "fas fa-user-friends",
      },
      {
        title: "SEO and AI Optimisation",
        desc: "Position your brand at the forefront—whether users are searching on Google or asking AI.",
        icon: "fas fa-chart-line",
      },
      {
        title: "Performance Marketing & CRO",
        desc: "Drive measurable growth through data-backed ad campaigns and continuous conversion rate optimization.",
        icon: "fas fa-bullhorn",
      },
      {
        title: "Website/Software Development",
        desc: "Build fast, scalable, and custom digital experiences tailored to your business goals and user needs.",
        icon: "fas fa-laptop-code",
      },
    ].map((service, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="flex gap-4 p-6 border rounded-xl bg-white shadow hover:shadow-lg transition"
      >
        <div className="text-indigo-600 text-3xl flex-shrink-0">
          <i className={service.icon}></i>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className="mt-2 text-gray-500 text-sm">{service.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Expert Team", desc: "Seasoned professionals in every domain." },
              { title: "Cutting Edge Tech", desc: "We use latest tools and frameworks." },
              { title: "24/7 Support", desc: "Always available for our clients." },
              { title: "Proven Results", desc: "Track record of successful projects." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-gradient-to-r from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Simple Pricing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Starter", "Pro", "Enterprise"].map((plan, i) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl border shadow hover:shadow-md transition"
              >
                <div className="text-sm uppercase text-gray-500">{plan}</div>
                <div className="mt-4 text-3xl font-extrabold">
                  {plan === "Starter" ? "Free" : plan === "Pro" ? "$29/mo" : "Custom"}
                </div>
                <p className="mt-3 text-gray-500 text-sm">
                  {plan === "Starter"
                    ? "Perfect for individuals."
                    : plan === "Pro"
                    ? "For growing teams."
                    : "Custom plans for large organizations."}
                </p>
                <button className="mt-6 w-full py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  {plan === "Starter"
                    ? "Get Started"
                    : plan === "Pro"
                    ? "Buy Now"
                    : "Contact Us"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ritesh",
                role: "CEO, TechCorp",
                quote:
                  "Amazing service! Helped us scale our business fast.",
              },
              {
                name: "Anjali",
                role: "Founder, StartupX",
                quote:
                  "Professional and reliable team. Highly recommended!",
              },
              {
                name: "Arjun",
                role: "Manager, Enterprise Inc.",
                quote:
                  "Delivered top quality work on time. Great experience.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border bg-slate-50 shadow hover:shadow-md transition"
              >
                <p className="text-gray-600 italic">“{t.quote}”</p>
                <div className="mt-4 font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Latest Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((b) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: b * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <Image
                  src={`/ecom2.png`}
                  alt="Blog"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg">Blog Post {b}</h3>
                  <p className="mt-2 text-gray-500 text-sm">
                    Short description for blog post {b}.
                  </p>
                  <a href="#" className="text-indigo-600 mt-3 inline-block">
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
            <p className="mt-2 text-white/90">
              Join hundreds of happy clients and grow with us today.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-white rounded-md"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
