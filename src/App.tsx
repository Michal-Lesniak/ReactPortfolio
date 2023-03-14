import React, {useEffect} from 'react';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Work } from './components/Work';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []); 


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
