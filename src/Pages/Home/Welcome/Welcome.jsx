import React, { useEffect, useState } from 'react';
import Count from './Count';

const Welcome = () => {
    const [items, setItem] = useState([]);

    useEffect(()=>{
        fetch('welcome.json')
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])

    return (
        <div className='my-20 md:max-w-[60%] mx-auto'>
            <p className='text-4xl text-center'>Welcome to the Dance Studio!</p>
            <p className='text-center mt-2 italic text-[#EA6045]'>Dance is not a competition, it's a passion</p>
            <p className='mt-10 text-center text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam minus accusantium pariatur reiciendis, earum ex iste quaerat voluptates similique quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum voluptas, ratione iste iure quod beatae corporis consequuntur reprehenderit nobis.</p>

            <div className='grid grid-cols-2 md:grid-cols-4'>
                {
                    items.map((item)=> <Count key={item.name} item={item}></Count>)
                }
            </div>

        </div>
    );
};

export default Welcome;