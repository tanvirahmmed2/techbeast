import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser, FaShoppingCart } from "react-icons/fa";

import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const NavBar = () => {

    const [bar, setBar] = useState(true)
    const handlebar = () => {
        setBar(!bar)
    }
    const [servicebar,setServiceBar]= useState(true)
    const handleservicebar=()=>{
        setServiceBar(!servicebar)
    }
    return (
        <nav className='w-full h-12 fixed z-50 select-none '>
            <div className='w-full h-12 px-6 flex flex-row items-center justify-between bg-gray-950 text-white relative'>
                <div>
                    <Link to='/' className='text-xl font-bold no-underline'>Tech Beast</Link>
                </div>


                <div className='md:flex flex-row w-auto h-12 items-center justify-center gap-2 group hidden'>
                    <Link to="/" className='px-4 h-12 flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Home</Link>
                    <div className='h-12 w-full group/item1 relative text-[17px]'>
                        <p className='px-4 h-12 flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Product </p>
                        <div className='absolute flex-col w-[100px] text-[17px] items-center justify-center group-hover/item1:flex hidden text-black bg-white shadow-xl border-2'>
                            <Link to='/laptop' className='hover:scale-110  px-2 py-2'>Laptop</Link>
                            <Link to='/Speaker' className='hover:scale-110  px-2 py-2'>Speaker</Link>
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




                    <div className='relative block md:hidden w-12 h-auto text-teal-700'>

                        <p onClick={handlebar} className='text-xl w-12 items-center h-12 flex md:hidden justify-center hover:border-b-2 cursor-pointer'><FaBars /></p>
                        <div className={`w-[150px] top-12 gap-4 absolute ${!bar ? "flex" : "hidden"} items-start flex-col drop-shadow-2xl bg-white  px-4 py-6 -right-8 h-screen`}>
                            <Link to="/" className='font-bold  flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Home</Link>
                            <div className='h-auto w-full group/item1 relative text-[17px]'>
                                <p onClick={handleservicebar} className='font-bold flex gap-4 text-[17px] flex-row items-center justify-start hover:border-b-2 cursor-pointer '>Product </p>
                                <div className= {`${!servicebar ? "flex" : "hidden"} px-4 flex-col items-start justify-center w-full  text-teal-800`}>
                                    <Link to='/laptop' className='hover:scale-110  px-2 py-2'>Laptop</Link>
                                    <Link to='/Speaker' className='hover:scale-110  px-2 py-2'>Speaker</Link>
                                    <Link to='/security' className='hover:scale-110  px-2 py-2'>Security</Link>
                                    <Link to='/accessories' className='hover:scale-110  px-2 py-2'>Accessories</Link>


                                </div>

                            </div>

                            <p className='font-bold flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Service </p>


                            <Link to='/contact' className='  font-bold flex gap-4 text-[17px] flex-row items-center justify-center hover:border-b-2 cursor-pointer '>Contact</Link>

                        </div>


                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
