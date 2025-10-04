import React from 'react'
import { NavLink } from 'react-router-dom';


function NavBar() {
  const activeClass = 'underline text-blue decoration-green underline-offset-5 under';
  const baseClass = 'text-blue hover:transition-y-1';

  return (
    <div>
      <nav className='fixed bg-white w-full top-0 flex justify-between md:pl-4 md:pr-40 px-2 z-20 h-10 items-center '>
        <div className=''>
          <img src="/photos/logo.svg" alt="SmartAxis Logo" className='inline-block lg:size-8 size-6 pb-1' />
          <p className='text-blue font-inter font-black lg:text-lg text-sm inline-block p-1  '><span className='text-green '>Smart</span>
            Axis</p>
        </div>
        <div className='text-xs lg:text-base sm:space-x-6 space-x-3'>
        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : baseClass} >
        Home
        </NavLink>
        <NavLink to="/AboutUs" className={({ isActive }) => isActive ? activeClass : baseClass} >
          About Us
        </NavLink>
        <NavLink to="/Products" className={({ isActive }) => isActive ? activeClass : baseClass} >
          Products
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? activeClass : baseClass} >
          Contact
        </NavLink>
    </div>
    </nav >
    <hr className="fixed top-10 w-full border-t border-blue z-20"/>
</div >
  )
}

export default NavBar