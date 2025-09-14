"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Section Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-[14px] sm:text-[16px] font-bold leading-[18px] sm:leading-[20px] text-purple-600 mb-4">
          Why Choose Us
        </h2>
        <h3 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-[32px] sm:leading-[40px] lg:leading-[48px] text-gray-900">
          Why Choose Arhova Systems?
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Accordion */}
        <div className="space-y-4">
          {/* Item 1 */}
          <details className="bg-white p-4 rounded-lg shadow-md" open>
            <summary className="cursor-pointer font-bold text-base sm:text-lg flex justify-between items-center">
              <span>1. Expert Team</span>
              <span className="text-purple-600">
                <FontAwesomeIcon icon={faMinus} />
              </span>
            </summary>
            <div className="mt-4 text-gray-700 text-sm sm:text-base">
              <p>
                Our strength lies in our people. From media buyers and creative
                strategists to developers and retention specialists — every
                member of the Arhova Systems team brings domain expertise,
                innovation, and a shared commitment to helping brands scale.
              </p>
            </div>
          </details>

          {/* Item 2 */}
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="cursor-pointer font-bold text-base sm:text-lg flex justify-between items-center">
              <span>2. Proven Track Record</span>
              <span className="text-purple-600">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </summary>
            <div className="mt-4 text-gray-700 text-sm sm:text-base">
              <p>
                We deliver measurable results — not just presentations. With
                successful campaigns across D2C, healthcare, F&B, and tech
                brands, our case studies speak for themselves. ROAS improvement,
                lower CAC, and full-funnel growth are part of our daily wins.
              </p>
            </div>
          </details>

          {/* Item 3 */}
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="cursor-pointer font-bold text-base sm:text-lg flex justify-between items-center">
              <span>3. Customized Solution</span>
              <span className="text-purple-600">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </summary>
            <div className="mt-4 text-gray-700 text-sm sm:text-base">
              <p>
                We don't do cookie-cutter campaigns. Your business is unique,
                and so is our approach. Whether it's building a retention flow,
                optimizing your store, or running Meta Ads — everything is
                tailored to your specific goals and challenges.
              </p>
            </div>
          </details>

          {/* Item 4 */}
          <details className="bg-white p-4 rounded-lg shadow-md">
            <summary className="cursor-pointer font-bold text-base sm:text-lg flex justify-between items-center">
              <span>4. Commitment to Success</span>
              <span className="text-purple-600">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </summary>
            <div className="mt-4 text-gray-700 text-sm sm:text-base">
              <p>
                Your success is our success. We work like your in-house team —
                agile, responsive, and outcome-driven. From weekly syncs to
                ClickUp-based collaboration, we stay aligned with your
                priorities to ensure real progress, not just busywork.
              </p>
            </div>
          </details>
        </div>

        {/* Images */}
        <div className="flex justify-center items-center gap-8 ">
  {/* Left Image */}
  <div className="overflow-hidden w-40 h-80 sm:w-52 sm:h-[300px] lg:w-[220px] lg:h-[428px] -mt-70">
    <img
      src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=687&auto=format&fit=crop"
      alt="Entertainer presenting tablet"
      className="w-full h-full object-cover"
      style={{ borderRadius: '50% / 20%' }}
    />
  </div>

  {/* Right Image (Flipped) */}
  <div className="overflow-hidden w-40 h-80 sm:w-52 sm:h-[420px] lg:w-[220px] lg:h-[428px] mt-60">
    <img
      src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?q=80&w=764&auto=format&fit=crop"
      alt="Entertainer presenting tablet"
      className="w-full h-full object-cover transform scale-x-[-1]"
      style={{ borderRadius: '50% / 20%' }}
    />
  </div>
</div>
      </div>
    </section>
  );
}