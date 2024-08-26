import React from 'react';
import Navbar from './components/navbar';
import MainContainer from './components/main_container';
import Footer from './components/footer'; 
import './App.css';

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <Navbar />
        <MainContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
