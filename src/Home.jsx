import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import UsePageTitle from './Component/UsePageTitle';




import laptopImg from './Images/pexels-morningtrain-18105.jpg'
import speakeImg from './Images/pexels-caio-1279365.jpg'
import accessoriesImg from './Images/pexels-lum3n-44775-399161.jpg'
import webcamImg from './Images/pexels-jakubzerdzicki-24347621.jpg'
import Laptop from './Component/Laptop/Laptop';

const Home = () => {

UsePageTitle("Home")

  const [intro, setIntro]= useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIntro(false);
    },2000)
  },[])


  const [currindex, setCurrIndex]= useState(3)
  const data=[
    {
      id:1,
      title: "Laptop",
      link: '/laptop',
      src: laptopImg

    },
    {
      id:2,
      title: "Speaker",
      link: '/speaker',
      src: speakeImg

    },
    {
      id:3,
      title: "Accessories",
      link: '/accessories',
      src: accessoriesImg

    },
    {
      id:4,
      title: "Web Cam",
      link: '/security',
      src: webcamImg

    }
  ]
  const nextSlide=()=>{
    setCurrIndex((currindex +1)% data.length)
    
  }
  const preSlide=()=>{
    setCurrIndex((currindex -1 + data.length)% data.length)

  }

  return (
    <div className='w-full min-h-[93vh] flex flex-col items-center justify-center gap-12 select-none'>
      {intro && <div className='w-full h-[50vh] md:h-[93vh] flex flex-col items-center justify-center '>

        <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}  className='md:text-9xl  font-extrabold text-6xl'>Build Your</motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }}  className='md:text-9xl  font-extrabold text-6xl'>Your</motion.p>
        <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='md:text-9xl  font-extrabold text-6xl'>Dream</motion.p>

      </div> }
      <div className='group w-full md:w-4/5 h-[300px] md:h-[550px] rounded-2xl overflow-hidden relative border-2'>
        <img src={data[currindex].src} alt="" className='object-contain'/>
        <div className='absolute bottom-2 md:bottom-6 w-full px-2 md:px-8 flex flex-row items-center justify-between text-lg md:text-2xl '>
          <h1   className='' >{data[currindex].title}</h1>
          <Link className='' to={data[currindex].link}>Show more</Link>
        </div>
        <div className='absolute hidden group-hover:flex transition duration-500 flex-row items-center top-[50%] justify-between  w-full'>
          <p className='hover:scale-125 transition duration-150  text-white cursor-pointer rounded-full text-5xl' onClick={preSlide}><FaCaretLeft/></p>
          <p className='hover:scale-125 transition duration-150  text-white cursor-pointer rounded-full text-5xl' onClick={nextSlide}><FaCaretRight/></p>
        </div>
        
      </div>
      <Laptop/>

    </div>
  )
}

export default Home
