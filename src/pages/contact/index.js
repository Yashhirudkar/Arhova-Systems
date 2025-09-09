// pages/contact.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CTASection from '@/components/ctasection/page';

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
        <meta name="description" content="Get in touch with Toposel" />
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
            Contact Us
          </h1>
          
  <p
    className="text-bkack-700 mb-30 text-lg"
    style={{ 
      fontFamily: '"Figtree", sans-serif',
    }}
  >
   Arhova systems  &raquo; Contact Us
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
            Contact Us
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
          Get in Touch with Us <br /> We Value Your Connection
        </h2>

               <section className="max-w-2xl mx-auto text-left mb-12">
          <p className="text-md text-gray-700">
            We work with a limited number of brands to deliver focused, high-impact growth across performance marketing, retention, AI-led SEO, and custom development. If you're serious about scaling and ready for a strategic partner, we're currently evaluating new collaborations.
          </p>
        </section>

           <div className="bg-[#edeafb] p-6  max-w-xl mx-auto">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Address</h3>
                <p className="text-lg text-blue-600">arhovasystems@gmail.com</p>
              </div>
            </div>
          </div>

            
            {/* Address */}
        <div className="bg-[#edeafb] p-6  max-w-xl mx-auto mb-6">
  <div className="flex items-start">
    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Operational Address</h3>
      <p className="text-gray-700 leading-relaxed">
        Toposel, AIC Co working 483P-8672 2nd Floor, SVM's<br />
        Naraee Monjee Institute of Management Studies, V. L.<br />
        Vaisumhiai Mehta Rd, Naryyug Society, Naypada, Suvama<br />
        Nagar, Vite Paile West, Mumbai, Maharashtra 400056
      </p>
    </div>
  </div>
</div>

          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h3>
            <p className="text-gray-600 mb-6">
              We take on a limited number of growth-focused brands. Think we're the right fit? Let's connect.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="helpType" className="block text-sm font-medium text-gray-700 mb-2">
                  I need help with
                </label>
                <select 
                  id="helpType"
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="I need help with">I need help with</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Retention Marketing">Retention Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              {showAdditionalFields && (
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your Name"
                    required
                  />
                  
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Phone Number"
                    required
                  />
                  
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Email Address"
                    required
                  />
                  
                  <input 
                    type="url" 
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Website Link"
                    required
                  />
                  
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Monthly Ad Spends Budget (INR)</option>
                    <option value="0 - 5 Lacs">0 - 5 Lacs</option>
                    <option value="5 - 15 Lacs">5 - 15 Lacs</option>
                    <option value="15 - 50 Lacs">15 - 50 Lacs</option>
                    <option value="50 Lacs - 2 Cr">50 Lacs - 2 Cr</option>
                    <option value="More than 2 Cr">More than 2 Cr</option>
                  </select>
                  
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your Message"
                  ></textarea>
                  
                  <button 
                    type="submit" 
                    disabled={!isFormValid}
                    className={`w-full py-3 px-4 rounded-md font-medium transition duration-300 ${
                      isFormValid 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

<CTASection />

      </main>
    </div>
  )
}