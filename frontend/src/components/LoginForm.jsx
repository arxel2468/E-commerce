import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend for authentication
    fetch('http://localhost:5000/api/auth/login', { // Update the URL to include port 5000
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        // Redirect to dashboard or display success message
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., display error message to user)
        setErrors({ login: 'Invalid email or password' });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {errors.login && <p className="error">{errors.login}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
