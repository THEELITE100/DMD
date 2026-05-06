import { motion } from 'framer-motion';

export default function Hospitality() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const hotels = [
    { name: "The Armani Hotel", desc: "Designed entirely by Giorgio Armani, offering unparalleled luxury and direct VIP access to the fashion avenues.", img: "/assets/hosp-hotel.png" },
    { name: "Address Downtown", desc: "A flagship resort directly bridging the mall to the Burj Khalifa plaza. Essential for corporate event buyouts.", img: "/assets/hosp-suite.png" },
    { name: "Wellness & Spa Centers", desc: "Multi-floor urban sanctuaries offering elite rejuvenation, driving massive dwell times and specialized wellness tourism.", img: "/assets/hosp-spa.png" }
  ];

  return (
    <section id="hospitality" className="py-32 bg-luxury-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">Integrated Hospitality</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-luxury-white mb-6">Stay Where You Play.</h3>
              <p className="text-luxury-sand/80 font-light leading-relaxed mb-10">
                Seamless physical integration with three ultra-luxury 5-star resorts. This creates a captive, high-net-worth audience available 24/7, offering brand partners and event producers unparalleled turnkey room-block solutions.
              </p>
              
              <button onClick={scrollToContact} className="border border-luxury-white text-luxury-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-luxury-white hover:text-luxury-black transition-colors">
                Corporate Bookings
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-16 mt-12 lg:mt-0">
            {hotels.map((hotel, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-luxury-black border border-luxury-white/5 group"
              >
                <div className="h-[400px] overflow-hidden">
                  <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-10">
                  <h4 className="font-serif text-2xl text-luxury-white mb-4">{hotel.name}</h4>
                  <p className="text-luxury-sand text-sm font-light leading-relaxed">{hotel.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}