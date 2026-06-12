import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      {/* Background Gradients (Optimized) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, rgba(108,99,255,0) 70%)' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Need a Website for Your <span className="glow-text">Business?</span>
          </h2>
          <p className="text-xl text-text-dim max-w-2xl mx-auto">
            Let's build a professional website that helps your business grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass p-8 md:p-12 rounded-3xl flex flex-col items-center"
        >
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center">
            <a href="https://wa.me/917806835390" target="_blank" rel="noopener noreferrer" className="gradient-btn px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2">
              WhatsApp Me <ArrowRight size={20} />
            </a>
            <a href="mailto:pranavrowthri0808@gmail.com" className="px-8 py-4 rounded-xl glass hover:bg-white/5 border border-white/10 transition-colors text-white font-semibold flex items-center justify-center gap-2">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/pranav-rowthri-723447353/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/30 hover:bg-[#0A66C2]/20 transition-colors font-semibold flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/10 pt-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Phone size={20} />
              </div>
              <span className="text-text-main font-medium">+91 7806835390</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Mail size={20} />
              </div>
              <span className="text-text-main font-medium">popzdesigngroup@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <MapPin size={20} />
              </div>
              <span className="text-text-main font-medium">Chennai, Tamil Nadu</span>
            </div>
          </div>

          {/* Resume Download */}
          <div className="mt-12 pt-8 border-t border-white/10 w-full flex justify-center">
            <a href="#" className="inline-flex items-center gap-2 text-cyan hover:text-white transition-colors font-semibold px-6 py-3 rounded-full border border-cyan/30 hover:bg-cyan/10">
              <Download size={18} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
