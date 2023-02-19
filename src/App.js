//react
import React from 'react';

//header
import Header from './components/Header';

//routing
import { Routes, Route } from 'react-router-dom';

//homepage
import HomePage from './pages/HomePage';

//stylesheet
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
