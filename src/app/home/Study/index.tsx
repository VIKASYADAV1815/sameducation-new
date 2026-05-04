import Image from "next/image";
import Link from "next/link";

export const Study = () => {
  const studyOptions = [
    "School students", "Graduates",
    "Professional", "Parent",
    "Next >"
  ];

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-lg">
          {/* Image Side */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
            <Image 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Study Opportunities" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          {/* Content Side */}
          <div className="md:w-1/2 bg-yellow-500 text-gray-900 p-2 relative">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="h-full border-[1px] border-yellow-600/30 p-1 rounded-lg">
              <div className="h-full border-[1px] border-yellow-600/20 rounded-lg p-6 md:p-10 relative z-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">Study</h2>
                <p className="text-gray-800 mb-8 text-lg">Discover your career opportunities</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {studyOptions.map((option, index) => (
                    <Link 
                      href={`/study/${option.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                      key={index}
                      className={`border border-gray-900/20 hover:bg-yellow-600/50 hover:border-gray-900 transition-colors py-3 px-4 text-center rounded text-sm font-semibold backdrop-blur-sm ${option === 'Next >' ? 'sm:col-span-2 bg-gray-900 text-white hover:text-white hover:bg-gray-800 border-transparent' : ''}`}
                    >
                      {option}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
