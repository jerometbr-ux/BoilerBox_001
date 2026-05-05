import { useState, useRef, useCallback } from "react";
import { Play, Pause, ChevronDown, ChevronUp, Mic } from "lucide-react";
import { asset } from "../utils/asset";

const filmImages = [
  asset("Real-World_Filming_1.jpg"),
  asset("Real-World_Filming_2.jpg"),
  asset("Real-World_Filming_3.jpg"),
  asset("Real-World_Filming_4.jpg"),
  asset("Real-World_Filming_5.jpg"),
];

const animImages = [
  asset("3D_environments_1.jpg"),
  asset("3D_environments_2.jpg"),
  asset("3D_environments_3.jpg"),
  asset("3D_environments_4.jpg"),
  asset("3D_environments_5.jpg"),
  asset("3D_environments_6.jpg"),
];

function ImageGrid({ images }: { images: string[] }) {
  const isFive = images.length === 5;
  return (
    <div className="space-y-2">
      {isFive ? (
        <>
          <div className="grid grid-cols-2 gap-2">
            {images.slice(0, 2).map((src, i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden relative group cursor-pointer">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {images.slice(2).map((src, i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden relative group cursor-pointer">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {images.map((src, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
              <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

const narrativeSteps: { step: string; label: string; blocks: Block[] }[] = [
  {
    step: "01",
    label: "Introduction of the Hazard",
    blocks: [
      { type: "p", text: "Working underground or in processing environments means working around hazards that are often invisible." },
      { type: "p", text: "Gases, fires, and explosions are among the most dangerous risks in mining operations." },
      { type: "p", text: "These hazards can develop rapidly and without warning, creating situations where workers may be exposed to toxic gases, smoke, heat, or oxygen-deficient atmospheres." },
      { type: "p", text: "In underground environments especially, fires or explosions can quickly create irrespirable atmospheres, where the air can no longer sustain life." },
      { type: "p", text: "These events have the potential to cause serious injury, loss of life, damage to equipment, and significant operational disruption." },
      { type: "p", text: "This protocol ensures that risks are identified, controlled, and continuously monitored to protect employees and operations." },
    ],
  },
  {
    step: "02",
    label: "Explanation of the FRCP Requirement",
    blocks: [
      { type: "p", text: "The purpose of the FRCP is to ensure that systems, procedures, and people are in place to prevent fires, explosions, and hazardous gas exposure." },
      { type: "p", text: "Risk assessments conducted in mining operations have identified several major hazards that can lead to these events." },
      { type: "p", text: "Some of the most common include:" },
      { type: "ul", items: [
        "Poor or ineffective ventilation",
        "Accumulation of flammable gases",
        "Failure to test for gases",
        "Ventilation system failures",
        "Conducting blasting operations in a flammable gas atmosphere",
      ]},
      { type: "p", text: "If these hazards are not properly controlled, they can result in a Major Unwanted Event, or MUE. To prevent this, critical controls must be implemented, maintained, and continuously monitored. These controls form the foundation of the FRCP." },
    ],
  },
  {
    step: "03",
    label: "Demonstration of Correct Procedures",
    blocks: [
      { type: "p", text: "Before entering any underground workplace, employees must ensure that the area is safe." },
      { type: "p", text: "This includes testing the atmosphere for harmful gases and confirming that ventilation systems are operating correctly. At operations across the industry, several monitoring systems are used to detect fires and hazardous gases." },
      { type: "p", text: "These include:" },
      { type: "ul", items: [
        "Static carbon monoxide and smoke sensors installed underground",
        "Gas detection systems linked to control rooms",
        "Portable gas detection instruments issued to employees",
      ]},
      { type: "p", text: "These monitoring systems provide both visual and audible alarms to warn employees of potential hazards. In addition, the Trigger Action Response Plan, or TARP, is used to identify risks and determine the correct response when dangerous conditions are detected." },
      { type: "p", text: "When abnormal conditions are identified, work must stop and the situation must be escalated according to the TARP process. Only competent personnel may make decisions regarding safe continuation of work." },
    ],
  },
  {
    step: "04",
    label: "Key Controls and Responsibilities",
    blocks: [
      { type: "p", text: "Preventing fires and gas-related incidents requires a combination of equipment, systems, and trained people." },
      { type: "p", text: "Key controls include:" },
      { type: "ul", items: [
        "Properly installed fire detection systems",
        "Regular inspection and maintenance of equipment",
        "Pre-use checks of gas detection instruments",
        "Monitoring of ventilation systems",
        "And adherence to safe work procedures.",
      ]},
      { type: "p", text: "All gas detection and fire prevention equipment must be designed, installed, and maintained according to manufacturer specifications and national standards." },
      { type: "p", text: "Workers must also be properly trained in:" },
      { type: "ul", items: [
        "Using gas detection equipment",
        "Responding to alarms",
        "Fire prevention procedures",
        "Emergency response protocols.",
      ]},
      { type: "p", text: "Supervisors play an important role in ensuring compliance through planned task observations and behavioural safety monitoring." },
    ],
  },
  {
    step: "05",
    label: "Summary of Critical Safety Rules",
    blocks: [
      { type: "p", text: "To prevent incidents involving gases, fires, and explosions, always remember these critical safety principles." },
      { type: "ul", items: [
        "Test the atmosphere before entering a workplace.",
        "Ensure gas detection equipment is inspected and functioning correctly.",
        "Follow ventilation and fire prevention procedures at all times.",
        "Respond immediately to alarms or abnormal conditions.",
        "And follow the Trigger Action Response Plan whenever hazards are detected.",
      ]},
      { type: "p", text: "Safety in mining depends on the effectiveness of these controls — and on every employee doing their part. By following the Fatal Risk Control Protocol for Gases, Fires and Explosions, we protect ourselves, our teams, and our operations." },
      { type: "p", text: "Because when it comes to safety…" },
      { type: "p", text: "prevention is always the most powerful control." },
    ],
  },
];

function VoiceoverCard({
  name,
  role,
  image,
  src,
  activeId,
  id,
  onPlay,
}: {
  name: string;
  role: string;
  image: string;
  src: string | null;
  activeId: string | null;
  id: string;
  onPlay: (id: string, audio: HTMLAudioElement) => void;
}) {
  const isPlaying = activeId === id;
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  function toggle() {
    if (!src) return;
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      onPlay("", audio);
    } else {
      onPlay(id, audio);
      audio.play().catch(() => {});
    }
  }

  function handleTimeUpdate() {
    if (dragging.current) return;
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  }

  function handleEnded() {
    onPlay("", audioRef.current!);
    setProgress(0);
  }

  const seekTo = useCallback((clientX: number) => {
    const track = trackRef.current;
    const audio = audioRef.current;
    if (!track || !audio || !audio.duration) return;
    const rect = track.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
    setProgress(pct * 100);
  }, []);

  function handleTrackMouseDown(e: React.MouseEvent) {
    if (!src) return;
    dragging.current = true;
    seekTo(e.clientX);

    function onMove(ev: MouseEvent) { seekTo(ev.clientX); }
    function onUp() {
      dragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }

  function handleTrackTouchStart(e: React.TouchEvent) {
    if (!src) return;
    dragging.current = true;
    seekTo(e.touches[0].clientX);

    function onMove(ev: TouchEvent) { seekTo(ev.touches[0].clientX); }
    function onEnd() {
      dragging.current = false;
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    }
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex gap-0">
      <div className="relative w-28 flex-shrink-0 flex items-end justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full object-contain object-bottom"
          style={{ minHeight: "140px", maxHeight: "160px" }}
          loading="lazy"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="text-white font-bold text-base leading-tight">{name}</div>
          <div className="text-gray-500 text-xs mt-0.5">{role}</div>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={toggle}
            disabled={!src}
            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all
              ${src
                ? "bg-red-600 hover:bg-red-500 hover:scale-105 shadow-lg shadow-red-900/40 cursor-pointer"
                : "bg-gray-800 cursor-not-allowed opacity-50"
              }`}
          >
            {isPlaying ? (
              <Pause size={16} fill="white" className="text-white" />
            ) : (
              <Play size={16} fill="white" className="text-white ml-0.5" />
            )}
          </button>
          <div className="flex-1">
            <div
              ref={trackRef}
              onMouseDown={handleTrackMouseDown}
              onTouchStart={handleTrackTouchStart}
              className={`relative h-4 flex items-center group ${src ? "cursor-pointer" : ""}`}
            >
              <div className="absolute inset-y-0 flex items-center w-full">
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${progress}%`, transition: dragging.current ? "none" : "width 0.2s" }}
                  />
                </div>
              </div>
              {src && (
                <div
                  className="absolute w-3 h-3 bg-white rounded-full shadow-md shadow-black/50 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `${progress}%` }}
                />
              )}
            </div>
            {!src && (
              <div className="text-gray-600 text-xs mt-1">Sample coming soon</div>
            )}
          </div>
        </div>
      </div>
      {src && (
        <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
      )}
    </div>
  );
}

function VoiceoverPlayer() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  function handlePlay(id: string, audio: HTMLAudioElement) {
    if (activeAudioRef.current && activeAudioRef.current !== audio) {
      activeAudioRef.current.pause();
    }
    activeAudioRef.current = id ? audio : null;
    setActiveId(id || null);
  }

  return (
    <div className="space-y-4">
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <Mic size={15} className="text-red-500" />
          <span className="text-white font-bold text-base">Sample Voiceovers</span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed pl-5">
          These samples read the full script to give you a feel for tone, pacing, and delivery style before final narrator selection.
        </p>
      </div>
      <VoiceoverCard
        id="sekou"
        name="Sekou"
        role="Male Narrator"
        image={asset("Sekou.png")}
        src={asset("FiresGasesExplosions_Sekou.mp3")}
        activeId={activeId}
        onPlay={handlePlay}
      />
      <VoiceoverCard
        id="thandi"
        name="Thandi"
        role="Female Narrator"
        image={asset("Thandi.png")}
        src={asset("FiresGasesExplosions_Thandi.mp3")}
        activeId={activeId}
        onPlay={handlePlay}
      />
    </div>
  );
}

function NarrativeAccordion() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {narrativeSteps.map((s, i) => (
        <div key={s.step} className="border border-gray-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex items-center gap-4 px-4 py-3 bg-gray-900 hover:bg-gray-800/80 transition-colors text-left"
          >
            <span className="text-red-500 font-mono text-sm font-bold flex-shrink-0">{s.step}</span>
            <span className="text-gray-300 text-sm flex-1">{s.label}</span>
            {expanded === i ? (
              <ChevronUp size={15} className="text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown size={15} className="text-gray-500 flex-shrink-0" />
            )}
          </button>
          {expanded === i && (
            <div className="px-4 py-4 bg-gray-900/50 border-t border-gray-800 space-y-3">
              {s.blocks.map((block, j) =>
                block.type === "p" ? (
                  <p key={j} className="text-gray-400 text-sm leading-relaxed">{block.text}</p>
                ) : (
                  <ul key={j} className="space-y-1.5 pl-1">
                    {block.items.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProductionApproach() {
  return (
    <section id="approach" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Creative Direction
            </span>
            <div className="h-px w-12 bg-red-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Production Approach
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A mixed-media strategy combining the authenticity of real-world
            filming with the clarity of 3D animation.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-red-500 text-2xl font-black">3.1</span>
                <h3 className="text-white text-2xl font-bold">
                  Real-World Filming
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Professional filming at your operations provides authenticity and direct relatability for your
                workforce. Seeing their actual environment on screen dramatically
                increases engagement and knowledge retention.
              </p>
              <ul className="space-y-3">
                {[
                  "Real work environments and infrastructure",
                  "Equipment and plant in operational context",
                  "Workers performing correct procedures",
                  "Supporting visuals for safety messaging",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-gray-300 text-sm">Professional Crew</span>
              </div>
            </div>
            <ImageGrid images={filmImages} />
          </div>

          <div className="h-px bg-gray-800" />

          <div id="narration" className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-red-500 text-2xl font-black">3.2</span>
                <h3 className="text-white text-2xl font-bold">
                  Narration & Structured Storytelling
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Professional narration guides each viewer through a deliberate
                learning journey — from hazard awareness to actionable safety
                behaviour. Each video follows a proven 5-step narrative framework.
              </p>

              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1 bg-gray-800" />
                <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase">Script Sample · FRCP 11 – Gases, Fires & Explosions</span>
                <div className="h-px flex-1 bg-gray-800" />
              </div>

              <NarrativeAccordion />

              <div className="mt-6 bg-gradient-to-r from-red-950/30 to-transparent border border-red-900/30 rounded-xl p-5">
                <p className="text-gray-300 text-sm italic leading-relaxed">
                  "Safety depends on the effectiveness of these controls — and on every
                  employee doing their part. Because when it comes to safety…
                  <span className="text-red-400 font-semibold"> prevention is always the most powerful control.</span>"
                </p>
              </div>
            </div>

            <VoiceoverPlayer />
          </div>

          <div className="h-px bg-gray-800" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-red-500 text-2xl font-black">3.3</span>
                <h3 className="text-white text-2xl font-bold">3D Animation</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Every 3D production begins with extensive asset creation — custom-modelled environments that
                replicate your actual mining context, and fully rigged characters built from the ground up.
                Detailed texturing, lighting rigs, and scene construction happen before a single frame of
                animation is rendered, ensuring visual fidelity that is consistent across every module.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom environment modelling — shafts, stopes, surface plants & more",
                  "Character creation: modelling, rigging & skinning for fluid animation",
                  "Material & texture work for photorealistic surfaces and equipment",
                  "Scene lighting designed to match real underground and surface conditions",
                  "Full animation pipeline: movement, timing, and camera choreography",
                  "High-resolution rendering with VFX compositing in post-production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ImageGrid images={animImages} />
            </div>
          </div>

          <div className="h-px bg-gray-800" />

          {/* Production Process Video */}
          <div className="w-full">
            <div className="text-center mb-4">
              <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">Behind the Lens</span>
              <h4 className="text-white font-bold text-xl mt-1">Full Production Process Walkthrough</h4>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              {/* Desktop: horizontal row */}
              <div className="hidden md:flex items-stretch">
                <a
                  href="https://youtu.be/MfS7dfBgo2U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-56 overflow-hidden"
                >
                  <img
                    src="https://img.youtube.com/vi/MfS7dfBgo2U/maxresdefault.jpg"
                    alt="Production Process Walkthrough"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm bg-white/20 group-hover:bg-red-600 transition-all">
                      <Play size={13} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>
                </a>
                <div className="flex flex-1 items-stretch divide-x divide-gray-800">
                  {[
                    { num: "01", label: "Pre-Production", items: ["Ideation", "Story", "Script", "Storyboard"] },
                    { num: "02", label: "3D Production", items: ["Modelling", "Animation", "Lighting", "Rendering"] },
                    { num: "03", label: "Post-Production", items: ["Audio", "VFX", "Colour Correction"] },
                  ].map((stage) => (
                    <div key={stage.num} className="flex-1 flex flex-col justify-center px-6 py-4">
                      <div className="text-red-500 font-black text-xs mb-1">{stage.num}</div>
                      <div className="text-white font-semibold text-sm mb-2">{stage.label}</div>
                      <div className="flex flex-col gap-1">
                        {stage.items.map((item) => (
                          <span key={item} className="flex items-center gap-1.5 text-gray-500 text-xs">
                            <span className="w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: stacked */}
              <div className="md:hidden">
                <a
                  href="https://youtu.be/MfS7dfBgo2U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full aspect-video overflow-hidden"
                >
                  <img
                    src="https://img.youtube.com/vi/MfS7dfBgo2U/maxresdefault.jpg"
                    alt="Production Process Walkthrough"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm bg-white/20 group-hover:bg-red-600 transition-all">
                      <Play size={15} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>
                </a>
                <div className="grid grid-cols-3 divide-x divide-gray-800 border-t border-gray-800">
                  {[
                    { num: "01", label: "Pre-Production", items: ["Ideation", "Story", "Script", "Storyboard"] },
                    { num: "02", label: "3D Production", items: ["Modelling", "Animation", "Lighting", "Rendering"] },
                    { num: "03", label: "Post-Production", items: ["Audio", "VFX", "Colour Correction"] },
                  ].map((stage) => (
                    <div key={stage.num} className="px-3 py-3">
                      <div className="text-red-500 font-black text-xs mb-0.5">{stage.num}</div>
                      <div className="text-white font-semibold text-xs mb-1.5">{stage.label}</div>
                      <div className="flex flex-col gap-1">
                        {stage.items.map((item) => (
                          <span key={item} className="text-gray-500 text-xs leading-tight">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
