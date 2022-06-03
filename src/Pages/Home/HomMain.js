import React from 'react';
import { Link } from 'react-router-dom';

const HomMain = () => {
    return (
        <div className='text-white bg-sky-600 md:py-14  md:px-12 px-5 pt-10'>
            <h1 className='font-bold md:text-5xl text-3xl text-start'>A lifetime of discounts? It's Genius.</h1>
            <p className='md:text-xl text-lg py-2'>Get rewarded for your travels – unlock instant savings of 10% or more with a free <br /> Booking.com account</p>
            <Link to='/login' ><button className='px-5 py-3 text-lg border-2 border-solid border-white rounded-full mt-5 font-bold hover:bg-sky-800 transition-all duration-500 ease-in-out'>Sign in / Register</button></Link>
        </div>
    );
};

export default HomMain;