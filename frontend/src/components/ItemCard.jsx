import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router';


function ItemCard({ item }) {
    const navigate = useNavigate()
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const randomRating = Math.floor(Math.random() * 5) + 1;
        setRating(randomRating);
    }, []);

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaStarHalfAlt key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    const handleAddCart = () => {
        toast.success("Added to cart")
    }

    return (
        <div onClick={() => navigate(`/products/${item._id}`)} className="max-w-xs bg-white rounded-lg shadow-md hover:shadow-lg transition-transform active:shadow-lg transform border border-gray-200 p-4 cursor-pointer">
            <div className="flex items-center justify-center mb-2">
                <img
                    className="w-32 h-32 object-cover rounded"
                    src={item.image[0]}
                    alt={item.name}
                />
            </div>
            <p className="text-sm text-gray-500">{item.category}</p>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <div className="flex items-center mt-1">
                {renderStars()}
                <span className="ml-2 text-sm text-gray-600">({rating})</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
                <div className='flex items-center gap-1'>
                    <p className="text-lg font-bold text-gray-800">${item.offerPrice}</p>
                    <p className=" text-gray-500 line-through text-xs">${item.price}</p>
                </div>
                <button type="button" onClick={handleAddCart} className="flex items-center px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 cursor-pointer relative z-30">
                    <FaCartShopping className="mr-2" />
                    Add
                </button>
            </div>
        </div>
    );
}

export default ItemCard