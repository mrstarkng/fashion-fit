import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title'
const LatestCollection = () => {

    const { products } = useContext(ShopContext);

 
  return (
      <div className='py-10'>
          <div className='text-center py-8 text-3xl'>
              <Title text1='OUR' text2='LATEST COLLECTION' text3='_' />
              <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
          </div>
      
    </div>
  )
}

export default LatestCollection
