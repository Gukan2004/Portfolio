import React from 'react';
import profile from '../assets/profile.png'; // Make sure profile.jpg is placed in src/assets/

function Home() {
  return (
    <div className="home-page">
      <div className="home-intro">
        <img src={profile} alt="Profile" className="profile-image" />
        <div className="home-text">
          <h1>Gukanamashivayan S V</h1>
          <h3>Aspiring AI & Data Science Engineer | Full Stack Developer</h3>
          <p>
            Enthusiastic undergraduate passionate about intelligent systems, mobile apps, and IoT. 
            Experienced in Android development, automation, and blockchain integration. 
            Driven to contribute innovative ideas and scalable tech solutions.
          </p>
          <p>📧 <a href="mailto:gukanshiva39@gmail.com">gukanshiva39@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
