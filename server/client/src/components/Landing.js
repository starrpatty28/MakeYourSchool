import React from 'react';
import Highschool from '../images/Highschool.jpg'; 

const Landing = () => {
  return (
    <div style={{ textAlign: 'center'}}>
      <h1>
        Make Your School
      </h1>
      <h5>Collect feedback from your students to create a safe and better place to learn</h5>
      <img src={Highschool} /> 
    </div>
  )
}

export default Landing;
