import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Trivia Quiz</h1>
        <h2>Hello, {user.username}!</h2>
        <p>Test your knowledge with our exciting quiz questions!</p>
        <div className="home-buttons">
          <button className="start-button" onClick={handleStartQuiz}>
            Start Quiz
          </button>
          <button className="leaderboard-button" onClick={() => navigate('/leaderboard')}>
            View Leaderboard
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
