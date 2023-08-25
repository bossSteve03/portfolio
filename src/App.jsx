import React from 'react';
import './App.css';
import { Nav } from './layouts';
import { Home, About, Projects } from './pages';

function App() {

  return (
    <>
    <Nav />
    <Home />
    <About />
    <Projects />
    </>
  )
}

export default App
