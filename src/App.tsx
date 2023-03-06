import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="bg-black/95">
      <Header/>
      <Home/>
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
