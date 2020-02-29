import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'


import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/user" component={Register} />
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  );
}

export default App;
