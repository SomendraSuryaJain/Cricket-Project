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
    <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-16">
      
      {/* Heading */}
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-red-600 mb-8">
        New Registration
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto bg-red-100 p-6 rounded-lg shadow-md"
      >
        {/* Date */}
        <p className="text-md font-bold mb-4">Today: {today}</p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Full Name */}
          <div>
            <label className="text-sm font-bold">Full Name</label>
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-bold">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            >
              <option>Fresher</option>
              <option>Experienced</option>
            </select>
          </div>

          {/* Student Occupation */}
          <div>
            <label className="text-sm font-bold">Student's Occupation</label>
            <select
              name="studentOccupation"
              value={formData.studentOccupation}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            >
              <option>Businessman</option>
              <option>Student</option>
              <option>Other</option>
            </select>
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm font-bold">Date of Birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-bold">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Father's Name */}
          <div>
            <label className="text-sm font-bold">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Father's Occupation */}
          <div>
            <label className="text-sm font-bold">Father's Occupation</label>
            <select
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            >
              <option>Businessman</option>
              <option>Service</option>
              <option>Other</option>
            </select>
          </div>

          {/* Mobile 1 */}
          <div>
            <label className="text-sm font-bold">Mobile 1</label>
            <input
              type="tel"
              name="mobile1"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Mobile 2 */}
          <div>
            <label className="text-sm font-bold">Mobile 2</label>
            <input
              type="tel"
              name="mobile2"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-bold">Email id</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Address (Full Width) */}
          <div>
            <label className="text-sm font-bold">Contact Address</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* City */}
          <div>
            <label className="text-sm font-bold">City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* State */}
          <div>
            <label className="text-sm font-bold">State</label>
            <input
              type="text"
              name="state"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Pin Code */}
          <div>
            <label className="text-sm font-bold">Pin Code</label>
            <input
              type="text"
              name="pin"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Country */}
          <div>
            <label className="text-sm font-bold">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              readOnly
              className="w-full border rounded px-3 py-2 mt-1 bg-gray-100"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </form>

      {/* Footer Line */}
      <div className="mt-10 border-t border-black pt-2 text-center text-lg text-black">
        Check & Mate e tech Solution
      </div>
    </div>
  );
};

export default RegistrationForm;