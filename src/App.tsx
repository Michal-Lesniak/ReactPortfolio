import React, {useState} from 'react';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Work } from './components/Work';

function App() {

  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () =>{
      setIsHovered(true);
  }
  
  const handleMouseLeave = () =>{
      setIsHovered(false);
  }


  return (
    <div className="bg-black font-bold">
      <Header handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
      <About isHovered={isHovered}/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
