import React from 'react';

import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar'


function App() {
  return (
    <div className="App">
    <Router> 
    <Navbar/>
    <switch>
    <Route path='/'/>
    
    </switch>
    </Router>
   
    </div>
  );
}

export default App;
