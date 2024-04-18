import React from "react";
import { Link } from "react-router-dom";

const Desc = () => {
  return (
    <>
      <header>
    <h1>Jane Smith</h1>
    <p>Head of Marketing</p>
  </header>
  <main>
     <div className="imgcard">                                                                                    
      <img align="left" src={`${process.env.PUBLIC_URL}/assets/Girl2.jpeg`} alt="Image-1 not found" />
      </div> 
    <div class="profile-container"> 
    </div>
    <div class="info-container"> <section class="about">
        <h2>About</h2>
        <ul>
          <li>Industry: Software</li>
          <li>Age: 31-40</li>
          <li>Location: New York, United States</li>
        </ul>
      </section>
      <section class="job-description">
        <h2>Job Description</h2>
        <p>Manages a team of four marketers, in charge of customer acquisition for a high growth Saas start-up</p>
      </section>
      <section class="goals">
        <h2>Goals</h2>
        <ul>
          <li>Deliver qualified leads to the sales team</li>
          <li>Find new avenues of growth</li>
          <li>Achieve revenue goals</li>
        </ul>
      </section>
      <section class="challenges">
        <h2>Challenges</h2>
        <ul>
          <li>Marketing and sales alignment</li>
          <li>Optimization of current channels</li>
          <li>Measuring ROI</li>
        </ul>
      </section>
    </div>
    <button>Location</button>
  </main>
  <footer>
    <p>&copy; 2024 Jane Smith</p>
  </footer>
    </>
  );
};

export default Desc;
