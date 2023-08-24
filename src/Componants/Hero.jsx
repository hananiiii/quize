import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section >
      <div className='flex flex-col gap-4 justify-center mx-auto my-20 text-center lg:w-1/2'>
        <h3 className='text-5xl font-bold text-gray-800 w-full'>
          Welcome to <span className='text-Orange'>ThinkNTest -</span>
          <Typewriter
            options={{
              strings: [
                'Test your knowledge!',
                'Have fun learning!',
                'Challenge yourself!',
                'Expand your horizons!'
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className='font-normal text-Orange text-base'>
          "Welcome to ThinkNTest! Dive into a world of quizzes and test your knowledge. Have fun and learn along the way. Enjoy the journey!"
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-0 gap-8 '>
        <div className=' w-[400px] border border-gray-400 mx-auto rounded-xl px-8 py-8 cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:transform duration-200 transition-transform '>
            <h3 className=' flex justify-center font-bold text-xl text-gray-800 mb-4'>Different Quiz Types</h3>
            <p className='text-lg font-medium text-gray-400 text-center'>
                Offering various quiz types, such as multiple-choice, true/false, fill-in-the-blank, and more, will cater to different learning and engagement preferences.
            </p>
        </div>
        <div className=' w-[400px] border border-gray-400 mx-auto rounded-xl px-8 py-8 cursor-pointer  hover:shadow-xl hover:-translate-y-2 hover:transform duration-200 transition-transform'>
            <h3  className=' flex justify-center  font-bold text-xl text-gray-800 mb-4'> Scoring & Timer</h3>
            <p  className='text-lg font-medium text-gray-400 text-center'>
            Displaying scores at the end of quizzes gives users a sense of accomplishment and allows them to compare their performance with others.
            </p>
        </div>
        <div className=' w-[400px] border border-gray-400 mx-auto rounded-xl px-8 py-8 cursor-pointer  hover:shadow-xl hover:-translate-y-2 hover:transform duration-200 transition-transform'>
            <h3  className=' flex justify-center  font-bold text-xl text-gray-800 mb-4'>Create Quiz Form</h3>
            <p  className='text-lg font-medium text-gray-400 text-center'>
            allows users to input quiz questions, add choices, correct answers, and other relevant information at the end of the Quiz
            </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
