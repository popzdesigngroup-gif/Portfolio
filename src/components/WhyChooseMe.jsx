import { motion } from 'framer-motion';
import { Zap, DollarSign, PenTool, Smartphone, LayoutDashboard, MessageSquare } from 'lucide-react';

const reasons = [
  { icon: <Zap size={24} />, title: 'Fast Delivery' },
  { icon: <DollarSign size={24} />, title: 'Affordable Pricing' },
  { icon: <PenTool size={24} />, title: 'Modern Design' },
  { icon: <Smartphone size={24} />, title: 'Mobile Responsive' },
  { icon: <LayoutDashboard size={24} />, title: 'Clean UI' },
  { icon: <MessageSquare size={24} />, title: 'Client-Focused Communication' },
];

export default function WhyChooseMe() {
  return (
    <section className="section-pad relative bg-gradient-to-b from-transparent to-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Why Work With <span className="glow-text">Me?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:border-accent/50 transition-colors group"
            >
              <div className="text-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-lg">{reason.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
