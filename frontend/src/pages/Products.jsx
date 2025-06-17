import React, { useEffect } from 'react'
import { dummyProducts } from '../assets/assets'
import Itemcard from '../components/ItemCard'

function Products() {
    useEffect(() => {
        document.title = "All Products | Green Cart"
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])
    return (
        <div className='w-full sm:w-[90%] md:w-[80%] mx-auto py-8 px-6'>
            <div>
                <h1 className='text-2xl font-semibold text-black my-2'>ALL PRODUCTS</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {
                    dummyProducts.map((item, index) => (
                        <Itemcard item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products