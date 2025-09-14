// components/Footer.js
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 w-full">
      <div className="w-full px-6 md:px-12 py-12">
        
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-12">
          
          {/* Logo & About */}
          <div>
            <img
              src="/ArhovaSystems Tp.png"
              alt="ArhovaSystems!"
              className="mb-4 w-auto h-12"
            />
            <p className="text-gray-600 text-base leading-6">
              Growth marketing agency that offers martech solutions and has a
              proven track record in working with D2C brands.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 hover:text-blue-800 w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-600 w-6 h-6" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 hover:text-blue-700 w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</Link></li>
              <li><Link href="/shop" className="text-gray-600 hover:text-gray-900 transition">Shop</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-600">Retention Marketing</span></li>
              <li><span className="text-gray-600">SEO & AI Optimisation</span></li>
              <li><span className="text-gray-600">Performance Marketing & CRO</span></li>
              <li><span className="text-gray-600">Software & Web Development</span></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:arhovasystems@gmail.com" className="text-gray-600 hover:text-gray-900 transition">
                  arhovasystems@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="/book"
                  className="inline-block bg-[#1476be] text-white px-5 py-2 rounded-full hover:bg-[#0f5a91] transition"
                >
                  Book a Call ➔
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
