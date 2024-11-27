import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItems';
import SearchBar from '../components/SearchBar';

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState('latest');

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];

    // Apply search filter
    if (search.trim() !== '') {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Apply type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((product) =>
        selectedTypes.includes(product.type)
      );
    }

    // Apply sorting logic
    switch (sortOption) {
      case 'price_asc':
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case 'price_desc':
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case 'name_asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'latest':
        filtered.sort((a, b) => b.date - a.date); // Assuming `date` is a timestamp
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, search, selectedCategories, selectedTypes, sortOption]);

  return (
    <div className='pt-10 border-t'>
      {/* Search Bar */}
      <SearchBar />

      {/* Filter Options */}
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 mt-5'>
        {/* Filter Section */}
        <div className='min-w-60'>
          <p
            onClick={() => setShowFilter(!showFilter)}
            className='my-2 text-xl flex items-center cursor-pointer gap-2'
          >
            Filters
            <img
              className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
              src={assets.dropdown_icon}
              alt="filter"
            />
          </p>

          {/* Category Filter */}
          <div
            className={`border border-gray-300 px-5 py-3 mt-6 rounded-md shadow-sm ${
              showFilter ? '' : 'hidden'
            } sm:block`}
          >
            <p className='mb-3 text-sm font-medium text-gray-800'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
              {['Men', 'Women', 'Kids'].map((category) => (
                <label
                  key={category}
                  className='flex items-center gap-2 cursor-pointer hover:text-gray-800'
                >
                  <input
                    className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded-sm'
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div
            className={`border border-gray-300 px-5 py-3 mt-6 rounded-md shadow-sm ${
              showFilter ? '' : 'hidden'
            } sm:block`}
          >
            <p className='mb-3 text-sm font-medium text-gray-800'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
              {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                <label
                  key={type}
                  className='flex items-center gap-2 cursor-pointer hover:text-gray-800'
                >
                  <input
                    className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded-sm'
                    type="checkbox"
                    value={type}
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
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
              className='border-2 border-gray-300 rounded-md text-sm px-2'
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)} // Update sort option
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))
            ) : (
              <p className='col-span-full text-center text-gray-500'>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
