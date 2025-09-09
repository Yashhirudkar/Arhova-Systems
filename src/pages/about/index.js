import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Use only react-icons (no @fortawesome needed)
import { FaUsers, FaChartLine, FaHeadset, FaComments, FaUserFriends, FaStickyNote } from 'react-icons/fa';

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
    // Check if all required fields are filled
    const isValid = formData.helpType && formData.helpType !== 'I need help with' && 
                   formData.name && formData.phone && 
                   formData.email && formData.website && formData.budget;
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Show additional fields when a help type is selected
    if (name === 'helpType' && value !== 'I need help with') {
      setShowAdditionalFields(true);
    } else if (name === 'helpType' && value === 'I need help with') {
      setShowAdditionalFields(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        {/* <title>Contact Us </title> */}
        <meta name="description" content="Get in touch with Arhovasystems" />
      </Head>

      <main className="max-w-9xl mx-auto px-10 sm:px-20 lg:px-0 " >
        {/* Header Section */}
<header 
  className="text-center mb-4 mt-0 text-gray-900 py-20"
  style={{ 
    background: 'linear-gradient(150deg, rgba(222, 189, 246, 1), rgba(233, 226, 250, 0.72))'
  }}
>         <h1
            className="mt-19 mb-4 font-bold text-gray-900"
            style={{
              fontFamily: '"Figtree", sans-serif',
              fontSize: '56px',
              lineHeight: '60px',
              color: 'var(--e-global-color-text)',
            }}
          >
            About Us
          </h1>
          
  <p
    className="text-bkack-700 mb-30 text-lg"
    style={{ 
      fontFamily: '"Figtree", sans-serif',
    }}
  >
   Arhova systems  &raquo; About Us
  </p>
          </header>


        {/* Intro Text */}
       
        {/* Contact Information & Form Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16 mt-30" >
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <h2
            className="mb-4 font-bold"
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
    fontSize: '40px',
    fontWeight: 600,
    lineHeight: '48px',
    color: '#090B0E',
  }}
>
  Experience the Advantage <br /> Why We're the Right Choice
</h2>


               <section className="max-w-2xl mx-auto text-left mb-12">
          <p className="text-md text-gray-700">
           Arhovasystems is a premium Digital Marketing Agency that delivers high-quality services like search engine optimization, performance marketing, and website development.
          </p>
        </section>
<div className="bg-white p-6 max-w-xl mx-auto rounded-lg shadow-md border border-gray-200 mb-6">
  <div className="flex items-start">
    {/* Icon: Font Awesome Trending Up */}
    <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
      <FaUsers className="w-6 h-6 text-purple-600" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-black-800 mb-2">
        Proven Result
      </h3>
      <p className="text-gray-700 text-base">
        We don’t just run campaigns — we drive growth. With a strong track record of improving ROAS, reducing CAC, and scaling revenue across industries, we focus on what matters: delivering results that move the needle for your business.
      </p>
    </div>
  </div>
</div>


<div className="bg-white p-6 max-w-xl mx-auto rounded-lg shadow-md border border-gray-200 mb-6">
  <div className="flex items-start">
    {/* Icon: People */}
    <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
      <FaStickyNote className="w-6 h-6 text-purple-600" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-black-800 mb-2">
        Customized Solutions
      </h3>
      <p className="text-gray-700 text-base">
        Your brand isn’t generic — every solution is tailored to your goals.
      </p>
    </div>
  </div>
</div>


<div className="bg-white p-6 max-w-xl mx-auto rounded-lg shadow-md border border-gray-200">
  <div className="flex items-start">
    {/* Icon: Font Awesome */}
    <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
      <FaHeadset className="w-6 h-6 text-purple-600" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-black-800 mb-2">
        Dedicated Support
      </h3>
      <p className="text-gray-700 text-base">
        Consider us an extension of your team. Our project managers, marketers, and developers are responsive, proactive, and committed to your success — every step of the way.
      </p>
    </div>
  </div>
</div>


       

          </div>
          
                      {/* Contact Form */}
               <div className="flex justify-start items-center gap-20">
  {/* Left Image */}
  <div className="overflow-hidden w-[250px] h-[528px] mb-40" >
    <img
      src="https://toposel.com/wp-content/uploads/2025/07/entertainer-presenting-tablet-from-sponsor-1.webp"
      alt="Entertainer presenting tablet"
      className="w-full h-full object-cover"
      style={{ borderRadius: '50% / 20%' }}
    />
  </div>

  {/* Right Image (Flipped) */}
  <div className="overflow-hidden w-[250px] h-[528px] mt-60">
    <img
      src="	https://toposel.com/wp-content/uploads/2025/07/Frame-1437254183.webp"
      alt="Entertainer presenting tablet"
      className="w-full h-full object-cover transform scale-x-[-1]"
      style={{ borderRadius: '50% / 20%' }}
    />
  </div>
</div>
        </div>
<LinkedInRecommendations />
<CTASection />

      </main>
    </div>
  )
}