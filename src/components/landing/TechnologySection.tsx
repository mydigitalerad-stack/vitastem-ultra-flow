import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import skinpassTech from '@/assets/skinpass-tech.jpg';

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={skinpassTech}
                alt="SkinPass Technology - Transdermal Delivery System"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card p-6 rounded-2xl shadow-xl border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-extrabold text-primary">US Patent</span>
                <p className="text-sm text-muted-foreground mt-1">2020/0146983</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Logo/Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-primary/5 rounded-full border border-primary/20">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"/>
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-primary">SKIN</span>
                <span className="text-lg font-bold text-foreground">PASS</span>
                <span className="text-primary font-bold">™</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-headline">
                Patented Fast Absorption <span className="text-primary">Technology</span>
              </h2>
              
              <p className="text-body-lg text-muted-foreground">
                Advanced delivery system that helps the antibiotic absorb rapidly to protect where infection starts — <strong className="text-foreground">at the source.</strong>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Rapid Penetration</h3>
                  <p className="text-muted-foreground">SkinPass™ technology enables fast transdermal absorption through skin layers.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Source Targeting</h3>
                  <p className="text-muted-foreground">Eradicates infection at the source where wound healing begins.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Accelerated Healing</h3>
                  <p className="text-muted-foreground">Designed for deeper action and faster healing across all wound types.*</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic">
              *Claims supported by SkinPass™ Patented Technology - US 2020/0146983, patent granted. Statements relate to mechanism of SkinPass™ delivery system not the active ingredient.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
