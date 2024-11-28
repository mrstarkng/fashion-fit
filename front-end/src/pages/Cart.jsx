import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {

  const { products, cartItems, currency } = useContext(ShopContext);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        tempData.push({
          _id: item,
          name: products.find((product) => product._id === item).name,
          price: products.find((product) => product._id === item).price,
          size: size,
          quantity: cartItems[item][size]
        });
      }
    }
    setCartProducts(tempData);
  }, [products, cartItems]);



  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1 = {'YOUR'} text2 = {'CART'} />
      </div>
      <div>
        {
          cartProducts.map((item, index) => {

            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  
                    <img className='w-16 sm:w-24' src={productData.image[0]} alt={productData.name} />
                  
                </div>
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <p className='text-sm text-gray-500'>Size: {item.size}</p>
                  <p className='text-sm text-gray-500'>Quantity: {item.quantity}</p>
                  <p className='text-sm font-medium'>{currency.symbol}{item.price}</p>
                </div>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}

export default Cart
