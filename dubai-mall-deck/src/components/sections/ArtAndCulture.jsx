import { motion } from 'framer-motion';

export default function ArtAndCulture() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const elements = [
    { title: "The Human Waterfall", desc: "A four story kinetic installation driving millions of organic social media impressions annually.", img: "/assets/art-waterfall.png", delay: 0 },
    { title: "Museum Grade Sculpture", desc: "Rotating curation of global contemporary art blurring the line between gallery and retail.", img: "/assets/art-sculpture.png", delay: 0.2 },
    { title: "Architectural Grandeur", desc: "Parametric skylights and sweeping atriums designed to awe, inspire, and retain visitors.", img: "/assets/art-atrium.png", delay: 0.4 }
  ];

  return (
    <section className="py-32 bg-luxury-black border-t border-luxury-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">Art & Architecture</motion.h2>
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-4xl md:text-5xl text-luxury-white">The Viral Aesthetic</motion.h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {elements.map((el, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: el.delay, duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="h-[500px] w-full overflow-hidden mb-6">
              <img src={el.img} alt={el.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <h4 className="font-serif text-xl text-luxury-white mb-3 text-center">{el.title}</h4>
            <p className="text-luxury-sand/70 text-sm font-light text-center px-4">{el.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-20"
      >
        <button onClick={scrollToContact} className="border border-luxury-white text-luxury-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-luxury-white hover:text-luxury-black transition-colors">
          Sponsor Installations
        </button>
      </motion.div>
    </section>
  );
}