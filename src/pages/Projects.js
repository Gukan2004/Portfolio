import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <h2>🚀 University Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>💬 Chat App</h3>
          <p><strong>Technologies:</strong> Android Studio, Firebase Authentication & Storage</p>
          <p>
            Built a real-time communication app with mobile number authentication using Firebase. 
            Key features include image messaging, user profiles, and secure login.
          </p>
        </div>

        <div className="project-card">
          <h3>🌡 Smart Fan</h3>
          <p><strong>Technologies:</strong> Arduino Uno, ESP32, Motor Shield Uno, DHT11 Sensor</p>
          <p>
            Developed a smart IoT fan system with real-time web-based monitoring for temperature 
            and motor speed using sensors and embedded control logic.
          </p>
        </div>

        <div className="project-card">
          <h3>🔗 Blockchain-based Medical Supply Chain</h3>
          <p><strong>Technologies:</strong> JavaScript, Solidity, Truffle, Vue, Metamask</p>
          <p>
            Designed a decentralized system to securely track medical supplies from source to destination.
            Implemented smart contracts and integrated Web3 functionalities for transparency and trust.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
