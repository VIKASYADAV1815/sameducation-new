export const ConsultantInfo = () => {
  return (
    <section className="w-full py-16 bg-white relative overflow-hidden">
      {/* Subtle flowing background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-[400px] h-[400px] bg-green-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Your Trusted Partner in <span className="text-primary">Global Education</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              SAMEDUCATION is India's No.1 Overseas Career and Immigration Consultant, established to provide premier educational guidance. We offer personalized, end-to-end support for study visas, permanent residency, and skilled worker programs globally.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-3xl font-black text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Global Offices</div>
              </div>
            </div>
          </div>

          {/* Right Features Area */}
          <div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Global Reach</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Offices across India, UAE, UK, Australia, and Canada for seamless worldwide support.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Expert Guidance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Licensed agents offering one-on-one consulting for a stress-free journey.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">High Success</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proven track record with over 50% of clients coming through word-of-mouth.
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Fast Processing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Streamlined operations ensuring swift and reliable visa processing times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
