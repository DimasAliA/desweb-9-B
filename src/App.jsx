import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile';
import Homepage from './pages/home';
import Loginpage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import Beranda from './pages/Beranda';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/beranda" element={<Beranda/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;