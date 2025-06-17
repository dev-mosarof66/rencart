import React, { useContext } from 'react'
import { dummyProducts } from '../assets/assets'
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa'
import context from '../context/context'
import '../css/public.css'

const Modal = () => {
    const { setShowModal } = useContext(context)
    return (
        <div className='w-full h-full bg-black/70 fixed top-0 z-[999]'>
            <div className='w-[90%] mx-auto overflow-y-auto h-[90vh] my-10 hide'>
                <div className='w-full flex items-center justify-between px-6'>
                    <h1 className='text-xl text-white font-semibold'>Your Order List</h1>
                    <div onClick={() => setShowModal(false)} className='text-lg text-white hover:text-yellow-300 active:text-yellow-600 cursor-pointer transition duration-300'>
                        <FaTimes />
                    </div>
                </div>
                <div>
                    <div className='py-4 grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {
                            dummyProducts.map((item, index) => (
                                <Card item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

const Card = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm  border border-gray-200 p-4">
            <div className='flex items-center gap-5'>
                <div className="flex items-center justify-center mb-2">
                    <img
                        className="w-16 h-16 sm:size-24 object-cover rounded"
                        src={item.image[0]}
                        alt={item.name}
                    />
                </div>
                <div >
                    <p className="text-xs sm:text-sm text-gray-500">Rice</p>
                    <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                    <div className='w-full flex items-center gap-10 my-2'>

                        <div className='flex items-center gap-2 bg-gray-500/40'>
                            <div className='px-2 bg-green-300 py-1 hover:bg-green-400 active:bg-green-400 cursor-pointer transition duration-300 delay-75'>
                                <FaMinus size={14} />
                            </div>
                            <p className='text-base font-semibold px-2'>1</p>
                            <div className='px-2 bg-green-300 py-1 hover:bg-green-400 active:bg-green-400 cursor-pointer transition duration-300 delay-75'>
                                <FaPlus size={14} />
                            </div>

                        </div>
                        {/* price section  */}
                        <div className=" flex items-center justify-between">
                            <div className='flex items-center gap-1'>
                                <p className="text-sm font-bold text-gray-800">${item.offerPrice}</p>
                                <p className=" text-gray-500 line-through text-xs">${item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal