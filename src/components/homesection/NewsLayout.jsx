// import React from "react";

// const NewsLayout = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
//         {/* LEFT: VIDEO */}
//         <div className="bg-white rounded-2xl shadow-md overflow-hidden">
//           <div className="aspect-video w-full">
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               title="Cricket Bowling Video"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           </div>
//           <div className="p-4">
//             <h2 className="text-lg md:text-xl font-semibold">
//               Bowling analysis of under-14 state player
//             </h2>
//             <p className="text-gray-600 text-sm mt-2">
//               Cricket coaching insights and technique breakdown.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT: ARTICLES */}
//         <div className="space-y-6">
          
//           {/* Article Card */}
//           <div className="bg-white rounded-2xl shadow-md p-4">
//             <h3 className="text-lg md:text-xl font-bold mb-3">
//               Colvin Cricket League – Champion Announcement
//             </h3>
//             <img
//               src="https://via.placeholder.com/600x300"
//               alt="team"
//               className="w-full h-48 object-cover rounded-lg mb-3"
//             />
//             <p className="text-gray-700 text-sm leading-relaxed">
//               The Colvin Cricket League concluded with Colvin Blue becoming
//               the champions. The final match saw an excellent performance
//               by the players...
//             </p>
//           </div>

//           {/* Newspaper Style */}
//           <div className="bg-white rounded-2xl shadow-md p-4">
//             <h3 className="text-lg font-bold mb-3">
//               Private School Team Incident
//             </h3>
//             <div className="flex gap-4">
//               <img
//                 src="https://via.placeholder.com/150"
//                 alt="news"
//                 className="w-24 h-24 object-cover rounded-md"
//               />
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 A recent incident involving a private school team has sparked
//                 discussion among parents and authorities...
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsLayout;






import React from 'react';

const NewsLayout = () => {
  // Data for the media items
  const mediaItems = [
    {
      id: 1,
      type: 'video',
      title: 'Bowling Analysis - Shashwat Krishna',
      subtitle: 'Under-14 State Player',
      thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800', // Placeholder for the video thumb
      link: '#'
    },
    {
      id: 2,
      type: 'news',
      title: 'Colvin Blue Wins Champion Trophy',
      subtitle: 'Colvin Cricket League Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800', // Placeholder for news image
      date: 'Lucknow Edition'
    },
    {
      id: 3,
      type: 'news',
      title: 'Garg Times: Sports Coverage',
      subtitle: 'July 21, 2024 Report',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800', // Placeholder for newspaper clipping
      date: '21 July 2024'
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl md:px-20 mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-6xl font-extrabold text-gray-900 sm:text-4xl">
            In The <span className="text-blue-700">Media</span>
          </h2>
          <div className="mt-2 h-1.5 w-20 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
            >
              {/* Image/Video Container */}
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay for Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm ${
                  item.type === 'video' ? 'bg-blue-600' : 'bg-green-600'
                }`}>
                  {item.type}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <p className="text-sm font-medium text-blue-600 mb-1">{item.subtitle}</p>
                <h3 className="text-xl font-bold text-gray-800 leading-tight mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                   <button className="text-sm font-semibold text-gray-700 hover:text-blue-700 flex items-center transition-colors">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {item.date && <span className="text-xs text-gray-400 font-mono">{item.date}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsLayout;