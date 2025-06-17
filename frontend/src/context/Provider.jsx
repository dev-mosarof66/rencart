import React, { useState } from 'react'
import Context from './context'

function Provider({ children }) {
    const [nav, setNav] = useState(false)
    const [showModal, setShowModal] = useState(false)
    return (
        <Context.Provider value={{ nav, setNav,showModal,setShowModal }}>{
            children
        }</Context.Provider>
    )
}

export default Provider