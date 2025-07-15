import React from 'react';
import SignupForm from '../components/Accounts/SignupForm';
import '../components/Accounts/LoginSignup.css';

export default function SignupPage() {
  return (
    <div className="auth-page">
      <div className="signup-form-container">
        <h2>Sign Up for OpenReview</h2>
        <SignupForm />
      </div>
    </div>
  );
}
