import React, { useEffect, useState } from 'react';
import SingleSection from './SingleSection';

const About = () => {
    const [items, setItems ] = useState([]);
    useEffect(()=>{
        fetch('sub.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    console.log(items);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 justify-center container mx-auto'>
            {
                items.map((item)=> <SingleSection key={item.header} item={item}/>)
            }
        </div>
    );
};

export default About;