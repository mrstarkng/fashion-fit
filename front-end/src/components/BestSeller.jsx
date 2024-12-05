import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItems';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (Array.isArray(products)) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 10));
        }
    }, [products]); // Dependency array updated

    return (
        <div className='my-10'>
            {/* Title Section */}
            <div className='text-center text-3xl py-8'>
                <Title text1="BEST" text2="SELLER" />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Our best-selling products, featuring the latest trends and styles.
                </p>
            </div>

            {/* Products Section */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.length > 0 ? (
                    bestSeller.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image || []} // Fallback for image
                            name={item.name || 'Unknown Product'} // Fallback for name
                            price={item.price || 'N/A'} // Fallback for price
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">No best sellers available.</p>
                )}
            </div>
        </div>
    );
};

export default BestSeller;
