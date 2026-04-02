// import React from "react";

// const AboutAchievements = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">

//       {/* MAIN CONTENT */}
//       <div className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 space-y-6">

//         {/* 🔷 Top Section (Charts) */}
//         <div className="bg-white rounded-xl shadow p-4 h-64 flex items-center justify-center">
//           <p className="text-gray-500">Chart / Graph Area</p>
//         </div>

//         {/* 🔷 Middle Section (Dark Panel UI) */}
//         <div className="bg-gray-900 text-white rounded-xl p-6 space-y-6">

//           {/* Sliders */}
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm mb-1">Control 1</label>
//               <input type="range" className="w-full" />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Control 2</label>
//               <input type="range" className="w-full" />
//             </div>
//           </div>

//           {/* Checkbox List */}
//           <div className="space-y-2 text-sm">
//             <label className="flex items-center gap-2">
//               <input type="checkbox" />
//               Player Selection 1
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" />
//               Player Selection 2
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" />
//               Player Selection 3
//             </label>
//           </div>

//         </div>

//         {/* 🔷 Bottom Section (Image / Diagram) */}
//         <div className="bg-white rounded-xl shadow p-4">
//           <img
//             src="https://via.placeholder.com/1000x300"
//             alt="diagram"
//             className="w-full h-64 object-cover rounded-md"
//           />
//         </div>

//       </div>

//       {/* 🔴 Full Width Line */}
//       <div className="border-t border-gray-300 w-full"></div>

//       {/* Footer */}
//       <div className="py-4 text-center">
//         <p className="text-sm md:text-base text-gray-600 underline hover:text-red-500 cursor-pointer transition">
//           Check & Mate e tech Solution
//         </p>
//       </div>

//     </div>
//   );
// };

// export default AboutAchievements;





import React from "react";

const achievements = [
  "Naman Tiwari - IPL Lucknow Supergiants, Vijay Hazare Trophy UPCA 2025",
  "Kritagya Singh - Ranji Trophy 2024 UPCA",
  "Aanjaneya Suryavanshi - Ranji Trophy, Syed Mushtaq Ali Trophy, Vijay Hazare Trophy 2025 Uttarakhand",
  "Priyanshu Srivastava - Syed Mushtaq Ali Trophy 2025 West Bengal",
  "Suraj Sindhu Jaiswal - Duleep Trophy 2025",
  "Vikas Singh - West Bengal Ranji Trophy 2025",
  "Saurabh Yadav - Pondicherry Ranji Trophy 2024",
  "Shaurya Singh - U-23 UPCA 2024",
  "Ali Zafir Mohsin - U-23 UPCA 2025",
  "Jamshed Alam - U-23 Railways 2025, U-19 UPCA",
  "Umar Malik - U-23 Railways 2025, U-19 Jharkhand",
  "Divyanshu Yadav - Ranji Trophy 2025 Arunachal Pradesh",
  "Aditya Raj Tiwari - U-19 UPCA 2025",
  "Vijay Pratap Singh - U-19 Arunachal Pradesh 2024",
  "Sarthak Bhardwaj - U-19 and U-23 Hyderabad",
  "Sandhya Chhetri - U-23 UPCA Women's Team",
  "Shubh Chaudhari - U-19 UPCA Women's Team",
  "Nishi Kashyap - U-23 UPCA Women's Team",
  "Prabhat Maurya - U-19 India",
  "Priyanshi Pandey - Tamilnadu Senior Women's Team",
  "Rishabh Rajput - U-19 UPCA 2023",
  "Vineet Maurya - U-19 and U-23 West Bengal Team 2024",
];

const AboutAchievements = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-20 py-10">
      
      {/* Heading */}
      <h1 className="text-center text-2xl md:text-5xl font-bold text-red-600 mb-6">
        Our Achievements
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
        Under the guidance of our esteemed coach{" "}<span className="font-bold">Mr. Vishwajit Sinha</span>, BCCI A level coach, who has proudly represented India at the U-19 and U-22 levels, these students 
        have been groomed under him.
      </p>

      {/* Subheading */}
      <p className="text-gray-800 text-sm sm:text-base mb-4 max-w-5xl mx-auto">
        <span className="font-bold">Mr. Vishwajit Sinha</span> - Mentored the following 
        players for U.P. in different age groups at Colvin College Cricket Academy:
      </p>

      {/* List */}
      <div className="max-w-5xl mx-auto">
        <ul className="list-disc pl-10 space-y-1 text-sm sm:text-base text-gray-700">
          {achievements.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default AboutAchievements;