import { Play, Clock } from "lucide-react";
import VideoStyleSelector from "./VideoStyleSelector";

const formats = [
  {
    type: "Awareness Campaign",
    duration: "30 sec – 1 min",
    description:
      "Punchy, visual snippets for safety campaigns, toolbox talks, and digital signage. High energy, single key message per topic.",
    tag: "Campaign",
    color: "border-blue-800/50 bg-blue-950/20",
    tagColor: "bg-blue-900/50 text-blue-300",
    image: "https://img.youtube.com/vi/tVjVTMaMmlY/maxresdefault.jpg",
    youtubeId: "tVjVTMaMmlY",
  },
  {
    type: "Standard Safety Video",
    duration: "~5 Minutes",
    description:
      "The recommended format for this proposal. Informative, engaging, and practical. Ideal for induction, refresher training, and general safety awareness.",
    tag: "Recommended",
    color: "border-red-700/60 bg-red-950/20",
    tagColor: "bg-red-700 text-white",
    image: "https://img.youtube.com/vi/VVqsaJGHP1Y/maxresdefault.jpg",
    featured: true,
    youtubeId: "VVqsaJGHP1Y",
  },
  {
    type: "In-Depth SOP Training",
    duration: "20–23 Minutes",
    description:
      "Full SOP and induction training content. Step-by-step procedure walkthroughs with comprehensive hazard scenarios and compliance requirements.",
    tag: "Deep Training",
    color: "border-gray-700/50 bg-gray-900/30",
    tagColor: "bg-gray-800 text-gray-300",
    image: "https://img.youtube.com/vi/GzohpH_ULhk/maxresdefault.jpg",
    youtubeId: "GzohpH_ULhk",
  },
];

export default function VideoFormats() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Flexible Formats
            </span>
            <div className="h-px w-12 bg-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            One Story, Multiple Formats
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The same core content can be repurposed across different formats
            depending on the objective and audience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {formats.map((f) => (
            <div
              key={f.type}
              className={`border rounded-xl overflow-hidden ${f.color} ${
                f.featured ? "ring-2 ring-red-600/40" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={f.image}
                  alt={f.type}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  {f.youtubeId ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${f.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center border border-white/30 transition-all backdrop-blur-sm bg-white/20 hover:bg-red-600"
                    >
                      <Play size={16} fill="white" className="text-white ml-0.5" />
                    </a>
                  ) : (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm bg-white/10 opacity-50 cursor-default">
                      <Play size={16} fill="white" className="text-white ml-0.5" />
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 bg-black/50 rounded px-2.5 py-1 backdrop-blur-sm">
                    <Clock size={11} className="text-gray-300" />
                    <span className="text-white text-xs font-semibold">{f.duration}</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded ${f.tagColor}`}>
                    {f.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-2">{f.type}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

<VideoStyleSelector />
      </div>

    </section>
  );
}
