import { Play, ChevronDown } from "lucide-react";
import backgroundImage from "../../public/image.png";

export default function BoilerBoxHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Learning Revolution
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            Take Learning
            <br />
            <span className="text-red-500">Any Place, Any Time</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
            BoilerBox 360 is a self-contained training powerhouse that works offline.
            Connect 20 learners instantly, access built-in LMS, and empower your team with
            knowledge that goes wherever they do.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#packages"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-red-900/40"
            >
              Explore Packages
            </a>
            <a
              href="https://youtu.be/dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-4 rounded text-sm tracking-wide transition-all hover:bg-white/5 group"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-red-600 flex items-center justify-center transition-colors">
                <Play size={14} fill="white" />
              </span>
              Watch Demo
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {[
            { value: "20", label: "Simultaneous Learners" },
            { value: "0%", label: "Internet Required" },
            { value: "4.5+", label: "Moodle LMS" },
            { value: "100%", label: "Offline Ready" },
          ].map((stat) => (
            <div key={stat.label} className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur">
              <div className="text-3xl font-black text-red-400 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-bounce z-10"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
