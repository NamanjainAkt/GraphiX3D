import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import Wings from './components/Wings';

const Home = () => (
  <>
    <Hero />
    <WhyJoin />
    <Wings />
    <Events />
    <About />
    <Contact />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <Home/>
      </div>
    </BrowserRouter>
  );
};

export default App;
