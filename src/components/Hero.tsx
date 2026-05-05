import { Play, ChevronDown } from "lucide-react";
import { asset } from "../utils/asset";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${asset("/Background.jpg")})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Production Proposal
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            Visual Safety
            <br />
            <span className="text-red-500">Improved Compliance</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
            The Boiler Room proposes the development of a dedicated safety video
            tailored to your operations — designed to visually communicate
            correct procedures, risk identification, and critical controls.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#summary"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-red-900/40"
            >
              View Proposal
            </a>
            <a
              href="https://youtu.be/YOCqawhEf1U"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-4 rounded text-sm tracking-wide transition-all hover:bg-white/5 group"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-red-600 flex items-center justify-center transition-colors">
                <Play size={14} fill="white" />
              </span>
              Watch Example
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {[
            { value: "1", label: "Safety Video" },
            { value: "5 min", label: "Duration" },
            { value: "3D", label: "Animation" },
            { value: "1080p", label: "Full HD" },
          ].map((stat) => (
            <div key={stat.label} className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur">
              <div className="text-3xl font-black text-red-400 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#summary"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-bounce z-10"
      >
        <ChevronDown size={28} />
      </a>

    </section>
  );
}
