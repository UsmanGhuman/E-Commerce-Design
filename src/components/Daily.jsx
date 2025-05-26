import React from 'react'
import blueLine from '../assets/icons/Line 25.png'
import dropDown from '../assets/icons/Arrow - Down 2 (1).png'
import image1 from '../images/54018-9-grocery-free-hq-image 2.png'
import image2 from '../images/pngegg 1.png'
import image3 from '../images/23410-4-strawberry-photo 1.png'
import image4 from '../images/22136-3-mango-fruit 1.png'
import image5 from '../images/35763-7-cherry-fruit-file 1.png'
import image6 from '../images/41624-7-groceries-hd-download-hd-png 1.png'

export default function Daily() {
    return (
        <>
            <div className='p-2 flex items-center justify-between max-w-5xl mx-auto'>
                <div>
                    <div className='p-2'>
                        <h1>Daily <span className='text-[#008ECC] '>Essentials</span></h1>
                    </div>
                    <div className='pl-2'>
                        {/* <img src={blueLine} alt="BlueLine" className='w-[130px] text-4xl pl-2' /> */}
                        <hr className="border-t-2 border-[#008ECC] w-[110px]" />
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <h1>View All</h1>
                    <div>
                        <img src={dropDown} alt="dropDown" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between max-w-5xl mx-auto p-5'>
                {/* First Section  */}
                <div>
                    <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center border border-transparent hover:border-blue-500 '>
                        <img src={image1} alt="image" className='w-[130px] h-[100px] mt-6 mb-6'/>
                    </div>
                    <div>
                        <p className='text-xs text-center'>Daily Essentials</p>
                        <p className='font-bold'>Up tp 50% OFF</p>
                    </div>
                </div>
                {/* Second Section  */}
                <div>
                    <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center border border-transparent hover:border-blue-500 '>
                        <img src={image2} alt="image" className='w-[130px] h-[100px] mt-6 mb-6'/>
                    </div>
                    <div>
                        <p className='text-xs text-center'>Daily Essentials</p>
                        <p className='font-bold'>Up tp 50% OFF</p>
                    </div>
                </div>
                {/* Third Section  */}
                <div>
                    <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center border border-transparent hover:border-blue-500 '>
                        <img src={image3} alt="image" className='w-[130px] h-[100px] mt-6 mb-6'/>
                    </div>
                    <div>
                        <p className='text-xs text-center'>Daily Essentials</p>
                        <p className='font-bold'>Up tp 50% OFF</p>
                    </div>
                </div>
                {/* Fourth Section  */}
                <div>
                    <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center border border-transparent hover:border-blue-500 '>
                        <img src={image4} alt="image" className='w-[130px] h-[100px] mt-6 mb-6'/>
                    </div>
                    <div>
                        <p className='text-xs text-center'>Daily Essentials</p>
                        <p className='font-bold'>Up tp 50% OFF</p>
                    </div>
                </div>
                {/* Fifth Section  */}
                <div>
                    <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center border border-transparent hover:border-blue-500 '>
                        <img src={image5} alt="image" className='w-[130px] h-[100px] mt-6 mb-6'/>
                    </div>
                    <div>
                        <p className='text-xs text-center'>Daily Essentials</p>
                        <p className='font-bold'>Up tp 50% OFF</p>
                    </div>
                </div>
                {/* Sixth Section  */}
                <div>
                    <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center border border-transparent hover:border-blue-500 '>
                        <img src={image6} alt="image" className='w-[130px] h-[100px] mt-6 mb-6'/>
                    </div>
                    <div>
                        <p className='text-xs text-center'>Daily Essentials</p>
                        <p className='font-bold'>Up tp 50% OFF</p>
                    </div>
                </div>
            </div>
        </>
    )
}
