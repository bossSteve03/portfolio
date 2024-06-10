import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Nav } from './layouts';
import { Home, Technologies, About, Projects, Test } from './pages';
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
    <Routes>
      <Route path="/" element={
        isLoading ?
        <LoadingScreen /> :
        <>
        <Nav />
        <Home />
        <Technologies />
        <About />
        <Projects />
        </>
        }/>
      <Route path='/test' element={<Test/>} />
    </Routes>
    </>
  )
}

export default App
