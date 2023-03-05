import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/experience/Experience'
import Gallery from './components/works/Gallery';
import Contact from './components/Contact';
import Testimonial from './components/testimonial/Testimonial'

function App() {
  return (
    <div>
<Navbar/>
<Hero/>
<AboutMe/>
<Experience/>
<Gallery/>
<Testimonial/>
<Contact/>
    </div>
  );
}

export default App;
