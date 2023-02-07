import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes> 
    </div>
  );
}

export default App;
