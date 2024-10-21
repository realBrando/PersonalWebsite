import React from 'react';
import profilePic from "../images/24PurdueBGrad82.jpg";
import ProfileCard from '../components/ProfileCard';
import '../components/HomePage.css';
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <div className='info-container'>
      <div>
        <ProfileCard/> {ProfileCard}
        </div>
        <div className='overview-info'>
          <h1>Introduction</h1>
          <h2>My name is Andrew Brandon and I am a Software Engineer based out of Indianapols, Indiana. 
            I graduated from Purdue University in West Lafayette, Indiana in August, 2024 with a bachelor's degree 
            in Computer Science, specializing in Software Engineering, as well as a minor in Management. Currently, 
            I work as a Software Developer at Crowe as part of their Technology, Business and Transformation Consulting 
            group. Feel free to explore the "About" tab for more details on my education, and 
            prior work experience, as well as the "Projects" tab for past projects. </h2>
        </div>
        <Analytics />
    </div>
  );
};

export default Home;