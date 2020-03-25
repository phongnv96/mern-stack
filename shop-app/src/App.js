import React from 'react';
import MainNavigation from "../src/shared/components/Navigation/MainNavigation";
import Home from "./home/pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Home />
    </div>
  );
}

export default App;
