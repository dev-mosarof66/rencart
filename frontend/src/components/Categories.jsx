import React from 'react'
import { categories } from '../assets/assets'
import { generateBackgroundColor } from '../utils/utils'
import { useNavigate } from 'react-router'

function Categories() {


    const navigate = useNavigate()
    return (
        <div className='my-8 mx-6'>
            <h1 className='text-2xl font-bold text-gray-700 my-2'>Categories</h1>
            <div className='flex items-center justify-center w-full'>
                <div className='w-full grid grid-cols-1 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {
                        categories.map((item, index) => (
                            <ItemCard item={item} key={index} title={item.text} image={item.image} index={index} navigate={navigate} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function ItemCard({ title, image, navigate, item }) {
    const color = generateBackgroundColor()
    console.log(color);



    return (
        <div onClick={() => navigate(`/categories/${item.path}`)} className={`max-w-xs rounded shadow-md hover:shadow-lg active:shadow-lg shadow-gray-300 bg-[${color}]  hover:scale-100 transition-all duration-300 cursor-pointer`}>
            <div className='flex items-center justify-center'>
                <img className="w-32 object-cover" src={image} alt={title} />
            </div>
            <div className="px-6 py-4">
                <div className="font-semibold text-base text-center">{title}</div>
            </div>
        </div>
    )
}

export default Categories