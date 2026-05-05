import { Truck, ArrowUp, MoveUp, Lock, Flame, Shield, AlertTriangle, Zap, Droplets, CircleDashed, Mountain, Brain as Train, Link, Bomb, TrafficCone, Container, Layers, ArrowDownUp, BedDouble, Thermometer, Factory, Wrench, HardHat, Wind, Ear, FileText, Users, Leaf, Compass, ShieldCheck, Sun, Trash2, Globe, Radio, CloudRain, ChevronDown, Plus, HeartPulse, ClipboardList, Siren, Bolt, TreePine, BadgeCheck, UserCheck, BookOpen } from "lucide-react";
import { frcpTopics } from "../data/frcp";
import { asset } from "../utils/asset";

const industries = [
  { label: "Petrochemical", icon: Factory },
  { label: "Energy & Utilities", icon: Zap },
  { label: "Construction", icon: HardHat },
  { label: "Manufacturing", icon: Wrench },
  { label: "Oil & Gas", icon: Droplets },
  { label: "Food & Beverage", icon: Leaf },
  { label: "Logistics & Transport", icon: Truck },
  { label: "Smelting & Metals", icon: Thermometer },
];

type TopicGroup = {
  category: string;
  color: string;
  topics: { label: string; icon: React.ElementType }[];
};

const sopGroups: TopicGroup[] = [
  {
    category: "Health & Wellbeing",
    color: "blue",
    topics: [
      { label: "Fatigue Management", icon: BedDouble },
      { label: "Ergonomics", icon: Users },
      { label: "Hearing Conservation", icon: Ear },
      { label: "Thermal Stress", icon: Sun },
      { label: "Alcohol & Drugs", icon: HeartPulse },
    ],
  },
  {
    category: "Protective Equipment & Hygiene",
    color: "amber",
    topics: [
      { label: "PPE", icon: ShieldCheck },
      { label: "Dust Awareness", icon: CloudRain },
      { label: "Ventilation", icon: Wind },
      { label: "Respiratory Protection", icon: Shield },
      { label: "Noise Control", icon: Ear },
    ],
  },
  {
    category: "Operational Safety",
    color: "orange",
    topics: [
      { label: "Work Permits", icon: ClipboardList },
      { label: "Power Actuated Tools", icon: Bolt },
      { label: "Falling Objects", icon: ChevronDown },
      { label: "Adverse Weather", icon: CloudRain },
      { label: "Rail Crossings", icon: TrafficCone },
    ],
  },
  {
    category: "Emergency & Response",
    color: "red",
    topics: [
      { label: "Emergency Response", icon: Siren },
      { label: "Control Room Reporting", icon: Radio },
      { label: "Spill Response", icon: Droplets },
      { label: "Fire Prevention", icon: Flame },
    ],
  },
  {
    category: "Environment & Compliance",
    color: "green",
    topics: [
      { label: "Environmental Management", icon: TreePine },
      { label: "Waste Management", icon: Trash2 },
      { label: "Code of Business Conduct", icon: BadgeCheck },
      { label: "Contractor Management", icon: UserCheck },
      { label: "Community Affairs", icon: Globe },
    ],
  },
  {
    category: "Training & Governance",
    color: "slate",
    topics: [
      { label: "Induction & Onboarding", icon: BookOpen },
      { label: "Supervisor Responsibilities", icon: Users },
      { label: "Incident Investigation", icon: FileText },
      { label: "Access Control & Security", icon: ShieldCheck },
      { label: "& Many More...", icon: Plus },
    ],
  },
];

const categoryColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue:   { bg: "bg-blue-950/30",   border: "border-blue-800/30",   text: "text-blue-400",   dot: "bg-blue-500" },
  amber:  { bg: "bg-amber-950/30",  border: "border-amber-800/30",  text: "text-amber-400",  dot: "bg-amber-500" },
  orange: { bg: "bg-orange-950/30", border: "border-orange-800/30", text: "text-orange-400", dot: "bg-orange-500" },
  red:    { bg: "bg-red-950/30",    border: "border-red-800/30",    text: "text-red-400",    dot: "bg-red-500" },
  green:  { bg: "bg-green-950/30",  border: "border-green-800/30",  text: "text-green-400",  dot: "bg-green-500" },
  slate:  { bg: "bg-gray-800/30",   border: "border-gray-700/30",   text: "text-gray-400",   dot: "bg-gray-500" },
};

const iconMap: Record<string, React.ElementType> = {
  Truck,
  ArrowUp,
  MoveUp,
  Lock,
  Flame,
  Shield,
  AlertTriangle,
  Zap,
  Droplets,
  CircleDashed,
  Mountain,
  Train,
  Link,
  Bomb,
  TrafficCone,
  Container,
  Layers,
  ArrowDownUp,
  BedDouble,
  Thermometer,
};

export default function FRCPTopics() {
  return (
    <section id="topics" className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              FRCP Topics
            </span>
            <div className="h-px w-12 bg-red-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Safety Videos of Interest
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fatal Risk Control Protocols — each a dedicated 5-minute video
            precisely tailored to your operational standards and procedures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {frcpTopics.map((topic, i) => {
            const Icon = iconMap[topic.icon] || Shield;
            return (
              <div
                key={topic.id}
                onClick={topic.featured ? () => {
                  const el = document.getElementById("narration");
                  if (!el) return;
                  const offset = 80;
                  const top = el.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top, behavior: "smooth" });
                } : undefined}
                className={`group relative bg-gray-950 border rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 ${
                  topic.featured
                    ? "border-red-600/40 hover:border-red-500 cursor-pointer"
                    : "border-gray-800 hover:border-gray-700"
                }`}
              >
                {topic.featured && (
                  <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    Sample Script
                  </div>
                )}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={asset(topic.image)}
                    alt={topic.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-7 h-7 bg-red-600/90 rounded flex items-center justify-center">
                      <Icon size={14} className="text-white" />
                    </div>
                    <span className="text-red-300 text-xs font-bold tracking-wide">
                      {topic.id}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-gray-950/70 text-gray-300 text-xs font-mono px-2 py-0.5 rounded">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                    {topic.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-gray-600 text-xs">5 min · 1080p MP4</span>
                    <span className="text-red-400 text-xs font-semibold">
                      R {topic.cost.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Beyond Mining — new layout */}
        <div className="mt-12">
          {/* Section header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">Not Just Mining</span>
              <div className="h-px w-8 bg-red-500" />
            </div>
            <h3 className="text-white text-3xl sm:text-4xl font-black leading-tight mb-3">
              Built for Every <span className="text-red-500">High-Stakes Industry</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Our production capability delivers the same premium safety content across any sector where people face serious risk.
            </p>
          </div>

          {/* Industries — grid cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {industries.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="group flex items-center gap-3 bg-gray-950 border border-gray-800 hover:border-red-700/50 hover:bg-gray-900 px-4 h-14 transition-all duration-200"
              >
                <div className="shrink-0 w-8 h-8 bg-red-600/10 group-hover:bg-red-600/20 flex items-center justify-center transition-colors">
                  <Icon size={15} className="text-red-400" />
                </div>
                <span className="text-gray-300 text-xs font-semibold leading-snug">{label}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-12" />

          {/* SOP Topics */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">Beyond FRCPs</span>
              <div className="h-px w-8 bg-red-500" />
            </div>
            <h3 className="text-white text-3xl sm:text-4xl font-black leading-tight mb-3">
              Any Topic. <span className="text-red-500">Any Procedure.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              From behavioural programmes to technical SOPs — if it needs to be communicated, we can produce it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800/50 rounded-xl overflow-hidden border border-gray-800">
            {sopGroups.map((group) => {
              const c = categoryColors[group.color];
              return (
                <div key={group.category} className="bg-gray-900 p-6 hover:bg-gray-950 transition-colors group">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className={`w-2 h-6 rounded-full ${c.dot}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>{group.category}</span>
                  </div>
                  <div className="space-y-2.5">
                    {group.topics.map(({ label, icon: Icon }) => (
                      <div key={label} className="flex items-center gap-2.5">
                        <Icon size={12} className={`shrink-0 ${label === "& Many More..." ? "text-gray-600" : "text-gray-600 group-hover:text-gray-500 transition-colors"}`} />
                        <span className={`text-sm leading-tight ${label === "& Many More..." ? "text-gray-600 italic" : "text-gray-400"}`}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
