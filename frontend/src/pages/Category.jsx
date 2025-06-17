import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { dummyProducts } from '../assets/assets'
import Itemcard from '../components/ItemCard'

function Category() {
    const { id } = useParams()
    const [products, setProducts] = useState(null)
    useEffect(() => {
        const filteredProducts = dummyProducts.filter((item) => item.category === id)
        setProducts(filteredProducts)
    }, [id])
    return (
        <div className='w-full sm:w-[90%] md:w-[80%] mx-auto px-6'>
            <h1 className='text-2xl font-semibold text-gray-600 my-2'>{id}</h1>
            <div className='w-full my-8'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {
                        products && products.map((item, index) => (
                            <Itemcard item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Category