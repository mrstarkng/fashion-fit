import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1='CONTACT' text2='US' />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="contact" />

      </div>
      

    </div>
  )
}

export default contact
