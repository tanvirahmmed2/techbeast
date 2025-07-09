import React from 'react'
import { Link } from 'react-router-dom'
import {  FaRegUser, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className='w-full h-12 fixed z-50 '>
            <div className='w-full h-12 px-6 flex flex-row items-center justify-between bg-gray-950 text-white relative'>
                <div>
                    <Link to='./' className='text-xl font-bold no-underline'>Tech Beast</Link>
                </div>


                <div className='md:flex flex-row w-auto h-12 items-center justify-center gap-2 group hidden'>
                    <a href="/" className='px-4 h-12 flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Home</a>
                    <div className='h-12 w-full group/item1 relative text-[17px]'>
                        <p className='px-4 h-12 flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Product </p>
                        <div className='absolute flex-col w-[100px] text-[17px] items-center justify-center group-hover/item1:flex hidden text-black'>
                            <Link to='/laptop'   className='hover:scale-110  px-2 py-2'>Laptop</Link>
                            <Link to='/Speaker'  className='hover:scale-110  px-2 py-2'>Speaker</Link>
                            <Link to='/security' className='hover:scale-110  px-2 py-2'>Security</Link>
                            <Link to='/accessories' className='hover:scale-110  px-2 py-2'>Accessories</Link>

                            
                        </div>

                    </div>
                    <div>
                        <p className='px-4 h-12 flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Service </p>
                        <div>

                        </div>
                    </div>
                    <Link to='/contact' className='px-4 h-12 flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Contact</Link>
                </div>
                <div className='w-auto h-12 flex flex-row items-center justify-center gap-2'>

                    <Link to='/cart' className='text-xl w-12 items-center h-12 flex justify-center hover:border-b-2 cursor-pointer'><FaShoppingCart /></Link>
                    <Link to='/signup' className='text-xl w-12 items-center h-12 flex justify-center hover:border-b-2 cursor-pointer'><FaRegUser /></Link>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
