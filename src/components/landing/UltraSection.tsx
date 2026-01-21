import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Shield, Star } from 'lucide-react';

const UltraSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ultra" className="section-padding bg-gradient-to-br from-vitastem-charcoal to-foreground/95 text-primary-foreground overflow-hidden" ref={ref}>
      <div className="container-wide relative">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/50 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            >
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="font-semibold">Introducing</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              VitaStem <span className="text-primary">Ultra</span>
            </h2>
            
            <p className="text-xl text-white/70">
              The next generation of wound care technology. More powerful, faster acting, and clinically enhanced.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "Enhanced Formula",
                description: "Our most advanced formulation for maximum efficacy"
              },
              {
                icon: Shield,
                title: "Extended Protection",
                description: "Longer-lasting antimicrobial protection"
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "The highest standard in wound care"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a 
              href="https://store.getvitastem.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-vitastem-charcoal font-bold text-lg rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span>Shop VitaStem Ultra</span>
              <Sparkles className="w-5 h-5" />
            </a>
            <p className="text-sm text-white/50 mt-4">Coming Soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UltraSection;
