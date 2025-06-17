import React, { useContext } from 'react'
import context from '../context/context'
import { Outlet } from 'react-router'
import Navbar from '../components/nav'
import Dropdown from '../components/dropdown'
import Modal from '../components/Modal'

function Layout() {
    const { nav, showModal } = useContext(context)
    return (
        <div className='w-full'>
            <Navbar />
            <div className='w-full fixed top-16 z-50 transition-transform duration-1000'>
                {nav &&
                    <Dropdown />
                }
            </div>
            <div className='w-full py-20'>
                <Outlet />
            </div>

            <div className='w-full h-full bg-black'>
                {
                    showModal && <Modal />
                }
            </div>
        </div>
    )
}

export default Layout