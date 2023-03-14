//react
import React from 'react';

//header
import Header from './components/Header';

//homepage
import HomePage from './pages/HomePage';

//footer
import Footer from './components/Footer';

//stylesheet
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
