import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-24 pb-8 border-t border-gray-200 text-gray-600 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" className="text-gray-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)"/>
        </svg>
      </div>

      {/* Fade Effect Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      {/* Floating Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40 z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -ml-60 -mb-60 z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight">SAMEDUCATION</span>
              <span className="text-xs text-primary font-semibold tracking-wider mt-1 uppercase">Creating Global Leaders</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              Navigate your academic journey seamlessly. Get expert university admissions and study abroad consulting with guaranteed worldwide support.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-md transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:shadow-md transition-all duration-300">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-md transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-[#E4405F] hover:border-[#E4405F] hover:shadow-md transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-gray-900 font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-primary transition-colors">Study Visas</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">PR Visas</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Work Visas</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Business Visas</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Eligibility Check</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-bold mb-6">Top Destinations</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-primary transition-colors">Canada</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Australia</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Germany</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">United Kingdom</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">United States</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-bold mb-6">Coaching</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-primary transition-colors">IELTS Preparation</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">PTE Academic</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">TOEFL</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">German Language</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Free Demo Classes</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-bold mb-6">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-primary transition-colors">Immigration News</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Points Calculator</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Global Indian</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
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
