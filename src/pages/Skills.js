import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-page">
      <h2>🛠 Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>💻 Programming Languages</h3>
          <ul>
            <li>🅲 C</li>
            <li>🐍 Python</li>
            <li>🟨 JavaScript</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>🗄 Databases</h3>
          <ul>
            <li>🐘 PostgreSQL</li>
            <li>🍃 MongoDB</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>⚛️ Frameworks</h3>
          <ul>
            <li>⚛️ React</li>
            <li>🚂 Express</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>🛠 Tools</h3>
          <ul>
            <li>🎨 Blender</li>
            <li>🎮 Unity</li>
            <li>🖌 Figma</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>📦 Others</h3>
          <ul>
            <li>🔧 Git</li>
            <li>💻 Google Colab</li>
            <li>📒 Jupyter Notebook</li>
            <li>⌨️ Touch Typing</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>🌟 Soft Skills</h3>
          <ul>
            <li>🧠 Analytical Thinking</li>
            <li>💬 Technical Communication</li>
            <li>🤝 Team Collaboration</li>
            <li>🎯 Adaptability</li>
            <li>📈 Continuous Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
