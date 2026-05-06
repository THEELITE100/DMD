export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] py-20 border-t border-luxury-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="text-center lg:text-left">
          <h2 className="font-serif text-3xl font-bold tracking-wider text-luxury-white mb-2">THE DUBAI MALL</h2>
          <p className="text-luxury-sand/50 text-sm tracking-widest uppercase">Global Commercial Leasing & Partnerships</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="mailto:leasing@thedubaimall.com?subject=Leasing%20Inquiry%20-%20The%20Dubai%20Mall"
            className="bg-luxury-gold text-luxury-black px-8 py-4 uppercase tracking-widest text-sm text-center hover:bg-luxury-white transition-colors"
          >
            Contact Leasing
          </a>
          <a 
            href="mailto:events@thedubaimall.com?subject=Event%20Booking%20Inquiry%20-%20The%20Dubai%20Mall"
            className="border border-luxury-white text-luxury-white px-8 py-4 uppercase tracking-widest text-sm text-center hover:bg-luxury-white hover:text-luxury-black transition-colors"
          >
            Contact Events
          </a>
        </div>
      </div>
    </footer>
  );
}