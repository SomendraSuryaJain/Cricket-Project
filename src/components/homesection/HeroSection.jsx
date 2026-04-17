// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";

// const slides = [
//   {
//     img: "src/Assets/hero1.jpg",
//     text: "Our players win several awards and laurels.",
//   },
//   {
//     img: "src/Assets/hero2.jpg",
//     text: "We provide professional cricket training.",
//   },
//   {
//     img: "https://bangkoksouvenir.com/wp-content/uploads/2025/11/Where-to-play-cricket-in-Bangkok-1.jpg",
//     text: "Top-class facilities for players.",
//   },
// ];

// const HeroSection = () => {
//   return (
//     <div className="w-full h-[40vh] md:h-[80vh] relative">
//       <Swiper modules={[Autoplay, EffectFade]} effect="fade"
//         autoplay={{ delay: 5000, disableOnInteraction: false}} loop={true} className="h-full">
//         {slides.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
              
//               {/* Background Image */}
//               <img src={item.img} alt="hero" className="w-full h-full object-fit-cover"/>

//               {/* Overlay (dark effect) */}
//               <div className="absolute inset-0 bg-black/30 z-10"></div>

//               {/* Bottom Text Box */}
//               <div className="absolute bottom-10 left-1 md:left-16 z-20">
//                 <div className="text-white px-2 py-2 max-w-xl border border-white">
//                   <p className="text-lg md:text-2xl font-medium">{item.text}</p>
//                 </div>
//               </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSection;







// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";

// const slides = [
//   {
//     img: "src/Assets/hero1.jpg",
//     slogan: "Unleash Your Inner Champion",
//     text: "Join AB Cricket Academy and train with the best coaches in the region.",
//   },
//   {
//     img: "src/Assets/hero2.jpg",
//     slogan: "Modern Gear, Classic Technique",
//     text: "We provide professional cricket training with top-class facilities.",
//   },
//   {
//     img: "https://bangkoksouvenir.com/wp-content/uploads/2025/11/Where-to-play-cricket-in-Bangkok-1.jpg",
//     slogan: "Excellence in Every Shot",
//     text: "Top-class facilities for players.",
//   },
// ];

// const HeroSection = () => {
//   return (
//     // Changed: h-screen on mobile to accommodate both text and form
//     <div className="w-full h-[70vh] md:h-[80vh] relative overflow-hidden">
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         loop={true}
//         className="h-full">
//         {slides.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               {/* Background Image */}
//               <img src={item.img} alt="hero" className="w-full h-full object-cover"/>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/60 z-10"></div>

//               {/* Content Container */}
//               <div className="absolute inset-0 z-20 flex items-center justify-center">
//                 <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-40 items-center">
                  
//                   {/* LEFT SIDE: Slogan & Button (Appears TOP on mobile) */}
//                   <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left mt-10 md:mt-0">
//                     <h2 className="text-3xl md:text-6xl font-extrabold leading-tight text-green-400">
//                       {item.slogan}
//                     </h2>
//                     <p className="text-sm md:text-xl border border-white/30 p-3 rounded-2xl text-gray-200 max-w-md mx-auto lg:mx-0">
//                       {item.text}
//                     </p>
//                     <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105 uppercase tracking-wider text-sm md:text-base">
//                       Join the Academy
//                     </button>
//                   </div>

//                   {/* RIGHT SIDE: Quick Registration Form (Appears BOTTOM on mobile) */}
//                   {/* Removed 'hidden' class so it shows on mobile */}
//                   <div className="block h-fit bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/20 shadow-2xl mb-10 md:mb-0">
//                     <h3 className="text-white text-center text-xl md:text-2xl font-bold mb-4 border-b border-green-500 pb-2">
//                       Inquiry Now
//                     </h3>
//                     <form className="space-y-3 md:space-y-4">
//                       <input type="text" placeholder="Full Name" 
//                         className="w-full p-2 md:p-3 rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base" 
//                       />
//                       <input type="email" placeholder="Email Address" 
//                         className="w-full p-2 md:p-3 rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base" 
//                       />
//                       <div className="grid grid-cols-2 gap-2">
//                         <select className="w-full p-2 md:p-3 rounded bg-white/90 focus:outline-none text-sm">
//                           <option>Gender</option>
//                           <option>Male</option>
//                           <option>Female</option>
//                         </select>
//                         <select className="w-full p-2 md:p-3 rounded bg-white/90 focus:outline-none text-sm">
//                           <option>Age Group</option>
//                           <option>Under 14</option>
//                           <option>Under 19</option>
//                           <option>Senior</option>
//                         </select>
//                       </div>
//                       <button className="w-full text-lg md:text-2xl bg-green-500 hover:bg-green-600 text-white font-bold py-2 md:py-3 rounded transition-colors shadow-lg">
//                         Submit Details
//                       </button>
//                     </form>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSection;







// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper/modules";
// import { motion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import { useNavigate } from "react-router-dom";

// const slides = [
//   {
//     img: "src/Assets/hero_image/hero1.jpeg",
//     slogan: "Unleash Your Inner Champion",
//     text: "Join AB Cricket Academy and train with the best coaches in the region.",
//   },
//   {
//     img: "src/Assets/hero_image/hero2.jpeg",
//     slogan: "Modern Gear, Classic Technique",
//     text: "We provide professional cricket training with top-class facilities.",
//   },
//   {
//     img: "src/Assets/hero_image/hero3.jpeg",
//     slogan: "Excellence in Every Shot",
//     text: "Top-class facilities for players.",
//   },
//   {
//     img: "src/Assets/hero_image/hero4.jpeg",
//     slogan: "Excellence in Every Shot",
//     text: "Top-class facilities for players.",
//   },
// ];

// const HeroSection = () => {

//   const navigate = useNavigate();
//   // Animation configuration for the container
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.05, // Har alphabet ke beech 0.05s ka gap
//         delayChildren: 0.2,    // Slide aane ke 0.2s baad start hoga
//       },
//     },
//   };

//   // Animation for each individual letter
//   const letterVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", damping: 12, stiffness: 100 },
//     },
//   };

//   return (
//     <div className="w-full h-[70vh] md:h-[80vh] relative overflow-hidden">
//       <Swiper
//         modules={[Autoplay, EffectFade]}
//         effect="fade"
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         loop={true}
//         className="h-full"
//            >
//         {slides.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               {/* Background Image */}
//               <img src={item.img} alt="hero" className="w-full h-full object-cover"/>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/60 z-10"></div>

//               {/* Content Container */}
//               <div className="absolute inset-0 z-20 p-15 flex items-center justify-center">
//                 <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-40 items-center">
                  
//                   {/* LEFT SIDE: Slogan with Alphabet Motion */}
//                   <div className="text-white space-y-4 md:space-y-6 text-center lg:text-left mt-10 md:mt-0">
//                     <motion.h2 
//                       key={`slogan-${index}`} // Crucial: Re-triggers animation on slide change
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       className="text-3xl md:text-6xl font-extrabold leading-tight text-green-400"
//                     >
//                       {item.slogan.split("").map((char, charIndex) => (
//                         <motion.span 
//                           key={`${char}-${charIndex}`} 
//                           variants={letterVariants}
//                           className="inline-block md:text-4xl" // Inline-block zaroori hai 'y' axis motion ke liye
//                         >
//                           {char === " " ? "\u00A0" : char} 
//                         </motion.span>
//                       ))}
//                     </motion.h2>

//                     <motion.p 
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 1.5 }}
//                       className="text-sm md:text-xl border border-3 border-white/30 p-3 rounded-2xl text-gray-200 max-w-md mx-auto lg:mx-0"
//                     >
//                       {item.text}
//                     </motion.p>
                    
//                     <motion.button 
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 1.8 }}
//                       onClick={() => navigate('/contactus')}
//                       className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105 uppercase tracking-wider text-sm md:text-base shadow-xl"
//                     >
//                       Join the Academy
//                     </motion.button>
//                   </div>

//                   {/* RIGHT SIDE: Form */}
//                   <div className="block h-fit bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/20 shadow-2xl mb-10 md:mb-0">
//                     <h3 className="text-white text-center text-xl md:text-3xl font-bold mb-4 border-b border-green-500 pb-2">
//                       Inquiry Now
//                     </h3>
//                     <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
//                       <input type="text" placeholder="Full Name" className="w-full p-2 md:p-3 rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base text-black" />
//                       <input type="email" placeholder="Email Address" className="w-full p-2 md:p-3 rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base text-black" />
                      
//                         <select className="w-full p-2 md:p-3 rounded bg-white/90 focus:outline-none text-sm text-black">
//                           <option>Gender</option>
//                           <option>Male</option>
//                           <option>Female</option>
//                         </select>
//                         <select className="w-full p-2 md:p-3 rounded bg-white/90 focus:outline-none text-sm text-black">
//                           <option>Age Group</option>
//                           <option>Under 14</option>
//                           <option>Under 19</option>
//                           <option>Senior</option>
//                         </select>
                      
//                       <button className="w-full text-lg md:text-2xl bg-green-500 hover:bg-green-600 text-white font-bold py-2 md:py-3 rounded transition-colors shadow-lg">
//                         Submit Details
//                       </button>
//                     </form>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSection;







import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    img: "src/Assets/hero_image/hero1.jpeg",
    slogan: "Unleash Your Inner Champion",
    text: "Join AB Cricket Academy and train with the best coaches in the region.",
  },
  {
    img: "src/Assets/hero_image/hero2.jpeg",
    slogan: "Modern Gear, Classic Technique",
    text: "We provide professional cricket training with top-class facilities.",
  },
  {
    img: "src/Assets/hero_image/hero3.jpeg",
    slogan: "Excellence in Every Shot",
    text: "Top-class facilities for players.",
  },
  {
    img: "src/Assets/hero_image/hero4.jpeg",
    slogan: "Excellence in Every Shot",
    text: "Top-class facilities for players.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    // Height ko mobile pe 100vh rakha hai taaki content fit ho jaye
    <div className="w-full h-[70vh] md:h-[80vh] relative overflow-hidden">
      <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true} className="h-full">
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img src={item.img} alt="hero" className="w-full h-full object-fit"/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 z-10"></div>

              {/* Content Container - Flex direction changes on mobile */}
              <div className="absolute max-w-9xl inset-0 z-20 pl-25 flex items-center justify-center overflow-y-auto">
                <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center md:mt-0">
                  
                  {/* LEFT SIDE: Slogan & Text */}
                  <div className="text-white space-y-2 md:space-y-6 md:w-[110%] text-center lg:text-left">
                    <motion.h2 
                      key={`slogan-${index}`}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-2xl md:text-3xl lg:text-4xl text-green-400">
                      {item.slogan.split("").map((char, charIndex) => (
                        <motion.span 
                          key={`${char}-${charIndex}`} 
                          variants={letterVariants}
                          className="inline-block">
                          {char === " " ? "\u00A0" : char} 
                        </motion.span>
                      ))}
                    </motion.h2>

                    <motion.p initial={{ opacity: 0, x: -20 }}animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      className="text-sm md:text-lg border border-white/20 bg-black/20 p-3 rounded-xl text-gray-200 max-w-md mx-auto lg:mx-0">
                      {item.text}
                    </motion.p>
                    
                    <motion.button initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      onClick={() => navigate('/contactus')}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105 uppercase tracking-wider text-xs md:text-base shadow-xl">
                      Join the Academy
                    </motion.button>
                  </div>

                  {/* RIGHT SIDE: Form - Hidden on very small screens if necessary, or scaled down */}
                  <div className="bg-white/10 backdrop-blur-md p-5 md:p-8 rounded-xl border border-white/20 shadow-2xl mx-auto w-full max-w-[350px] md:max-w-md">
                    <h3 className="text-white text-center text-lg md:text-2xl font-bold mb-4 border-b border-green-500 pb-2">
                      Inquiry Now
                    </h3>
                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Full Name" className="w-full p-2 rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-black" />
                      <input type="email" placeholder="Email Address" className="w-full p-2 rounded bg-white/90 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-black" />
                      
                      <div className="grid grid-cols-2 gap-2">
                        <select className="w-full p-2 rounded bg-white/90 focus:outline-none text-xs md:text-sm text-black">
                          <option>Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <select className="w-full p-2 rounded bg-white/90 focus:outline-none text-xs md:text-sm text-black">
                          <option>Age Group</option>
                          <option>Under 14</option>
                          <option>Under 19</option>
                          <option>Senior</option>
                        </select>
                      </div>
                      
                      <button className="w-full text-base md:text-xl bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded transition-colors shadow-lg mt-2">
                        Submit Details
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;