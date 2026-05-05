import { useState } from "react";
import { asset } from "../utils/asset";

const styles = [
  {
    id: "3d",
    label: "3D Animation",
    tag: "Recommended",
    tagColor: "bg-red-700 text-white",
    description:
      "Photorealistic 3D environments and characters bring hazardous scenarios to life safely. Ideal for complex machinery, underground settings, and high-impact visual storytelling.",
    highlights: ["Photorealistic environments", "Complex machinery visualisation", "Immersive depth & realism"],
    images: [
      asset("3D1.jpg"),
      asset("3D2.jpg"),
      asset("3D3.jpg"),
      asset("3D4.jpg"),
    ],
    accent: "red",
  },
  {
    id: "2d",
    label: "2D Animation",
    tag: "Versatile",
    tagColor: "bg-amber-700 text-amber-100",
    description:
      "Flat 2D illustration and character animation deliver clear, engaging storytelling with a modern graphic style. Great for procedure walkthroughs, character-led narratives, and e-learning modules.",
    highlights: ["Character-led storytelling", "Clean graphic style"],
    images: [
      asset("2D1.jpg"),
      asset("2D2.jpg"),
      asset("2D3.jpg"),
      asset("2D4.jpg"),
    ],
    accent: "amber",
  },
  {
    id: "motion",
    label: "Motion Graphics",
    tag: "Lightweight",
    tagColor: "bg-gray-700 text-gray-200",
    description:
      "Clean, data-driven motion graphics for communicating statistics, procedures, and infographics. Cost-effective and fast to produce — perfect for awareness campaigns and digital signage.",
    highlights: ["Data & statistics visualisation", "Fast turnaround", "Ideal for signage & campaigns"],
    images: [
      asset("MG1.jpg"),
      asset("MG2.jpg"),
      asset("MG3.jpg"),
      asset("MG4.jpg"),
    ],
    accent: "gray",
  },
  {
    id: "realworld",
    label: "3D Superimposition",
    tag: "Hybrid Technique",
    tagColor: "bg-blue-800 text-blue-200",
    description:
      "We photograph your actual site environments and superimpose fully animated 3D characters onto them — delivering the authenticity of a real workplace with the clarity and safety of animation.",
    highlights: ["Your real environments, photographed on-site", "3D characters composited into real scenes", "Authentic feel without live filming costs"],
    images: [
      asset("SI1.jpg"),
      asset("SI2.jpg"),
      asset("SI3.jpg"),
      asset("SI4.jpg"),
    ],
    accent: "blue",
  },
];

const accentClasses: Record<string, { ring: string; border: string; tab: string; tabActive: string; dot: string }> = {
  red: {
    ring: "ring-red-600/40",
    border: "border-red-700/40",
    tab: "text-gray-400 hover:text-white",
    tabActive: "text-white border-b-2 border-red-500",
    dot: "bg-red-500",
  },
  blue: {
    ring: "ring-blue-600/40",
    border: "border-blue-700/40",
    tab: "text-gray-400 hover:text-white",
    tabActive: "text-white border-b-2 border-blue-500",
    dot: "bg-blue-500",
  },
  amber: {
    ring: "ring-amber-600/40",
    border: "border-amber-700/40",
    tab: "text-gray-400 hover:text-white",
    tabActive: "text-white border-b-2 border-amber-500",
    dot: "bg-amber-500",
  },
  gray: {
    ring: "ring-gray-600/40",
    border: "border-gray-600/40",
    tab: "text-gray-400 hover:text-white",
    tabActive: "text-white border-b-2 border-gray-400",
    dot: "bg-gray-400",
  },
};

export default function VideoStyleSelector() {
  const [activeId, setActiveId] = useState("3d");
  const [activeImage, setActiveImage] = useState(0);

  const active = styles.find((s) => s.id === activeId)!;
  const ac = accentClasses[active.accent];

  const handleTabChange = (id: string) => {
    setActiveId(id);
    setActiveImage(0);
  };

  return (
    <div className="mt-16">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-12 bg-red-500" />
          <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
            Visual Style
          </span>
          <div className="h-px w-12 bg-red-500" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
          Choose Your Production Style
        </h3>
        <p className="text-gray-400 max-w-lg mx-auto text-sm">
          Every project can be produced in one or a blend of these styles. Select a style below to see sample imagery.
        </p>
      </div>

      <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
        <div className="flex border-b border-gray-800">
          {styles.map((s) => {
            const isActive = s.id === activeId;
            const cls = accentClasses[s.accent];
            return (
              <button
                key={s.id}
                onClick={() => handleTabChange(s.id)}
                className={`flex-1 px-4 py-4 text-sm font-semibold transition-all ${
                  isActive ? cls.tabActive + " bg-gray-900/60" : cls.tab
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-0">
          <div className="lg:col-span-3 p-1">
            <div className={`relative aspect-video rounded-xl overflow-hidden ring-1 ${ac.ring}`}>
              <img
                key={`${activeId}-${activeImage}`}
                src={active.images[activeImage]}
                alt={`${active.label} sample ${activeImage + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded ${active.tagColor}`}>
                  {active.tag}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                {active.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeImage ? ac.dot + " scale-125" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1.5 mt-1.5 px-0">
              {active.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-video rounded-lg overflow-hidden ring-1 transition-all ${
                    i === activeImage ? `${ac.ring} ring-2` : "ring-gray-800 hover:ring-gray-600"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 p-6 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-800">
            <div className={`inline-flex items-center gap-2 mb-4`}>
              <div className={`w-2 h-2 rounded-full ${ac.dot}`} />
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                {active.label}
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {active.description}
            </p>

            <div className="space-y-2.5">
              {active.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${ac.dot}`} />
                  <span className="text-gray-300 text-sm">{h}</span>
                </div>
              ))}
            </div>

            {active.id === "realworld" && (
              <div className="mt-6 bg-blue-950/20 border border-blue-900/30 rounded-xl p-4">
                <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  Required Add-on
                </div>
                <div className="text-white font-black text-xl">R 30,000</div>
                <div className="text-gray-400 text-xs mt-0.5">1-day on-site film shoot — exclusive of VAT</div>
              </div>
            )}

            {active.id === "3d" && (
              <div className="mt-6 bg-red-950/20 border border-red-900/30 rounded-xl p-4">
                <div className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  Recommended
                </div>
                <div className="text-white text-xs leading-relaxed text-gray-300">
                  Full 3D animation is our default production standard — delivering maximum visual impact and clarity.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
