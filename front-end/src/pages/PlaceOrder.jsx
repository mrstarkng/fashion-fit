import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'


const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' >
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[500px]'>
        <div className='text-xl sm:text-2xl my-3'>
            <Title text1 = "DELIVERY" text2 = "DETAILS"/>

        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Last Name' />

        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='email' placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='number' placeholder='Phone' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Zip Code' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Country' />
        </div>
        
      </div>
      {/* right side */}
      <div className='mt-8 '>
        <div className='mt-8 min-w-80'>
          <CartTotal />

        </div>
        <div className='mt-12 '>
          <Title text1="PAYMENT" text2="METHOD" />
          {/* payment method */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <img src={assets.visa_icon} alt='visa' className='w-10 h-10' />
              <p className='text-lg font-semibold'>Credit / Debit Card</p>
              <img src={assets.right_arrow} alt='right arrow' className='w-5 h-5' />

            </div>
          </div>

        </div>
 
      </div>
    </div>
  )
}

export default PlaceOrder
