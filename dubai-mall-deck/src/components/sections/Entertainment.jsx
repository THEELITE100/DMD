import { motion } from 'framer-motion';
import { useState } from 'react';
import ParallaxImage from '../ui/ParallaxImage';

export default function Entertainment() {
  const [isHovered, setIsHovered] = useState(false);

  const attractions = [
    { title: "The Aquarium", desc: "10 million liters of discovery, drawing millions of dedicated tourists annually.", img: "/assets/ent-aquarium.png" },
    { title: "Dubai Fountain", desc: "The world's largest choreographed fountain system, driving massive evening footfall.", img: "/assets/ent-fountain.png" },
    { title: "VR Park", desc: "Bleeding edge virtual reality driving high margin, all day dwell times for youth demographics.", img: "/assets/ent-vr.png" },
    { title: "The Cinemas", desc: "Ultra luxury megaplex featuring dine-in screens, Dolby Cinema, and immersive formats.", img: "/assets/ent-cinema.png" },
    { title: "Ice Rink", desc: "Multi purpose arena hosting international sporting events and premium public skating.", img: "/assets/ent-icerink.png" },
    { title: "KidZania", desc: "An interactive children's city blending play with learning, securing immense family traffic.", img: "/assets/ent-kidzania.png" }
  ];

  const duplicatedAttractions = [...attractions, ...attractions];

  return (
    <section id="entertainment" className="py-32 bg-luxury-black relative z-10 overflow-hidden">
      <style>{`@keyframes continuousSlide { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }`}</style>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">Beyond Shopping</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-luxury-white">Immersive Attractions</h3>
        </motion.div>
      </div>

      <div className="py-10 -my-10" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="flex" style={{ width: 'max-content', animation: `continuousSlide 25s linear infinite`, animationPlayState: isHovered ? 'paused' : 'running' }}>
          {duplicatedAttractions.map((attraction, index) => (
            <div key={index} className="px-4 w-[90vw] md:w-[45vw] lg:w-[600px] flex-shrink-0">
              <motion.div whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(197, 160, 89, 0.2)" }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative group overflow-hidden border border-transparent hover:border-luxury-gold/50 h-[500px] cursor-pointer bg-luxury-charcoal">
                <ParallaxImage src={attraction.img} alt={attraction.title} className="h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/40 to-transparent flex flex-col justify-end p-8">
                  <h4 className="font-serif text-3xl text-luxury-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">{attraction.title}</h4>
                  <p className="text-luxury-sand text-sm font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">{attraction.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}