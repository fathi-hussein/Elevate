import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand info */}
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo">
              Elev<span>ate</span>
            </Link>
            <p>
              Your curated learning and career discovery hub for modern software development and tech skills.
            </p>
          </div>

          {/* Column 1: Navigation */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore Hub</Link>
            <Link to="/about">About Us</Link>
          </div>

          {/* Column 2: Domains */}
          <div className="footer-column">
            <h4>Skill Domains</h4>
            <Link to="/explore">Web Development</Link>
            <Link to="/explore">Cybersecurity</Link>
            <Link to="/explore">Artificial Intelligence</Link>
            <Link to="/explore">Data Science</Link>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <Link to="/explore">Documentation</Link>
            <Link to="/explore">Free Courses</Link>
            <Link to="/explore">Bootcamps & Guides</Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Elevate Platform. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}