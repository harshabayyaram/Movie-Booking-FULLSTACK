import React from 'react'
import UserMenuBar from './UserMenuBar'
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div>
      <div>
        <UserMenuBar />
      </div>
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>Welcome to our movie booking app! We are passionate about bringing the best cinematic experience to you.</p>
          <p>Our mission is to provide a seamless platform for movie enthusiasts to discover, book, and enjoy their favorite films.</p>
          <p>Feel free to explore our app and make the most of your movie-watching experience!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
