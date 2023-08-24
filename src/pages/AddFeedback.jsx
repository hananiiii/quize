import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Componants/Header';

const AddFeedback = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [showRate, setShowRate] = useState(false);
  const [rating, setRating] = useState(0);
  const [showGladMessage, setShowGladMessage] = useState(false);
  const [showSorryMessage, setShowSorryMessage] = useState(false);
  const [userComment, setUserComment] = useState('');

  const handleYesClick = () => {
    setShowFeedback(true);
  };

  const handleHappyClick = () => {
    setShowRate(true);
  };

  const handleSadClick = () => {
    setShowSorryMessage(true);
  };

  const handleRating = (value) => {
    setRating(value);
    if (value >= 5) {
      setShowGladMessage(true);
      setShowRate(false);
    } else {
      setShowSorryMessage(true);
      setShowRate(false);
    }
  };

  return (
    <section>
      <Header />
      <div className='my-[170px] flex justify-center '>
        {showFeedback ? (
          showRate ? (
            <div className='bg-white border border-Orange text-Orange p-8 space-y-6 shadow-lg rounded-xl max-w-xl  md:max-w-xl'>
              <h1 className='text-center font-bold text-2xl text-gray-800'>
                How much did you enjoy the quizzes?
              </h1>
              <ul className='flex flex-row gap-2'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleRating(value)}
                    className={`border rounded hover:bg-Orange hover:text-white px-4 py-3 text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300`}
                  >
                    {value}
                  </button>
                ))}
              </ul>
            </div>
          ) : showGladMessage ? (
            <div className='bg-white border border-Orange text-Orange p-8 space-y-6 shadow-lg rounded-xl max-w-md md:max-w-xl'>
              <h1 className='text-center font-bold text-2xl text-gray-800'>
                We're glad you enjoyed the quizzes!
              </h1>
              <p>Feel free to share any additional comments:</p>
              <textarea
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                className='border rounded p-2 w-full'
                placeholder='Add your comments here...'
              />
            </div>
          ) : showSorryMessage ? (
            <div className='bg-white border border-Orange text-Orange p-8 space-y-6 shadow-lg rounded-xl max-w-md md:max-w-xl'>
              <h1 className='text-center font-bold text-2xl text-gray-800'>
                We're sorry you didn't enjoy the quizzes as much.
              </h1>
              <p>Do you have any suggestions for improvement?</p>
              <textarea
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                className='border rounded p-2 w-full '
                placeholder='Add your suggestions here...'
              />
            </div>
          ) : (
            <div className='bg-white border border-Orange text-Orange p-8 space-y-6 shadow-lg rounded-xl max-w-md md:max-w-xl'>
              <h1 className='text-center font-bold text-2xl text-gray-800'>
                How much did you enjoy the quizzes?
              </h1>
              <ul className='flex justify-center gap-8'>
                <button
                  onClick={handleHappyClick}
                  className=' border rounded hover:bg-Orange hover:text-white px-9 py-5 hover:transform hover:scale-110 transition-transform duration-300'
                >
                  😃
                </button>
                <button
                  onClick={handleSadClick}
                  className='border rounded hover:bg-Orange hover:text-white px-9 py-5 hover:transform hover:scale-110 transition-transform duration-300'
                >
                  😞
                </button>
              </ul>
            </div>
          )
        ) : (
          <div className='bg-white border border-Orange text-Orange p-8 space-y-6 shadow-lg rounded-xl max-w-md md:max-w-lg'>
            <h1 className='text-center font-bold text-2xl text-gray-800'>
              Are you up to answer these questions for feedback?
            </h1>
            <ul>
              <li className='flex justify-center gap-8'>
                <button
                  onClick={handleYesClick}
                  className='border rounded hover:bg-Orange hover:text-white px-9 py-5 text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-md transition-transform duration-300'
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
    </section>
  );
};

export default AddFeedback;
