import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const item in cartItems) {
      const product = products.find((p) => p._id === item);
      if (product) {
        for (const size in cartItems[item]) {
          tempData.push({
            _id: item,
            name: product.name,
            price: product.price,
            size: size,
            quantity: cartItems[item][size],
            image: product.image[0], // Include product image directly
          });
        }
      }
    }
    setCartProducts(tempData);
  }, [products, cartItems]);

  const handleRemoveItem = (itemId, size) => {
    updateQuantity(itemId, size, 0); // Set quantity to 0 to remove the item
  };

  const handleQuantityChange = (itemId, size, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, size, newQuantity);
    } else {
      handleRemoveItem(itemId, size); // Remove the item if quantity is less than 1
    }
  };

  return (
    <div className="pt-14 px-4 sm:px-10 border-t">
      {/* Title Section */}
      <div className="text-3xl font-semibold mb-10">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Cart Products */}
      {cartProducts.length > 0 ? (
        <div className="grid gap-6">
          {cartProducts.map((item, index) => (
            <div
              key={`${item._id}-${item.size}`}
              className="flex flex-col sm:flex-row items-center gap-4 border border-gray-300 rounded-lg p-4 shadow-sm"
            >
              {/* Product Image */}
              <img
                className="w-24 h-24 object-cover rounded-lg"
                src={item.image}
                alt={item.name}
              />

              {/* Product Details */}
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm font-medium mt-2">
                  {currency.symbol}
                  {item.price} x {item.quantity} = {currency.symbol}
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">
                <button
                  className="border border-gray-300 p-1 rounded hover:bg-gray-100"
                  onClick={() =>
                    handleQuantityChange(item._id, item.size, item.quantity - 1)
                  }
                >
                  -
                </button>
                <p className="text-lg">{item.quantity}</p>
                <button
                  className="border border-gray-300 p-1 rounded hover:bg-gray-100"
                  onClick={() =>
                    handleQuantityChange(item._id, item.size, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                className="text-gray-500 hover:text-red-500 text-sm sm:text-base font-medium flex items-center gap-2"
                onClick={() => handleRemoveItem(item._id, item.size)}
              >
                <img
                  src={assets.bin_icon}
                  alt="Remove item"
                  className="w-5 h-5"
                />
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          Your cart is currently empty.
        </p>
      )}

      {/* Cart Summary */}
      {cartProducts.length > 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className='w-full text-end '>
              <button onClick={() => navigate('/place-order')} className='bg-black text-white w-full py-3 rounded-md hover:bg-gray-800 transition'>
                PROCEED TO CHECKOUT
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
