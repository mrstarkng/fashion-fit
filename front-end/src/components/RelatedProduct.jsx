import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import Title from './Title';
import ProductItem from './ProductItems';

const RelatedProduct = ({ category, subcategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        console.log('Products:', products);
        console.log('Category:', category, 'Subcategory:', subcategory);
        
        if (products.length > 0) {
            const filteredProducts = products
                .filter(item => {
                    console.log('Checking item:', item);
                    return item.category === category && 
                           item.subcategory === subcategory;
                })
                .slice(0, 5);
            
            console.log('Filtered Products:', filteredProducts);
            setRelated(filteredProducts);
        }
    }, [products, category, subcategory]);

    console.log('Related products in render:', related);

    return (
        <div className='my-24'>
            {related.length === 0 ? (
                <p>No related products found</p>
            ) : (
                <>
                    <div className='text-center text-3xl py-2'>
                        <Title text1={`RELATED`} text2={"PRODUCTS"} />
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                        {related.map((item, index) => (
                            <ProductItem 
                                key={item._id || index}
                                id={item._id} 
                                price={item.price} 
                                image={item.image}
                                name={item.name}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default RelatedProduct;
