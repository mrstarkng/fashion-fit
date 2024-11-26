import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItems';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState('latest');
  

  // Initialize products
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Handle Category Filter Change
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Handle Type Filter Change
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Filter and Sort Products
  useEffect(() => {
    let filtered = products;

    // Filter by Categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by Types
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((product) =>
        selectedTypes.includes(product.type)
      );
    }

    // Sort Products
    if (sortOption === 'price_asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price_desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name_asc') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name_desc') {
      filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilterProducts(filtered);
  }, [products, selectedCategories, selectedTypes, sortOption]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          Filters
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="filter"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 px-5 py-3 mt-6 rounded-md shadow-sm ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            {['Men', 'Women', 'Kids'].map((category) => (
              <label key={category} className='flex items-center gap-2 cursor-pointer hover:text-gray-800'>
                <input
                  className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded-sm'
                  type="checkbox"
                  value={category}
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 px-5 py-3 mt-6 rounded-md shadow-sm ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
              <label key={type} className='flex items-center gap-2 cursor-pointer hover:text-gray-800'>
                <input
                  className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded-sm'
                  type="checkbox"
                  value={type}
                  onChange={() => handleTypeChange(type)}
                  checked={selectedTypes.includes(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className='border-2 border-gray-300 rounded-md text-sm px-2'
          >
            <option value="latest">Latest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
          </select>
        </div>
        {/* Product Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          ) : (
            <p className='col-span-full text-center text-gray-500'>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
