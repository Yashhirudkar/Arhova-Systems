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
        <title>Performance Marketing & CRO - arhovasystems</title>
        <meta name="description" content="Performance Marketing and Conversion Rate Optimization services by arhovasystems" />
      </Head> */}

      {/* Header Section */}
      <header 
       className="text-center py-35 sm:py-24 md:py-32 lg:py-40 -mt-20 sm:-mt-20 lg:-mt-10"
        style={{ 
          background: 'linear-gradient(150deg, rgba(222, 189, 246, 1), rgba(233, 226, 250, 0.72))'
        }}
      >
        <h1
          className="mb-2 font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily: '"Figtree", sans-serif',
            lineHeight: '1.2'
          }}
        >
          SEO Support &amp; Services
        </h1>
        
        <p
          className="text-black-700 mb-6 text-base sm:text-lg"
          style={{ 
            fontFamily: '"Figtree", sans-serif',
          }}
        >
          Arhova Systems &raquo;  SEO Support &amp; Services
        </p>
      </header>

 <main className="max-w-9xl mx-auto px-4 sm:px-0 lg:px-0 mt-12">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">SEO That Works—Precision, Strategy, and Results</h2>
              
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight animated-heading">
                  <span className="inline-block mr-1">Ever wondered what really moves the needle for growing brands?</span>
                </h1>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 mb-6">
               At Arhova Systems, we don’t just optimize for search — we build SEO systems that turn visibility into measurable growth. Whether your goal is higher rankings, increased organic traffic, or better conversions, our performance-driven strategies are designed to outperform the competition and deliver real results.     
                <br /><br />
                “We don’t follow trends. We engineer measurable outcomes.
              </p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center text-sm sm:text-base">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>Define Clear Objectives</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>Track What Counts</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>Seize Hidden Opportunities</span>
                </li>
              </ul>
              
              <Link href="/contact" className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm sm:text-base">
                <FontAwesomeIcon icon={faArrowCircleRight} className="mr-2" />
                Discover How We Work
              </Link>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
             <Image 
              src="/marketing-image.png" 
              alt="Performance Marketing" 
              width={500} 
              height={500}
              className="rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
            />

            </div>
          </div>
        </section>

        {/* What Does Performance Marketing Include Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center mb-12 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Does Performance Marketing Include?</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              At Arhova Systems, we design performance-driven strategies that turn every marketing dollar into measurable business growth
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faEye} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">SEO & Organic Growth</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                  Boost search visibility and attract high-intent traffic with strategies tailored to your business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faFunnelDollar} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Conversion Optimization</h3>
              <p className="text-gray-700 text-sm sm:text-base">
               Optimize the customer journey with data-driven funnels and workflows designed to maximize conversions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faChartLine} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Analytics & Growth Strategy</h3>
              <p className="text-gray-700 text-sm sm:text-base">
               Use actionable insights and predictive analytics to maximize ROI, lifetime value, and sustainable growth.
              </p>
            </div>
          </div>
        </section>


        {/* Why Choose  */}
       
      </main>
       <WhyChooseUs />
        <CTASection />
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