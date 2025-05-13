import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJoin from './components/WhyJoin';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import Wings from './components/Wings';
import DefaultDonutPage from './pages/events/DefaultDonutPage';
import ModelSubmission from './pages/ModelSubmission';

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
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/default_donut" element={<DefaultDonutPage />} />
          <Route path="/models" element={<ModelSubmission />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
