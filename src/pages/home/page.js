'use client';

import HeroSection from './components/HeroSection';
import PlatformsSection from './components/PlatformsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RecommendationsSection from './components/RecommendationsSection';
import BlogSection from './components/BlogSection';
import CTASection from '@/components/ctasection/page';

export default function Home() {
  return (
    <div className="text-gray-200">
      <div className="antialiased font-sans">
        <HeroSection />
        <PlatformsSection />
        <AboutSection />
        <ServicesSection />
        <RecommendationsSection />
        <BlogSection />
        <CTASection />
      </div>
    </div>
  );
}
