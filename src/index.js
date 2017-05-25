import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/skeleton.css';
import './css/style.css';

import App from './App.js';

render((
  <Router>
    <Route exact path="/" component={App} />
  </Router> ),
document.getElementById('main'));
