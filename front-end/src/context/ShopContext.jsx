import { createContext } from "react";
import { products } from '../assets/assets';
import { useState } from 'react';

export const ShopContext = createContext({
  products: [],
  currency: { code: '', symbol: '' }, // Default structure for currency
  deliveryFee: 0,
});

const ShopContextProvider = ({ children }) => {
  const currency = { code: 'VND', symbol: '₫' }; // Define currency with code and symbol
  const deliveryFee = 10; // Set a default delivery fee
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
