import React, { useState } from 'react';
import bed from '../../Images/Icons/blue-bed.png';
import calender from '../../Images/Icons/calendar.png';
import user from '../../Images/Icons/user.png';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const HomeSearch = () => {
    const [openDateRange, setOpenDateRange] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date() ,
            key: 'selection'
        }
    ]);

    const [personOption,setPersonOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const [showPersonPicker, setShowPersonPicker]  = useState(false)

    return (
        <div className='px-2 bg-sky-100 md:h-96 md:mt-[-40px]'>
            <div className='md:px-5 md:py-5 md:hidden lg:hidden mobile-search-text'>
                <h5 className='text-3xl font-bold'>Search</h5>
                <p>Destination, properties, even an address</p>
            </div>
            <form className='flex flex-wrap md:flex-nowrap justify-around items-center  relative md:border-4 bg-white border-yellow-400 md:h-14 py-5 md:py-10 px-3 md:w-5/6 md:max-w-fit mx-auto rounded-lg'>
                <div className='flex md:justify-center items-center gap-4 md:px-2 md:border-none border-2 border-orange-500 px-10 py-5 md:py-0 mobile-width'>
                    <img src={bed} alt="" className='icon-height'/>
                    <input type="text" placeholder='Where are you going?' className='outline-none'/>
                </div>
                <div className='flex md:justify-center items-center gap-4 md:px-2 md:border-none border-2 border-orange-500 px-10 py-5 md:py-0 mt-2 md:mt-0 mobile-width'>
                    <img src={calender} alt=""   className='icon-height'/>
                    <span 
                    onClick={()=> setOpenDateRange(!openDateRange)} 
                    className='px-3 cursor-pointer'>{`${format(date[0].startDate, "E, Lo LLL")}  ~ ${format(date[0].endDate, "E, Lo LLL")}`}</span>
                   { openDateRange && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='absolute md:top-[82px] top-48 calender-position-mobile'
                    />}
                </div>
                <div className='flex justify-center items-center gap-4 pr-2 md:px-2 md:border-none border-2 border-orange-500 px-10 py-5 md:py-0 mt-2 md:mt-0 mobile-width'>
                    <img src={user} alt=""  className='icon-height' />
                    <span  
                    onClick={()=> setShowPersonPicker(!showPersonPicker)}
                    className='px-3 cursor-pointer'>{`${personOption.adult}  Adult  -  ${personOption.children} Children - ${personOption.room} Room`}
                    </span>
                    { showPersonPicker &&
                        <div className='w-80 absolute md:top-[82px] md:ml-10 bg-white px-5 shadow-xl rounded-xl person-counter-mobile'>
                            <div className='flex justify-between items-center py-2 '>
                                <span className='text-lg font-semibold'>Adult</span>
                                <div>
                                <button className='bg-sky-300 text-black mr-2 px-4 text-2xl rounded-lg text-center pt-1'>-</button>
                                <input type="number" defaultValue='1' className='w-16 px-1 outline-none text-xl text-center'/>
                                <button className='bg-sky-300 text-black mr-2 px-4 text-2xl rounded-lg text-center pt-1'>+</button>
                                </div>
                            </div> 
                            <div className='flex justify-between items-center py-2'>
                                <span className='text-lg font-semibold'>Children</span>
                                <div>
                                <button className='bg-sky-300 text-black mr-2 px-4 text-2xl rounded-lg text-center pt-1'>-</button>
                                <input type="number" defaultValue='0' className='w-16 px-1 outline-none text-xl text-center'/>
                                <button className='bg-sky-300 text-black mr-2 px-4 text-2xl rounded-lg text-center pt-1'>+</button>
                                </div>
                            </div> 
                            <div className='flex justify-between items-center py-2'>
                                <span className='text-lg font-semibold'>Room</span>
                                <div>
                                <button className='bg-sky-300 text-black mr-2 px-4 text-2xl rounded-lg text-center pt-1'>-</button>
                                <input type="number" defaultValue='1' className='w-16 px-1 outline-none text-xl text-center'/>
                                <button className='bg-sky-300 text-black mr-2 px-4 text-2xl rounded-lg text-center pt-1'>+</button>
                                </div>
                            </div> 
                        </div>
                    }
                </div>
                <div className='bg-sky-600 text-white md:px-10 md:py-5 px-8 py-2 rounded-xl ml-3 mt-5 md:mt-0'>
                    <button className='text-xl'>Search</button>
                </div>
            </form>
        </div>
    );
};

export default HomeSearch;