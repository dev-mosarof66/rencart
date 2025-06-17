import { dummyProducts } from '../assets/assets'
import { useNavigate } from 'react-router';
import ItemCard from './ItemCard';




function BestSeller() {
    const navigate = useNavigate()
    return (
        <div className='my-8 mx-6'>
            <h1 className='text-2xl font-bold text-gray-700 my-2'>Best Sellers</h1>
            <div className='flex items-center justify-center w-full'>
                <div className='w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        dummyProducts.map((item, index) => (
                            index < 6 && <ItemCard key={index} item={item} navigate={navigate} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}



export default BestSeller