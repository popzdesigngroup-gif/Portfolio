import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certs = [
  {
    title: 'Responsive Web Design Using Flexbox',
    issuer: 'NxtWave / CCBP 4.0 Academy',
    year: '2025',
  },
  {
    title: 'Build Your Own Responsive Website',
    issuer: 'NxtWave / CCBP 4.0 Academy',
    year: '2024',
  },
  {
    title: 'UI/UX Design with Figma',
    issuer: 'Udemy',
    year: '2024',
  },
  {
    title: 'Oracle Database 19c: Basic SQL',
    issuer: 'LinkedIn Learning',
    year: '2024',
  },
  {
    title: 'Getting Started with Power BI',
    issuer: 'LinkedIn Learning',
    year: '2025',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    year: '2026',
  },
];

export default function Certifications() {
  return (
    <section className="section-pad relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            <span className="glow-text">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <span className="px-3 py-1 text-xs font-bold font-display text-cyan bg-cyan/10 border border-cyan/20 rounded-full">
                  {cert.year}
                </span>
              </div>
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-white transition-colors">{cert.title}</h3>
              <p className="text-sm text-text-dim mt-auto">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
