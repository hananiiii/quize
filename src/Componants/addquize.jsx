import React, { useState } from 'react';
import Un from '../assets/un.svg'
const AddQuize = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);

  const handleOptionTextChange = (index, newText) => {
    const updatedOptions = [...options];
    updatedOptions[index].text = newText;
    setOptions(updatedOptions);
  };

  const handleOptionCorrectChange = (index, isCorrect) => {
    const updatedOptions = options.map((option, i) =>
      index === i ? { ...option, isCorrect } : { ...option, isCorrect: false }
    );
    setOptions(updatedOptions);
  };

  const handleSubmit = () => {
   
    console.log('Question:', question);
    console.log('Options:', options);
  };

  return (
    <section className='my-24  '>
        <h1 className='font-bold text-2xl text-gray-800 text-center mb-2'>Thank you for finishing the quize</h1>
    <div className=' lg:w-1/2 lg:ml-12 flex flex-col gap-6 items-center'>
      
      <div className='flex flex-row gap-8 mt-12 lg:w-[400px] sm:w-[400px] w-[300px]'>
        <input
          className='text-gray-400 font-normal border border-Orange px-8 py-3 w-1/2'
          placeholder='enter your score'
        />
        <input
          className='text-gray-400 font-normal border border-Orange px-8 py-3 w-1/2'
          placeholder='enter your timer'
        />
      </div>
      <div className='flex flex-col gap-6'>
        <input
          placeholder='Enter your Quiz question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className='lg:w-[400px] sm:w-[400px] w-[300px] leading-7 text-sm font-normal text-gray-400 border border-Orange px-8 py-3'
        />
        {options.map((option, index) => (
          <div key={index}>
            <input
              placeholder={`Option ${index + 1}`}
              value={option.text}
              onChange={(e) => handleOptionTextChange(index, e.target.value)}
              className='lg:w-[270px] sm:w-[270px] w-[170px] leading-7 text-sm font-normal text-gray-400 border border-Orange px-8 py-3'
            />
            <label>
              <input
                type='checkbox'
                checked={option.isCorrect}
                onChange={() => handleOptionCorrectChange(index, !option.isCorrect)}
                className='ml-10 mr-2'
              />
              Is Correct
            </label>
          </div>
        ))}
        <button
          className='text-white bg-Orange border-0 py-2 px-6 focus:outline-none rounded text-lg'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
    <div className='lg:w-1/2 lg:block hidden'>
    <img className="lg:ml-[750px] lg:-mt-[520px] ml-auto md:w-[550px] md:h-[500px] w-[350px] h-[400px] rounded-lg lg:block hidden " src={Un} alt=""/>
    </div>
    
    </section>
  );
};

export default AddQuize;
