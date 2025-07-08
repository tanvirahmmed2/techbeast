import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {




    const [year, setYear] = useState('')
    useEffect(() => {
        const year = new Date().getFullYear();
        setYear(year)
    })


    return (
        <div className='w-full h-auto py-4 flex flex-col gap-4 items-center justify-center bg-gray-950 text-white'>

            <div className='w-full h-auto flex flex-col md:flex-row items-center justify-center md:justify-around gap-8 md:gap-8'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-xl font-bold'>Products:</p>
                    <Link to='/laptop'   className='hover:scale-110  px-2 '>Laptop</Link>
                    <Link to='/Speaker'  className='hover:scale-110  px-2 '>Speaker</Link>
                    <Link to='/security' className='hover:scale-110  px-2 '>Security</Link>


                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-xl font-bold'>Services:</p>
                    <Link to='/aftersales'   className='hover:scale-110  px-2 '>After Sales</Link>
                    <Link to='/onlineapplication'  className='hover:scale-110  px-2 '>Online Application</Link>
                    <Link to='/customercare' className='hover:scale-110  px-2 '>Customer Care</Link>


                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <p className='text-xl font-bold'>About Us:</p>
                    <Link to='/address'   className='hover:scale-110  px-2 '>Address</Link>
                    <Link to='/privacypolicy'  className='hover:scale-110  px-2 '>Privacy & Policy</Link>
                    <Link to='/contact' className='hover:scale-110  px-2 '>Contact</Link>


                </div>
                

            </div>


            <div className=' w-full flex flex-row items-end gap-4 justify-center'>
                <p>All rights are reserved by</p>
                <a href="/" className='text-2xl font-bold'>Tech Beast</a>
                <p>{year}</p>
            </div>

        </div>
    )
}

export default Footer
