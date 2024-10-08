import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Blue from './blue';
import Red from './red';
import Green from './green';

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
      </Routes>
    </div>
  );
}

export default MainContainer;
