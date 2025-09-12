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
  Experience the Advantage <br /> Why Arhova Systems is the Right Choice
</h2>


               <section className="max-w-2xl mx-auto text-left mb-12">
          <p className="text-md text-gray-700">
     Arhova Systems is a premium digital marketing and technology agency delivering high-quality services such as search engine optimization (SEO), performance marketing, and custom website development — all focused on driving measurable growth and helping businesses succeed.   </p>
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
We don’t just run campaigns — we drive growth. With a proven record of boosting ROAS, lowering CAC, and scaling revenue across industries, we focus on what matters most: results that truly impact your business.      </p>
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
        Your brand isn’t generic — every solution we create is built around your goals.
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
        Think of us as an extension of your team. Our project managers, marketers, and developers stay responsive, proactive, and fully committed to your success — every step of the way.
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
      src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Entertainer presenting tablet"
      className="w-full h-full object-cover"
      style={{ borderRadius: '50% / 20%' }}
    />
  </div>

  {/* Right Image (Flipped) */}
  <div className="overflow-hidden w-[250px] h-[528px] mt-60">
    <img
      src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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