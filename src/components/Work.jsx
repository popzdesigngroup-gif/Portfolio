import { motion } from 'framer-motion';

const categories = [
  'Restaurant Website',
  'Gym Website',
  'Salon Website',
  'Clinic Website',
  'Personal Brand Website',
  'Business Landing Page',
];

export default function Work() {
  return (
    <section id="work" className="section-pad relative">
      {/* Background Gradients (Optimized) */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, rgba(108,99,255,0) 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Sample <span className="glow-text">Website Designs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-dim text-lg max-w-2xl mx-auto"
          >
            Modern website concepts and client projects will be showcased here.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center cursor-not-allowed hover:border-accent/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="z-10 text-center px-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-text-muted mb-4">
                  COMING SOON
                </span>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan transition-colors">
                  {category}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
