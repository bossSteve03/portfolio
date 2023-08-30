import React, { useState, useEffect } from 'react';
import './App.css';
import { Nav } from './layouts';
import { Home, Technologies, About, Projects } from './pages';
import { LoadingScreen } from './components';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  return (
    <>
    {
      isLoading ?
      <LoadingScreen /> :
      <>
      <Nav />
      <Home />
      <Technologies />
      <About />
      <Projects />
      </>
    }
    </>
  )
}

export default App
