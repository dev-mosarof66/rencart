import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import context from '../context/context'

function Dropdown() {
  const { setNav } = useContext(context)
  const navigate = useNavigate()
  return (
    <div className="w-full bg-white shadow-lg">
      <ul className="flex flex-col items-start py-4 px-4 gap-3">
        <li onClick={() => { navigate("/"); setNav(false) }} className=" hover:text-green-500 rounded transition duration-300 cursor-pointer">Home</li>
        <li onClick={() => {navigate("/products"); setNav(false)}} className=" hover:text-green-500 rounded transition duration-300 cursor-pointer">All Products</li>
        <li className=" hover:text-green-500 rounded transition duration-300 cursor-pointer">Contact</li>
        <li>
          <button className="bg-green-400 text-white py-1 px-4 rounded-2xl hover:bg-green-500 transition duration-300 cursor-pointer text-center font-semibold flex items-center justify-center">
            <p>Login</p>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
