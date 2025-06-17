import React, { useContext, useEffect } from 'react'
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa'
import PaymentCard from '../components/PaymentCard'
import { dummyProducts } from '../assets/assets'
import context from '../context/context'
import Modal from '../components/Modal'

function Cart() {
  const { setShowModal } = useContext(context)
  useEffect(() => {
    document.title = "Cart | Green Cart"
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <>
      <div className="w-[88%] h-screen md:w-[75%] mx-auto py-10">
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-semibold'>Shopping Cart <span className='text-xs text-green-600'>{dummyProducts && dummyProducts.length} Items</span> </h1>
          <div className='flex items-center gap-1 text-green-500 cursor-pointer transition duration-500 group'>
            <FaArrowLeft className='group-hover:-translate-x-1 transition duration-300' />
            <p>Continue Shopping</p>
          </div>
        </div>
        {/* Item goes here  */}
        <div>
          <div className='py-4 grid grid-cols-1 md:grid-cols-2 gap-3'>
            {
              dummyProducts.slice(0, 10).map((item, index) => (
                <Card item={item} key={index} />
              ))
            }
          </div>
          <div className='w-full flex justify-end'>
            <button onClick={() => setShowModal(true)} className='text-green-500 text-base font-semibold hover:text-green-600 cursor-pointer transition duration-500'>See More</button>
          </div>
        </div>

        <div className='w-full flex items-center justify-center'>
          <PaymentCard />
        </div>
      </div>


    </>
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

export default Cart
