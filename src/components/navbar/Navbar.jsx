import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // State to handle drawer open/close
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    // Custom function: Navigate karega aur drawer band kar dega
    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <nav className='relative h-24 flex items-center justify-between p-6 md:p-10'>
            {/* Logo Section */}
            <div className='flex items-center gap-2'>
                <img src="/logo.jpg" alt="Logo" className='h-24 w-30 object-contain' />
                <div className='leading-tight '>
                    <h1 className='text-red-500 font-bold text-lg md:text-3xl'>AB Cricket</h1>
                    <p className='font-bold text-lg'>Development Academy</p>
                </div>
            </div>

            {/* Menu Button (Click to Open) */}
            <div 
                className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all'
                onClick={() => setIsOpen(true)}>
                <Menu size={28} className='text-red-600' />
                <h1 className='text-red-600 font-bold hidden md:block'>Menu</h1>
            </div>

            {/* --- Drawer Overlay --- */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                    onClick={() => setIsOpen(false)}/>
            )}

            {/* --- Drawer Side Panel --- */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-red-500 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                {/* Close Button Inside Drawer */}
                <div className="flex justify-end p-5">
                    <X size={45} className="text-white cursor-pointer" onClick={() => setIsOpen(false)} />
                </div>

                {/* Drawer Links */}
                <ul className="flex flex-col gap-6 p-10 font-bold text-white">
                    <li onClick={() => handleNavigation('/')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">Home</li>
                    <li onClick={() => handleNavigation('/about')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">About Us</li>
                    <li onClick={() => handleNavigation('/achievements')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">Our Achievements</li>
                    <li onClick={() => handleNavigation('/registration')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">New Registration</li>
                    <li onClick={() => handleNavigation('/coach')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">Our Coach</li>
                    <li onClick={() => handleNavigation('/feesStructure')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">Fees Structure</li>
                    <li onClick={() => handleNavigation('/gallery')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">Gallery</li>
                    <li onClick={() => handleNavigation('/contactus')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">Contact us</li>
                    <li onClick={() => handleNavigation('/disclaimer')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">Disclaimer</li>
                    <li onClick={() => handleNavigation('/login')} className="cursor-pointer md:text-xl hover:underline hover:text-yellow-200">Login</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;