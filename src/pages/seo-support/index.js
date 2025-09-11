// pages/performance-marketing.js
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faArrowCircleRight, 
  faMinus, 
  faPlus,
  faEnvelope,
  faPhone,
  faEye,
  faFunnelDollar,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer/page';
import WhyChooseUs from '@/components/whychoose/page';
import CTASection from '@/components/ctasection/page';

export default function PerformanceMarketing() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const countersRef = useRef(null);

  // Animate counters when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersAnimated) {
            setCountersAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, [countersAnimated]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white performance-marketing-page">
      {/* <Head>
        <title>Performance Marketing & CRO - Toposel</title>
        <meta name="description" content="Performance Marketing and Conversion Rate Optimization services by Toposel" />
      </Head> */}

      {/* Header Section */}
       <header 
          className="text-center mb-4 mt-0 text-gray-900 py-20"
          style={{ 
            background: 'linear-gradient(150deg, rgba(222, 189, 246, 1), rgba(233, 226, 250, 0.72))'
          }}
        >         
          <h1
            className="mt-19 mb-4 font-bold text-gray-900"
            style={{
              fontFamily: '"Figtree", sans-serif',
              fontSize: '56px',
              lineHeight: '60px',
              color: 'var(--e-global-color-text)',
            }}
          >
            Performance Marketing & CRO
          </h1>
          
          <p
            className="text-black-700 mb-30 text-lg"
            style={{ 
              fontFamily: '"Figtree", sans-serif',
            }}
          >
            Arhova Systems &raquo; Performance Marketing & CRO
          </p>
        </header>

      <main className="max-w-9xl mx-auto">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://toposel.com/wp-content/uploads/2025/07/marketing-9669582_1920-1-1.png" 
                alt="Performance Marketing" 
                width={500} 
                height={500}
                className="rounded-lg"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Not Just Marketing—Precision in Motion</h2>
              
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 animated-heading">
                  <span className="inline-block mr-2">Ever</span>
                  <span className="inline-block mr-2">wondered</span>
                  <span className="inline-block mr-2">what</span>
                  <span className="inline-block mr-2">really</span>
                  <span className="inline-block mr-2">moves</span>
                  <span className="inline-block mr-2">the</span>
                  <span className="inline-block mr-2">needle</span>
                  <span className="inline-block mr-2">for</span>
                  <span className="inline-block mr-2">growing</span>
                  <span className="inline-block">brands?</span>
                </h1>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                At Toposel, we don't just run ads. We build systems that convert attention into revenue. Whether you're chasing scale, ROAS, or app installs — our performance strategies are designed to <i>quietly outperform</i> the noise.
                <br /><br />
                We don't follow trends. We engineer outcomes.
              </p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>Craft Smart Goals</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>Measure What Matters</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>Unlock Growth Others Miss</span>
                </li>
              </ul>
              
              <Link href="/contact-us" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" />
                Discover How We Work
              </Link>
            </div>
          </div>
        </section>

        {/* What Does Performance Marketing Include Section */}
        <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Does Performance Marketing Include?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Toposel, we engineer pathways to exponential growth, ensuring every dollar spent is a measurable investment.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faEye} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hyper-Targeted Acquisition</h3>
              <p className="text-gray-700">
                We identify high-intent prospects based on psychographic precision, not just demographics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faFunnelDollar} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conversion Architecture</h3>
              <p className="text-gray-700">
                We optimize the entire customer journey, building seamless and intuitive pathways to conversion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faChartLine} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LTV Maximization & Predictive Growth</h3>
              <p className="text-gray-700">
                We focus on profitable customers, using advanced attribution and analytics for sustainable scaling.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-purple-50 relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leveraging Analytics, Optimizing Profitability</h2>
          </div>
          
          <div ref={countersRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                ${countersAnimated ? '17' : '0'}M
              </div>
              <p className="text-gray-700">spends managed</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {countersAnimated ? '3' : '0'}s
              </div>
              <p className="text-gray-700">and less load time achieved</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {countersAnimated ? '1.5' : '0'}x
              </div>
              <p className="text-gray-700">ROI multiplied</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 opacity-20">
            <Image 
              src="https://toposel.com/wp-content/uploads/2025/07/cta-bg1.webp" 
              alt="" 
              width={150} 
              height={150}
            />
          </div>
          <div className="absolute bottom-10 left-10 opacity-20">
            <Image 
              src="https://toposel.com/wp-content/uploads/2025/07/cta-bg2.webp" 
              alt="" 
              width={150} 
              height={120}
            />
          </div>
        </section>

        {/* Why Choose  */}
        <WhyChooseUs />
        <CTASection />
      </main>


      <style jsx>{`
        .performance-marketing-page {
          font-family: 'Nunito Sans', sans-serif;
        }
        
        .animated-heading {
          font-family: 'Figtree', sans-serif;
        }
      `}</style>
    </div>
  );
}