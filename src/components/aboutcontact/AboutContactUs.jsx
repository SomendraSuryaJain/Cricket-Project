import React from 'react';
import { Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';

const AboutContactUs = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 bg-white font-sans text-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-10 uppercase tracking-wide">
                Contact us
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left Column: Schedule & Operations */}
                <div className="space-y-6 flex flex-col">
                    <div className="flex items-start gap-4 bg-blue-100 p-2 border-l-4 border-blue-600 rounded-r-md">
                        <Clock className="text-blue-600 mt-1 shrink-0" size={24} />
                        <div>
                            <p className="font-bold text-lg">Monday to Saturday :</p>
                            <p className="text-gray-600">Academy is open.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-blue-100 p-2 border-l-4 border-blue-600 rounded-r-md">
                        <Clock className="text-blue-600 mt-1 shrink-0" size={24} />
                        <div>
                            <p className="font-bold">Timings :</p>
                            <p className="text-gray-600 italic">3:00 pm - 6:30 pm.</p>
                        </div>
                    </div>

                    <div className="bg-blue-100 p-2 border-l-4 border-blue-600 rounded-r-md">
                        <p className="font-bold">On Sundays :</p>
                        <p className="text-gray-600 leading-relaxed">
                            The Academy is closed for practice. This day is mostly reserved for matches.
                        </p>
                    </div>
                </div>

                {/* Right Column: Contact Details Card */}
                <div className="bg-blue-50 border border-blue-300 rounded-lg p-6 md:p-8 shadow-sm">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Phone className="text-blue-600 mt-1" size={20} />
                            <div>
                                <p className="font-semibold mb-1 text-sm uppercase text-gray-500">Mobile Numbers</p>
                                <p className="font-medium">9415110831, 9873776339, 9125324159</p>
                                <p className="font-medium mt-1">8112550110, 8874468956, 7376073493</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="text-blue-600" size={20} />
                            <div>
                                <p className="font-semibold text-sm uppercase text-gray-500">Email id</p>
                                <a href="mailto:vishwajitsinha56@gmail.com" className="hover:text-blue-600 font-bold transition-colors">
                                    vishwajitsinha56@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Globe className="text-blue-600" size={20} />
                            <div>
                                <p className="font-semibold text-sm uppercase text-gray-500">Website</p>
                                <a href="https://www.colvincricketcoachingacademy.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 font-bold transition-colors">
                                    www.colvincricketcoachingacademy.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Address & Map */}
            <div className="mt-6 pt-8 border-t border-blue-100">
                <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-blue-600 mt-1 shrink-0" size={24} />
                    <div>
                        <h2 className="font-bold text-lg uppercase">Address</h2>
                        <p className="text-gray-700 max-w-2xl">
                            Colvin Taluqdars' College, University Road, Purana Haidarabad,
                            Lucknow, Uttar Pradesh - 226007.
                        </p>
                        <p className="text-sm font-semibold text-blue-600 mt-1 italic">
                            Near Metro Station - Lucknow University.
                        </p>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-inner border border-blue-200 grayscale-[20%] hover:grayscale-0 transition-all duration-500">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1866753046525!2d80.9389!3d26.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a00000001%3A0x7e8b9b65e9c60e56!2sColvin%20Cricket%20Academy!5e0!3m2!1sen!2sin!4v1712150000000!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Colvin Cricket Academy Location"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutContactUs;