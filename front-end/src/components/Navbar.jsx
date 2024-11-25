import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
  return (
      <div className='flex items-center justify-between py-5 font-medium'>
          
          <img src={assets.logo} className='w-36' alt="" />

          <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
              
              <NavLink 
                to='/home' 
                className={({ isActive }) => 
                  `flex flex-col items-center gap-1 ${isActive ? 'nav-active' : ''}`
                }
              >
                  
                  <p>HOME</p>

                  <hr className='w-0 hover:w-2/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700'/>
                  
              </NavLink>
                 <NavLink 
                   to='/collection' 
                   className={({ isActive }) => 
                     `flex flex-col items-center gap-1 ${isActive ? 'nav-active' : ''}`
                   }
                 >
                  
                  <p>COLLECTION</p>

                  <hr className='w-0 hover:w-2/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700'/>
                  
              </NavLink>
                 <NavLink 
                   to='/about' 
                   className={({ isActive }) => 
                     `flex flex-col items-center gap-1 ${isActive ? 'nav-active' : ''}`
                   }
                 >
                  
                  <p>ABOUT</p>

                  <hr className='w-0 hover:w-2/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700'/>
                  
              </NavLink>
                 <NavLink 
                   to='/contact' 
                   className={({ isActive }) => 
                     `flex flex-col items-center gap-1 ${isActive ? 'nav-active' : ''}`
                   }
                 >
                  
                  <p>CONTACT</p>

                  <hr className='w-0 hover:w-2/4 transition-all duration-300 border-none h-[1.5px] bg-gray-700'/>
                  
              </NavLink>
              
              <NavLink 
                to='/ai' 
                className={({ isActive }) => 
                  `flex flex-col items-center gap-1 ${isActive ? 'nav-active' : ''}`
                }
              >
                <p className="text-amber-500">AI</p>
                <hr className='w-0 hover:w-2/4 transition-all duration-300 border-none h-[1.5px] bg-amber-500'/>
              </NavLink>
          </ul>
          
          <div className='flex items-center gap-6'>
              <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
              <div className='group relative'>
                  <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                  <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                      <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                          <p className='cursor-pointer hover:text-black'>My Profile</p>
                          <p className='cursor-pointer hover:text-black'>Orders</p>
                          <p className='cursor-pointer hover:text-black'>Logout</p>
                          
                      </div>
                      
                  </div>
                  
              </div>
              <Link to='/cart' className='relative'>
                  <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
                  <p className='absolute  right-[-5px] bottom-[-5px] bg-black text-white w-4 leading-4 h-4 flex items-center justify-center aspect-square rounded-full text-[8px]'>0</p>
              </Link>
              <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />    
          </div>
          { /*Side bar menu for small screen*/}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
              <div className='flex flex-col text-gray-600'>
                  <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                      <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                      <p>Back</p>
                  </div>
                  
                  <div className='flex flex-col p-4 gap-4'>
                      <NavLink to='/' onClick={() => setVisible(false)}>HOME</NavLink>
                      <NavLink to='/collection' onClick={() => setVisible(false)}>COLLECTION</NavLink>
                      <NavLink to='/about' onClick={() => setVisible(false)}>ABOUT</NavLink>
                      <NavLink to='/contact' onClick={() => setVisible(false)}>CONTACT</NavLink>
                      <NavLink to='/ai' onClick={() => setVisible(false)}>AI</NavLink>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar

