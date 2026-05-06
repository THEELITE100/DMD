import { motion } from 'framer-motion';

export default function DiningLifestyle() {
  const diningConcepts = [
    { title: "Michelin Gastronomy", desc: "Award-winning concepts from global culinary masters.", img: "/assets/dining-michelin.png", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { title: "Alfresco Terraces", desc: "Dining with unparalleled fountain and skyline views.", img: "/assets/dining-alfresco.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { title: "Caviar & Champagne", desc: "Exclusive lounges for the high class.", img: "/assets/dining-caviar.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { title: "Artisan Cafes", desc: "European style coffee houses driving daytime dwell time.", img: "/assets/dining-cafe.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { title: "High Energy Lounges", desc: "Seamless transition from daytime retail to evening nightlife.", img: "/assets/dining-nightlife.png", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" }
  ];

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="dining" className="py-32 bg-[#080808] border-t border-luxury-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">Dining & Lifestyle</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-luxury-white">Taste The Destination</h3>
            <p className="text-luxury-sand/80 mt-4 max-w-xl font-light">Food is no longer an afterthought, it is the anchor. With over 200 distinct culinary environments, we capture breakfast meetings, lunch crowds, and late night VIPs.</p>
          </motion.div>
          <button onClick={scrollToContact} className="border border-luxury-white text-luxury-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-luxury-white hover:text-luxury-black transition-colors shrink-0">
            F&B Leasing
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {diningConcepts.map((concept, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${concept.colSpan} ${concept.rowSpan}`}
            >
              <img src={concept.img} alt={concept.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                <h4 className="font-serif text-2xl text-luxury-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{concept.title}</h4>
                <p className="text-luxury-sand text-sm font-light opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">{concept.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}