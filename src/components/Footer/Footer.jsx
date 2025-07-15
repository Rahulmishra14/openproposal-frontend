import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="or-footer">
      <div className="or-container">
        <nav className="or-footer-nav">
          <a href="#">Contact</a>
          <a href="#">Sponsors</a>
          <a href="#">FAQ</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </nav>
        <p className="or-footer-copy">© 2025 OpenReview</p>
      </div>
    </footer>
  );
}
