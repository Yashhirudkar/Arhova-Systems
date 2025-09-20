import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaUsers, FaHeadset, FaStickyNote } from 'react-icons/fa';

import CTASection from '@/components/ctasection/page';
import LinkedInRecommendations from './linkdin';

export default function Contact() {
  const [formData, setFormData] = useState({
    helpType: 'I need help with',
    name: '',
    phone: '',
    email: '',
    website: '',
    budget: '',
    message: ''
  });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      formData.helpType &&
      formData.helpType !== 'I need help with' &&
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.website &&
      formData.budget;
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'helpType' && value !== 'I need help with') {
      setShowAdditionalFields(true);
    } else if (name === 'helpType' && value === 'I need help with') {
      setShowAdditionalFields(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-white ">
      <Head>
        <meta name="description" content="Get in touch with Arhovasystems" />
      </Head>

      <main className="maxw-9xl mx-auto px-0 sm:px-0 lg:px-0 mt-18">
        {/* Header Section */}
        <header
          className="text-center mb-4 py-40 sm:py-50 md:py-32 lg:py-32 xl:py-40 -mt-20 sm:-mt-29 lg:-mt-20"
          style={{
            background:
              'linear-gradient(150deg, rgba(222, 189, 246, 1), rgba(233, 226, 250, 0.72))',
          }}
        >
          <h1
            className="font-bold text-gray-900"
            style={{
              fontFamily: '"Figtree", sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: '1.2',
            }}
          >
            About Us
          </h1>

          <p
            className="text-black-700 text-base sm:text-lg mt-4"
            style={{ fontFamily: '"Figtree", sans-serif' }}
          >
            Arhova systems &raquo; About Us
          </p>
        </header>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto mb-16  px-4 sm:px-6 lg:px-0">
          {/* Left Content */}
          <div className="space-y-8">
            <h2
              className="font-bold"
              style={{
                fontFamily: '"Figtree", Sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '20px',
                color: '#4e2fda',
              }}
            >
              Why Choose Us
            </h2>

            <h2
              className="mb-4"
              style={{
                fontFamily: '"Figtree", Sans-serif',
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 600,
                lineHeight: '1.3',
                color: '#090B0E',
              }}
            >
              Experience the Advantage <br /> Why Arhova Systems is the Right Choice
            </h2>

            <section className="max-w-2xl mx-auto lg:mx-0 text-left mb-12">
              <p className="text-md text-gray-700">
                Arhova Systems is a premium digital marketing and technology agency
                delivering high-quality services such as search engine optimization (SEO),
                performance marketing, and custom website development — all focused on
                driving measurable growth and helping businesses succeed.
              </p>
            </section>

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg  border border-gray-200">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <FaUsers className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Proven Result
                  </h3>
                  <p className="text-gray-700 text-base">
                    We don’t just run campaigns — we drive growth. With a proven record of
                    boosting ROAS, lowering CAC, and scaling revenue across industries, we
                    focus on what matters most: results that truly impact your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <FaStickyNote className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Customized Solutions
                  </h3>
                  <p className="text-gray-700 text-base">
                    Your brand isn’t generic — every solution we create is built around your
                    goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg  border border-gray-200">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <FaHeadset className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-700 text-base">
                    Think of us as an extension of your team. Our project managers,
                    marketers, and developers stay responsive, proactive, and fully
                    committed to your success — every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images (Revised for Responsiveness) */}
          <div className="flex justify-center items-center gap-8 -mt-20 lg:mt-0">
            {/* Left Image */}
            <div className="overflow-hidden w-40 h-80 sm:w-52 sm:h-[420px] lg:w-[220px] lg:h-[528px]">
              <img
                src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=687&auto=format&fit=crop"
                alt="Entertainer presenting tablet"
                className="w-full h-full object-cover"
                style={{ borderRadius: '50% / 20%' }}
              />
            </div>

            {/* Right Image (Flipped) */}
            <div className="overflow-hidden w-40 h-80 sm:w-52 sm:h-[420px] lg:w-[220px] lg:h-[528px] mt-40 sm:mt-60 lg:mt-72">
              <img
                src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?q=80&w=764&auto=format&fit=crop"
                alt="Entertainer presenting tablet"
                className="w-full h-full object-cover transform scale-x-[-1]"
                style={{ borderRadius: '50% / 20%' }}
              />
            </div>
          </div>
        </div>

        {/* <LinkedInRecommendations /> */}
        <CTASection />
      </main>
    </div>
  );
}