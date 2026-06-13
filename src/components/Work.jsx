import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { title: 'Restaurant Website', url: 'https://hotel-gray-eight.vercel.app' },
  { title: 'Gym Website', url: 'https://gym-indol-eight.vercel.app' },
  { title: 'Salon Website', url: 'https://salon-sand-zeta.vercel.app' },
  { title: 'Clinic Website', url: 'https://clinic-five-dusky.vercel.app' },
  { title: 'Personal Brand Website', url: 'https://premium-webbbsite.vercel.app' },
  { title: 'Business Landing Page', url: 'https://landing-website-seven-sigma.vercel.app' },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

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
            Click on any project to view a full interactive preview.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative glass rounded-2xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center cursor-pointer border border-white/5 hover:border-accent/40 transition-colors shadow-lg"
            >
              {/* Scaled Iframe Thumbnail */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-background">
                <iframe 
                  src={project.url}
                  title={project.title}
                  className="absolute top-0 left-0 border-none pointer-events-none w-[400%] h-[400%] origin-top-left"
                  style={{ transform: 'scale(0.25)' }}
                  tabIndex={-1}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-xs font-semibold tracking-wider text-cyan mb-3 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                  VIEW PREVIEW
                </span>
                <h3 className="text-2xl font-display font-bold text-white shadow-sm">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl h-full max-h-[90vh] bg-[#0f1115] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 shrink-0">
                <h3 className="text-xl font-display font-bold text-white flex items-center gap-3">
                  {selectedProject.title}
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                  </span>
                </h3>
                <div className="flex gap-4 items-center">
                  <a 
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium text-cyan hover:text-white transition-colors flex items-center gap-2 bg-cyan/10 px-3 py-1.5 rounded-lg hover:bg-cyan/20"
                  >
                    Open Live
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-text-muted hover:text-white"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
              
              {/* Iframe Container */}
              <div className="w-full flex-1 bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center text-text-muted bg-[#0f1115]">
                  <div className="flex flex-col items-center gap-3">
                    <svg className="animate-spin w-8 h-8 text-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Loading preview...</span>
                  </div>
                </div>
                <iframe 
                  src={selectedProject.url}
                  className="relative z-10 w-full h-full border-none bg-white"
                  title={selectedProject.title}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
