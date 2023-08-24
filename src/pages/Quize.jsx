import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Componants/Headertwo'
import Timer from '../Componants/Timer';
import AddQuize from '../Componants/addquize';

export default function Quize() {
    const questions =[
        {
           question :' if a right triangle has legs of lengths 7 units and 24 units, what is the length of its hypotenuse?',
           answers :[
                { answer :'31 units ' ,isCorrect : false },
                { answer :'25 units ' ,isCorrect : false },
                { answer :'17 units ' ,isCorrect : true },
                { answer :'29 units ' ,isCorrect : false },
           ]
        },
        {
            question :'What is the result of 25 *0.08?',
            answers :[
                { answer :'2.5 ' ,isCorrect : true },
                { answer :' 16' ,isCorrect : false },
                { answer :'3 ' ,isCorrect : false },
                { answer :'10.5 ' ,isCorrect : false },
            ]

        },
        {
            question :'Identify the correct usage of the subjunctive mood:',
            answers :[
                { answer :'If I was you, I would do the same. ' ,isCorrect : false },
                { answer :' If I were you, I would do the same.' ,isCorrect : true },
                { answer :'If I am you, I would do the same. ' ,isCorrect : false },
                { answer :'If I be you, I would do the same. ' ,isCorrect : false },
            ]

        },
        {
            question :'Choose the correct word to complete the analogy: Book is to Reading as Fork is to...',
            answers :[
                { answer :' Knife' ,isCorrect : false },
                { answer :'Spoon ' ,isCorrect : false },
                { answer :'Eating ' ,isCorrect : true },
                { answer :'Cooking ' ,isCorrect : false },
             
            ]

        },
        {
            question :'What is the meaning of the word "obfuscate"?',
            answers :[
                { answer :'To clarify' ,isCorrect : false },
                { answer :'To confuse or bewilder ' ,isCorrect : true },
                { answer :'To organize' ,isCorrect : false },
                { answer :'To summarize' ,isCorrect : false },
            ]

        },
        {
            question :'What is the next prime number after 29?',
            answers :[
                { answer :'31  ' ,isCorrect : true },
                { answer :'33  ' ,isCorrect : false },
                { answer :'30  ' ,isCorrect : false },
                { answer :'37  ' ,isCorrect : false },
            ]

        },
        {
            question :'What is the next term in the arithmetic sequence: 2, 6, 10, 14, ...?',
            answers :[
                { answer :' 1824' ,isCorrect : false },
                { answer :'16 ' ,isCorrect : false },
                { answer :'20 ' ,isCorrect : false },
                { answer :'18 ' ,isCorrect : true },
            ]

        },
        {
            question :'What is the value of 7!/5!?',
            answers :[
                { answer :'35  ' ,isCorrect : false },
                { answer :'14  ' ,isCorrect : true },
                { answer :'720  ' ,isCorrect : false },
                { answer :'120  ' ,isCorrect : false },
            ]

        },
        {
            question :'What is the term for a word that imitates the sound it represents, such as "buzz" or "clang"?',
            answers :[
                { answer :'Alliteration ' ,isCorrect : false },
                { answer :'Onomatopoeia ' ,isCorrect : true },
                { answer :'Metaphor ' ,isCorrect : false },
                { answer :'Hyperbole ' ,isCorrect : false },
            ]

        },
        {
            question :'If a car travels at a speed of 60 kilometers per hour for 3 hours, how far does it travel?',
            answers :[
                { answer :'120km ' ,isCorrect : false },
                { answer :'180km ' ,isCorrect : true },
                { answer :'240km ' ,isCorrect : false },
                { answer :'360km ' ,isCorrect : false },
            ]

        },
    ]
     const [currentQuestion , setCurretQuestion] =useState(0);
     const [showScore ,setshowScore] =useState(false);
     const [score,setScore] =useState(0);
     const [isQuizStarted, setIsQuizStarted] = useState(false);
      const handleAnswerButtononClick =(isCorrect) =>{
        if(isCorrect===true){
            setScore(score+1)
        }
        const nextQuestion =currentQuestion +1 ;
        if (nextQuestion < questions.length){
            setCurretQuestion(nextQuestion)
        } else {
          
            setshowScore(true)
        }
        
      }
    
      
        return (
          <section>
            <Header />
            <div className=' flex justify-center lg:my-[40px] sm:my-[40px] my-[40px] '>

              {isQuizStarted ? (
                <div className=' flex flex-row  gap-44 items-center'> 
                 <div className=' lg:block hidden  my-[160px] '>
                   <Timer/>
                </div>
                <div id='quizes' className='bg-white   border border-Orange text-Orange p-8 space-y-6 shadow-lg rounded-xl max-w-sm md:max-w-xl sm:max-w-md'>
                  {showScore ? (
                    <div className='question-section my-[170px] '>
                      <span className='bg-white  border border-Orange p-8 space-y-6 shadow-lg rounded-xl max-w-sm md:max-w-xl sm:max-w-xl text-xl font-bold text-gray-800'>you scored {score} out of {questions.length}</span>
                    </div>
                  ) : (
                    <>
                      <div className='question-count'>
                        <span className='font-bold text-2xl text-gray-800 ' style={{fontSize: '24px', color: '#2D3748' }}>Question {currentQuestion + 1}</span>/{questions.length}
                      </div>
                      <div className='question-text font-bold text-xl text-gray-800  leading-16 text-center py-4'>{questions[currentQuestion].question}</div>
                      <div className='answer-section flex flex-col gap-8  '>
                        {questions[currentQuestion].answers.map((answer) => (
                          <button className='border border-gray-800 hover:bg-Orange hover:text-white hover:border-none py-3 text-Orange font-bold md:text-xl text-lg' onClick={() => handleAnswerButtononClick(answer.isCorrect)}>
                            {answer.answer}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
               
                </div>
              ) : (
                <div
                  id='question'
                  className='bg-white my-[130px] border border-Orange text-Orange p-8 space-y-6 shadow-lg rounded-xl max-w-md md:max-w-xl'
                >
                  <h1 className='text-center font-bold text-2xl text-gray-800'>
                    Are you Ready for the quiz?
                  </h1>
                  <ul>
                    <li className='flex justify-center gap-8'>
                      <button
                        className='border rounded hover:bg-Orange hover:text-white px-9 py-5 text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300'
                        onClick={() => setIsQuizStarted(true)} // Start the quiz when clicked
                      >
                        Yes
                      </button>
                      <Link to='/Home'>
                        <button
                          className='border rounded hover:bg-Orange hover:text-white px-9 py-5 text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300'
                        >
                          No
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {showScore && <AddQuize />}
          </section>
        );
      }
      


