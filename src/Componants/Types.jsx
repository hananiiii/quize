import React from 'react';
import Picone from "../assets/picone.svg";

const Types = () => {
  return (
 <section className='my-24  '>
      <div className='flex flex-col justify-center'>
         
         <h1 className='font-bold text-3xl text-Orange text-center mb-4'>
           Quizes & Types
        </h1>
        <p className='text-gray-800 font-medium text-base text-center '>
            "Elevate your learning journey with the different types of Quizes we have"
         </p>
        
      </div>
      <div className='lg:w-1/2 my-12'>
         <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-8 lg:max-w-1/2  mx-12 lg:text-start sm:text-center text-center'>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-row gap-4 ' >
                      <span className='object-center text-3xl px-3 text-Orange  '>
                      <ion-icon name="aperture-outline"></ion-icon>
                    </span>
                  
                         <a class="font-bold text-xl text-gray-800 cursor-pointer ">Multiple Choice Quiz</a>
                  </div>
                         <p class="px-8 text-lg font-medium  text-gray-400 mx-9">
                         Users are presented with a question and a list of options. They need to select the correct option from the choices provided.
                         </p>
                        
               </div>
               <div className='flex flex-col gap-2'>
                  <div className='flex flex-row gap-4 ' >
                      <span className='object-center text-3xl px-3 text-Orange  '>
                      <ion-icon name="help-outline"></ion-icon>

                    </span>
                  
                         <a class="font-bold text-xl text-gray-800 cursor-pointer ">True/False Quiz</a>
                  </div>
                         <p class="px-8 text-lg font-medium  text-gray-400 mx-9">
                         Users are given statements, and they need to determine whether each statement is true or false.
                        </p>
                        
               </div>
               <div className='flex flex-col gap-2'>
                  <div className='flex flex-row gap-4 ' >
                      <span className='object-center text-3xl px-3 text-Orange  '>
                        <ion-icon name="calculator-outline"></ion-icon>
                    </span>
                  
                         <a class="font-bold text-xl text-gray-800 cursor-pointer "> Math quiz</a>
                  </div>
                         <p class="px-8 text-lg font-medium  text-gray-400 mx-9">
                    
                         Users are given mathematical problems to solve, such as equations, calculations, or numerical sequences.
                        </p>
                        
               </div>
               <div className='flex flex-col gap-2'>
                  <div className='flex flex-row gap-4 ' >
                      <span className='object-center text-3xl px-3 text-Orange  '>
                      <ion-icon name="language-outline"></ion-icon>

                    </span>
                  
                         <a class="font-bold text-xl text-gray-800 cursor-pointer ">Language Learning Quiz</a>
                  </div>
                         <p class="px-8 text-lg font-medium  text-gray-400 mx-9">
                    
                            Users are tested on their vocabulary, grammar, or language comprehension skills.
                        </p>
                        
               </div>
              
              
            </div>
           <span></span>
           <span></span>
           <span></span>

         </div>
      </div>
      <div className="lg:w-1/2">
                  <img className="lg:ml-[850px] lg:-mt-[650px] ml-auto md:w-[550px] md:h-[500px] w-[350px] h-[400px] rounded-lg lg:block hidden " src={Picone} alt=""/>
               </div>
 </section>
  )
}

export default Types