import { deploymentOptions } from "../data/boilerbox";
import { Zap, Hammer, Shield, Droplets, Heart, Utensils } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "Mining & Resources": Zap,
  Manufacturing: Hammer,
  Construction: Shield,
  "Oil & Gas": Droplets,
  Healthcare: Heart,
  "Hospitality & Food Service": Utensils,
};

export default function BoilerBoxDeployments() {
  return (
    <section id="industries" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Industry Solutions
            </span>
            <div className="h-px w-12 bg-red-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Built for Every Industry
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From mining operations to healthcare facilities, BoilerBox 360 adapts to your
            industry-specific training needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deploymentOptions.map((option) => {
            const Icon = iconMap[option.title] || Zap;
            return (
              <div
                key={option.title}
                className="group bg-gray-900 border border-gray-800 hover:border-red-700/50 rounded-xl p-6 transition-all hover:bg-gray-900/80"
              >
                <div className="w-12 h-12 bg-red-600/10 group-hover:bg-red-600/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon size={24} className="text-red-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{option.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{option.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-red-400 text-sm font-bold uppercase tracking-widest mb-4">
                Success Story
              </div>
              <h3 className="text-white text-3xl font-black mb-4">
                Underground Training,
                <span className="text-red-500"> Zero Connectivity</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                A major mining operation needed to train 120 workers across multiple underground
                levels where internet is unavailable. BoilerBox 360 was deployed with 6 units
                and 120 tablets, allowing simultaneous training at 6 different locations with
                full LMS functionality.
              </p>
              <div className="flex gap-6 pt-4">
                <div>
                  <div className="text-red-400 text-3xl font-black">120+</div>
                  <div className="text-gray-500 text-sm">Workers Trained</div>
                </div>
                <div>
                  <div className="text-red-400 text-3xl font-black">6</div>
                  <div className="text-gray-500 text-sm">Concurrent Sites</div>
                </div>
                <div>
                  <div className="text-red-400 text-3xl font-black">0%</div>
                  <div className="text-gray-500 text-sm">Internet Needed</div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-blue-600/10 rounded-2xl blur-3xl" />
              <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl border border-gray-700 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/3881132/pexels-photo-3881132.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Mining operations"
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-black text-red-500 mb-2">360°</div>
                      <div className="text-white font-semibold">Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
