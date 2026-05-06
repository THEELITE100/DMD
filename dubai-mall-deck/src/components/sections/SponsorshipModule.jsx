import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function SponsorshipModule() {
  const [activeTier, setActiveTier] = useState(null);

  const tiers = [
    { level: "Tier 1", name: "Naming Rights & Domination", details: "Total property takeover. Includes main atrium naming rights, 100% share of voice on 400+ digital screens, and prime outdoor billboard allocation." },
    { level: "Tier 2", name: "Digital Network Takeovers", details: "High frequency digital exposure. Sync your campaign across our massive interior LED networks during peak weekend footfall hours." },
    { level: "Tier 3", name: "Experiential Pop-ups", details: "Physical brand zones. Secure premium, high-traffic floor space for immersive product launches and interactive sampling." }
  ];

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="sponsorship" className="py-32 bg-luxury-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
         {/* Background image path updated to .png */}
         <img src="/assets/sponsor-bg.png" className="w-full h-full object-cover" alt="Digital Billboards" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">Brand Partnerships</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-luxury-white mb-6">Own The Experience.</h3>
          <p className="text-luxury-sand text-lg font-light max-w-2xl mx-auto">
            Gain access to 80+ million affluent consumers annually through naming rights, digital domination networks, and immersive brand zones. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => {
            const isActive = activeTier === index;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} onClick={() => setActiveTier(isActive ? null : index)} className={`border cursor-pointer transition-all duration-300 p-6 backdrop-blur-md ${isActive ? 'bg-luxury-black/90 border-luxury-gold' : 'bg-luxury-black/60 border-luxury-white/20 hover:border-luxury-white/50'}`}>
                <h4 className="text-luxury-gold text-xl mb-2 font-serif">{tier.level}</h4>
                <p className="text-luxury-white text-md mb-2 font-semibold tracking-wide">{tier.name}</p>
                <AnimatePresence>
                  {isActive && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="text-luxury-sand/80 text-sm font-light mt-4 mb-6 leading-relaxed">{tier.details}</p>
                      <button onClick={(e) => { e.stopPropagation(); scrollToContact(); }} className="w-full bg-luxury-white text-luxury-black py-3 uppercase tracking-widest text-xs hover:bg-luxury-gold hover:text-white transition-colors">Inquire Rates</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}