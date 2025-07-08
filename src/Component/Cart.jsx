import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FaCaretLeft } from "react-icons/fa";

const Cart = () => {
    const navigate= useNavigate()
    const goback=()=>{
        navigate(-1)
    }
  return (
    <div className='w-full min-h-screen relative'>
      <button onClick={goback} className=' text-2xl absolute top-0 left-0'><FaCaretLeft/></button>
    </div>
  )
}

export default Cart
