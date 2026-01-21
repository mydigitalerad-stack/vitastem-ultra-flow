import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlaskConical, Pill, Leaf } from 'lucide-react';

const IngredientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeIngredient = {
    name: "Tetracycline Hydrochloride",
    percentage: "3%",
    description: "Broad-spectrum antibiotic that fights bacterial infections"
  };

  const inactiveIngredients = [
    "Acetic Acid", "Ascorbic Acid", "Cholecalciferol", "Dimethyl Sulfoxide",
    "Dipropylene Glycol", "Gluconolactone", "Glycerin", "Histidine",
    "Hydroxyethyl-Cellulose", "Magnesium Stearate", "Sodium Hydroxide",
    "Sorbic Acid", "Water"
  ];

  return (
    <section id="ingredients" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            What's Inside
          </span>
          <h2 className="text-headline mb-4">
            Quality <span className="text-primary">Ingredients</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Made from FDA Generally Recognized as Safe and Effective (GRASE) ingredients.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Active Ingredient */}
          <motion.div
            className="p-8 rounded-3xl bg-gradient-to-br from-primary to-vitastem-red-dark text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Pill className="w-7 h-7" />
              </div>
              <div>
                <span className="text-sm font-medium opacity-80">Active Ingredient</span>
                <h3 className="text-2xl font-bold">{activeIngredient.name}</h3>
              </div>
            </div>
            
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="text-6xl md:text-7xl font-extrabold">{activeIngredient.percentage}</span>
                <p className="text-lg opacity-90 mt-2">{activeIngredient.description}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm opacity-80">
                Tetracycline is a proven antibiotic that has been used safely for decades in wound care and infection prevention.
              </p>
            </div>
          </motion.div>

          {/* Inactive Ingredients */}
          <motion.div
            className="p-8 rounded-3xl bg-card border border-border"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FlaskConical className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Inactive Ingredients</span>
                <h3 className="text-2xl font-bold text-foreground">Supporting Formula</h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {inactiveIngredients.map((ingredient, index) => (
                <motion.span
                  key={ingredient}
                  className="px-3 py-1.5 bg-secondary rounded-full text-sm text-secondary-foreground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  {ingredient}
                </motion.span>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
              <Leaf className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Contains <strong className="text-foreground">NO ALCOHOL</strong> — gentle on skin
              </p>
            </div>
          </motion.div>
        </div>

        {/* Product Details */}
        <motion.div 
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="p-5 rounded-xl bg-secondary text-center">
            <span className="text-sm text-muted-foreground">Net Weight</span>
            <p className="text-lg font-bold text-foreground">0.5 oz (15mL)</p>
          </div>
          <div className="p-5 rounded-xl bg-secondary text-center">
            <span className="text-sm text-muted-foreground">Classification</span>
            <p className="text-lg font-bold text-foreground">Topical Ointment</p>
          </div>
          <div className="p-5 rounded-xl bg-secondary text-center">
            <span className="text-sm text-muted-foreground">Use</span>
            <p className="text-lg font-bold text-foreground">External Only</p>
          </div>
          <div className="p-5 rounded-xl bg-secondary text-center">
            <span className="text-sm text-muted-foreground">Technology</span>
            <p className="text-lg font-bold text-foreground">SkinPass™</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IngredientsSection;
