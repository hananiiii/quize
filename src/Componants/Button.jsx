import React from 'react'
import { Link } from 'react-router-dom'



const Button = () => {
   
  return (
    <div>  
       
          <Link to="/Joinus"> <button  className=" bg-Orange hover:bg-orange-400 rounded-full w-24 h-10 text-sm font-medium text-white  md:mt-0 mt-2  hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300">
            Join us
        </button>
        </Link>
    </div>
  )
}

export default Button;