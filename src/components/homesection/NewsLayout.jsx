// import React from 'react';

// const NewsLayout = () => {
//   // Data for the media items
//   const mediaItems = [
//     {
//       id: 1,
//       type: 'video',
//       title: 'Bowling Analysis - Shashwat Krishna',
//       subtitle: 'Under-14 State Player',
//       thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800', // Placeholder for the video thumb
//       link: '#'
//     },
//     {
//       id: 2,
//       type: 'news',
//       title: 'Colvin Blue Wins Champion Trophy',
//       subtitle: 'Colvin Cricket League Highlights',
//       thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800', // Placeholder for news image
//       date: 'Lucknow Edition'
//     },
//     {
//       id: 3,
//       type: 'news',
//       title: 'Garg Times: Sports Coverage',
//       subtitle: 'July 21, 2024 Report',
//       thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800', // Placeholder for newspaper clipping
//       date: '21 July 2024'
//     }
//   ];

//   return (
//     <section className="bg-green-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-9xl md:px-20 mx-auto">
//         {/* Header */}
//         <div className="text-center mb-5">
//           <h2 className="text-2xl md:text-6xl font-extrabold text-gray-900 sm:text-4xl">
//             In The <span className="text-blue-700">Media</span>
//           </h2>
//           <div className="mt-2 h-1.5 w-20 bg-green-500 mx-auto rounded-full"></div>
//         </div>

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mediaItems.map((item) => (
//             <div 
//               key={item.id} 
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
//             >
//               {/* Image/Video Container */}
//               <div className="relative h-64 overflow-hidden group">
//                 <img 
//                   src={item.thumbnail} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
                
//                 {/* Overlay for Video Play Button */}
//                 {item.type === 'video' && (
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
//                     <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
//                       <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
//                     </div>
//                   </div>
//                 )}
                
//                 {/* Category Badge */}
//                 <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm ${
//                   item.type === 'video' ? 'bg-blue-600' : 'bg-green-600'
//                 }`}>
//                   {item.type}
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="p-6">
//                 <p className="text-sm font-medium text-blue-600 mb-1">{item.subtitle}</p>
//                 <h3 className="text-xl font-bold text-gray-800 leading-tight mb-3">
//                   {item.title}
//                 </h3>
//                 <div className="flex items-center justify-between mt-4">
//                    <button className="text-sm font-semibold text-gray-700 hover:text-blue-700 flex items-center transition-colors">
//                     View Details
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                   {item.date && <span className="text-xs text-gray-400 font-mono">{item.date}</span>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsLayout;





import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles import karna zaroori hai
import 'swiper/css';
import 'swiper/css/pagination';

const NewsLayout = () => {
  const mediaItems = [
    {
      id: 1,
      type: 'video',
      title: 'Bowling Analysis - Shashwat K.',
      subtitle: 'Under-14 State Player',
      thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      id: 2,
      type: 'news',
      title: 'Colvin Blue Wins Champion Trophy',
      subtitle: 'Colvin Cricket League Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
      date: 'Lucknow Edition'
    },
    {
      id: 3,
      type: 'news',
      title: 'Garg Times: Sports Coverage',
      subtitle: 'July 21, 2024 Report',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
      date: '21 July 2024'
    },
    {
      id: 4,
      type: 'news',
      title: 'Academy Practice Session',
      subtitle: 'Morning Drill Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
      date: '10 Aug 2024'
    }
  ];

  return (
    <section className="bg-green-100 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-9xl md:px-20 mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-md md:text-4xl font-extrabold text-gray-900">
            In The <span className="text-blue-700">Media</span>
          </h2>
          <div className="mt-1 h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30} // Cards ke beech ka gap
          slidesPerView={1} // Mobile par ek card dikhega
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            // Responsive breakpoints
            640: { slidesPerView: 2 }, // Tablets par 2 cards
            1024: { slidesPerView: 3 }, // Desktop par 3 cards
          }}
          className="pb-14" // Pagination dots ke liye space
        >
          {mediaItems.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                {/* Image/Video Container */}
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  )}
                  
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
                    item.type === 'video' ? 'bg-blue-600' : 'bg-green-600'
                  }`}>
                    {item.type}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm font-medium text-blue-600 mb-1">{item.subtitle}</p>
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-4">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsLayout;