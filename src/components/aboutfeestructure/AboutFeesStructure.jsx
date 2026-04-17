import React from "react";

const AboutFeesStructure = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-20">
      
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-6xl font-bold text-green-600 underline mb-10">
        Fees Structure
      </h1>

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 py-8 gap-8 text-gray-800 text-sm md:text-base">
        
        {/* Left */}
        <div className="space-y-2">
          <p>Admission form is for ₹100</p>
          <p>New admission fees - ₹2000</p>
        </div>

        {/* Right */}
        <div className="space-y-2">
          <p>Monthly fees is ₹2000 pm</p>
          <p>For first months it’s ₹4100</p>
          <p className="mt-4">
            Then ₹2000 per for below 18 years of age,
          </p>
          <p>Above 18 years is ₹2500 per month.</p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto my-8 border-t border-black"></div>

      {/* Description */}
      <div className="max-w-6xl mx-auto text-gray-700 text-sm md:text-base space-y-2">
        <p>
          Best education from ICSE & ISC BOARD and play cricket in Colvin cricket
          academy which will include the hostel facilities inside the college campus.
        </p>
        <p className="font-bold">
          For more queries contact at :- 7054505316 Ms. Mili Singh (Admission Cell)
        </p>
      </div>

      {/* Images */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <img src="https://colvincricketcoachingacademy.com/Cricket/images/fees1.jpg" alt="fees1"
          className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition"/>

        <img src="https://colvincricketcoachingacademy.com/Cricket/images/fees2.jpg" alt="fees2"
          className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition"/>

        <img src="https://colvincricketcoachingacademy.com/Cricket/images/fees3.jpg" alt="fees3"
          className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition"/>
      </div>
    </div>
  );
};

export default AboutFeesStructure;