import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './ProfilePage.css';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Please log in to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-card">
        <div className="profile-row">
          <span className="label">Full Name:</span>
          <span className="value">{user.first_name} {user.last_name}</span>
        </div>
        <div className="profile-row">
          <span className="label">Email:</span>
          <span className="value">{user.email}</span>
        </div>
      </div>
    </div>
  );
}
