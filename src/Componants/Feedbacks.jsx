import React from 'react'
import Ppone from "../assets/ppone.jpg"
import Ppthree from "../assets/pptwo.jpg" 
import Pptwo from "../assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
 

const Data =[
    {
        name :"Sara Smith" ,
        image : Ppone ,
        text : "  ThinkNTest has made learning so enjoyable and interactive. The variety of quizzes available keeps me engaged and motivated to explore new topics"
    },
    {
        name :"William James " ,
        image : Pptwo ,
        text : "    I love how ThinkNTest has helped me test my knowledge while having fun. The platform is user-friendly and offers a great learning experience.",
    },
    {
        name :"Elina Jackson" ,
        image : Ppthree ,
        text : " The quizzes on ThinkNTest are a great way to challenge myself and improve my knowledge. The feedback and scores motivate me to keep learning"
    }
]
const Feedbacks = () => {
  return (
    <section className='lg:my-32 -my-16'>
         <div className='flex flex-col justify-center'>
         
           <h1 className='font-bold text-3xl text-Orange text-center mb-4'>
               Feedbacks
           </h1>
           <p className='text-gray-800 font-medium text-base text-center '>
             What did our users say about ThinkNTry
           </p>
        
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-0 gap-8 my-12 px-8'>
            {Data.map((feedback ,index)=>(
                 <div key={index} className=' px-8 py-8 mx-auto flex justify-center '>
                    <div className='flex flex-col gap-4'>
                      <div className='flex justify-center  '>
                        <img src={feedback.image} alt={`Feedback by ${feedback.name}`} className=' w-16 h-16 rounded-full'/>
                      </div>
                      <h3 className='font-bold text-xl text-gray-800  flex justify-center '>{feedback.name}</h3>
                      <span className=' text-center h-1 w-64 bg-Orange rounded mx-auto mt-1 mb-1'></span>
                      <p className='text-lg text-gray-400 font-meduim text-center'>
                        {feedback.text}
                        </p>
                    </div>  
                 </div>
                
                ))}
         </div>
    </section>
  )
}

export default Feedbacks