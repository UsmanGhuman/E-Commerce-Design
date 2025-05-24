import React from 'react'
import image1 from '../images/image 3 (5).png'
import image2 from '../images/image 3 (6).png'
import image3 from '../images/Ellipse 41.png'
import image4 from '../images/image 4.png'
import image5 from '../images/image 5.png'
import image6 from '../images/image 6.png'
import image7 from '../images/image 7.png'
import blueLine from '../assets/icons/Line 25.png'
import dropDown from '../assets/icons/Arrow - Down 2 (1).png'

export default function Rounded() {
    return (
        <>
            <div className='p-2 flex items-center justify-between max-w-5xl mx-auto'>
                <div>
                    <div className='p-2'>
                        <h1>Shop From <span className='text-[#008ECC] '>Top Categories</span></h1>
                    </div>
                    <div className='pl-2'>
                        {/* <img src={blueLine} alt="BlueLine" className='w-[270px] pl-2' /> */}
                         <hr className="border-t-2 border-[#008ECC] w-[190px] " />
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
                    <div className=''>
                        <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center border border-transparent hover:border-blue-500 p-5'>
                            <img src={image1} alt="Image1" className='h-[60px] w-[30px]' />
                        </div>
                        <div>
                            <p className='pl-3'>
                                Mobile
                            </p>
                        </div>
                    </div>
                    {/* Second Section  */}
                    <div className=''>
                        <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center border border-transparent hover:border-blue-500 p-5'>
                            <img src={image2} alt="Image1" className='h-[60px] w-[30px]' />
                        </div>
                        <div>
                            <p className='pl-3'>
                                Mobile
                            </p>
                        </div>
                    </div>
                    {/* Third Section  */}
                    <div className=''>
                        <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center border border-transparent hover:border-blue-500 p-5'>
                            <img src={image3} alt="Image1" className='h-[60px] w-[30px]' />
                        </div>
                        <div>
                            <p className='pl-3'>
                                Mobile
                            </p>
                        </div>
                    </div>
                    {/* Fourth Section  */}
                    <div className=''>
                        <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center border border-transparent hover:border-blue-500 p-5'>
                            <img src={image4} alt="Image1" className='h-[60px] w-[30px]' />
                        </div>
                        <div>
                            <p className='pl-3'>
                                Mobile
                            </p>
                        </div>
                    </div>
                    {/* Fifth Section  */}
                    <div className=''>
                        <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center border border-transparent hover:border-blue-500 p-5'>
                            <img src={image5} alt="Image1" className='h-[60px] w-[30px]' />
                        </div>
                        <div>
                            <p className='pl-3'>
                                Mobile
                            </p>
                        </div>
                    </div>
                    {/* Sixth Section  */}
                    <div className=''>
                        <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center border border-transparent hover:border-blue-500 p-5'>
                            <img src={image6} alt="Image1" className='h-[60px] w-[30px]' />
                        </div>
                        <div>
                            <p className='pl-3'>
                                Mobile
                            </p>
                        </div>
                    </div>
                    {/* Seventh Section  */}
                    <div className=''>
                        <div className='bg-[#F5F5F5] rounded-full flex items-center justify-center border border-transparent hover:border-blue-500 p-5'>
                            <img src={image7} alt="Image1" className='h-[60px] w-[30px]' />
                        </div>
                        <div>
                            <p className='pl-3'>
                                Mobile
                            </p>
                        </div>
                    </div>
                </div>
            </>
            )
}
