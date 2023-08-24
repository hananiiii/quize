import React from 'react';

import Header from '../Componants/Header.jsx';
import Hero from '../Componants/Hero.jsx';
import Types from '../Componants/Types.jsx';
import Feedbacks from '../Componants/Feedbacks.jsx';
import Footer from '../Componants/Footer.jsx';
import BackToTopButton from '../Componants/BackToTopButton.jsx';


const Home = () => {
  return (
    <>
    
   <Header />
   <Hero/>
   <Types/>
   <Feedbacks/>
   <Footer/>
   <BackToTopButton/>
    </>
  )
}

export default Home