import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import Logo from './Logo'

const Header = () => {
  return (
    <header className=" bg-[#F4F6F7] flex-wrap sticky justify-between  top-0 z-[20] mx-auto flex   w-full  shadow-lg  border-b border-gray-200 p-8">
    <Link to="/Home" > <Logo/></Link>
     <Nav  />
   
  </header>

  )
}

export default Header;