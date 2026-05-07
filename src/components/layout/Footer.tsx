import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-white/70 relative overflow-hidden font-sans border-t border-white/10">
      {/* Background Image Pattern */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1074&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.10] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/90" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <Link href="/" className="flex flex-col mb-6 text-white">
              <svg className="w-10 h-10 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 22h20L12 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10l-4 8h8l-4-8z" />
              </svg>
              <span className="text-sm font-medium tracking-[0.2em] uppercase">Sameducation</span>
            </Link>
            <p className="text-[12px] font-medium leading-relaxed tracking-wider mb-8 text-white/50 uppercase">
              Navigate your academic journey seamlessly. Get expert university admissions and study abroad consulting with guaranteed worldwide support.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[11px]">Our Services</h4>
              <ul className="space-y-3 text-[12px] font-medium tracking-wide">
                <li><Link href="/services#visa" className="hover:text-white transition-colors">Dependent Visa & Extension</Link></li>
                <li><Link href="/services#airport" className="hover:text-white transition-colors">Airport Transfers</Link></li>
                <li><Link href="/services#accommodation" className="hover:text-white transition-colors">Accommodation</Link></li>
                <li><Link href="/services#immigration" className="hover:text-white transition-colors">Immigration Consulting</Link></li>
                <li><Link href="/services#job" className="hover:text-white transition-colors">Job Placement Assistance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[11px]">More Services</h4>
              <ul className="space-y-3 text-[12px] font-medium tracking-wide">
                <li><Link href="/services#pastoral" className="hover:text-white transition-colors">Pastoral Support</Link></li>
                <li><Link href="/services#exam-prep" className="hover:text-white transition-colors">Licensure Exam Prep</Link></li>
                <li><Link href="/services#licensure" className="hover:text-white transition-colors">Licensure Application</Link></li>
                <li><Link href="/services#ielts-pte" className="hover:text-white transition-colors">IELTS / PTE Training</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[11px]">Study Pathways</h4>
              <ul className="space-y-3 text-[12px] font-medium tracking-wide">
                <li><Link href="/pathways/germany" className="hover:text-white transition-colors">Germany Bachelors/Masters</Link></li>
                <li><Link href="/pathways/germany-ausbildung" className="hover:text-white transition-colors">Germany AUSBILDUNG</Link></li>
                <li><Link href="/pathways/germany-opportunity-card" className="hover:text-white transition-colors">Opportunity Card</Link></li>
                <li><Link href="/pathways/central-america-mbbs" className="hover:text-white transition-colors">MBBS in Central America</Link></li>
                <li><Link href="/pathways/ms-md-mds" className="hover:text-white transition-colors">MS / MD / MDS</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-[11px]">Quick Links</h4>
              <ul className="space-y-3 text-[12px] font-medium tracking-wide">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/testimonials" className="hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs sm:text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            <Link href="#" className="hover:text-primary transition-colors">Refund Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-primary transition-colors">Anti Fraud Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
          <p>© {new Date().getFullYear()} SAMEDUCATION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
