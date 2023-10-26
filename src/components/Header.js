import React from 'react';
import profileImage from './sk.jpg';


const Header = () => {
  return (
    <header>
      <img src={profileImage} alt="Profile" /> {/* Add a class for styling */}
      <h1>Uthish Shiva Kaarthik R</h1>
      <p>Fullstack Developer</p>
    </header>
  );
}

export default Header;