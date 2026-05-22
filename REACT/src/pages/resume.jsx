import { useState } from 'react';
import './resume.css'; 
import myResume from '../assets/resume.png';

function Resume() {
  return (
    <div className="resume-wrapper">
      <div className="resume-outline">
        <h1 className="resume-title">My Resume</h1>
        <div className="resume-hr"></div>
      </div>

      <div className="resume-container">
        <div className="resume-card">
          
          <div className="resume-image-frame">
            <img src={myResume} alt="My Professional Resume" className="resume-page-img" />
          </div>
          
          <a href={myResume} download="My_Resume.png" className="resume-download-btn">
            Download Resume PDF
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Resume;