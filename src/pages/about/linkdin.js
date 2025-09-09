import Image from 'next/image';

export default function LinkedInRecommendations() {
  const recommendations = [
    {
      id: 1,
      name: "Mihir Gadani (MG)",
      position: "Co-Founder at OZiva, Building India's Leading Clean & Plant based Nutrition brand",
      content: "It's been an absolute pleasure working with Vipa, and watching her grow her own venture over time has been truly inspiring. From the early days of our startup, Vipa always stood out with her incredible passion, entrepreneurial spirit, and ability to take on challenges head-on. She's the kind of person who thrives under pressure, gets things done, and always keeps her eye on the bigger picture. Whether it was managing tight deadlines or tackling complex problems, Vipa handled it all with remarkable focus and determination. What truly sets her apart is her hunger to learn and grow. Vipa's journey as an entrepreneur is a testament to her leadership, creativity, and grit. It's exciting to see all that she has accomplished, and I have no doubt she'll continue to build something remarkable. Anyone who gets the chance to work with her in any capacity is truly fortunate.",
      avatar: "/placeholder-avatar.jpg", // Replace with actual image path
      connection: "3rd"
    },
    // Add more recommendations here as needed
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">LinkedIn Recommendations</h2>
      <p className="text-gray-600 mb-8">See what industry leaders have to say about our founders</p>
      
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
                <span className="text-xs text-gray-500">{rec.connection} connection</span>
              </div>
              
              <div className="mt-4 text-gray-800 leading-relaxed">
                <p>{rec.content}</p>
              </div>
              
              <div className="mt-4 flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                  Like
                </button>
                <button className="text-gray-600 hover:text-gray-800 text-sm">
                  Comment
                </button>
                <button className="text-gray-600 hover:text-gray-800 text-sm">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="mt-8 text-center">
        <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-100 font-semibold">
          Show all recommendations
        </button>
      </div>
    </div>
  );
}