import Image from 'next/image';

export default function LinkedInRecommendations() {
  const recommendations = [
    {
      id: 1,
      name: "Mihir Gadani (MG)",
      position: "Co-Founder at OZiva, Building India's Leading Clean & Plant based Nutrition brand",
      content: "Working with Ashish at Arhova Systems has been an incredible experience. From the early stages of the company, he consistently demonstrated exceptional vision, technical expertise, and a relentless drive to solve problems. His ability to navigate challenges, manage projects efficiently, and deliver high-quality solutions is truly impressive. Ashish combines creativity with strategic thinking, always keeping the bigger picture in mind while handling the details with precision. What stands out most is his dedication to innovation and continuous learning, ensuring that Arhova Systems stays ahead in a fast-paced industry. Collaborating with him has been inspiring, and anyone who works with Ashish can expect professionalism, insight, and a strong commitment to excellence.",
      avatar: "/ecom3.png", // Replace with actual image path
      connection: "3rd"
    },
    // Add more recommendations here as needed
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
          <h2
            className="text-center mb-3 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-tight"
          style={{ fontSize: '44px', lineHeight: '48px', color: '#1f2937' }} // #1f2937 is Tailwind's gray-800
        >
          LinkedIn Recommendations
        </h2>

      <p className="text-center text-gray-600 mb-8">See what industry leaders have to say about our founders</p>
      
      <div className="border-t border-gray-300 my-6"></div>
      
      {recommendations.map((rec) => (
        <div key={rec.id} className="mb-10">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="relative w-14 h-14">
                <Image
                  src={rec.avatar}
                  alt={rec.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{rec.name}</h3>
                  <p className="text-sm text-gray-600">{rec.position}</p>
                </div>
                {/* <span className="text-xs text-gray-500">{rec.connection} connection</span> */}
              </div>
              
             <div className="mt-4 p-4 rounded-md bg-[#f8f8f8] text-black leading-relaxed">
              <p>{rec.content}</p>
            </div>

              
              {/* <div className="mt-4 flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                  Like
                </button>
                <button className="text-gray-600 hover:text-gray-800 text-sm">
                  Comment
                </button>
                <button className="text-gray-600 hover:text-gray-800 text-sm">
                  Share
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ))}
      
      {/* <div className="mt-8 text-center">
        <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-100 font-semibold">
          Show all recommendations
        </button>
      </div> */}
    </div>
  );
}