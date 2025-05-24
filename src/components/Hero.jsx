import React from 'react'
import watch from '../images/image 2.png'
import ellipse from '../assets/icons/Ellipse 36.png'
import blueLine from '../assets/icons/Line 25.png'
import dropDown from '../assets/icons/Arrow - Down 2 (1).png'
export default function Hero() {
    return (
        <>
            <div className='bg-[#212824] flex  justify-around p-5 border rounded-2xl max-w-5xl mx-auto m-5'>
                <div className='text-white space-y-2'>
                    <p className='text-xl'>Best Deal Online on smart watches</p>
                    <h1 className='text-4xl font-bold'>Smart Weareable</h1>
                    <p className='text-xl'>Up to 80% OFF</p>
                </div>
                <div>
                    <img src={watch} alt="Watch" />
                </div>
            </div>
            <div className='p-2 flex items-center justify-between max-w-5xl mx-auto'>
               <div>
                 <div className='p-2'>
                    <h1>Grab the Best Deal on <span className='text-[#008ECC] '>SmartPhones</span></h1>
                </div>
                <div>
                    <img src={blueLine} alt="BlueLine" className='w-[270px] pl-2'/>
                </div>
               </div>
               <div className='flex items-center gap-1'> 
                <h1>View All</h1>
                <div>
                    <img src={dropDown} alt="dropDown" />
                </div>
               </div>
            </div>
        </>
    )
}
