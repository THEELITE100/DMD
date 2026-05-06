import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function EventsModule({ onShowTechSpecs }) {
  const [activeVenue, setActiveVenue] = useState(null);

  const venues = [
    { name: "The Promenade", capacity: "15,000+", type: "Open Air Concerts / Festivals" },
    { name: "The Grand Atrium", capacity: "5,000+", type: "Product Launches / Fashion Shows" },
    { name: "Zabeel Hall", capacity: "10,000+", type: "Conventions / Expos" }
  ];

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  
  const handleTechSpecsClick = () => {
    if (onShowTechSpecs) onShowTechSpecs();
    setTimeout(() => {
      document.getElementById('tech-specs')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <section id="events" className="py-32 bg-luxury-charcoal border-t border-luxury-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">Venue Booking</h2>
            <h3 className="font-serif text-4xl text-luxury-white mb-6">A Global Stage.</h3>
            <p className="text-luxury-sand font-light mb-8">
              From international concert tours to luxury brand activations, our venues offer turn-key production capabilities with built in audiences of tens of thousands.
            </p>
            <button 
              onClick={handleTechSpecsClick}
              className="border border-luxury-white text-luxury-white px-6 py-3 uppercase tracking-widest text-xs hover:bg-luxury-white hover:text-luxury-black transition-all duration-300 w-full sm:w-auto"
            >
              Tech Specs
            </button>
          </div>
          
          <div className="md:w-2/3 grid gap-4">
            {venues.map((venue, index) => {
              const isActive = activeVenue === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveVenue(isActive ? null : index)}
                  className={`p-8 cursor-pointer transition-all duration-300 border ${
                    isActive ? 'bg-luxury-black/80 border-luxury-gold' : 'bg-luxury-black border-transparent hover:border-luxury-white/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div>
                      <h4 className="font-serif text-2xl text-luxury-white mb-1">{venue.name}</h4>
                      <p className="text-luxury-gold text-sm tracking-wider">{venue.type}</p>
                    </div>
                    <div className="sm:text-right">
                      <span className="block text-luxury-sand/50 text-xs uppercase mb-1">Capacity</span>
                      <span className="text-xl text-luxury-white font-light">{venue.capacity}</span>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden border-t border-luxury-white/10 pt-6"
                      >
                        <p className="text-luxury-sand text-sm mb-4">Available for exclusive private bookings, multi day takeovers, and broadcast events.</p>
                        <button 
                          onClick={(e) => { e.stopPropagation(); scrollToContact(); }}
                          className="bg-luxury-gold text-luxury-black px-6 py-2 uppercase tracking-widest text-xs hover:bg-luxury-white transition-colors"
                        >
                          Request Availability
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}