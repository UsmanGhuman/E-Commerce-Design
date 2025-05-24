import React from 'react'
import dropDown from '../assets/icons/Arrow - Down 2 (1).png'
import image1 from '../images/image 9 (3).png'
import image2 from '../images/image 9 (1).png'
import image3 from '../images/image 9 (2).png'
import apple from '../images/Group 48.png'
import realme from '../images/Group.png'
import mi from '../images/Vector.png'

export default function Mobile() {
    return (
        <>
            <div className='p-2 flex items-center justify-between max-w-5xl mx-auto'>
                <div>
                    <div className='p-2'>
                        <h1>Top <span className='text-[#008ECC] '>Electronics Brands</span></h1>
                    </div>
                    <div className='pl-2'>
                        {/* <img src={blueLine} alt="BlueLine" className='w-[130px] text-4xl pl-2' /> */}
                        <hr className="border-t-2 border-[#008ECC] w-[160px]" />
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <h1>View All</h1>
                    <div>
                        <img src={dropDown} alt="dropDown" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between max-w-5xl mx-auto gap-2'>
                {/* First Section  */}
                <div className='bg-[#212824] flex items-center justify-center gap-10 p-4 rounded-xl h-[170px]'>
                    <div className='text-white space-y-3'>
                        <p className='text-xs bg-[#404040] rounded-sm w-15 p-1 text-center'>Iphone</p>
                        <img src={apple} alt="Apple" className='h-[40px]' />
                        <p>Up to 80% OFF</p>
                    </div>
                    <div>
                        <img src={image1} alt="image1" className='w-[200px] h-[200px] -mb-15'/>
                    </div>
                </div>
                {/* Second Section  */}
                <div className='bg-[#FFF3CC] flex items-center justify-center gap-10 p-4 rounded-xl'>
                    <div className='text-white space-y-3'>
                        <p className='text-xs bg-[#F6DE8D] text-black rounded-sm w-15 p-1 text-center'>Realme</p>
                        <img src={realme} alt="Apple" />
                        <p className='text-black'>Up to 80% OFF</p>
                    </div>
                    <div>
                        <img src={image2} alt="image1" className='w-[200px] h-[200px] -mb-15'/>
                    </div>
                </div>
                {/* First Section  */}
                <div className='bg-[#FFECDF] flex items-center justify-center gap-10 p-4 rounded-xl h-[170px]'>
                    <div className='text-white space-y-3'>
                        <p className='text-xs bg-[#FFD140] text-center rounded-sm w-15 p-1 font-bold'>XIAOMI</p>
                        <img src={mi} alt="Apple" className='h-[40px]' />
                        <p className='text-black'>Up to 80% OFF</p>
                    </div>
                    <div>
                        <img src={image3} alt="image1" className='w-[200px] h-[200px] -mb-15'/>
                    </div>
                </div>
            </div>
        </>
    )
}
