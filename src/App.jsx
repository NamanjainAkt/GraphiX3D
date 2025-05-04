import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';

const Home = () => (
  <>
    <Hero />
    <WhyJoin />
    <Events />
    <About />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
