import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare size={32} />,
    title: 'Discussion',
    desc: 'Understanding your business and website goals.',
  },
  {
    icon: <PenTool size={32} />,
    title: 'Design',
    desc: 'Creating a modern layout and user experience.',
  },
  {
    icon: <Code2 size={32} />,
    title: 'Development',
    desc: 'Building a fast, responsive, and professional website.',
  },
  {
    icon: <Rocket size={32} />,
    title: 'Launch',
    desc: 'Deploying and supporting your website.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad relative bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            How I <span className="glow-text">Work</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-accent/10 via-accent/40 to-cyan/10 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center will-change-transform"
              >
                <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-accent mb-6 relative z-10 hover:scale-110 hover:border-accent/50 transition-all duration-300">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-accent/30 flex items-center justify-center text-xs font-bold text-cyan">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-text-dim leading-relaxed max-w-[240px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
