import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;