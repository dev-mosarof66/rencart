import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';


function WelcomeHero() {
    const navigate = useNavigate()
    return (
        <div className='py-6 relative'>
            <div className='relative block xs:hidden'>
                <div className='w-[100%] flex justify-center   mx-auto'>
                    <img className='w-[90%] sm:hidden' src={assets.main_banner_bg_sm} alt="main_banner_bg" />
                </div>
                <div className='flex flex-col items-center justify-center gap-4 absolute bottom-0 sm:bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-3xl font-bold text-gray-700 text-center w-full'>Freshness You Can Trust, Savings You will Love!</h1>
                    <div onClick={()=> navigate('/products')} className='flex items-center gap-2 px-6 py-2 bg-green-700 text-white font-semibold rounded-lg cursor-pointer hover:bg-green-600 transition-all duration-300 delay-75'>
                        <p>Shop now</p>
                        <FaArrowRightLong />

                    </div>
                </div>
            </div>
            {/* large screen */}
            <div className='hidden xs:block relative'>
                <div className='w-[100%] flex justify-center mx-auto relative'>
                    <img className='w-[90%]' src={assets.main_banner_bg} alt="main_banner_bg" />
                </div>
                <div className='absolute bottom-0 xs:bottom-4 left-0 sm:bottom-10 lg:-translate-y-1/3  transform translate-x-10 sm:translate-x-14 md:translate-x-24 lg:translate-x-32 xl:translate-x-40 space-y-3 md:space-y-6'>
                    <div className=' w-72 md:w-80 lg:w-[450px]'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 w-full'>Freshness You Can Trust, Savings You will Love!</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div onClick={()=> navigate('/products')} className='w-fit md:w-40 flex items-center gap-2 px-6 py-2 md:py-3 bg-green-700 text-white font-semibold rounded-sm cursor-pointer hover:bg-green-800 transition-all duration-300 delay-75 justify-center'>
                            <p>Shop now</p>
                        </div>
                        <div className='w-fit flex items-center gap-2 px-6 py-2 cursor-pointer transition-all duration-300 delay-75 group'>
                            <p>Explore deals</p>
                            <FaArrowRightLong className='text-green-700 group-hover:translate-x-1 transition-transform duration-300 delay-75' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeHero