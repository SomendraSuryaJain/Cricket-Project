// import React from "react";

// const achievements = [
//   "Naman Tiwari - IPL Lucknow Supergiants, Vijay Hazare Trophy UPCA 2025",
//   "Kritagya Singh - Ranji Trophy 2024 UPCA",
//   "Aanjaneya Suryavanshi - Ranji Trophy, Syed Mushtaq Ali Trophy, Vijay Hazare Trophy 2025 Uttarakhand",
//   "Priyanshu Srivastava - Syed Mushtaq Ali Trophy 2025 West Bengal",
//   "Suraj Sindhu Jaiswal - Duleep Trophy 2025",
//   "Vikas Singh - West Bengal Ranji Trophy 2025",
//   "Saurabh Yadav - Pondicherry Ranji Trophy 2024",
//   "Shaurya Singh - U-23 UPCA 2024",
//   "Ali Zafir Mohsin - U-23 UPCA 2025",
//   "Jamshed Alam - U-23 Railways 2025, U-19 UPCA",
//   "Umar Malik - U-23 Railways 2025, U-19 Jharkhand",
//   "Divyanshu Yadav - Ranji Trophy 2025 Arunachal Pradesh",
//   "Aditya Raj Tiwari - U-19 UPCA 2025",
//   "Vijay Pratap Singh - U-19 Arunachal Pradesh 2024",
//   "Sarthak Bhardwaj - U-19 and U-23 Hyderabad",
//   "Sandhya Chhetri - U-23 UPCA Women's Team",
//   "Shubh Chaudhari - U-19 UPCA Women's Team",
//   "Nishi Kashyap - U-23 UPCA Women's Team",
//   "Prabhat Maurya - U-19 India",
//   "Priyanshi Pandey - Tamilnadu Senior Women's Team",
//   "Rishabh Rajput - U-19 UPCA 2023",
//   "Vineet Maurya - U-19 and U-23 West Bengal Team 2024",
// ];

// const AboutAchievements = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-20 py-10">

//       {/* Heading */}
//       <h1 className="text-center text-2xl md:text-5xl font-bold text-red-600 mb-6">
//         Our Achievements
//       </h1>

//       {/* Description */}
//       <p className="text-sm sm:text-base text-gray-700 max-w-5xl mx-auto leading-relaxed mb-4">
//         Under the guidance of our esteemed coach{" "}<span className="font-bold">Mr. Vishwajit Sinha</span>, BCCI A level coach, who has proudly represented India at the U-19 and U-22 levels, these students 
//         have been groomed under him.
//       </p>

//       {/* Subheading */}
//       <p className="text-gray-800 text-sm sm:text-base mb-4 max-w-5xl mx-auto">
//         <span className="font-bold">Mr. Vishwajit Sinha</span> - Mentored the following 
//         players for U.P. in different age groups at <span className="font-bold">AB Cricket Development Academy :</span>
//       </p>

//       {/* List */}
//       <div className="max-w-5xl mx-auto">
//         <ul className="list-disc pl-10 space-y-1 text-sm sm:text-base text-gray-700">
//           {achievements.map((item, index) => (
//             <li key={index} className="leading-relaxed">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Footer Line */}
//       <div className="mt-10 border-t border-black pt-2 text-center text-lg text-black">
//         Check & Mate e tech Solution
//       </div>

//     </div>
//   );
// };

// export default AboutAchievements;







import React, { useState, useEffect } from "react";
import { Trash2, Edit3, PlusCircle, Check, X } from "lucide-react";

const AboutAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("academyAchievements");
    if (savedData) {
      setAchievements(JSON.parse(savedData));
    } else {
      setAchievements([
        "Naman Tiwari - IPL Lucknow Supergiants",
        "Kritagya Singh - Ranji Trophy 2024 UPCA",
        "Suraj Sindhu Jaiswal - Duleep Trophy 2025",
        "Vikas Singh - West Bengal Ranji Trophy 2025",
        "Saurabh Yadav - Pondicherry Ranji Trophy 2024"
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("academyAchievements", JSON.stringify(achievements));
  }, [achievements]);

  const addItem = () => {
    if (newItem.trim() !== "") {
      setAchievements([newItem, ...achievements]); // Naya item sabse upar dikhega
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  const saveEdit = (index) => {
    const updatedList = [...achievements];
    updatedList[index] = editingText;
    setAchievements(updatedList);
    setEditingIndex(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Header Section */}
      <div className="bg-white flex flex-col gap-3 shadow-sm py-8 px-6 text-center border-b border-gray-200">
        <h1 className="text-3xl md:text-5xl font-black text-red-600 tracking-tight">
          Our Achievements
        </h1>

        {/* Description */}
       <p className="text-sm sm:text-base text-gray-700 max-w-5xl mx-auto leading-relaxed mb-4">
         Under the guidance of our esteemed coach{" "}<span className="font-bold">Mr. Vishwajit Sinha</span>, BCCI A level coach, who has proudly represented India at the U-19 and U-22 levels, these students
         have been groomed under him.
       </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 px-4">

        {/* INPUT AREA */}
        <div className="bg-white p-3 rounded-xl shadow-sm flex gap-2 mb-6 border border-red-100">
          <input
            type="text"
            placeholder="Add new achievement..."
            className="flex-1 bg-gray-50 border-none outline-none p-3 rounded-lg focus:ring-1 focus:ring-red-500"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()} />
          <button onClick={addItem}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all active:scale-95">
            <PlusCircle size={20} /> <span className="hidden sm:inline">Add</span>
          </button>
        </div>

        {/* --- SCROLLABLE LIST AREA --- */}
        {/* max-h-[500px] height limit set karta hai aur overflow-y-auto scrollbar lata hai */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="max-h-[500px] overflow-y-auto p-4 custom-scrollbar">
            {achievements.length === 0 ? (
              <p className="text-center text-gray-400 py-10">No achievements added yet.</p>
            ) : (
              <div className="space-y-3">
                {achievements.map((item, index) => (
                  <div key={index}
                    className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex items-center justify-between group hover:bg-white hover:border-red-200 transition-all">
                    {editingIndex === index ? (
                      <div className="flex flex-1 gap-2 items-center">
                        <input type="text" className="flex-1 border-b-2 border-red-500 bg-transparent outline-none p-1"
                          value={editingText} onChange={(e) => setEditingText(e.target.value)} autoFocus />
                        <button onClick={() => saveEdit(index)} className="text-green-600"><Check size={20} /></button>
                        <button onClick={() => setEditingIndex(null)} className="text-gray-400"><X size={20} /></button>
                      </div>
                    ) : (
                      <>
                        <div className="flex gap-3 items-center pr-4">
                          <span className="text-red-500 text-4xl font-bold">•</span>
                          <p className="text-gray-800 text-sm md:text-base font-medium">{item}</p>
                        </div>
                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => { setEditingIndex(index); setEditingText(item); }} className="p-2 text-blue-500 hover:bg-blue-100 rounded-full"><Edit3 size={24} /></button>
                          <button onClick={() => deleteItem(index)} className="p-2 text-red-500 hover:bg-red-100 rounded-full"><Trash2 size={24} /></button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      {/* Custom Scrollbar CSS (Optional: Clean look ke liye) */}
      <style dangerouslySetInnerHTML={{
        __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #fca5a5; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ef4444; }
            `}} />
      </div>
    </div>
  );
};

export default AboutAchievements;