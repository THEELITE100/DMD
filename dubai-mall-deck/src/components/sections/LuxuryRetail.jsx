import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LuxuryRetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const retailZones = [
    { title: "Fashion Avenue", subtitle: "The epicenter of global luxury", description: "An entire precinct dedicated to elite brands. Hosting the largest collection of fashion houses under one roof.", image: "/assets/retail-fashion.png" },
    { title: "Haute Horlogerie", subtitle: "Timeless elegance", description: "A curated boulevard of the world's most prestigious watchmakers and jewelers. Designed for the highly valued individuals.", image: "/assets/retail-watches.png" },
    { title: "Beauty & Fragrance", subtitle: "Bespoke cosmetics and perfumery", description: "A sensory journey featuring exclusive cosmetic houses, bespoke fragrance labs, and private aesthetic consultation suites.", image: "/assets/retail-beauty.png" },
    { title: "Level Shoes", subtitle: "The largest footwear destination", description: "Spanning 96,000 square feet, this architectural marvel is dedicated entirely to luxury footwear and accessories.", image: "/assets/retail-shoes.png" },
    { title: "Gourmet Culinary Arts", subtitle: "A world class dining experience", description: "From Michelin starred concepts to exclusive caviar lounges, our fine dining precincts cater to the refined palates.", image: "/assets/retail-dining.png" },
    { title: "Bespoke Tailoring", subtitle: "Sartorial perfection", description: "Dedicated suites for master tailors and premium menswear brands, offering made to measure services.", image: "/assets/retail-tailoring.png" },
    { title: "Fine Art & Antiques", subtitle: "Investment grade curation", description: "Museum quality galleries showcasing contemporary masterpieces, rare antiquities, and investment grade collectibles.", image: "/assets/retail-art.png" },
    { title: "Designer Homeware", subtitle: "Living in elevated style", description: "The ultimate destination for luxury interior design, featuring flagship showrooms from the world's most coveted brands.", image: "/assets/retail-homeware.png" },
    { title: "Private VIP Lounges", subtitle: "Discretion and elite service", description: "By invitation only retreats offering dedicated concierges, private fitting rooms, and personal shopping services.", image: "/assets/retail-vip.png" },
    { title: "Department Stores", subtitle: "Anchors of commerce", description: "Home to legendary multi level flagship anchors. These architectural icons provide diverse, high volume retail environments.", image: "/assets/retail-department.png" }
  ];

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0 })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => newDirection === 1 ? (prev === retailZones.length - 1 ? 0 : prev + 1) : (prev === 0 ? retailZones.length - 1 : prev - 1));
  };

  return (
    <section id="retail" className="py-32 bg-luxury-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">Luxury and Retail</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-luxury-white">Unrivaled Environments</h3>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-luxury-sand/50 font-serif tracking-widest">{String(currentIndex + 1).padStart(2, '0')} / {String(retailZones.length).padStart(2, '0')}</span>
            <div className="flex gap-2">
              <button onClick={() => paginate(-1)} className="p-4 border border-luxury-white/20 hover:border-luxury-gold hover:text-luxury-gold transition-colors text-luxury-white"><ChevronLeft size={24} /></button>
              <button onClick={() => paginate(1)} className="p-4 border border-luxury-white/20 hover:border-luxury-gold hover:text-luxury-gold transition-colors text-luxury-white"><ChevronRight size={24} /></button>
            </div>
          </div>
        </div>

        <div className="relative h-[650px] lg:h-[550px] w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div key={currentIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }} className="absolute inset-0 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              <div className="w-full lg:w-3/5 h-[300px] lg:h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <img src={retailZones[currentIndex].image} alt={retailZones[currentIndex].title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <h4 className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-4">{retailZones[currentIndex].title}</h4>
                <h3 className="font-serif text-3xl md:text-4xl text-luxury-white mb-6 leading-tight">{retailZones[currentIndex].subtitle}</h3>
                <p className="text-luxury-sand font-light leading-relaxed mb-10 text-sm md:text-base">{retailZones[currentIndex].description}</p>
                <div><button onClick={scrollToContact} className="border border-luxury-white text-luxury-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-luxury-white hover:text-luxury-black transition-colors">Leasing Inquiry</button></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}