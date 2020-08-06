import React from 'react';
import './App.css';

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
      <Navbar />
      <Home />
      <Theater />
      <Film />
      <Gallery />
      <News />
      <Bio />
      <Contact />
    </div>
  );
}

export default App;
