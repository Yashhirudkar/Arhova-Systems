export default function CTASection() {
  return (
    <section className="w-full py-12 bg-[#4e2fda] my-12 text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2
          className="mb-4 font-semibold"
          style={{
            fontFamily: '"Figtree", Sans-serif',
            color: '#ffffff',
          }}
        >
          <span className="block text-[24px] leading-[30px] sm:text-[32px] sm:leading-[38px] lg:text-[44px] lg:leading-[48px]">
            Ready to Take Your Brand to
          </span>
          <span className="block text-[24px] leading-[30px] sm:text-[32px] sm:leading-[38px] lg:text-[44px] lg:leading-[48px]">
            The Next Level
          </span>
        </h2>

        <p
          className="text-white mb-8 text-sm sm:text-base lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-7 max-w-2xl mx-auto"
          style={{ fontFamily: '"Figtree", sans-serif' }}
        >
          Partner with a team that blends strategy, creativity, and tech to
          unlock serious growth. <br className="hidden sm:block" />
          From performance marketing to custom development — we've got you
          covered.
        </p>

        <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 font-medium text-base sm:text-lg w-full sm:w-auto">
          Book a Call
        </button>
      </div>
    </section>
  );
}
