import React, { useState } from 'react';
import '../components/About.css';
import purduePic from '../images/purduelogo3.png'
import crowePic from '../images/Crowe.jpg'
import gullLake from '../images/GullLake.jpg'

const About = () => {
  const [activeTab, setActiveTab] = useState('education'); // Default to 'education' tab

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="tab-content">
            <div className='tab-content-text'>
            <h2>BS in Computer Science - Purdue University</h2>
            <p>- Cumulative GPA: 3.40; Computer Science Major GPA: 3.47</p>
            <p>- Specialization in Software Engineering, Minor in Mangement</p>
            <p>- Semester Honors: Spring 2022, Fall 2022, Spring 2023</p>
            <p>- Courses:<br></br>
            Object Oriented Programming, C Programming, Computer Architecture, Data Structures & Algorithms, Systems Programming, Software Engineering 1, Information Systems, Advanced Algorithms, Operating Systems, Software Testing, Senior Software Engineering Project
            </p>
            <p>- Languages:<br></br>
            C, C++, Java, Python, SQL, Swift, JavaScript
            </p>
            <p>- Tools & Technologies : <br></br>
            React, Node.js, MongoDB, Neo4j, Firebase, XINU, Linux, Shell Scripting, Git
            </p>
            </div>
            <img src= {purduePic} className='Pic'/>
            {/* Add more details about education here */}
          </div>
        );
      case 'experience':
        return (
          <div>
          <div className="tab-content">
            <div className='tab-content-text'>
            <h2>Software Developer</h2>
            <p>- August 2024 - Present</p>
            <p>- Apart of Microsoft Group within Technology, Business and Transformation Consulting</p> 
            <p>- Worked on various internal projects, specifically an internal automated code review Azure DevOps extension leveraging AI utilizing Node.js</p>
            </div>
            <img src={crowePic} className='Pic'></img>
            {/* Add more details about work experience here */}
          </div>
          <div className="tab-content">
            <div className='tab-content-text'>
            <h2>Software Development Intern</h2>
            <p>- June 2023 - August 2023</p>
            <p>- Apart of Microsoft Group within Manufacturing and Supply Chain Consulting</p>
            <p>- Developed custom client enhancements within Dynamics 365 utilizing X++ and C#</p>
            <p>- Apart of internal Microsoft license tracking project, developed a hash table data structure to store and retrieve licenses efficiently for use on licensing report</p>
            </div>
            <img src={crowePic} className='Pic'></img>
            {/* Add more details about work experience here */}
          </div>
          <div className="tab-content">
            <div className='tab-content-text'>
            <h2>Summer Camp Counselor</h2>
            <p>- May 2021 - August 2021, May 2022 - August 2022</p>
            <p>- Counseled boys ranging from 1st grade to High School Seniors</p>
            <p>- Certified in Climbing Wall and Pamper Poll belay, Zipline, Giant Swing and High Adventure Course facilitation</p>
            </div>
            <img src={gullLake} className='GullLakePic'></img>
            {/* Add more details about work experience here */}
          </div>
          </div>
        );
      case 'skills':
        return (
          <div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>C</h2>
              <p>- Numerous courses throughout Purdue career, namely C Programming, Systems Programming and Operating Systems</p>
              <p>- Systems Programming projects: Custom Malloc lilbrary, Shelll interpreter, Web Server</p>
              <p>- Operating Systems Projects: Memory Management library, Multi-Threaded Proecessing</p>
              </div>
              <img src= {purduePic} className='Pic'/>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>C++</h2>
              <p>Associated with: </p>
              </div>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>Java</h2>
              <p>Associated with: </p>
              </div>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>Python</h2>
              <p>Associated with: </p>
              </div>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>JavaScript</h2>
              <p>Associated with: </p>
              </div>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>SQL</h2>
              <p>Associated with: </p>
              </div>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>Swift</h2>
              <p>Associated with: </p>
              </div>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>C#</h2>
              <p>Associated with: </p>
              </div>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>X++</h2>
              <p>Associated with: </p>
              </div>
            </div>

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
