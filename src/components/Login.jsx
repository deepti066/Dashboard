import React, { useState } from 'react';
import './login.css'; // You can create a separate CSS file for styling

const LoginPage = () => {
  // State for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // State for error handling
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    // Reset error
    setError('');

    // Simulate login logic (e.g., API call)
    if (username === 'user' && password === 'password') {
      alert('Login successful');
      // Redirect to dashboard or home page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="footer-links">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
