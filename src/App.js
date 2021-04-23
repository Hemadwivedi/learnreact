import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './SideBar/Sidebar';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
