import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-header">
        <div className="logo">
          <span className="logo-icon">🎯</span>
          <h1>TriviaMaster</h1>
        </div>
        <div className="header-buttons">
          <button onClick={() => navigate('/login')} className="login-btn">Login</button>
          <button onClick={() => navigate('/signup')} className="signup-btn">Sign Up</button>
        </div>
      </div>

      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Challenge Your Knowledge</h1>
            <p>Join thousands of players testing their knowledge across various topics</p>
            <button onClick={() => navigate('/signup')} className="cta-button">
              Start Your Journey
            </button>
          </div>
          <div className="hero-image">
            <div className="quiz-preview">
              <div className="preview-question">
                <h3>Sample Question:</h3>
                <p>Which planet is known as the Red Planet?</p>
                <div className="preview-options">
                  <button>Venus</button>
                  <button className="correct">Mars</button>
                  <button>Jupiter</button>
                  <button>Saturn</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Why Choose TriviaMaster?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎮</span>
              <h3>Interactive Learning</h3>
              <p>Engage with questions that make learning fun and memorable</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📈</span>
              <h3>Track Progress</h3>
              <p>Monitor your performance and see your knowledge grow</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏆</span>
              <h3>Compete & Win</h3>
              <p>Challenge others and climb the leaderboard</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔄</span>
              <h3>Regular Updates</h3>
              <p>New questions added regularly to keep you challenged</p>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Questions</p>
          </div>
          <div className="stat-card">
            <h3>500+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Categories</p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Test Your Knowledge?</h2>
          <p>Join now and start your journey to becoming a TriviaMaster!</p>
          <button onClick={() => navigate('/signup')} className="cta-button">
            Get Started Now
          </button>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🎯</span>
            <h3>TriviaMaster</h3>
          </div>
          <p>&copy; 2024 TriviaMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
