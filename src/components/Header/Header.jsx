import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('user');   // If you store user data
    localStorage.removeItem('token');  // If you store token
    navigate('/');
  };

  return (
    <header className="or-header">
      <div className="or-container">
        <div className="or-logo">OpenReview</div>

        <nav className="or-nav">
          <a href="#">About</a>
          <a href="#">Hosting a Venue</a>
          <a href="#">All Venues</a>
        </nav>

        <div className="or-auth">
          {user ? (
            <>
              <Link to="/profile">
                <button className="or-btn or-profile">Profile</button>
              </Link>
              <button onClick={handleLogout} className="or-btn or-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button className="or-btn or-signup">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="or-btn or-login">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
