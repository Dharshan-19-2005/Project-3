import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Trivia Quiz</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Quiz</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
