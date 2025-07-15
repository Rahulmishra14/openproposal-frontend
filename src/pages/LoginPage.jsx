import React from 'react';
import LoginForm from '../components/Accounts/LoginForm';
import { Link } from 'react-router-dom';
import '../components/Accounts/LoginSignup.css';

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="login-box">
          <h2>Login</h2>
          <LoginForm />
          <p className="terms">
            By logging in, you agree to the <a href="#">Terms of Use</a>.
          </p>
          <div className="extras">
            <a href="#">Forgot your password?</a>
            <a href="#">Didn't receive email confirmation?</a>
          </div>
        </div>
        <div className="signup-box">
          <h2>New User?</h2>
          <Link to="/signup">
            <button className="primary-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
