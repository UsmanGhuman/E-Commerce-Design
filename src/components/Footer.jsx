import React from 'react'
import callIcon from '../assets/icons/Call.png'
import whatsappIcon from '../assets/icons/ant-design_whats-app-outlined.png'
import appStoreIcon from '../assets/icons/image 11.png'
import googlePlayIcon from '../assets/icons/image 10.png'
import line1Icon from '../assets/icons/Line 31.png'
import line2Icon from '../assets/icons/Line 32.png'
import LineIcon from '../assets/icons/Line 34.png'

export default function Footer() {
    return (
        <>
            <div className='bg-[#008ECC]'>
                <div className="flex items-start justify-around p-10">
                    {/* First Section */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white font-bold text-2xl">MegaMart</h1>
                        <h4 className="text-white font-bold">Contact Us</h4>
                        <div className="flex items-center gap-2">
                            <img src={whatsappIcon} alt="WhatsappIcon" />
                            <p className="text-white">Whats App</p>
                        </div>
                        <p className="text-white pl-7">+1 202-918-2132</p>
                        <div className="flex items-center gap-2">
                            <img src={callIcon} alt="CallIcon" />
                            <p className="text-white">Call Us</p>
                        </div>
                        <p className="text-white pl-7">+1 202-918-2132</p>
                        <div>
                            <button className="text-white font-bold mt-2">Download App</button>
                        </div>
                        <div className="flex gap-2">
                            <img src={appStoreIcon} alt="AppStoreIcon" className="h-10" />
                            <img src={googlePlayIcon} alt="GooglePlayIcon" className="h-10" />
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white font-bold">Most Popular Categories</h1>
                        <img src={line1Icon} alt="Line2Icon" />
                        <ul className="list-disc text-white pl-5 space-y-2">
                            <li>Staples</li>
                            <li>Beverages</li>
                            <li>Personal Care</li>
                            <li>Home Care</li>
                            <li>Baby Care</li>
                            <li>Vegetables & Fruits</li>
                            <li>Snacks & Foods</li>
                            <li>Dairy & Bakery</li>
                        </ul>
                    </div>

                    {/* Third Section */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white font-bold">Customer Services</h1>
                        <img src={line2Icon} alt="Line2Icon" />
                        <ul className="list-disc text-white pl-5 space-y-2">
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>E-waste Policy</li>
                            <li>Cancellation & Return Policy</li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <img src={LineIcon} alt="Line2Icon" className='max-w-3xl mx-auto' />
                </div>
                <div className='text-center p-5 text-white'>
                    <span>&copy; 2025 All Rights Reserved.Reliance Retail Ltd.</span>
                </div>
            </div>
        </>
    )
}
