import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/entrepreneurship">Entrepreneurship</Link></li>
        <li><Link to="/new">newPage</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
