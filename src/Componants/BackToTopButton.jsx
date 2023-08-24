import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the up arrow icon from a library like react-icons

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Listen for scroll events and update the state to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-8 right-8 transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
      <button
        className="bg-Gray text-Orange rounded-full p-2 shadow-md  focus:outline-none"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default BackToTopButton;
