import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    img: "src/Assets/hero1.jpg",
    text: "Our players win several awards and laurels.",
  },
  {
    img: "src/Assets/hero2.jpg",
    text: "We provide professional cricket training.",
  },
  {
    img: "https://bangkoksouvenir.com/wp-content/uploads/2025/11/Where-to-play-cricket-in-Bangkok-1.jpg",
    text: "Top-class facilities for players.",
  },
];

const HeroSection = () => {
  return (
    <div className="w-full h-[35vh] md:h-[55vh] relative">
      <Swiper modules={[Autoplay, EffectFade]} effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} loop={true} className="h-full">
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              
              {/* Background Image */}
              <img src={item.img} alt="hero" className="w-full h-full object-fit-cover"/>

              {/* Overlay (dark effect) */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>

              {/* Bottom Text Box */}
              <div className="absolute bottom-10 left-1 md:left-16 z-20">
                <div className="text-white px-2 py-2 max-w-xl border border-white">
                  <p className="text-lg md:text-2xl font-medium">{item.text}</p>
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