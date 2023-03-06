//react
import React from 'react';

//header
import Header from './components/Header';

//routing
import { Routes, Route } from 'react-router-dom';

//homepage
import HomePage from './pages/HomePage';

//sakepage
import SakePage from './pages/SakePage';

//eventpage
import EventsPage from './pages/EventsPage';

//shoppage
import ShopPage from './pages/ShopPage';

//aboutpage
import AboutPage from './pages/AboutPage';

//footer
import Footer from './components/Footer';

//stylesheet
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <SakePage />
      <EventsPage />
      <ShopPage />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default App;
