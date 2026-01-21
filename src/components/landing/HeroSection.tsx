import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Zap, FileCheck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroProduct from '@/assets/hero-product.jpg';
import vitastemProduct from '@/assets/vitastem-product.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container-wide relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="vitastem-badge text-xs px-2.5 py-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Doctor Formulated
              </span>
              <span className="vitastem-badge text-xs px-2.5 py-1">
                <FileCheck className="w-3.5 h-3.5" />
                FDA Listed
              </span>
              <span className="vitastem-badge text-xs px-2.5 py-1">
                <Award className="w-3.5 h-3.5" />
                US Patented
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1 
                className="text-display"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="text-foreground">Advanced </span>
                <span className="text-primary">First Aid</span>
                <span className="hidden md:inline"><br /></span>
                <span className="md:hidden"> </span>
                <span className="text-foreground">Topical Antibiotic</span>
              </motion.h1>
              
              <motion.p 
                className="text-subheadline max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Powered by patented SkinPass™ Technology for rapid absorption and faster healing where traditional topicals fail.
              </motion.p>
            </div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 md:gap-6 py-6 border-y border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-2xl md:text-3xl font-bold text-primary">60</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Seconds Infection Protection*</p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-2xl md:text-3xl font-bold text-primary">99%</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Germs Killed at Source*</p>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-2xl md:text-3xl font-bold text-primary">3%</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">Tetracycline HCl</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <a 
                href="https://store.getvitastem.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hero"
              >
                Shop Now
              </a>
              <a href="#how-it-works" className="btn-outline-hero">
                Learn More
              </a>
            </motion.div>

            {/* Trust Text */}
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              OTC drug, listed with the FDA and made from FDA Generally Recognized as Safe and Effective (GRASE) ingredients.
            </motion.p>
          </motion.div>

          {/* Right - Product Image */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl rounded-full scale-150" />
              
              {/* Product Image */}
              <motion.img 
                src={vitastemProduct}
                alt="VitaStem First Aid Topical Antibiotic"
                className="relative z-10 w-full max-w-md mx-auto product-glow animate-float"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -top-4 -right-4 md:top-0 md:right-0 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, type: 'spring' }}
              >
                Patented Technology
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a href="#benefits" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll to learn more</span>
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1 h-2 bg-current rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
