import React from 'react'
import Header from '../components/Header';
import Steps from '../components/Steps';
import Desciption from '../components/Desciption';
import Testimonials from '../components/Testimonials';
import GenerateBtn from '../components/GenerateBtn';

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Desciption/>
  <Testimonials />
  <GenerateBtn/>


    </div>
  )
};

export default Home;