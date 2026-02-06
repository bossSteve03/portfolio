import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layouts';
import { Home, Career, Property, About, Contact } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/property" element={<Property />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
