import { createContext } from "react";
import { products } from '../assets/assets';

export const ShopContext = createContext({
  products: [],
  currency: { code: '', symbol: '' }, // Default structure for currency
  deliveryFee: 0,
});

const ShopContextProvider = ({ children }) => {
  const currency = { code: 'VND', symbol: '₫' }; // Define currency with code and symbol
  const deliveryFee = 10; // Set a default delivery fee

  const value = {
    products,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
