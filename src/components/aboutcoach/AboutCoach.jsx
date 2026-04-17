import React from "react";

const coaches = [
  {
    id: 1,
    name: "Mr. Vishwajit Sinha",
    img: "https://colvincricketcoachingacademy.com/Cricket/images/c-Vishwajit.jpg",
    desc: [
      "Played India under 19,23 and one international match against England.",
      "BCCI LEVEL A & qualified coach.",
      "Member of talent search committee-UPCA.",
      "Represented Uttar Pradesh Ranji Trophy team from 1980 to 1985.",
      "Represented India’s Under-19 cricket team in the year 1979.",
      "Represented India’s Under-23 cricket team in the year 1981.",
      "Level 5 coach & associated with cricket coaching since 2010.",
    ],
  },
  {
    id: 2,
    name: "Mr. Pratyush Gupta",
    img: "https://colvincricketcoachingacademy.com/Cricket/images/c-Pratyush.jpg",
    desc: [
      "Played for Mumbai state and inter university.",
      "ICC Level 1, Level 2 & NIS certified cricket coach.",
      "M.P.Ed and B.P.Ed qualified trainer.",
    ],
  },
  {
    id: 3,
    name: "Mr. Rahul Chauhan",
    img: "https://colvincricketcoachingacademy.com/Cricket/images/c-Rahul.jpg",
    desc: [
      "Played school state and inter university.",
      "Specialist for spin bowling coach and trained many state players.",
    ],
  },
  {
    id: 4,
    name: "Mr. Shanu Ali",
    img: "https://colvincricketcoachingacademy.com/Cricket/images/c-Shanu.jpg",
    desc: [
      "Played Vinoo Mankad and C.K Naidu for school state.",
      "A division CA player.",
      "Expert in throw downs.",
    ],
  },
  {
    id: 5,
    name: "Mr. Lalitendra Singh",
    img: "https://colvincricketcoachingacademy.com/Cricket/images/c-Latitendra.jpg",
    desc: [
      "Well qualified strength & conditioning trainer.",
      "Certified from NSCA & other institutes.",
      "Worked with Rajasthan Royals training programs.",
    ],
  },
];

const AboutCoach = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 md:px-20">
      
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-6xl font-bold text-green-600 mb-12">
        Our Coach
      </h1>

      <div className="max-w-9xl mx-auto space-y-8">
        {coaches.map((coach) => (
          <div key={coach.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 
            grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            {/* LEFT - Image */}
            <div className="flex justify-center md:justify-start">
              <img src={coach.img} alt={coach.name}
                className="w-32 h-32 md:w-50 md:h-50 object-cover rounded-xl border-4 border-gray-100 shadow-sm"/>
            </div>

            {/* CENTER - Name */}
            <div className="text-center">
              <h2 className="text-xl md:text-3xl font-bold text-black">
                {coach.name}
              </h2>
            </div>

            {/* RIGHT - Description */}
            <div className="text-black text-md space-y-1 text-center md:text-left">
              {coach.desc.map((line, index) => (<p key={index}>• {line}</p>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCoach;







// import React from "react";

// const coaches = [
//   {
//     id: 1,
//     name: "Mr. Vishwajit Sinha",
//     img: "/images/coach1.jpg",
//     desc: [
//       "Played India under 19,23 and one international match against England.",
//       "BCCI LEVEL A & qualified coach.",
//       "Member of talent search committee-UPCA.",
//       "Represented Uttar Pradesh Ranji Trophy team from 1980 to 1985.",
//       "Represented India’s Under-19 cricket team in the year 1979.",
//       "Represented India’s Under-23 cricket team in the year 1981.",
//       "Level 5 coach & associated with cricket coaching since 2010.",
//     ],
//   },
//   {
//     id: 2,
//     name: "Mr. Pratyush Gupta",
//     img: "/images/coach2.jpg",
//     desc: [
//       "Played for Mumbai state and inter university.",
//       "ICC Level 1, Level 2 & NIS certified cricket coach.",
//       "M.P.Ed and B.P.Ed qualified trainer.",
//     ],
//   },
//   {
//     id: 3,
//     name: "Mr. Rahul Chauhan",
//     img: "/images/coach3.jpg",
//     desc: [
//       "Played school state and inter university.",
//       "Specialist for spin bowling coach and trained many state players.",
//     ],
//   },
//   {
//     id: 4,
//     name: "Mr. Shanu Ali",
//     img: "/images/coach4.jpg",
//     desc: [
//       "Played Vinoo Mankad and C.K Naidu for school state.",
//       "A division CA player.",
//       "Expert in throw downs.",
//     ],
//   },
//   {
//     id: 5,
//     name: "Mr. Lalitendra Singh",
//     img: "/images/coach5.jpg",
//     desc: [
//       "Well qualified strength & conditioning trainer.",
//       "Certified from NSCA & other institutes.",
//       "Worked with Rajasthan Royals training programs.",
//     ],
//   },
// ];

// const OurCoach = () => {
//   return (
//     <div className="bg-gray-100 py-10 px-4 md:px-16">
      
//       {/* Heading */}
//       <h1 className="text-center text-2xl md:text-3xl font-bold text-red-600 mb-10">
//         Our Coach
//       </h1>

//       {/* Coach List */}
//       <div className="space-y-10">
//         {coaches.map((coach) => (
//           <div
//             key={coach.id}
//             className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-8"
//           >
//             {/* Image */}
//             <img
//               src={coach.img}
//               alt={coach.name}
//               className="w-32 h-32 object-cover rounded-lg shadow-md"
//             />

//             {/* Content */}
//             <div className="text-center md:text-left">
//               <h2 className="font-semibold text-lg mb-2">
//                 {coach.name}
//               </h2>

//               <ul className="text-gray-700 text-sm space-y-1">
//                 {coach.desc.map((line, index) => (
//                   <li key={index}>• {line}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurCoach;