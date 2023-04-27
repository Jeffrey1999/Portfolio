import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/experience/Experience'
import Gallery from './components/works/Gallery';
import Contact from './components/Contact';
import Testimonial from './components/testimonial/Testimonial'
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";




function App() {

  const[loading, setLoading]=useState(false)

  useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)
},1000)
  },[])
  
  return (
   
    <div>
      
      { loading? <PacmanLoader color={"#115e59"} loading={loading} size={100}  aria-label="Loading Spinner" data-testid="loader"/>:
       
      <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Gallery/>
      <Testimonial/>
      <Contact/>
      </div>
      }
     
    </div>
  );
}

export default App;
