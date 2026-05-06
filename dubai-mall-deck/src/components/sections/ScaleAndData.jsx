import { motion } from 'framer-motion';
import { Users, Building2, MapPin } from 'lucide-react';

export default function ScaleAndData() {
  const stats = [
    { icon: <Users size={32} />, value: '80M+', label: 'Annual Visitors', desc: 'More foot traffic than Times Square.' },
    { icon: <Building2 size={32} />, value: '1,200+', label: 'Retail Outlets', desc: 'From global flagships to emerging pop ups.' },
    { icon: <MapPin size={32} />, value: '12M', label: 'Square Feet', desc: 'Equivalent to 50 soccer fields of premium real estate.' }
  ];

  return (
    <section id="scale" className="py-32 bg-luxury-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-luxury-gold mb-6 flex justify-center">{stat.icon}</div>
              <h3 className="font-serif text-5xl font-bold text-luxury-white mb-4">{stat.value}</h3>
              <h4 className="text-xl font-semibold tracking-widest uppercase mb-2">{stat.label}</h4>
              <p className="text-luxury-sand/70 font-light">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}