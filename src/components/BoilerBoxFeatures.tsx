import { BookOpen, Users, Zap, Wifi, FileText, Headphones } from "lucide-react";
import { boilerboxFeatures } from "../data/boilerbox";

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  BookOpen,
  Users,
  Zap,
  FileText,
  Headphones,
};

export default function BoilerBoxFeatures() {
  return (
    <section id="features" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Core Features
            </span>
            <div className="h-px w-12 bg-red-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why BoilerBox 360
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete learning solution designed for high-stakes industries where connectivity
            cannot be guaranteed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {boilerboxFeatures.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group bg-gray-900 border border-gray-800 hover:border-red-700/50 rounded-xl p-6 transition-all hover:bg-gray-900/80"
              >
                <div className="w-12 h-12 bg-red-600/10 group-hover:bg-red-600/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon size={24} className="text-red-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-950/40 to-transparent border border-red-900/30 rounded-xl p-6">
                <div className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">
                  Built for Teams
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Scale your training from a single device to 20 simultaneous learners. Perfect for
                  on-site training, field operations, and remote locations.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-950/40 to-transparent border border-amber-900/30 rounded-xl p-6">
                <div className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-2">
                  Offline First
                </div>
                <p className="text-gray-300 leading-relaxed">
                  No internet? No problem. Your training content is stored locally with full WiFi
                  and Ethernet connectivity options included.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-950/40 to-transparent border border-blue-900/30 rounded-xl p-6">
                <div className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2">
                  Complete Ecosystem
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Comes with Moodle LMS, admin tools, facilitator guides, training videos, and
                  everything you need to launch immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-blue-600/10 rounded-2xl blur-3xl" />
            <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl border border-gray-700 overflow-hidden flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
                  360°
                </div>
                <div className="text-white font-bold text-xl">Complete Training Solution</div>
                <div className="text-gray-400 text-sm max-w-xs mx-auto">
                  Hardware, software, content management, and support — all-in-one package
                </div>
                <div className="flex justify-center gap-2 pt-4">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
