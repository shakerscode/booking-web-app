import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../Images/Icons/car.png'
import airport from '../../Images/Icons/airport.png'
import bed from '../../Images/Icons/bed.png'
import attraction from '../../Images/Icons/attraction.png'
import taxi from '../../Images/Icons/taxi.png';

const HomMain = () => {
    const secondNavData = [
        {tittle: 'Stays', img: bed},
        {tittle: 'Flights', img: airport },
        {tittle: 'Car Rentals', img: car},
        {tittle: 'Attraction', img: attraction},
        {tittle: 'Airport Taxis', img: taxi},
    ]

    return (
        <div className='bg-sky-600  md:px-12 px-5 md:pb-16 pb-8'>
               <div className='flex justify-center items-center md:justify-start  md:w-4/6 flex-wrap gap-4 md:gap-0  p-3'>
            {
                secondNavData.map(data => <div className='text-white flex justify-center items-center md:ml-5 border-2 border-solid-white md:px-3 md:py-2 px-2 py-2 rounded-full cursor-pointer hover:bg-sky-700 transition-all duration-500 ease-in-out '>
                    <h4 className='mr-3'>{data.tittle}</h4>
                    <img src={data.img} alt="data" className='w-5'/>
                </div>)
            }
        </div>
            <div className='text-white mt-4'>
            <h1 className='font-bold md:text-5xl text-3xl text-start'>A lifetime of discounts? It's Genius.</h1>
            <p className='md:text-xl text-lg py-2'>Get rewarded for your travels – unlock instant savings of 10% or more with a free <br /> Booking.com account</p>
            <Link to='/login' ><button className='px-5 py-3 text-lg border-2 border-solid border-white rounded-full mt-5 font-bold hover:bg-sky-800 transition-all duration-500 ease-in-out'>Sign in / Register</button></Link>
        </div>
        </div>
    );
};

export default HomMain;