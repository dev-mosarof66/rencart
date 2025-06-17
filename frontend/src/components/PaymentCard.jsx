import React from 'react'

const PaymentCard = () => {
    return (
        <div className='flex flex-col gap-4 w-[90%] sm:w-96 bg-stone-100 p-5'>
            <div>
                <h1 className='text-xl font-semibold text-stone-800'>Order Summary</h1>
            </div>
            {/* border  */}
            <div className='w-full h-[1px] bg-black/20' />
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-base font-semibold text-stone-700'>DELIVERY ADDRESS</h1>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-500'>No address found</p>
                        <p className='text-green-700 font-semibold cursor-pointer transition duration-300 hover:text-green-800'>Change</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-base font-semibold text-stone-700'>PAYMENT METHOD</h1>
                    <div className='w-full border border-gray-400 rounded-md p-1 px-4 bg-white'>
                        <select className='outline-none w-full'>
                            <option value="Cash On Delivery">Cash On Delivery</option>
                            <option value="Online Payment">Online Payment</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* border  */}
            <div className='w-full h-[1px] bg-black/20' />
            <div className='flex flex-col gap-1'>
                <div className='flex justify-between items-center text-gray-500'>
                    <p>Price</p>
                    <p>$0</p>
                </div>
                <div className='flex justify-between items-center text-gray-500'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <div className='flex justify-between items-center text-gray-500'>
                    <p>Tax(2%)</p>
                    <p>$0</p>
                </div>
                <div className='flex justify-between items-center text-stone-500 text-lg font-semibold'>
                    <p>Total Ammount</p>
                    <p>$0</p>
                </div>
            </div>
            <div className='w-full'>
                <button className='w-full py-2 rounded-md bg-green-600 hover:bg-green-700 active:bg-green-700 active:scale-95 text-white font-semibold cursor-pointer transition duration-300'>Place Order</button>
            </div>
        </div>
    )
}

export default PaymentCard