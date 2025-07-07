import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { laptops } from './Datas';

const Data = () => {
  const { title } = useParams();
  const [laptop, setLaptop] = useState(null);

  useEffect(() => {
    const foundLaptop = laptops.find((data) => data.title === title);
    setLaptop(foundLaptop);
  }, [title]);

  if (!laptop) {
    return <div className="text-center mt-12 text-xl">Loading...</div>;
  }

  const { specs, price, image } = laptop;

  return (
    <div className='mt-12 w-full h-auto gap-4 flex flex-col items-center justify-center'>
      <img src={image} alt={title} className='w-[400px] border-2' />
      <div className='w-full text-2xl flex flex-row gap-20 items-center justify-center'>
        <h1>{title}</h1>
        <h1>Price: {price}</h1>
      </div>
      <p className='text-center mt-4 w-[60%]'>{specs}</p>
    </div>
  );
};

export default Data;
