import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';


const Product = () => {
  const { productId } = useParams(); // Use correct parameter name
  const { products } = useContext(ShopContext); // Access products from context
  const [productData, setProductData] = useState(null); // Initialize with `null`
  const [image, setImage] = useState(''); // State for main image
  const [size, setSize] = useState(''); // State for selected size

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId); // Match _id with productId
    if (product) {
      setProductData(product);
      setImage(product.image[0]); // Set the first image as default
    }
  };

  useEffect(() => {
    fetchProductData(); // Fetch product data on mount or when productId changes
  }, [productId, products]); // Add dependencies

  if (!productData) {
    return <p className="text-center text-gray-500">Loading product details...</p>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity duration-500 opacity-100">
      {/* Product Detail */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Image Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Thumbnail ${index + 1}`}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)} // Update main image on click
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[81.3%]">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-auto object-cover border border-gray-300"
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1">
          {/* Product Name */}
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          {/* Star Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={assets.star_icon}
                alt="Star"
                className="w-5"
              />
            ))}
            <img
              src={assets.star_dull_icon}
              alt="Star"
              className="w-5"
            />
          </div>

          {/* Price */}
          <p className="mt-5 text-3xl font-medium">
            {productData.price} {productData.currency?.symbol || '₫'}
          </p>

          {/* Description */}
          <p className="mt-5 text-gray-500">{productData.description}</p>

          {/* Size Selector */}
          <div className="flex flex-col gap-4 my-8">
            <p className="font-medium">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)} // Update the `size` state
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 transition ${
                    item === size ? 'border-black' : ''
                  }`} // Highlight selected size
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-10 py-2 rounded-md'>Add to Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash on Delivery Available</p>
            <p>14 Days Return Policy</p>
          </div>

        </div>
      </div>
      {/* Description  & Reviews Section*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 '>
          <p>An e-commerce website is an online platform that allows businesses to sell products or services to consumers over the internet. It typically includes a shopping cart system, payment processing, and shipping options. E-commerce websites can be accessed from any internet-connected device, such as a computer, tablet, or smartphone.</p>
          <p>An e-commerce website is an online platform that allows businesses to sell products or services to consumers over the internet. It typically includes a shopping cart system, payment processing, and shipping options. E-commerce websites can be accessed from any internet-connected device, such as a computer, tablet, or smartphone.</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct category={productData.category} subcategory={productData.subcategory} subsubcategory={productData.subsubcategory} />


    </div>
  );
};

export default Product;
