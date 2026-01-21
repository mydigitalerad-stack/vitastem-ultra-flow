import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Zap, Target, Droplets, Clock, Award } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: "FDA Listed Antibiotic",
    description: "Applied topically to the skin, clinically proven to help close wounds faster, reduce infection risk, and restore tissue integrity."
  },
  {
    icon: Target,
    title: "99% Germs Killed",
    description: "In Vitro studies demonstrated VitaStem kills >99.0% of E.coli, P. Aeruginosa, MRSA, MSSA, & MuRSA, and >98.0% of CNSA."
  },
  {
    icon: Clock,
    title: "60-Second Protection",
    description: "Patented SkinPass™ Technology delivers rapid absorption for infection protection in just 60 seconds."
  },
  {
    icon: Zap,
    title: "Faster Healing",
    description: "Advanced transdermal delivery system accelerates wound closure across all wound types—from diabetic ulcers to surgical incisions."
  },
  {
    icon: Droplets,
    title: "No Alcohol Formula",
    description: "Gentle, alcohol-free formula that goes on smoothly and absorbs quickly so first aid feels simple and reliable."
  },
  {
    icon: Award,
    title: "Doctor Formulated",
    description: "Developed under FDA monograph M004 with GRASE (Generally Recognized as Safe and Effective) ingredients."
  }
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why VitaStem
          </span>
          <h2 className="text-headline mb-4">
            Advanced Wound Care <span className="text-primary">Benefits</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            VitaStem's unique formula significantly improves outcomes in the management of minor cuts, scrapes, and burns where traditional topicals fail.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="card-feature group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
