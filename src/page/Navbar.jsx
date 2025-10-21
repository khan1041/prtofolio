
import React, { useState } from 'react';

// ❌ Removed: import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 
// ❌ Removed: const MenuIcon = ... and CloseIcon = ... placeholders

const navItems = [
  { id: 1, text: 'Home', href: '#hero' },
  { id: 2, text: 'Projects', href: '#projects' },
    { id: 3, text: 'Backend', href: '#backend' },
{id: 4, text: 'Experience', href: '#experience' },
  { id: 5, text: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // Fixed position, full width, and dark background for the navbar
    <div className='fixed top-0 w-full z-20 bg-gray-900 shadow-xl'>
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-6 text-white'>
        
        {/* Logo/Brand Name */}
        <h1 className='text-3xl font-extrabold text-blue-400 hover:text-blue-300 duration-300 cursor-pointer tracking-wider'>
          PORTFOLIO
        </h1>

        {/* 1. Desktop Navigation */}
        <ul className='hidden md:flex space-x-6'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='text-lg font-medium text-gray-300 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 pb-1 cursor-pointer duration-200'
            >
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>

        {/* 2. Mobile Menu Icon (Visible on mobile) */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer text-2xl z-50 p-1'>
          {/* 🟢 Using native SVG for the Menu Icon */}
          {/* 🟢 Using a simple span for the Close Icon (can also be an SVG) */}
          {nav ? (
            <span className='text-3xl font-light text-white hover:text-blue-400 duration-200'>&times;</span> // A simple "X" character
          ) : (
            <svg 
              className='w-7 h-7 text-white hover:text-blue-400 duration-200' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24' 
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          )}
        </div>

        {/* 3. Mobile Navigation Menu (Slides in/out) */}
        <ul
          className={
            nav
              ? 'fixed left-0 top-0 w-full h-screen bg-gray-900 ease-in-out duration-500 z-40 flex flex-col pt-24 items-center space-y-8'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          {/* Mobile Logo (Repeated for clarity in the mobile view) */}
          <h1 className='text-3xl font-bold text-blue-400 mb-8'>PORTFOLIO</h1>
          
          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className='text-3xl font-bold text-gray-300 hover:text-blue-400 w-full text-center py-4 border-b border-gray-700 cursor-pointer duration-200'
              onClick={handleNav} // Closes the menu on click
            >
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;