// components/Footer.js
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <img
        src="/ArhovaSystems Tp.png"
        alt="ArhovaSystems!"
        className="mb-2 w-auto h-12"
      />
           <p className="text-gray-600 max-w-md text-md font-normal leading-6 font-sans">
              Growth marketing agency that <br /> offers martech solutions and has  <br />proven track record in working <br />with D2C brands.
            </p>
           
          <div className="mt-4 flex items-center space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 hover:text-blue-700 w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:text-pink-500 w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 hover:text-blue-600 w-6 h-6" />
            </a>
          </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
             <h3 className="text-2xl font-semibold leading-7 mb-4">
                Navigation
              </h3>

              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition">About Us</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</Link></li>
                <li><Link href="/shop" className="text-gray-600 hover:text-gray-900 transition">Shop</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">Contact Us</Link></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
            <h3 className="text-2xl font-semibold leading-7 mb-4">
            Services
          </h3>

              <ul className="space-y-2">
                <li><span className="text-gray-600">Retention Marketing</span></li>
                <li><span className="text-gray-600">SEO and AI Optimisation</span></li>
                <li><span className="text-gray-600">Performance Marketing & CRO</span></li>
                <li><span className="text-gray-600">Software & Web Development</span></li>
              </ul>
            </div>
            
            {/* Get in Touch */}
           <div className="pl-16">
            <h3 className="text-2xl font-semibold leading-7 mb-4">
              Get in Touch
            </h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@ArhovaSystemss.com" className="text-gray-600 hover:text-gray-900 transition">arhovasystems@gmail.com</a></li>
                <li><button className="text-gray-600 hover:text-gray-900 transition">Book a Call</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright and policies */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 ArhovaSystems, All Rights Reserved. Design By ArhovaSystems
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm">
            <Link href="/shipping" className="hover:text-gray-900 transition">Shipping & Delivery Policy</Link>
            <Link href="/cancellation" className="hover:text-gray-900 transition">Cancellation & Refund Policy</Link>
            <Link href="/terms" className="hover:text-gray-900 transition">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-gray-900 transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
