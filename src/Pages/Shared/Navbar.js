import React from 'react';
import register from '../../Images/Icons/register.png'
import login from '../../Images/Icons/login.png'
import { Link } from 'react-router-dom';
import account from '../../Images/Icons/account.png'
import car from '../../Images/Icons/car.png'
import airport from '../../Images/Icons/airport.png'
import bed from '../../Images/Icons/bed.png'
import attraction from '../../Images/Icons/attraction.png'
import taxi from '../../Images/Icons/taxi.png'

const Navbar = () => {
    const secondNavData = [
        {tittle: 'Stays', img: bed},
        {tittle: 'Flights', img: airport },
        {tittle: 'Car Rentals', img: car},
        {tittle: 'Attraction', img: attraction},
        {tittle: 'Airport Taxis', img: taxi},
    ]
    return (
        <div className='bg-sky-600 md:h-[150px]'>
            <div className='flex justify-between md:px-10 lg:px-10 px-4 py-4 items-center '>
            <div className=''>
                <h1 className='md:text-3xl lg:text-3xl text-2xl font-bold text-white'><Link to='/'>Booking.com</Link></h1>
            </div>
            <div className='flex justify-between items-center'>
               <Link to='/register'> <button 
                className='md:mr-5 hidden md:flex lg:flex bg-white justify-between items-center md:px-3 md:py-2 font-semibold text-sky-600 rounded-full hover:bg-sky-200 transition-all duration-500 ease-in-out'>Register <img src={register} 
                alt="register" 
                className='ml-2 w-5'/></button> </Link>
               <Link to='/login'><button className='bg-white hidden md:flex lg:flex justify-between items-center md:px-3 lg:px-3 md:py-2 lg:py-2 font-semibold text-sky-600 rounded-full hover:bg-sky-200 transition-all duration-500 ease-in-out
                '>Login <img src={login} alt="login" className='ml-2 w-5'/></button> </Link> 
                <button><Link to='/login'><img src={account} alt="user-account" className='lg:hidden md:hidden w-8' /></Link></button>
            </div>
        </div>
        
        <div className='flex justify-center items-center md:justify-start md:ml-3 md:w-4/6 flex-wrap gap-4 md:gap-0 mt-2 md:mt-0 p-3'>
            {
                secondNavData.map(data => <div className='text-white flex justify-center items-center md:ml-5 border-2 border-solid-white md:px-3 md:py-2 px-2 py-2 rounded-full cursor-pointer hover:bg-sky-700 transition-all duration-500 ease-in-out '>
                    <h4 className='mr-3'>{data.tittle}</h4>
                    <img src={data.img} alt="data" className='w-5'/>
                </div>)
            }
        </div>
        </div>
    );
};

export default Navbar;