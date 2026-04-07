import React from "react";

const images = [
  "https://colvincricketcoachingacademy.com/Cricket/images/g1.jpg",
  "https://colvincricketcoachingacademy.com/Cricket/images/g2.jpg",
  "https://colvincricketcoachingacademy.com/Cricket/images/g3.jpg",
  "https://colvincricketcoachingacademy.com/Cricket/images/g4.jpg",
  "https://colvincricketcoachingacademy.com/Cricket/images/g5.jpg",
  "https://colvincricketcoachingacademy.com/Cricket/images/g6.jpg",
  "https://colvincricketcoachingacademy.com/Cricket/images/g7.jpg",
  "https://colvincricketcoachingacademy.com/Cricket/images/g8.jpg",
];

const AboutGallery = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-20">
      
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-red-600 mb-10">
        Gallery
      </h1>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md group">
            <img src={img} alt={`gallery-${index}`}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGallery;