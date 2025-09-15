// components/Header.js
"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // For desktop dropdown delay
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDesktopServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopServicesOpen(false);
    }, 300); // 2s delay
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <div>
            <img
              src="/ArhovaSystems Tp.png"
              alt="Arhova Logo"
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-black hover:text-purple-500 text-lg">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-purple-500 text-lg">
            About Us
          </Link>

          {/* Dropdown with delay */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-black hover:text-purple-500 flex items-center text-lg">
              Services
              <ChevronDownIcon className="ml-1 h-4 w-4 text-black" />
            </button>

            {desktopServicesOpen && (
              <div className="absolute bg-white text-black mt-2 rounded shadow-lg min-w-[250px]">
                <Link
                  href="/web-development"
                  className="block px-4 py-2 hover:bg-gray-100 text-lg"
                >
                  Web Development
                </Link>
                <Link
                  href="/crm-development"
                  className="block px-4 py-2 hover:bg-gray-100 text-lg"
                >
                  CRM Development
                </Link>
                <Link
                  href="/digital-marketing"
                  className="block px-4 py-2 hover:bg-gray-100 text-lg"
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/seo-support"
                  className="block px-4 py-2 hover:bg-gray-100 text-lg"
                >
                  SEO Support
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-black hover:text-purple-500 text-lg">
            Blog
          </Link>
        </nav>

        {/* CTA (Desktop Only) */}
        <div className="hidden md:block">
          <Link
            href="/book"
            className="bg-[#1476be] text-white px-5 py-2 rounded-full hover:bg-[#0f5a91] transition"
          >
            Book a Call ➔
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <Link
              href="/"
              className="text-black hover:text-purple-500 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-purple-500 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Services Dropdown in Mobile */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-black hover:text-purple-500 text-lg"
              >
                Services
                <ChevronDownIcon
                  className={`h-5 w-5 transform transition ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link
                    href="/web-development"
                    className="text-black hover:text-purple-500 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/crm-development"
                    className="text-black hover:text-purple-500 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    CRM Development
                  </Link>
                  <Link
                    href="/digital-marketing"
                    className="text-black hover:text-purple-500 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/seo-support"
                    className="text-black hover:text-purple-500 text-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    SEO Support
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-black hover:text-purple-500 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            {/* <Link
              href="/shop"
              className="text-black hover:text-purple-500 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link> */}
            <Link
              href="/contact"
              className="text-black hover:text-purple-500 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* CTA inside mobile menu */}
            <Link
              href="/book"
              className="bg-[#1476be] text-white px-5 py-2 rounded-full hover:bg-[#0f5a91] transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book a Call ➔
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
