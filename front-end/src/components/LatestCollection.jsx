import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title'
import ProductItem from './ProductItems'


const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [])


 
  return (
      <div className='py-10'>
          <div className='text-center py-8 text-3xl'>
              <Title text1='OUR' text2='LATEST COLLECTION' text3='_' />
              <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                  Our latest collection of products, featuring the latest trends and styles.
              </p>
          </div>
          {/*render latest products*/}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                  latestProducts.map((item,index) => (
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}  />
              ))}
          </div>


      
    </div>
  )
}

export default LatestCollection
