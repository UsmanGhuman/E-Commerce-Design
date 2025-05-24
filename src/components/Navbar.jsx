import React from 'react'
import locationIcon from '../assets/icons/Location.png'
import deliveryIcon from '../assets/icons/iconoir_delivery-truck.png'
import discountIcon from '../assets/icons/Discount.png'
import lineIcon from '../assets/icons/Line 1.png'
import menuIcon from '../assets/icons/Group 1.png'
import searchIcon from '../assets/icons/Search.png'
import listIcon from '../assets/icons/list.png'
import userIcon from '../assets/icons/user.png'
import buyIcon from '../assets/icons/Buy.png'
import hrLine from '../assets/icons/Line 3.png'
import dropDownIcon from '../assets/icons/Arrow - Down 2.png'

export default function Navbar() {
  return (
    <>
      <div className='flex items-center justify-around mx-auto  bg-[#F5F5F5] p-2'>
        <div className=''>
          <p>Welcome to Worldwide Management!</p>
        </div>
        <div className='flex items-center gap-5'>
          <div className='flex gap-2'>
            <img src={locationIcon} alt="LocationIcon" className='text-base' />
            <p>Deliver to <span className='font-bold '>423651</span></p>
            <img src={lineIcon} alt="LineIcon" />
          </div>
          <div className='flex gap-2'>
            <img src={deliveryIcon} alt="DeliveryIcon" />
            <p>Track Your Orders</p>
            <img src={lineIcon} alt="LineIcon" />
          </div>
          <div className='flex gap-2'>
            <img src={discountIcon} alt="Discount" />
            <p>All offers</p>
          </div>
        </div>
      </div>
      {/* Second NavBar  */}
      <div className='flex items-center justify-around max-w-6xl mx-auto p-5 gap-10'>
        <div className='flex'>
          <img src={menuIcon} alt="MenuIcon" className='bg-[#F5F5F5] border border-none rounded-sm p-2' />
          <h1 className='text-[#008ECC] font-bold text-3xl'>MegaMart</h1>
        </div>
        <div className='flex items-center gap-5'>
          <div className='flex items-center justify-between bg-[#F5F5F5] border border-none rounded-sm p-2 w-[400px]'>
            <div className='flex gap-2'>
              <img src={searchIcon} alt="SearchIcon" />
              <p className='text-xs'>Search essentials,groceries and more..</p>
            </div>
            <div>
              <img src={listIcon} alt="ListIcon" />
            </div>
          </div>
          <div className='flex gap-2'>
            <img src={userIcon} alt="UserIcon" />
            <p>Sign Up/Sign In</p>
            <img src={lineIcon} alt="LineIcon" />
          </div>
          <div className='flex gap-1'>
            <img src={buyIcon} alt="BuyIcon" />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div>
        <img src={hrLine} alt="hrLine" />
      </div>
      {/* Third NavBar  */}
      <div className='flex items-center justify-between max-w-5xl mx-auto p-5'>
        <div className='flex border rounded-full p-2 gap-1 hover:bg-[#008ECC] hover:text-white cursor-pointer'>
          <button className='text-xs'>Groceries</button>
          <img src={dropDownIcon} alt="DropDownIcon" className='w-5 h-5 transition duration-200 filter hover:invert hover:brightness-0'/>
        </div>
        <div className='flex border rounded-full p-2 gap-1 hover:bg-[#008ECC] hover:text-white cursor-pointer'>
          <button className='text-xs'>Premium Fruits</button>
          <img src={dropDownIcon} alt="DropDownIcon" className='w-5 h-5 transition duration-200 filter hover:invert hover:brightness-0'/>
        </div>
        <div className='flex border rounded-full p-2 gap-1 hover:bg-[#008ECC] hover:text-white cursor-pointer'>
          <button className='text-xs'>Home & Kitchen </button>
          <img src={dropDownIcon} alt="DropDownIcon" className='w-5 h-5 transition duration-200 filter hover:invert hover:brightness-0'/>
        </div>
        <div className='flex border rounded-full p-2 gap-1 hover:bg-[#008ECC] hover:text-white cursor-pointer'>
          <button className='text-xs'>Fashion</button>
          <img src={dropDownIcon} alt="DropDownIcon" className='w-5 h-5 transition duration-200 filter hover:invert hover:brightness-0'/>
        </div>
        <div className='flex border rounded-full p-2 gap-1 hover:bg-[#008ECC] hover:text-white cursor-pointer'>
          <button className='text-xs'>Electronics</button>
          <img src={dropDownIcon} alt="DropDownIcon" className='w-5 h-5 transition duration-200 filter hover:invert hover:brightness-0'/>
        </div>
        <div className='flex border rounded-full p-2 gap-1 hover:bg-[#008ECC] hover:text-white cursor-pointer'>
          <button className='text-xs'>Beauty</button>
          <img src={dropDownIcon} alt="DropDownIcon" className='w-5 h-5 transition duration-200 filter hover:invert hover:brightness-0'/>
        </div>
        <div className='flex border rounded-full p-2 gap-1 hover:bg-[#008ECC] hover:text-white cursor-pointer'>
          <button className='text-xs'>Home Improvements</button>
          <img src={dropDownIcon} alt="DropDownIcon" className='w-5 h-5 transition duration-200 filter hover:invert hover:brightness-0'/>
        </div>
        <div className='flex border rounded-full p-2 gap-1 hover:bg-[#008ECC] hover:text-white cursor-pointer'>
          <button className='text-xs'>Sports, Toys & Luggage</button>
          <img src={dropDownIcon} alt="DropDownIcon" className='w-5 h-5 transition duration-200 filter hover:invert hover:brightness-0'/>
        </div>
      </div>
      <div>
        <img src={hrLine} alt="hrLine" />
      </div>
    </>
  )
}
