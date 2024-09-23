import React from 'react';
import './ProfileCard.css'; // Import your CSS for styling
import profilePic from '../images/24PurdueBGrad82.jpg';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src= {profilePic} alt="Profile" className="profile-image" />
      <div className="profile-info">
      <h2>Andrew Brandon</h2>
      <h3>Software Engineer</h3>
      </div>
    </div>
  );
};

export default ProfileCard;