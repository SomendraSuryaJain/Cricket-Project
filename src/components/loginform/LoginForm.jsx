import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLogin) {
            // --- SIGNUP LOGIC ---
            alert("Registration Successful! Please login now.");
            setIsLogin(true); // Signup ke baad automatic login form par switch
        } else {
            // --- LOGIN LOGIC ---
            alert("Login Successful! Redirecting to Home...");
            // console.log("Redirecting to Home Page...");
            navigate('/');
        }
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center p-8 gap-10">
            <h1 className='text-4xl md:text-6xl font-bold text-red-500'>Our Login</h1>

            <div className="max-w-xl w-full bg-red-100 rounded-xl shadow-2xl overflow-hidden p-8 border border-red-200">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-gray-500 mt-2">
                        {isLogin ? 'Please enter your details to login' : 'Fill in the details to get started'}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm md:text-xl font-medium text-black">Full Name</label>
                            <input type="text" placeholder="John Doe"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                                required />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm md:text-xl font-medium text-black">Email Address</label>
                        <input type="email" placeholder="example@mail.com"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                            required />
                    </div>

                    <div>
                        <label className="block text-sm md:text-xl font-medium text-black">Password</label>
                        <input type="password" placeholder="••••••••"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all"
                            required />
                    </div>

                    <button type="submit"
                        className="w-full text-lg md:text-2xl bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md active:scale-95">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                {/* Toggle Button Section */}
                <div className="mt-6 text-center">
                    <p className="text-md text-gray-600 font-medium">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button type="button" onClick={toggleForm}
                            className="ml-2 text-red-600 font-extrabold hover:underline focus:outline-none">
                            {isLogin ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
            {/* Footer Line
            <div className="border-t border-black pt-2 text-center text-lg text-black">
                Check & Mate e tech Solution
            </div> */}
        </div>
    );
};

export default LoginForm;