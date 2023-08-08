import React from 'react';

const SingleSection = ({item}) => {
    const {header, subHeader, image , description} = item || {}
    return (
        <div className='mt-2 md:mt-10 md:w-[70%]'>
            <p className='text-2xl'>{header}</p>
            <p className='text-[#EA6045] italic my-1'>{subHeader}</p>
            <img className='object-contain' src={image} alt="items image" />
            <p className=' my-3'>{description}</p>
            <div className='flex justify-between'>
                <p></p>
                <button className='bg-[#EA6045] -skew-y-6 px-2 py-2 font-semibold text-white hover:scale-110'>More</button>
            </div>
        </div>
    );
};

export default SingleSection;
