import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Game from './Game';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-left">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/game" className="nav-item">Mini Games</Link>
        </div>
        <div className="nav-right">
          <span className="nav-user">Hi, {user ? user : 'Guest'}!</span>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
