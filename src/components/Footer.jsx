import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <p>
      &copy; Maintenance Tracker
      &nbsp; &nbsp;
      <Link to="/about">About Us</Link>
    </p>
  </footer>
);


export default Footer;
