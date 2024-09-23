// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Import a CSS file for layout styles

const Layout = ({ children }) => {
  return (
    <div>
      {/* Top Bar */}
      <header className="top-bar">
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="main-content">
        {children} {/* This will render the page-specific content */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Andrew Brandon</p>
      </footer>
    </div>
  );
};

export default Layout;