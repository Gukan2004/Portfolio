import React from 'react';
import profile from '../assets/profile.png';
import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [greeting, setGreeting] = useState('');

  // Dynamic greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <main className="home-page" aria-label="Introduction section">
      <section className="home-intro">
        <img
          src={profile}
          alt="Portrait of Gukanamashivayan S V"
          className="profile-image"
          loading="lazy"
          width="200"
          height="200"
        />
        <article className="home-text">
          <h1 tabIndex="0" aria-live="polite">{greeting}, I’m Gukanamashivayan S V</h1>
          <h2>Aspiring AI & Data Science Engineer | Full Stack Developer</h2>
          <p>
            Enthusiastic undergraduate passionate about intelligent systems, mobile apps, and IoT.
            Experienced in Android development, automation, and blockchain integration.
            Driven to contribute innovative ideas and scalable tech solutions.
          </p>
          <p>
            📧{' '}
            <a href="mailto:gukanshiva39@gmail.com" aria-label="Send email to Gukanamashivayan">
              gukanshiva39@gmail.com
            </a>
          </p>
        </article>
      </section>
    </main>
  );
}

export default Home;
