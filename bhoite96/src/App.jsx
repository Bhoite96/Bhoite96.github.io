import React from 'react';
import './App.css';

// You might need to import additional assets or components here

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1 align="center">Hi 👋, I'm Akshay Bhoite</h1>
          <h3 align="center">Highly skilled Full Stack Developer...</h3> {/* Continue with your introduction */}

          {/* List of items such as current work, learning, collaboration, projects, etc. */}
          <ul>
            <li>🔭 I’m currently working on creating a system for managing Beneficial Ownership Information...</li>
            {/* Add other list items here */}
          </ul>

          {/* Contact and other information */}
          <p>📫 How to reach me: 96bakshay@gmail.com</p>
          <p>⚡ Fun fact: I balance the precision of engineering with the creativity of an artist...</p>

          <h3 align="left">Connect with me:</h3>
          <p align="left">
            {/* Social Links */}
            {/* Ensure you have the images for these icons stored locally or hosted */}
            <a href="https://linkedin.com/in/bhoiteakshay" target="blank">
              <img align="center" src="path_to_linkedin_icon" alt="bhoiteakshay" height="30" width="40" />
            </a>
            {/* Add other social links here */}
          </p>

          <h3 align="left">Languages and Tools:</h3>
          <p align="left">
            {/* Icons for languages and tools */}
            <img src="path_to_angular_icon" alt="angular" width="40" height="40" />
            {/* Add other icons here */}
          </p>

          {/* GitHub stats images */}
          {/* Ensure you have the correct URLs for these images */}
          <img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=bhoite96&show_icons=true&locale=en&layout=compact" alt="bhoite96" />
          <img align="center" src="https://github-readme-stats.vercel.app/api?username=bhoite96&show_icons=true&locale=en" alt="bhoite96" />
        </header>
      </div>
  );
}

export default App;
