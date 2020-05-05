import React from 'react';
import './App.css';
import MainNavigation from "../src/shared/components/Navigation/MainNavigation";
import Home from "./home/pages/Home";
import Footer from './shared/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
