import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Catalog from './components/Catalog';
import Process from './components/Process';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full bg-cream-50 min-h-screen text-ink">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Catalog />
      <Process />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
