export default function CTASection() {
  return (
    <section className="py-12 bg-[#4e2fda] my-12 text-center">
      <h2
        className="mb-4"
        style={{
          fontFamily: '"Figtree", Sans-serif',
          fontSize: '44px',
          fontWeight: 600,
          lineHeight: '48px',
          color: '#ffffff',
        }}
      >
        Ready to Take Your Brand to <br />The Next Level
      </h2>

      <p
        className="text-white max-w-3xl mx-auto mb-8 text-base font-normal leading-6"
        style={{ fontFamily: '"Figtree", sans-serif' }}
      >
        Partner with a team that blends strategy, creativity, and tech to unlock serious growth.<br />
        From performance marketing to custom development — we've got you covered.
      </p>

      <button className="bg-blue-600 text-white py-2 px-8 rounded-md hover:bg-blue-700 transition duration-300 font-medium text-lg">
        Book a Call
      </button>
    </section>
  );
}
