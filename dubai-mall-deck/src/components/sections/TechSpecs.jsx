import { motion } from 'framer-motion';

export default function TechSpecs() {
  const specs = [
    { category: "Audio Visual", details: ["L-Acoustics K2 Line Array System", "4K LED Modular Backdrops", "Yamaha Rivage PM10 Console"] },
    { category: "Rigging & Staging", details: ["120 Ton Roof Rigging Capacity", "Automated Stage Lifts", "Customizable Catwalk Infrastructure"] },
    { category: "Power & Data", details: ["Triple Redundant 10,000A Power", "Dedicated 10Gbps Fiber Backbone", "Site Wide High Density WiFi"] },
    { category: "Back of House", details: ["12 Luxury Star Dressing Rooms", "Direct Multi Trailer Loading Docks", "Dedicated Production Offices"] }
  ];

  return (
    <section id="tech-specs" className="py-24 bg-[#080808] border-t border-luxury-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">Infrastructure</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-luxury-white">Technical Specifications</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-luxury-gold/30 pt-6"
            >
              <h4 className="text-luxury-white font-serif text-xl mb-4">{spec.category}</h4>
              <ul className="space-y-3">
                {spec.details.map((detail, i) => (
                  <li key={i} className="text-luxury-sand/70 text-sm font-light flex items-start gap-2">
                    <span className="text-luxury-gold mt-1 text-xs">▹</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}