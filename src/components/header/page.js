// components/Header.js
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent ">     
   <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <div>
                <img 
                    src="/ArhovaSystems Tp.png" 
                    alt="ToposeI Logo" 
                    className="h-10 w-auto"
                />
                </div>

        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-13 mt-3 ">
         <Link href="/" className="text-black hover:text-purple-500 text-lg">
                Home
                </Link>

          <Link href="/about" className="text-black hover:text-purple-500  text-lg">
            About Us
          </Link>
          <div className="relative group">
            <button className="text-black hover:text-purple-500 flex items-center gap-0  text-lg">
              Services
              <ChevronDownIcon className="ml-1 h-4 w-4 text-black" />

            </button>
            {/* Dropdown */}
            <div className="absolute bg-white text-black mt-2 rounded shadow-lg min-w-[200px] 
              opacity-0 scale-95 transform transition-all duration-300 ease-in-out 
              group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
              
              <Link 
                href="/web-development" 
                className="block px-4 py-2 hover:bg-gray-100 text-base"
              >
                Web Development
              </Link>
              <Link 
                href="/digital-marketing" 
                className="block px-4 py-2 hover:bg-gray-100 text-base"
              >
                Digital Marketing
              </Link>
              <Link 
                href="/seo-support" 
                className="block px-4 py-2 hover:bg-gray-100 text-base"
              >
                SEO Support
              </Link>
              <Link 
                href="/crm-development" 
                className="block px-4 py-2 hover:bg-gray-100 text-base"
              >
                CRM Development
              </Link>
            </div>


          </div>
          <Link href="/blog" className="text-black hover:text-purple-500  text-lg">
            Blog
          </Link>
          <Link href="/shop" className="text-black hover:text-purple-500 text-lg">
            Shop
          </Link>
          <Link href="/contact" className="text-black hover:text-purple-500 text-lg">
            Contact Us
          </Link>
        </nav>

        {/* Call to Action */}
                        <Link
                    href="/book"
                    className="bg-[#1476be] text-white px-5 py-2 rounded-full hover:bg-[#0f5a91] transition "
                    >
                    Book a Call ➔
                    </Link>

      </div>
    </header>
  );
}
