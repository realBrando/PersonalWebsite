import React, { useState } from 'react';
import '../components/About.css';
import purduePic from '../images/purduelogo3.png'
import crowePic from '../images/Crowe.jpg'
import gullLake from '../images/GullLake.jpg'
import factsream from '../images/Factsream.png'
import sportify from '../images/Sportify.png'

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
            <p>- Performed data transformation for Integrated Manufacturing Analytics team leveraging SQL</p>
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
        case 'leadership':
          return (
            <div className="tab-content">
              <div className='tab-content-text'>
              </div>
              <img src= {purduePic} className='Pic'/>
              {/* Add more details about education here */}
            </div>
          );
      case 'skills':
        return (
          <div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>C</h2>
              <p>- Utilized in numerous courses throughout Purdue career, namely C Programming, Systems Programming and Operating Systems</p>
              <p>- Systems Programming Projects: Custom Malloc lilbrary, Shelll interpreter, Web Server</p>
              <p>- Operating Systems Projects: Memory Management library, Multi-Threaded Proecessing</p>
              </div>
              <img src= {purduePic} className='Pic'/>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>Java</h2>
              <p>- Utilized in several courses throughout Purdue career, namely Object Oriented Programming, Data Structures & Algorithms</p>
              <p>- Object Oriented Programing: Student and Teacher Discussion Board utilizing java swing</p>
              <p>- Data Structures & Algorithms: Hash Table using both linear probing and seperate chaining, Graph algorithms utilizing BFS, DFS, etc.</p>
              </div>
              <img src= {purduePic} className='Pic'/>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>Python</h2>
              <p>- Utilized in multiple ways through Purdue Career, namely Software Testing</p>
              <p>- Software Testing Projects: Blackbox testing, Graybox fuzzing</p>
              </div>
              <img src= {purduePic} className='Pic'/>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>JavaScript</h2>
              <p>- Utilized as part of Senior Software Engineering Project at Purdue, as well as this site!</p>
              <p>- Developed Factstream News, a news Aggregator emphasizing quality journalism and diverse perspectives</p>
              <p>- See projects tab for more info on Factstream</p>
              </div>
              <img src= {factsream} className='Pic'/>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>SQL</h2>
              <p>- Utilized in both Academic Career at Purdue & Professional Career at Crowe</p>
              <p>- Purdue: Utilzed SQL in Information Systems course, culminating in personal db website</p>
              <p>- Crowe: Data transformation work as part of the Integrated Manufacturing Analytics (IMA) Team</p>
              </div>
              <div className="image-container">
                <img src= {purduePic} className='Pic'/>
                <img src= {crowePic} className='Pic'/>
              </div>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>Swift</h2>
              <p>- Utilized in Software Engineering 1 Course at Purdue</p>
              <p>- Developed Sportify, an iOS social media app for organizing recreational sports</p>
              <p>- See the projects tab for more information on Sportify</p>
              </div>
              <img src= {sportify} className='Pic'/>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>C#</h2>
              <p>- Utilized in Professional Career at Crowe</p>
              <p>- Wrote best practice rules for Dynamics 365 developers</p>
              <p>- Leveraged a sweeper class to visit and analyze nodes of the Abstract Syntax Tree</p>
              </div>
              <img src= {crowePic} className='Pic'/>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>X++</h2>
              <p>- Utilzed in Professional Career at Crowe</p>
              <p>- Developed custom client enhacements within Dynamics 365 Framework</p>
              <p>- Apart of internal license reporting project, created & utilized hash map structure for efficient license storage & retrieval</p>
              </div>
              <img src= {crowePic} className='Pic'/>
            </div>
            <div className="tab-content">
              <div className='tab-content-text'>
              <h2>C++</h2>
              <p>- Utilized in Purdue Career as well as pre college experience</p>
              <p>- Developed various projects apart of Object Oriented Programming at Purdue</p>
              <p>- First language learned in high school</p>
              </div>
              <img src= {purduePic} className='Pic'/>
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
          className={activeTab === 'leadership' ? 'active' : ''}
          onClick={() => setActiveTab('leadership')}
        >
          Leadership Experience
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
