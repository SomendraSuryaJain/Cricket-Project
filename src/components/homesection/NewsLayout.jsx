import React from "react";

const NewsLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT: VIDEO */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Cricket Bowling Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Bowling analysis of under-14 state player
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Cricket coaching insights and technique breakdown.
            </p>
          </div>
        </div>

        {/* RIGHT: ARTICLES */}
        <div className="space-y-6">
          
          {/* Article Card */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="text-lg md:text-xl font-bold mb-3">
              Colvin Cricket League – Champion Announcement
            </h3>
            <img
              src="https://via.placeholder.com/600x300"
              alt="team"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              The Colvin Cricket League concluded with Colvin Blue becoming
              the champions. The final match saw an excellent performance
              by the players...
            </p>
          </div>

          {/* Newspaper Style */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <h3 className="text-lg font-bold mb-3">
              Private School Team Incident
            </h3>
            <div className="flex gap-4">
              <img
                src="https://via.placeholder.com/150"
                alt="news"
                className="w-24 h-24 object-cover rounded-md"
              />
              <p className="text-gray-700 text-sm leading-relaxed">
                A recent incident involving a private school team has sparked
                discussion among parents and authorities...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div className="mt-10 border-t border-black pt-2 text-center text-lg text-black">
        Check & Mate e tech Solution
      </div>
    </div>
  );
};

export default NewsLayout;