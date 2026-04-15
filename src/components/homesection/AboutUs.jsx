// import React from "react";
// import { useNavigate } from "react-router-dom";

// const AboutUs = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* FIRST SECTION */}
//       <div className="bg-gray-200 py-8 md:py-10 px-4">

//         {/* Heading */}
//         <h1 className="text-center text-2xl md:text-5xl font-bold mb-10">
//           <span className="text-red-600">Welcome to</span>{" "}
//           <span className="text-black">AB Cricket Development Academy</span>
//         </h1>

//         {/* Main Section */}
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

//           {/* Image */}
//           <div className="w-full md:w-1/2">
//             <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/HZGU7QHJDFO55DR6YZPG5ZEZSA.jpg"
//               alt="cricket"
//               className="w-full h-auto md:aspect-square rounded-4xl"/>
//           </div>

//           {/* Content */}
//           <div className="w-full md:w-1/2 text-gray-800 text-sm md:text-xl leading-6 md:leading-9">
//             <p>
//               AB Cricket Academy has state of the art facilities, featuring a cricket ground with 21 practice pitches in the ground, 3 grounds to play the matches and four open nets on a daily basis and a well equipped Gym. We run summer camps, annual camps, high performance camps for professional players led by a team of qualified coaches under the supervision of experienced BCCI/ NCA certified head coaches. The academy also facilitates net rental, ground rental for individuals, professional cricketers, professional teams, state teams and corporates. The academy also gives scholarship for state players with zero fees and to those players who perform in matches.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
//               <button onClick={() => navigate('/about')} className="bg-red-300 text-white px-6 py-3 rounded hover:bg-red-400 transition">Know more</button>

//               <button onClick={() => navigate('/registration')} className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">New Admission</button>

//               <button onClick={() => navigate('/achievements')} className="bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition">Our Achievements</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SECOND SECTION (YOUR IMAGE DESIGN) */}
//       <div className="relative w-full h-[400px] md:h-auto">

//         {/* Background Image */}
//         <img src="https://wallpaperaccess.com/full/1315984.jpg" alt="academy" className="w-full h-full aspect-square md:aspect-2/1 object-fit-cover"/>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20"></div>

//         {/* Text Box */}
//         <div className="absolute md:right-20 top-1/2 transform -translate-y-1/2 bg-white/60 p-6 md:p-8 max-w-xl h-fit rounded shadow-lg">

//           <p className="text-md text-center md:text-2xl font-bold text-black leading-7 md:leading-9">
//             There are many more facilities like bowling machines etc. We have given more than 30 state and national players which most by any academy in Lucknow. 
//             We believe in result oriented practice. We do not believe in the saying practice makes you perfect whereas we believe in 
//             <span className="font-semibold"> "PERFECT PRACTICE MAKES YOU PERFECT"</span>
//           </p>

//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutUs;





import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="relative"> {/* Parent container ko relative rakha hai */}

      {/* FIRST SECTION */}
      <div className="bg-gray-200 py-8 md:py-10 px-4">
        {/* Heading */}
        <h1 className="text-center text-2xl md:text-5xl font-bold mb-10">
          <span className="text-green-600">Welcome to</span>{" "}
          <span className="text-black">AB Cricket Development Academy</span>
        </h1>

        {/* Main Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/HZGU7QHJDFO55DR6YZPG5ZEZSA.jpg"
              alt="cricket"
              className="w-full h-auto md:aspect-square rounded-4xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col w-full md:w-1/2 text-gray-800 text-sm md:text-xl leading-6 md:leading-9">
            <p>
              AB Cricket Academy has state of the art facilities, featuring a cricket ground with 21 practice pitches in the ground, 3 grounds to play the matches and four open nets on a daily basis and a well equipped Gym. We run summer camps, annual camps, high performance camps for professional players led by a team of qualified coaches under the supervision of experienced BCCI/ NCA certified head coaches. The academy also facilitates net rental, ground rental for individuals, professional cricketers, professional teams, state teams and corporates. The academy also gives scholarship for state players with zero fees and to those players who perform in matches.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-1 mt-4 md:gap-3">
              <button onClick={() => navigate('/about')} className="bg-blue-300 text-white px-3 py-2 md:px-3 md:py-2 rounded hover:bg-green-400 transition">Know more</button>
              <button onClick={() => navigate('/registration')} className="bg-blue-500 text-white px-3 py-2 md:px-3 md:py-2 rounded hover:bg-green-600 transition">New Admission</button>
              <button onClick={() => navigate('/achievements')} className="bg-blue-700 text-white px-3 py-2 md:px-3 md:py-2 rounded hover:bg-green-800 transition">Our Achievements</button>
            </div>

            {/* --- FLOATING CTA BUTTON (BOTTOM RIGHT) --- */}
            <div className="bottom-6 right-6 pt-5 flex items-center justify-center md:flex md:justify-end md:pt-10">
              <button onClick={() => navigate('/contact')}
                className="bg-green-600 text-white px-6 py-4 flex gap-3 rounded-full shadow-2xl hover:bg-green-700 hover:scale-105 transition-all duration-300 font-bold text-lg">
                {/* Aap yahan icon bhi laga sakte hain */}
                <span>Enquire Now</span>
                <span className="animate-bounce">📞</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="relative w-full h-[280px] md:h-auto">
        <img src="https://wallpaperaccess.com/full/1315984.jpg" alt="academy" className="w-full h-full aspect-1/1 md:aspect-2/1 object-fit-cover" />
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
        <div className="absolute md:right-20 top-1/2 transform -translate-y-1/2 bg-white/60 p-3 md:p-8 max-w-xl h-fit rounded shadow-lg">
          <p className="text-sm text-center md:text-2xl font-bold text-black leading-7 md:leading-9">
            There are many more facilities like bowling machines etc. We have given more than 30 state and national players which most by any academy in Lucknow.
            We believe in result oriented practice. We do not believe in the saying practice makes you perfect whereaswe believe in
            <span className="font-semibold"> "PERFECT PRACTICE MAKES YOU PERFECT"</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;