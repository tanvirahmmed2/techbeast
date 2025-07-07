import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import UsePageTitle from '../UsePageTitle'


import { laptops } from './Datas'
const Laptop = () => {
    UsePageTitle("laptops")
    const [laptopdatas, setLaptopDatas] = useState(laptops);

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center gap-8 text-center'>
            <h1 className='text-3xl font-bold '>Our best laptop collection for you</h1>
            <div className='grid justify-items-center w-full p-2 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4'>
                {laptopdatas.map((laptop) => {
                    const { id, title, specs, price, image } = laptop
                    return <div key={id} className='group border-2 w-[250px] h-[300px] rounded-lg bg-gray-200 relative overflow-hidden'>
                        <img src={image} alt={title} className='w-full h-[300px]' />
                        <div className='px-4 absolute bottom-2 w-full flex flex-col items-center justify-center'>
                            <h1>${price}</h1>
                            <h1 className='font-bold'>{title}</h1>
                            
                            <Link to={`/laptop/${title}`} state={{ id, title, specs, price, image }} className='text-blue-500 hidden group-hover:flex'>show more</Link>
                        </div>

                    </div>
                })}
            </div>

        </div>
    )
}

export default Laptop
