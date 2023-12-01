
import React from 'react';
import './App.css';
import { AllRoutes } from './Allroutes/AllRoutes';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AllRoutes />
      </div>
    </Router>
  );
}

export default App;
