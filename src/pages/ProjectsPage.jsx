import React from 'react';
import '../components/Projects.css';
import factsream from '../images/Factsream.png'
import sportify from '../images/Sportify.png'
import sqlite from '../images/sqlite.png'
import { Analytics } from "@vercel/analytics/react"

const Projects = () => {
  return (
    <div className='about-container'>
      <h1>Projects</h1>
        <div className='content-area'>
          <div className='tab-content'>
            <div className='tab-content-text'>
              <h2>Factstream News</h2>
              <p>- News Aggregator Website that puts an emphasis on high quality journalism and diverse perspectives</p>
              <p>- Developed with a team of 4 developers leveraging the FERN stack - Firebase, Express, React.js and Node.js </p>
              <p>- Factstream pulls articles from a variety of news sources, scans the content and generates a quality score, and eliminates articles with a low quality score</p>
              <p>- Articles are sorted into categories, allowing users to view all articles, or a variety of pages sorted by topics such as politis, science, sports, etc.</p>
              <p>- Users can also sort by relevance and popularity, relevance being a score combining popularity and recency</p>
              <p>- Variety of other features such as commenting on articles, liking articles, saving articles, voting in polls, user password recovery admin capabilities, and more</p>
            </div>
            <img src= {factsream} className='Pic'/>
          </div>
          <div className='tab-content'>
            <div className='tab-content-text'>
              <h2>Sportify</h2>
              <p>- iOS social media app that connects people through the avenue of recreational sports</p>
              <p>- Developed with a team of 4 developers leveraging Swift and Firebase</p>
              <p>- Sportify allows users to connect with other users, make friends, set preferences, create and join events</p>
              <p>- Users can create a public or private event of a certain sport, set a location, date, time, and invite other users</p>
              <p>- Users can search for and filter events by location, date, time, sport, as well as message, friend and block other users</p>
              <p>- Sportify also notifies users whenever any of these things happen, all in an effort to connect people via recreational sports activities</p>
            </div>
            <img src= {sportify} className='Pic'/>
          </div>
          <div className='tab-content'>
            <div className='tab-content-text'>
              <h2>OrgChart</h2>
              <p>- Database Management web application intended for student organizations</p>
              <p>- Developed individually leveraging Python, Flask, SQLAlchemy and SQLite</p>
              <p>- Allows users to add, edit and delete members for an organization</p>
              <p>- Stores various member information such as name, contact information and position within the organization</p>
              <p>- Gives users the ability to generate a user report, which can be filtered on a variety of data fields</p>
              <p>- Developed as part of Information Systems course at Purdue (CS 348)</p>
            </div>
            <img src= {sqlite} className='Pic'/>
          </div>
        </div>
    </div>
  );
};

export default Projects;