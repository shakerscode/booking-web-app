import React from 'react';

const HomeSearch = () => {
    return (
        <div className='px-2'> 
            <div className='px-5 py-5 md:hidden lg:hidden'>
                <h5 className='text-3xl font-bold'>Search</h5>
                <p>Destination, properties, even an address</p>
            </div>
                <div className='flex flex-wrap justify-center md:mt-[-45px] py-5'>
                <input className='md:border-4  border-t-4 border-l-2 border-r-4  border-solid border-yellow-500 h-16 md:w-80 w-96 outline-none pl-4 text-md bg-white md:rounded-l-md' type="text" />
                 <input className='md:border-4 border-t-4 border-l-2 border-r-4  border-solid border-yellow-500 h-16 md:w-64 w-96 outline-none pl-4 text-md bg-white' type="text" />
                <input className='md:border-4  border-t-4 border-l-2 border-r-4 border-b-4 border-solid border-yellow-500 h-16 md:w-80 w-96  outline-none pl-4 text-md bg-white md:rounded-r-md' type="text" /> 
                <input className='md:border-4  border-t-4 border-l-2 border-r-4 border-b-4 border-solid border-yellow-500 h-16 md:w-44 w-96  outline-none pl-4 text-md bg-sky-600 md:rounded-r-md text-center text-white text-xl md:pr-2 cursor-pointer' type="submit" value='Search' /> 
                </div>
        </div>
    );
};

export default HomeSearch;