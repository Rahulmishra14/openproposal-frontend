import React from 'react';
import Header from './components/Header/Header';
import SubmissionList from './components/Submission/SubmissionList';
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './components/Profile/ProfilePage';
import VenueDetailPage from './pages/VenueDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/venue/:id" element={<VenueDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
