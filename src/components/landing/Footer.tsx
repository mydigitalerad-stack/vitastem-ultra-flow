import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-vitastem-charcoal text-white py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                <span className="text-primary">Vita</span>Stem
              </h3>
              <p className="text-sm text-white/60">First Aid Topical Antibiotic</p>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Powered by patented SkinPass™ Technology for advanced wound care. FDA listed, doctor formulated, and clinically proven.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
              <span className="text-sm font-medium">Powered by</span>
              <span className="font-bold">SKIN<span className="text-white/60">PASS</span>™</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#how-to-use" className="hover:text-white transition-colors">Directions</a></li>
              <li><a href="#ingredients" className="hover:text-white transition-colors">Ingredients</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="https://store.getvitastem.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Shop Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="mailto:info@viaderma.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  info@viaderma.com
                </a>
              </li>
              <li>
                <a href="tel:+18005858685" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +1 (800) 585-8685
                </a>
              </li>
              <li>
                <a href="https://www.viaderma.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                  viaderma.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>1050 E Flamingo Rd, Suite 107, Las Vegas, NV 89119, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Viaderma Distribution INC. All rights reserved.</p>
            <p>VitaStem® is a registered trademark. Developed under FDA monograph M004.</p>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-8 p-4 bg-white/5 rounded-xl">
          <p className="text-xs text-white/40 text-center">
            <strong className="text-white/60">Medical Disclaimer:</strong> VitaStem is an over-the-counter topical first aid antibiotic intended for the prevention of infection in minor cuts, scrapes, and burns. This website is not intended to replace professional medical advice. Use only as directed on the product labeling. If you have any further questions on the use of this product, ask your healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
