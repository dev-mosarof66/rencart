import React, { useEffect } from 'react'

import WelcomeHero from '../components/welcomeHero'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'

function Landing() {

    useEffect(() => {
        document.title = "Home Page | Green Cart"
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])

    return (
        <div className='w-full sm:w-[90%] md:w-[80%] mx-auto'>
            <div>
                <WelcomeHero />
                <Categories />
                <BestSeller />
            </div>
        </div>
    )
}

export default Landing