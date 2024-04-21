import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Password length validation
    if (formData.password.length < 8) {
      setErrors({ password: 'Password must be at least 8 characters long' });
      return;
    }
    // Password confirmation check
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }
    // Send form data to backend
    fetch('http://localhost:5000/api/auth/register', { // Update the URL to include port 5000
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Registration failed', response);
        }
        // Redirect to login page or display success message
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., display error message to user)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="username">Username:</label>
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
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>
  <div>
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
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
    {errors.password && <p className="error">{errors.password}</p>}
  </div>
  <div>
    <label htmlFor="confirmPassword">Confirm Password:</label>
    <input
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      required
    />
    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
  </div>
  <button type="submit">Register</button>
</form>

  );
};

export default RegistrationForm;
