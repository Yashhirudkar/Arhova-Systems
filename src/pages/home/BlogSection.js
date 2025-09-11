"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Case Study: Transforming Website Performance at Toposel",
      author: "Vipa J",
      date: "July 16, 2024",
      desc: "Introduction At Toposel, we pride ourselves on delivering top-notch website...",
      img: "https://toposel.com/wp-content/uploads/2024/07/image.png",
      link: "#",
    },
    {
      id: 2,
      title: "Case Study: Big Growth for a Skincare D2C Indian Brand",
      author: "Vipa J",
      date: "July 16, 2024",
      desc: "Overview Last month, our brand saw amazing growth in online sessions and sales...",
      img: "https://toposel.com/wp-content/uploads/2024/07/image.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Increasing Conversion Rate – Cosmetic Brand Case Study in India",
      author: "Vipa J",
      date: "June 22, 2023",
      desc: "This article is about how a cosmetic brand in India increased its sales by...",
      img: "https://toposel.com/wp-content/uploads/2023/06/colors-291851_1280.jpg",
      link: "#",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-3"
        >
          Our Latest Blog Posts
        </motion.h2>

        {/* Subtext */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Explore real-world case studies and expert insights that showcase how we help brands grow. 
          From scaling D2C revenue with performance marketing to optimizing customer retention, our blog 
          brings you actionable strategies and proven results from the field.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Blog Image */}
              <Image
                src={blog.img}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg">{blog.title}</h3>

                {/* Author + Date */}
                <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                  <span>✍️ {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>

                <p className="mt-3 text-gray-600 text-sm">{blog.desc}</p>

                {/* Read More */}
                <a
                  href={blog.link}
                  className="text-indigo-600 font-medium mt-4 inline-flex items-center"
                >
                  Read More <span className="ml-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
