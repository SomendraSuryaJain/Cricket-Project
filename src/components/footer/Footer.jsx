import React from 'react';
import { FaBell, FaFacebook, FaPhoneAlt, FaTrophy, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { IoGlobeSharp } from 'react-icons/io5';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-9xl md:px-30 mx-auto px-6 py-8 md:flex md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="bg-green-500 p-3 rounded-full flex-shrink-0">
              <FaBell className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg md:text-xl leading-tight">Match Updates Chahiye?</h3>
              <p className="text-sm md:text-lg text-white">Live scores aur breaking news ke liye subscribe karein.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
            <input type="email" placeholder="Enter your E-mail" 
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all text-white"
            />
            <button className="bg-green-500 hover:bg-green-400 text-slate-950 font-bold px-8 py-2.5 rounded-lg transition-all active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-9xl md:px-20 mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-1">
            {/* <div className="flex items-center gap-2">
              <FaTrophy className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-black text-white tracking-tighter italic uppercase">
                ABCric<span className="text-green-500">Info</span>
              </span>
            </div> */}
            <div className='flex items-center gap-2'>
                <img src="/Logo.jpeg" alt="Logo" className='h-24 w-30 md-h-40 md:w-30 object-contain' />
                <div className='leading-tight '>
                    <h1 className='text-green-500 font-bold text-lg md:text-3xl'>AB Cricket</h1>
                    <p className='text-sm'>Development Academy</p>
                </div>
            </div>
            {/* <p className="text-sm md:text-lg leading-relaxed text-white">
              Duniya ki har boundary aur har wicket ki khabar. Cricket ka asli thikana.
            </p> */}
            <div className="flex gap-5">
              <FaTwitter className="w-8 h-8 cursor-pointer text-blue-600 hover:text-blue-700" />
              <IoGlobeSharp className="w-8 h-8 cursor-pointer text-blue-600 hover:text-blue-700" />
              <FaFacebook className="w-8 h-8 cursor-pointer text-blue-600 hover:text-blue-700" />
              <FaYoutube className="w-8 h-8 cursor-pointer text-red-600 hover:text-red-700" />
              <FaSquareInstagram className="w-8 h-8 cursor-pointer text-red-600 hover:text-red-700" />
            </div>
          </div>

          {/* Matches Links */}
          <div className='ml-7'>
            <h4 className="text-white font-bold mb-5 text-sm md:text-xl uppercase tracking-widest border-l-4 border-green-500 pl-3">Matches</h4>
            <ul className="space-y-3 text-sm md:text-lg">
              <li><a href="#" className="hover:text-white transition-all">IPL Live Score</a></li>
              <li><a href="#" className="hover:text-white transition-all">World Cup 2026</a></li>
              <li><a href="#" className="hover:text-white transition-all">Upcoming Series</a></li>
            </ul>
          </div>

          {/* Stats Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm md:text-xl uppercase tracking-widest border-l-4 border-green-500 pl-3">Stats Center</h4>
            <ul className="space-y-3 text-sm md:text-lg">
              <li><a href="#" className="hover:text-white transition-all">ICC Rankings</a></li>
              <li><a href="#" className="hover:text-white transition-all">Records Archive</a></li>
              <li><a href="#" className="hover:text-white transition-all">Fantasy Tips</a></li>
            </ul>
          </div>

          {/* Company Links */}
          {/* <div>
            <h4 className="text-white font-bold mb-5 text-sm md:text-xl uppercase tracking-widest border-l-4 border-green-500 pl-3">Company</h4>
            <ul className="space-y-3 text-sm md:text-lg">
              <li><a href="#" className="hover:text-white transition-all">Home</a></li>
              <li><a href="#" className="hover:text-white transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-all">Our Achievements</a></li>
              <li><a href="#" className="hover:text-white transition-all">Our Registration</a></li>
              <li><a href="#" className="hover:text-white transition-all">Our Coach</a></li>
              <li><a href="#" className="hover:text-white transition-all">Fees Structure</a></li>
              <li><a href="#" className="hover:text-white transition-all">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition-all">Contact us</a></li>
              <li><a href="#" className="hover:text-white transition-all">Disclaimer</a></li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm md:text-xl uppercase tracking-widest border-l-4 border-green-500 pl-3">Support</h4>
            <div className="space-y-5 text-sm md:text-xl">
              <div className="flex items-center gap-3">
                <IoMdMail className="w-7 h-7 text-green-500" />
                <span>contact@cricket.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="w-7 h-7 text-green-500" />
                <span>91 : 7894561230</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-6 border-t border-slate-900 text-center text-xs md:text-xl text-white">
        <p>© {currentYear} AB Cricket Development Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



