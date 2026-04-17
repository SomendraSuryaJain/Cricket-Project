import React, { useState } from "react";

const RegistrationForm = () => {
  const today = new Date().toLocaleDateString("en-GB");

  const [formData, setFormData] = useState({
    fullName: "",
    category: "Fresher",
    studentOccupation: "Businessman",
    dob: "",
    gender: "Male",
    fatherName: "",
    fatherOccupation: "Businessman",
    mobile1: "",
    mobile2: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    country: "India",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-16">
      
      {/* Heading */}
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-8">
        New Registration
      </h1>

      <form onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-green-200 p-6 rounded-lg shadow-md">
        {/* Date */}
        <p className="text-lg text-center font-bold mb-4">Today: {today}</p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Full Name */}
          <div>
            <label className="text-sm font-bold">Full Name</label>
            <input type="text" placeholder="Enter Name" name="fullName" onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1"/>
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-bold">Category</label>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
              <option>Fresher</option>
              <option>Experienced</option>
            </select>
          </div>

          {/* Student Occupation */}
          {/* <div>
            <label className="text-sm font-bold">Student's Occupation</label>
            <select name="studentOccupation" value={formData.studentOccupation} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
              <option>Businessman</option>
              <option>Student</option>
              <option>Other</option>
            </select>
          </div> */}

          {/* Gender */}
          <div>
            <label className="text-sm font-bold">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Father's Name */}
          <div>
            <label className="text-sm font-bold">Father's Name</label>
            <input type="text" name="fatherName" placeholder="Enter Father's name" onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1"/>
          </div>


          {/* Mobile 1 */}
          <div>
            <label className="text-sm font-bold">Mobile Number</label>
            <input
              type="tel"
              name="mobile1"
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Address (Full Width) */}
          <div>
            <label className="text-sm font-bold">Full Address</label>
            <input type="text" name="address" onChange={handleChange} placeholder="Enter address"
              className="w-full border rounded px-3 py-2 mt-1"/>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6 flex items-center justify-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;