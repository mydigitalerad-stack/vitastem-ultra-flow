import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import vitastemProduct from '@/assets/vitastem-product.jpg';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-vitastem-red-dark p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Experience Faster Healing?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands who trust VitaStem for advanced wound care. Doctor formulated, FDA listed, and proven effective.
              </p>

              {/* Trust Points */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <span className="text-sm text-white/80">FDA Listed</span>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <span className="text-sm text-white/80">60s Protection</span>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <span className="text-sm text-white/80">Patented Tech</span>
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="https://store.getvitastem.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold text-lg rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Shop VitaStem Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Product Image */}
            <motion.div 
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <img 
                src={vitastemProduct}
                alt="VitaStem Product"
                className="max-w-xs drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
