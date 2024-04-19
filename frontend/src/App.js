import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
require('dotenv').config();


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
