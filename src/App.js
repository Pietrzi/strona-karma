import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Theater from './components/Theater';
import Film from './components/Film';
import Gallery from './components/Gallery';
import News from './components/News';
import Bio from './components/Bio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/teatr' component={Theater} />
          <Route path='/film' component={Film} />
          <Route path='/galeria' component={Gallery} />
          <Route path='/aktualnośći' component={News} />
          <Route path='/bio' component={Bio} />
          <Route path='/kontakt' component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
