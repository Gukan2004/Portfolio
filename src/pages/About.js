import React from 'react';
import './About.css';


function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I’m <strong>Gukanamashivayan S V</strong>, an aspiring AI & Data Science Engineer and Full Stack Developer passionate about building intelligent systems, mobile apps, and IoT solutions.
      </p>
      <p>
        I have experience in Android development, automation, and blockchain projects, working across frontend and backend technologies.
      </p>
      <p>
        I value innovation, scalability, and user-centric design, and I’m eager to contribute to impactful tech solutions while continuously learning new technologies.
      </p>
      <p>
        <strong>Education:</strong> B.Tech in Artificial Intelligence and Data Science, Anna University Regional Campus, Coimbatore (2022–2026)
      </p>

      <div className="social-icons">
        {/* Replace '#' with your actual links */}
        <a href="mailto:gukanshiva39@gmail.com" aria-label="Email">📧</a>
        <a href="https://github.com/Gukan2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐙</a>
        <a href="https://www.linkedin.com/in/gukanamashivayansv" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</a>
      </div>
    </section>
  );
}

export default About;
