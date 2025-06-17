import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { dummyProducts } from '../assets/assets';
import ItemCard from '../components/ItemCard';

function Categories() {
  const { id: category } = useParams()
  const [products, setProducts] = useState(null)
  useEffect(() => {
    const filteredProducts = dummyProducts.filter((item) => item.category === category)
    setProducts(filteredProducts)
  }, [category])
  return (
    <div className='w-full sm:w-[90%] md:w-[80%] mx-auto px-6'>
      <div className='my-6'>
        <h1 className='text-2xl font-semibold text-gray-600 my-2'>{category}</h1>
      </div>
      <div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {
            products && products.map((item, index) => (
              <ItemCard item={item} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Categories