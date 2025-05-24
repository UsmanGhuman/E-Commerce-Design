import React from 'react'
import image2 from '../images/image 3.png'
import image1 from '../images/image 3 (1).png'
import image3 from '../images/image 3 (2).png'
import image4 from '../images/image 3 (3).png'
import image5 from '../images/image 3 (4).png'

export default function Picture() {
  return (
    <>
    <div className='flex items-center justify-between max-w-5xl mx-auto p-5'>
        {/* First Section  */}
        <div className='rounded-2xl border border-transparent hover:border-blue-500 p-1'>
            <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center p-2'>
                <img src={image1} alt="Image" className='w-[50px] h-[100px]'/>
            </div>
            <div>
                <p>Galaxy S22 Ultra</p>
                <div className='flex gap-4'>
                    <p>Rs.32999</p>
                    <s>Rs.32999</s>
                </div>
                <div>
                    <hr className='text-[#F5F5F5]'/>
                </div>
                <p className='text-green-600'>Save-Rs.32999</p>
            </div>
        </div>
        {/* Second Section  */}
        <div className='rounded-2xl border border-transparent hover:border-blue-500 p-1'>
            <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center p-2'>
                <img src={image2} alt="Image" className='w-[50px] h-[100px]'/>
            </div>
            <div>
                <p>Galaxy S22 Ultra</p>
                <div className='flex gap-4'>
                    <p>Rs.32999</p>
                    <s>Rs.32999</s>
                </div>
                <div>
                    <hr className='text-[#F5F5F5]'/>
                </div>
                <p className='text-green-600'>Save-Rs.32999</p>
            </div>
        </div>
        {/* Third Section  */}
        <div className='rounded-2xl border border-transparent hover:border-blue-500 p-1'>
            <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center p-2'>
                <img src={image3} alt="Image" className='w-[50px] h-[100px]'/>
            </div>
            <div>
                <p>Galaxy S22 Ultra</p>
                <div className='flex gap-4'>
                    <p>Rs.32999</p>
                    <s>Rs.32999</s>
                </div>
                <div>
                    <hr className='text-[#F5F5F5]'/>
                </div>
                <p className='text-green-600'>Save-Rs.32999</p>
            </div>
        </div>
        {/* Fourth Section  */}
        <div className='rounded-2xl border border-transparent hover:border-blue-500 p-1'>
            <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center p-2'>
                <img src={image4} alt="Image" className='w-[50px] h-[100px]'/>
            </div>
            <div>
                <p>Galaxy S22 Ultra</p>
                <div className='flex gap-4'>
                    <p>Rs.32999</p>
                    <s>Rs.32999</s>
                </div>
                <div>
                    <hr className='text-[#F5F5F5]'/>
                </div>
                <p className='text-green-600'>Save-Rs.32999</p>
            </div>
        </div>
        {/* Fifth Section  */}
        <div className='rounded-2xl border border-transparent hover:border-blue-500 p-1'>
            <div className='bg-[#F5F5F5] rounded-2xl flex items-center justify-center p-2'>
                <img src={image5} alt="Image" className='w-[50px] h-[100px]'/>
            </div>
            <div>
                <p>Galaxy S22 Ultra</p>
                <div className='flex gap-4'>
                    <p>Rs.32999</p>
                    <s>Rs.32999</s>
                </div>
                <div>
                    <hr className='text-[#F5F5F5]'/>
                </div>
                <p className='text-green-600'>Save-Rs.32999</p>
            </div>
        </div>
    </div>
    </>
  )
}
