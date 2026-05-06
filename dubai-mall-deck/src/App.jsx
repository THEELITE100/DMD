import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import ScaleAndData from './components/sections/ScaleAndData';
import LuxuryRetail from './components/sections/LuxuryRetail';
import Entertainment from './components/sections/Entertainment';
import EventsModule from './components/sections/EventsModule';
import TechSpecs from './components/sections/TechSpecs';
import SponsorshipModule from './components/sections/SponsorshipModule';
import Footer from './components/layout/Footer';

function App() {
  const [showTechSpecs, setShowTechSpecs] = useState(false);

  return (
    <div className="bg-luxury-black min-h-screen font-sans selection:bg-luxury-gold selection:text-luxury-black">
      <Navigation />
      <main>
        <Hero />
        <ScaleAndData />
        <LuxuryRetail />
        <Entertainment />
        
        <EventsModule onShowTechSpecs={() => setShowTechSpecs(true)} />
        
        <AnimatePresence>
          {showTechSpecs && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <TechSpecs />
            </motion.div>
          )}
        </AnimatePresence>

        <SponsorshipModule />
      </main>
      <Footer />
    </div>
  );
}

export default App;