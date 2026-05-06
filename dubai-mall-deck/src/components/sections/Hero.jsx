import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay was delayed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-black">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-luxury-black">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/assets/hero-poster.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/30 to-luxury-black z-20"></div>
      </div>

      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }} 
          className="font-serif text-6xl md:text-8xl font-bold text-luxury-white mb-6 leading-tight drop-shadow-2xl"
        >
          A City Within <br/> A Destination.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.8 }} 
          className="text-lg md:text-xl text-luxury-sand max-w-2xl mx-auto font-light tracking-wide drop-shadow-md"
        >
          Over 12 million square feet of retail, dining, and unparalleled entertainment. This is where global brands make history.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1.5 }} 
          className="mt-12"
        >
          <a 
            href="#scale" 
            className="inline-block border border-luxury-gold text-luxury-gold px-8 py-4 uppercase tracking-widest text-sm hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 shadow-lg backdrop-blur-sm bg-luxury-black/20"
          >
            Explore the Scale
          </a>
        </motion.div>
      </div>
    </section>
  );
}