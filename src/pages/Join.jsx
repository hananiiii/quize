import React, { useState } from 'react'
import Headertwo from '../Componants/Headertwo'


const Infos=[
    {
        icon :  <ion-icon name="call"></ion-icon> ,
        text : "064287593"
    },
    {
        icon :  <ion-icon name="home"></ion-icon> ,
        text : "Tlemcen - Algeria"
    },
    {
        icon :  <ion-icon name="mail"></ion-icon> ,
        text : "Hanane@gmail.dz"
    },
]

const Join = () => {
    const [useName,setUseName]=useState();
    const [email,setEmail]=useState();

    const handleSubmit =async (e) =>{
        e.preventDefault();
        console.log("User name :" , useName);  
        console.log("Email :" , email);
        setUseName("");
        setEmail("")
       
    };
  return (
    <section>
        <Headertwo/>
        
           <div className='flex flex-col justify-center my-12'>
         
                <h1 className='font-bold text-3xl text-Orange text-center mb-4'>
                     Join us
                 </h1>
                <p className='text-gray-800 font-medium text-base text-center '>
                Start your learning journey with ThinkNTest. Join our community of learners <br/> and challenge yourself with a wide range of quizzes.
                </p>

            </div>
            <div className='lg:w-1/2 mt-16'>
                  <div>
            <h1 className='font-bold text-Orange text-3xl mb-12 flex justify-center'>Contact us </h1>
            <div className='  flex lg:flex-col sm:flex-row  flex-col gap-12 lg:pl-72 sm:pl-8 pl-[155px]'>
            {Infos.map((info ,index)=>(
                <div key={index} className='flex flex-row gap-4 items-center '>
                  <span className='w-12 h-12 rounded-full bg-Orange text-center text-2xl pt-2 text-Gray justify-center'>
                  {info.icon}
                  </span>
                  <h1 className=' font-medium  text-xl text-gray-800 pt-auto'>{info.text}</h1>
                </div>
                 ))}
            </div>
                  </div>
            </div>
            <div className='lg:w-1/2 mx-auto my-auto  lg:-mt-[325px] mt-16 lg:ml-[600px] '>
                <h1 className='font-bold text-3xl text-Orange text-center mb-4'> Register</h1>
                <form onSubmit={handleSubmit} className='flex justify-center items-center gap-8 lg:w-[500px]  sm:w-[500px] w-[350px] mx-auto my-12 mr-16 '>
                 <div className=" w-full flex flex-col gap-6 justify-center">
                 <input 
                   placeholder="User name"
                   value={useName}
                   onChange={(e) => setUseName(e.target.value)}
                   className="lg:w-[400px] sm:w-[400px] w-[350px] border py-4 px-4  border-gray-800 text-base font-light text-gray-400 rounded-sm"
                   />
                   <input 
                   placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                   className="lg:w-[400px] sm:w-[400px]  w-[350px] border py-4 px-4  border-gray-800 text-base font-light text-gray-400 rounded-sm"
                   />
                   <button type="submit" className="lg:w-[400px] sm:w-[400px]  w-[350px] bg-Orange rounded-sm text-white font-bold px-4 py-4 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer">
                        Join
                    </button>
                </div>
              </form>
            </div>

    </section>
  )
}

export default Join