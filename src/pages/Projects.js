import React from 'react';

function Projects() {
  return (
    <div className="projects-page">
      <h2>University Projects</h2>

      <div className="project">
        <h3>Chat App</h3>
        <p><strong>Technologies:</strong> Android Studio, Firebase Authentication & Storage</p>
        <p>
          Built a real-time communication app using mobile number login via Firebase.
          Features include image messaging and profile management.
        </p>
      </div>

      <div className="project">
        <h3>Smart Fan</h3>
        <p><strong>Technologies:</strong> Arduino Uno, ESP32, Motor Shield Uno, DHT11 Sensor</p>
        <p>
          Developed a smart fan system integrated with a web interface to display real-time temperature and motor readings.
        </p>
      </div>

      <div className="project">
        <h3>Blockchain-based Medical Supply Chain</h3>
        <p><strong>Technologies:</strong> JavaScript, Solidity, Truffle, Vue, Metamask</p>
        <p>
          Designed a decentralized system to securely track medical supplies and manage supply-demand efficiently.
          Learned smart contract creation, testing, and Web3 deployment.
        </p>
      </div>
    </div>
  );
}

export default Projects;
