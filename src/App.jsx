import { useState } from 'react';
import './App.css';

import { Navbar, Home, About, Menu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
