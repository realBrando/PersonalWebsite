import React from 'react';
import './ProfileCard.css'; 
import profilePic from '../images/24PurdueBGrad82.jpg';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src= {profilePic} alt="Profile" className="profile-image" />
      <div className="profile-info">
      <h2>Andrew Brandon</h2>
      <h3>Software Engineer</h3>
      <h4>Hello and welcome to my personal site! Here you can find information about my education, professional background, personal projects and experiences. Feel free to contact me via any of the options on the contact page, thanks for visiting!</h4>
      </div>
    </div>
  );
};

export default ProfileCard;