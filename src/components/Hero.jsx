import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const trustBadges = [
    'Mobile Friendly',
    'Modern Design',
    'Fast Delivery',
    'Affordable Pricing',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVars} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 text-sm font-medium text-cyan">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            Available for Freelance Projects
          </motion.div>

          <motion.h1
            variants={itemVars}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Helping Small Businesses Build{' '}
            <span className="glow-text">Modern Websites</span> That Get More Customers
          </motion.h1>

          <motion.p
            variants={itemVars}
            className="text-lg md:text-xl text-text-dim mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I design and develop fast, responsive, and professional websites for businesses, startups, and personal brands.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#contact" className="gradient-btn w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
              Get a Website <ArrowRight size={20} />
            </a>
            <a href="#work" className="w-full sm:w-auto px-8 py-4 rounded-xl glass text-white font-semibold hover:bg-white/5 transition-colors border border-white/10 flex items-center justify-center">
              View My Work
            </a>
            <a href="https://wa.me/917806835390" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl text-green-400 border border-green-400/30 hover:bg-green-400/10 transition-colors font-semibold flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp Me
            </a>
          </motion.div>

          <motion.div variants={itemVars} className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-text-muted">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
