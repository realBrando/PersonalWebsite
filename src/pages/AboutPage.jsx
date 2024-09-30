import React, { useState } from 'react';
import '../components/About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('education'); // Default to 'education' tab

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="tab-content">
            <h2>Education</h2>
            <p>Bachelor of Science in Computer Science, Purdue University, 2024</p>
            {/* Add more details about education here */}
          </div>
        );
      case 'experience':
        return (
          <div className="tab-content">
            <h2>Work Experience</h2>
            <p>Software Developer at Crowe, Technology, Business, and Transformation Consulting</p>
            {/* Add more details about work experience here */}
          </div>
        );
      case 'skills':
        return (
          <div className="tab-content">
            <h2>Skills</h2>
            <p>JavaScript, React, Node.js, Python, SQL</p>
            {/* Add more skills here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="tabs">
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => setActiveTab('experience')}
        >
          Work Experience
        </button>
        <button
          className={activeTab === 'skills' ? 'active' : ''}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </div>
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default About;
