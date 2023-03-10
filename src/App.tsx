import React from 'react';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Work } from './components/Work';

function App() {
  return (
    <div className="bg-black font-bold">
      <Header/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
