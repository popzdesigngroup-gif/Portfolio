import { motion } from 'framer-motion';
import { Layout, MonitorSmartphone, Code2, Paintbrush, Rocket, UserCircle } from 'lucide-react';

const services = [
  {
    icon: <MonitorSmartphone size={28} />,
    title: 'Business Website Development',
    desc: 'Professional websites designed to help businesses build trust and attract customers.',
  },
  {
    icon: <Rocket size={28} />,
    title: 'Landing Page Design',
    desc: 'Modern high-converting landing pages for businesses and brands.',
  },
  {
    icon: <UserCircle size={28} />,
    title: 'Portfolio Websites',
    desc: 'Personal branding websites for professionals, creators, and students.',
  },
  {
    icon: <Paintbrush size={28} />,
    title: 'Website Redesign',
    desc: 'Transform outdated websites into modern responsive experiences.',
  },
  {
    icon: <Layout size={28} />,
    title: 'Responsive Web Design',
    desc: 'Mobile-friendly websites optimized for every screen.',
  },
  {
    icon: <Code2 size={28} />,
    title: 'UI/UX Design',
    desc: 'Clean, user-focused interface design for modern businesses.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Services I <span className="glow-text">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-dim text-lg max-w-2xl mx-auto"
          >
            I provide end-to-end web design and development solutions tailored to elevate your business online.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-text-dim leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
