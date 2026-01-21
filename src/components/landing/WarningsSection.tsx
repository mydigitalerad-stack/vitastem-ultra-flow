import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, XCircle, Phone, Mail, Globe, Building2 } from 'lucide-react';

const WarningsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const warnings = [
    "For external use only. It may be harmful if swallowed.",
    "Not for use during pregnancy or if you suspect you may be pregnant, unless directed by a healthcare provider.",
    "Ask a doctor before use if you have deep or puncture wounds, animal bites, or serious trauma.",
    "Do not use if you are allergic (hypersensitive) to Tetracycline Hydrochloride or any of the other ingredients.",
    "Do not use in the eyes.",
    "Do not use for longer than 1 week unless directed by a doctor.",
    "Do not use over large areas of the body.",
    "Stop use and ask a doctor if the condition persists or gets worse.",
    "Keep out of reach of children. If swallowed, get medical help or contact a Poison Control Center immediately.",
    "Discontinue use if irritation or rash develops."
  ];

  return (
    <section id="warnings" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Warnings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-accent-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Warnings & Precautions</h2>
            </div>

            <div className="space-y-3">
              {warnings.map((warning, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3 p-4 bg-card rounded-xl border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <XCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{warning}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Disposal */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Adverse Events */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-bold mb-4">Report Adverse Events</h3>
              <p className="text-muted-foreground mb-4">
                If you experience any adverse events, please report them to:
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Viaderma Distribution INC</p>
                <a href="https://www.viaderma.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  www.viaderma.com
                </a>
              </div>
            </div>

            {/* Disposal */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-bold mb-4">Proper Disposal</h3>
              <p className="text-muted-foreground">
                Medicines should not be disposed of via wastewater or household waste. Ask your pharmacist how to dispose of medicines you no longer require. These measures will help to protect the environment.
              </p>
            </div>

            {/* Customer Support */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="text-lg font-bold mb-4 text-primary">Customer Support</h3>
              <p className="text-muted-foreground mb-4">
                For inquiries or to report reactions:
              </p>
              
              <div className="space-y-3">
                <a href="mailto:info@viaderma.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@viaderma.com</span>
                </a>
                <a href="tel:+18005858685" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (800) 585-8685</span>
                </a>
                <a href="https://www.viaderma.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>www.viaderma.com</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1050 E Flamingo Rd, Suite 107, Las Vegas, NV 89119, USA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WarningsSection;
