import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: "Severe Kerosene Burns To Legs",
    treatment: "2x 15mL bottles for 12 days",
    days: "12",
    category: "Burns"
  },
  {
    title: "Diabetic Infected Foot Ulcer",
    treatment: "2x 15mL bottles for 90 days",
    days: "90",
    category: "Diabetic Ulcer"
  },
  {
    title: "Dog Declaw Injury",
    treatment: "1x 15mL bottle for 17 days",
    days: "17",
    category: "Trauma"
  },
  {
    title: "MRSA Infected Wound",
    treatment: "1x 15mL bottle for 22 days (after 6 weeks IV Vancomycin)",
    days: "22",
    category: "MRSA"
  },
  {
    title: "Foot Wound in a Patient with Diabetes",
    treatment: "1x 15mL bottle",
    days: "22",
    category: "Diabetic Wound"
  },
  {
    title: "Severe Non-healing Chronic Wound",
    treatment: "1x 15mL bottle",
    days: "63",
    category: "Chronic Wound"
  },
  {
    title: "Unknown Insect Bite",
    treatment: "1x 15mL bottle",
    days: "25",
    category: "Insect Bite"
  },
  {
    title: "Surgical Wound from Bypass Surgery",
    treatment: "1x 15mL bottle",
    days: "22",
    category: "Surgical"
  },
  {
    title: "2-Month Old Toe Ulcer",
    treatment: "1x 15mL bottle",
    days: "17",
    category: "Ulcer"
  }
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(caseStudies.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const visibleCases = caseStudies.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="case-studies" className="section-padding vitastem-section-red" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
            Real Results
          </span>
          <h2 className="text-headline text-white mb-4">
            Case Studies
          </h2>
          <p className="text-body-lg text-white/80">
            See how VitaStem has helped patients with various wound types achieve remarkable healing outcomes.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleCases.map((study, index) => (
            <motion.div
              key={study.title}
              className="bg-white rounded-2xl p-6 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
                {study.category}
              </span>
              
              <h3 className="text-lg font-bold mb-4 text-foreground line-clamp-2">
                {study.title}
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Droplets className="w-4 h-4 text-primary" />
                  <span>{study.treatment}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Healed in</span>
                  <span className="text-2xl font-bold text-primary">{study.days}</span>
                  <span className="text-sm text-muted-foreground">days</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="flex-1 text-center p-2 bg-secondary rounded-lg">
                  <span className="text-xs text-muted-foreground block">Before</span>
                  <span className="text-sm font-medium">Day 0</span>
                </div>
                <div className="text-primary">→</div>
                <div className="flex-1 text-center p-2 bg-primary/10 rounded-lg">
                  <span className="text-xs text-muted-foreground block">After</span>
                  <span className="text-sm font-medium text-primary">Day {study.days}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white w-6' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Disclaimer */}
        <motion.p 
          className="text-xs text-white/60 text-center mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Product images are provided for illustrative purposes only. Actual packaging, bottle size, labeling, and appearance may vary. VitaStem is an over-the-counter topical first aid antibiotic intended for the prevention of infection in minor cuts, scrapes, and burns. This brochure is not intended to replace professional medical advice. Use only as directed on the product labeling.
        </motion.p>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
