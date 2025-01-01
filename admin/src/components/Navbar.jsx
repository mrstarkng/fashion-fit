import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 sm:px-8 lg:px-12 h-20 bg-white shadow-md'>
      {/* Logo */}
      <img 
        className='h-16 sm:h-20 lg:h-24 object-contain translate-y-2' 
        src={assets.logo} 
        alt="Company Logo" 
      />
      
      {/* Logout Button */}
      <button 
        className='bg-gray-700 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base hover:bg-gray-800 transition-all'
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
