import { useState, useEffect } from 'react';
import axios from 'axios';
import './Leaderboard.css';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5001/api/scores', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setScores(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching scores:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="leaderboard-container">Loading...</div>;
  }

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <div className="scores-list">
        {scores.map((score, index) => (
          <div key={score._id} className="score-item">
            <span className="rank">#{index + 1}</span>
            <span className="score">Score: {score.score}/{score.totalQuestions}</span>
            <span className="date">{new Date(score.date).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
