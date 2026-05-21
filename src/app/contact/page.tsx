import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SAMEDUCATION",
  description: "Get in touch with SAMEDUCATION for expert guidance on studying abroad.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <section className="relative py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
        
        <div className="relative z-10 text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            [ Let's Connect ]
          </span>
          <h1 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight uppercase mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about studying abroad? Our expert counselors are here to help you navigate your journey. Reach out to us today.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-10 border border-gray-100 shadow-xl">
            <h2 className="text-2xl font-medium tracking-tight uppercase text-slate-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">Office Address</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  SAMEDUCATION Headquarters<br />
                  1st Floor, Madina Mansion Rd<br />
                  opp. Central, Narayanguda<br />
                  Hyderabad, Telangana 500029
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">
                  <a href="tel:+919615543210" className="hover:text-slate-900 transition-colors">+91 9615543210</a><br />
                  <a href="tel:+4915236172349" className="hover:text-slate-900 transition-colors">+49 1523 6172349</a>
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">
                  <a href="mailto:info@sameducation.com" className="hover:text-slate-900 transition-colors">info@sameducation.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 border border-gray-100 shadow-xl">
            <h2 className="text-2xl font-medium tracking-tight uppercase text-slate-900 mb-8">Send a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-slate-900 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors text-sm" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-slate-900 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors text-sm" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="interest" className="block text-xs font-bold tracking-widest uppercase text-slate-900 mb-2">Area of Interest</label>
                <select id="interest" className="w-full px-4 py-3 bg-slate-50 border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors text-sm text-gray-700">
                  <option value="">Select a pathway</option>
                  <option value="nursing">Nursing (Canada/UK)</option>
                  <option value="mbbs">MBBS Abroad</option>
                  <option value="pg-germany">MS/MD/MDS in Germany</option>
                  <option value="ms-md">Global MS/MD/MDS</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-slate-900 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-slate-50 border border-gray-200 focus:outline-none focus:border-blue-600 transition-colors text-sm resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-slate-900 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-blue-600 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
