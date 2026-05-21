import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 via-indigo-50 to-gray-100 pt-16 pb-8 text-gray-700 relative overflow-hidden font-sans border-t-4 border-blue-600">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="#2563eb" strokeWidth="0.5" opacity="0.2" />
              <circle cx="40" cy="40" r="10" fill="#dbeafe" opacity="0.4" />
              <rect x="10" y="10" width="60" height="60" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerPattern)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <Link href="/" className="flex items-center mb-6 text-gray-900">
              <div className="w-24 h-24 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('/logo.png')" }} aria-label="SAM Education logo" />
            </Link>
            <p className="text-[12px] font-medium leading-relaxed tracking-wider mb-8 text-gray-600 uppercase">
              Navigate your academic journey seamlessly. Get expert university admissions and study abroad consulting with guaranteed worldwide support.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border border-blue-300 flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-300 to-sky-500 border border-sky-300 flex items-center justify-center text-white hover:from-sky-400 hover:to-sky-600 hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border border-blue-500 flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-900 hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 border border-pink-400 flex items-center justify-center text-white hover:from-pink-600 hover:to-rose-700 hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/60 hover:bg-white/60 transition-all duration-300">
              <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-[11px] flex items-center"><span className="w-1 h-4 bg-blue-600 rounded mr-2"></span>Our Services</h4>
              <ul className="space-y-3 text-[12px] font-medium tracking-wide">
                <li><Link href="/services#visa" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">→</span>Dependent Visa & Extension</Link></li>
                <li><Link href="/services#airport" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">→</span>Airport Transfers</Link></li>
                <li><Link href="/services#accommodation" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">→</span>Accommodation</Link></li>
                <li><Link href="/services#immigration" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">→</span>Immigration Consulting</Link></li>
                <li><Link href="/services#job" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"><span className="mr-2">→</span>Job Placement Assistance</Link></li>
              </ul>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/60 hover:bg-white/60 transition-all duration-300">
              <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-[11px] flex items-center"><span className="w-1 h-4 bg-indigo-600 rounded mr-2"></span>More Services</h4>
              <ul className="space-y-3 text-[12px] font-medium tracking-wide">
                <li><Link href="/services#pastoral" className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center"><span className="mr-2">→</span>Pastoral Support</Link></li>
                <li><Link href="/services#exam-prep" className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center"><span className="mr-2">→</span>Licensure Exam Prep</Link></li>
                <li><Link href="/services#licensure" className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center"><span className="mr-2">→</span>Licensure Application</Link></li>
                <li><Link href="/services#ielts-pte" className="text-gray-700 hover:text-indigo-600 transition-colors flex items-center"><span className="mr-2">→</span>IELTS / PTE Training</Link></li>
              </ul>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/60 hover:bg-white/60 transition-all duration-300">
              <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-[11px] flex items-center"><span className="w-1 h-4 bg-blue-700 rounded mr-2"></span>Study Pathways</h4>
              <ul className="space-y-3 text-[12px] font-medium tracking-wide">
                <li><Link href="/pg-germany" className="text-gray-700 hover:text-blue-700 transition-colors flex items-center"><span className="mr-2">→</span>MS / MD / MDS in Germany</Link></li>
                <li><Link href="/pg-germany" className="text-gray-700 hover:text-blue-700 transition-colors flex items-center"><span className="mr-2">→</span>Approbation Roadmap</Link></li>
                <li><Link href="/pg-germany" className="text-gray-700 hover:text-blue-700 transition-colors flex items-center"><span className="mr-2">→</span>FSP / KP Guidance</Link></li>
                <li><Link href="/mbbs" className="text-gray-700 hover:text-blue-700 transition-colors flex items-center"><span className="mr-2">→</span>MBBS Abroad</Link></li>
                <li><Link href="/ms-md-mds" className="text-gray-700 hover:text-blue-700 transition-colors flex items-center"><span className="mr-2">→</span>Global MS / MD / MDS</Link></li>
              </ul>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg border border-white/60 hover:bg-white/60 transition-all duration-300">
              <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-[11px] flex items-center"><span className="w-1 h-4 bg-cyan-600 rounded mr-2"></span>Quick Links</h4>
              <ul className="space-y-3 text-[12px] font-medium tracking-wide">
                <li><Link href="/#about" className="text-gray-700 hover:text-cyan-600 transition-colors flex items-center"><span className="mr-2">→</span>About Us</Link></li>
                <li><Link href="/#testimonials" className="text-gray-700 hover:text-cyan-600 transition-colors flex items-center"><span className="mr-2">→</span>Success Stories</Link></li>
                <li><Link href="/#faq" className="text-gray-700 hover:text-cyan-600 transition-colors flex items-center"><span className="mr-2">→</span>FAQ</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors flex items-center"><span className="mr-2">→</span>Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 border-gray-300 text-xs sm:text-sm text-gray-600">
          <p className="text-gray-700 font-semibold">© {new Date().getFullYear()} SAMEDUCATION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
