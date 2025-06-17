import React, { useEffect, useState } from 'react'
import { dummyProducts } from '../assets/assets'
import { useNavigate, useParams } from 'react-router'
import Itemcard from '../components/ItemCard'
import toast from 'react-hot-toast'

function Product() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [image, setImage] = useState(null)
    console.log(product);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // or behavior: 'auto'

        const product = dummyProducts.find((item) => item._id === id)
        setProduct(product)
        setImage(product.image[0])
        console.log(product);
    }, [id])

    const handleCart = () => {

        toast.success("Added to cart")
    }
    const handleBuyNow = () => {

    }
    return (
        <div className='w-full sm:w-[90%] md:w-[80%] mx-auto py-4 px-6'>
            <p>
                <span className='cursor-pointer hover:text-gray-700 transition duration-500 delay-75' onClick={() => navigate("/")}>Home</span>/
                <span className='cursor-pointer hover:text-gray-700 transition duration-500 delay-75' onClick={() => navigate("/products")}>Products</span>/
                <span onClick={() => navigate(`/categories/${product && product.category}`)} className='cursor-pointer hover:text-gray-700 transition duration-500 delay-75' >{product && product.category}</span>/
                <span className='text-green-600'>{product && product.name}</span>
            </p>
            <div className='my-4 grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex'>
                    <div className='w-20 flex flex-col items-center space-y-3'>
                        {
                            product && product.image.map((item, index) => {
                                return (
                                    <div onClick={() => setImage(item)} className='border border-gray-400 rounded-md cursor-pointer hover:bg-gray-400/10 active:bg-gray-400/20 transition-all duration-300 delay-75'>
                                        <img src={item} alt={product.name} key={index} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='border mx-3 border-gray-400 rounded-md'>
                        {
                            image && <img className='w-90' alt='product' src={image} />
                        }
                    </div>
                </div>
                <div className='space-y-3 lg:space-y-7 my-4'>
                    <div>
                        <h1 className='text-2xl font-bold'>{product && product.name}</h1>
                        {/* rating goes here  */}
                    </div>
                    <div>
                        <p className='line-through text-gray-500 text-sm'>MRP: ${product && product.price}</p>
                        <p className='text-xl font-bold'>MRP: ${product && product.offerPrice}</p>
                        <p className='text-gray-500 text-sm'>(inclusive of all taxes)</p>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>About Product</h2>
                        <div>
                            {
                                product && product.description.map((item, index) => (
                                    <li key={index} className='text-gray-500'>
                                        {
                                            item
                                        }
                                    </li>
                                ))

                            }
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <button onClick={handleCart} className='w-full py-2 bg-green-700 rounded-md text-white font-semibold hover:bg-green-800 transition duration-300 delay-75 cursor-pointer'>Add to Cart</button>
                        <button onClick={handleBuyNow} className='w-full py-2 bg-purple-700 rounded-md text-white font-semibold hover:bg-purple-800 transition duration-300 delay-75 cursor-pointer'>Buy now</button>
                    </div>
                </div>
            </div>

            <div className='w-full my-4 flex flex-col gap-6'>
                <h1 className='text-3xl font-semibold text-gray-600 my-2 text-center'>Related Products</h1>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {
                        dummyProducts.map((item, index) => (
                            index < 5 && <Itemcard item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className='flex items-center justify-center my-10'>
                <button onClick={() => {
                    navigate("/products");
                }} className='bg-green-700 rounded-md text-white py-2 px-6 cursor-pointer transition duration-300 hover:bg-green-800'>See More</button>
            </div>
        </div>
    )
}

export default Product