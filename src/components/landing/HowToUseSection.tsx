import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Timer, Hand, ShieldCheck } from 'lucide-react';
import doctorApplying from '@/assets/doctor-applying.jpg';

const steps = [
  {
    icon: ShieldCheck,
    step: "01",
    title: "Clean the Area",
    description: "Clean the affected area before application"
  },
  {
    icon: Droplets,
    step: "02", 
    title: "Apply Product",
    description: "Apply directly into the wound as droplets or spray"
  },
  {
    icon: Hand,
    step: "03",
    title: "Massage In",
    description: "Massage into the tissue for 20 seconds until absorbed"
  },
  {
    icon: Timer,
    step: "04",
    title: "Cover & Repeat",
    description: "Cover with sterile dressing. Apply 1-3 times daily"
  }
];

const HowToUseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-to-use" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Directions For Use
          </span>
          <h2 className="text-headline mb-4">
            Simple <span className="text-primary">Application</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            VitaStem goes on smoothly and absorbs quickly so first aid feels simple and reliable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex gap-5 p-5 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img 
                src={doctorApplying}
                alt="Medical professional applying VitaStem"
                className="w-full h-auto"
              />
            </div>
            
            {/* Info Card */}
            <motion.div 
              className="absolute -bottom-6 left-6 right-6 md:left-8 md:right-8 bg-card/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Pro Tip</p>
                  <p className="text-sm text-muted-foreground">Wound dressings are recommended to prevent yellow staining from the tetracycline hydrochloride.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Storage Info */}
        <motion.div 
          className="mt-16 p-6 md:p-8 rounded-2xl bg-card border border-border text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h4 className="font-bold text-lg mb-2">Storage Instructions</h4>
          <p className="text-muted-foreground">Store between 68-77°F (20-25°C). May stain cloth.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUseSection;
