import Image from "next/image";
import Link from "next/link";

export const Coaching = () => {
  const coachingOptions = [
    "IELTS", "PTE-Academic", "PTE-Core",
    "TOEFL", "German", "CELPIP",
    "OET", "Duolingo English Test", "Register for Free Demo",
    "Coaching Demo Videos"
  ];

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-lg">
          {/* Image Side */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
            <Image 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
              alt="Expert Coaching" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          {/* Content Side */}
          <div className="md:w-1/2 bg-blue-700 text-white p-2 relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="h-full border-[1px] border-blue-400/50 p-1 rounded-lg">
              <div className="h-full border-[1px] border-blue-400/30 rounded-lg p-6 md:p-10 relative z-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">Coaching</h2>
                <p className="text-blue-100 mb-8 text-lg">Ace your scores with our expert coaching services</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {coachingOptions.map((option, index) => (
                    <Link 
                      href={`/coaching/${option.toLowerCase().replace(/\s+/g, '-')}`} 
                      key={index}
                      className="border border-blue-500/50 hover:bg-blue-600 transition-colors py-3 px-4 text-center rounded text-sm font-medium backdrop-blur-sm"
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
