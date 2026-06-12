import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-pad relative bg-gradient-to-t from-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-8"
        >
          About <span className="glow-text">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <p className="text-lg md:text-xl text-text-main leading-relaxed mb-6">
            Hi, I’m <strong>Pranav</strong> — a frontend developer helping small businesses create modern, responsive, and professional websites that build trust and attract customers.
          </p>
          <p className="text-lg md:text-xl text-text-dim leading-relaxed">
            I focus on clean UI, mobile-friendly experiences, and modern web design principles to ensure your business stands out in the digital landscape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
