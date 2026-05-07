import Image from "next/image";
import Link from "next/link";

export const GlobalIndian = () => {
  const links = [
    "GERMANY",
    "Bachelors/Masters",
    "AUSBILDUNG",
    "OPPORTUNITY CARD",
    "MBBS in Central America",
    "MS/MD/MDS"
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative p-4 lg:p-8">
          <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border-[1px] border-gray-200/50 p-1" />
          <div className="absolute inset-2 bg-gray-50/80 backdrop-blur-sm rounded-2xl border-[1px] border-gray-200/30" style={{ backgroundImage: 'radial-gradient(circle, #00000008 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          {/* Content Side */}
          <div className="lg:w-1/2 relative z-10 pl-4 lg:pl-8 pt-8 lg:pt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
              Germany & Medical Program Focus
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-500 rounded-full" />
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Only the exact pathways your client shared: GERMANY, Bachelors/Masters, AUSBILDUNG, OPPORTUNITY CARD, MBBS in Central America, MS/MD/MDS.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {links.map((link, index) => (
                <Link
                  href={`/global-indian/${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  key={index}
                  className="bg-red-500 hover:bg-red-600 text-white text-center py-3 px-6 rounded-md font-medium transition-colors shadow-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl border-l-8 border-red-500">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Global Indians Team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
