import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import context from '../context/context';
import { useNavigate } from 'react-router';

function Navbar() {
    const navigate = useNavigate()
    const { nav, setNav } = useContext(context);

    return (
        <nav className={`w-full flex items-center justify-between ${nav ? "" : "border-b border-gray-300/70"} p-4 px-6  bg-white shadow-sm fixed z-50`}>
            <div className={`w-full flex items-center justify-between sm:w-[90%] md:w-[80%] mx-auto`}>
                {/* Logo */}
                <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer hover:scale-110 transition duration-300">
                    <img src={assets.logo} alt="logo" className="w-28 md:w-32 object-contain" />
                </div>

                {/* Mobile Icons */}
                <div className='flex items-center gap-4 xs:hidden'>
                    <button onClick={() => navigate("/cart")} className='relative p-2 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer'>
                        <span className='absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 rounded-full'>0</span>
                        <IoMdCart size={24} className="text-gray-700" />
                    </button>
                    <button onClick={() => setNav(!nav)} className='p-2 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer'>
                        <RiMenu3Fill size={24} className="text-gray-700" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden xs:flex items-center gap-6 font-medium text-gray-700 list-none'>
                    <li onClick={() => navigate("/")} className="hover:text-green-600 transition duration-300 cursor-pointer">Home</li>
                    <li onClick={() => navigate("/products")} className="hover:text-green-600 transition duration-300 cursor-pointer">All Product</li>

                    <li>
                        <button onClick={() => navigate("/cart")} className='relative p-2 rounded-md hover:bg-gray-100 transition duration-300 cursor-pointer'>
                            <span className='absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 rounded-full'>0</span>
                            <IoMdCart size={24} className="text-gray-700" />
                        </button>
                    </li>

                    <li>
                        <button className="bg-green-700 hover:bg-green-800 transition-all duration-300 text-white py-1.5 px-5 rounded-md text-sm shadow-md font-semibold cursor-pointer">
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
