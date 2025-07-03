import { useState } from 'react';

function HomePage({ setUser }) {
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (name.trim()) {
      setUser(name.trim());
    }
  };

  const handleGuest = () => {
    setUser('Guest');
  };

  return (
    <div className="home">
      <h1>Welcome to the home page!</h1>
      <div className="login-section">
        <p>Hi, enter your name:</p>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleGuest}>Continue as Guest</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
