import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import {Menu ,X} from "lucide-react";
import Button from "./Button";


const NavLinks =() =>{
    
    return(
    <div className="flex md:flex-row md:justify-center items-center font-meduim text-lg  flex-col lg:gap-12 gap-4 ">
        <NavLink to="/Home" className=" md:pt-0 text-Orange hover:underline hover:transform hover:-translate-y-1  transition-transform duration-300 ">Home</NavLink>
        <NavLink to="/Quize" className=" md:pt-0 pt-2 text-Orange hover:underline hover:transform hover:-translate-y-1  transition-transform duration-300">Quize</NavLink>
        <NavLink to="/AddFeedBack" className=" md:pt-0 pt-2 text-Orange hover:underline hover:transform hover:-translate-y-1  transition-transform duration-300">Feedback</NavLink>
        <Button/>
     </div>
    )
}

const Nav =() =>{
    const [isOpen ,setIsOpen] =useState(false);
    const toggleNavbar =() =>{
        setIsOpen(!isOpen);
        
     
       
    }
    return(
     <>
        <nav className="w-1/2.5 flex justify-end ">
          <div className="hidden w-full md:flex justify-between  ">
            <NavLinks />
          </div>
          <div className="md:hidden ">
            <button  onClick={toggleNavbar}>
                {isOpen ? <X /> : <Menu/>}
            </button>
          </div>
        </nav>
        {isOpen && (
            <div className="flex flex-col items-center basis-full  mt-10  md:hidden">
                <NavLinks/>
            </div>
        )}
        
     </>
      
    )
}
export default Nav;