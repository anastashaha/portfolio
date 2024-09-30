import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

let about_section = {
  p1: "Hi! I'm Anastasha!",
  p2: "I grew up in the beautiful countries of Myanmar and Indonesia. I’m currently pursuing a Master of Science in Design at Stanford University. I’m working on bringing culture-informed, purpose-driven education to Indonesia and exploring the ethical use of emerging technologies to support this. I have big hopes and bigger love for my corner of the world!",
  p3: "Before this, I spent a few years as a user-facing engineer at CodeSignal, an ed-tech startup, after graduating from UC Berkeley with a Data Science degree.",
  p4: "In quiet, solitary hours, I take care of my younger self by making music or painting with a favourite cartoon droning on in the background to keep me company. Constant creation is my medicine. :-)",
  p5: "I’m extremely verbose. Wanna chat? argunawan@stanford.edu"
}


function About() {
  return (
    <div className="about-container">
      <Link to="/projects" className="background-link"></Link>
    </div>

    // <div className="project-container">
    //     <div className="half-grid">
    //       <div className="left-container">
    //         <p>{about_section.p1}</p>
    //         <p>{about_section.p2}</p>
    //         <p>{about_section.p3}</p>
    //         <p>{about_section.p4}</p>
    //         <p>{about_section.p5}</p>
    //       </div>
    //       <div className="right-container"><img src={picofme} alt="Picture of Anastasha smiling and holding her batik-patterned skirt out"/></div>    
            
    //   </div>
    // </div>
  );
}

export default About;
