"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogSection() {
  const blogs = [
  {
    id: 1,
    title: "Case Study: Building High-Performance Websites for Scale",
    author: "Arhova Team",
    date: "September 12, 2025",
    desc: "Discover how we transformed a client’s digital presence with a custom website solution—improving speed, usability, and conversions for long-term growth...",
    img: "https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ",
    link: "#",
  },
  {
    id: 2,
    title: "Case Study: Boosting Efficiency with CRM & Marketing Automation",
    author: "Arhova Team",
    date: "September 10, 2025",
    desc: "We helped a growing brand implement CRM and marketing automation to streamline customer management, nurture leads, and drive repeat sales...",
    img: "https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ",
    link: "#",
  },
  {
    id: 3,
    title: "Case Study: Driving ROI with Google Ads Optimization",
    author: "Arhova Team",
    date: "September 08, 2025",
    desc: "Learn how our data-driven Google Ads strategies reduced acquisition costs, increased conversions, and delivered sustainable ROI for a competitive industry brand...",
    img: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
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
         Dive into practical case studies and expert insights showcasing how we build high-performing websites, implement smart CRM & marketing automation, and maximize ROI through Google Ads. Each blog delivers actionable strategies, proven growth results, and real-world success stories to help your brand scale with confidence.
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
