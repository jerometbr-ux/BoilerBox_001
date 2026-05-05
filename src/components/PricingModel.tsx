import { useState } from "react";
import { paymentMilestones } from "../data/frcp";

const PHASE_1_COST = 99848;
const PHASE_2_RATE = 11636.55;
const PHASE_3_RATE = 10690.70;

function calcTotal(minutes: number): number {
  if (minutes <= 0) return 0;
  if (minutes <= 1) return PHASE_1_COST;
  if (minutes <= 10) return PHASE_1_COST + (minutes - 1) * PHASE_2_RATE;
  return PHASE_1_COST + 9 * PHASE_2_RATE + (minutes - 10) * PHASE_3_RATE;
}

const phases = [
  {
    number: "01",
    label: "Asset Development",
    range: "Minute 1",
    rate: PHASE_1_COST,
    rateLabel: "R 99,848",
    rateSub: "flat fee",
    description:
      "The most resource-intensive phase — covering scheduling, 3D asset creation, scene construction, character rigging, project management, and initial render setup.",
    color: "red",
    barPct: 100,
  },
  {
    number: "02",
    label: "Production & Editing",
    range: "Minutes 2–10",
    rate: PHASE_2_RATE,
    rateLabel: "R 11,636.55",
    rateSub: "per minute",
    description:
      "Once core assets are established, each subsequent minute leverages existing environments and characters. Animation, voiceover integration, review cycles, and rendering continue at a reduced rate.",
    color: "amber",
    barPct: 62,
  },
  {
    number: "03",
    label: "Extended Content",
    range: "Minute 11+",
    rate: PHASE_3_RATE,
    rateLabel: "R 10,690.70",
    rateSub: "per minute",
    description:
      "For longer-form content, every additional minute beyond ten benefits from maximum economies of scale — making extended training modules highly cost-effective.",
    color: "green",
    barPct: 57,
  },
];

const colorMap: Record<string, { accent: string; bg: string; border: string; badge: string; bar: string; num: string }> = {
  red: {
    accent: "text-red-400",
    bg: "bg-red-600/10",
    border: "border-red-700/30",
    badge: "bg-red-600/20 text-red-400",
    bar: "bg-red-500",
    num: "text-red-500",
  },
  amber: {
    accent: "text-amber-400",
    bg: "bg-amber-600/10",
    border: "border-amber-700/30",
    badge: "bg-amber-600/20 text-amber-400",
    bar: "bg-amber-500",
    num: "text-amber-500",
  },
  green: {
    accent: "text-green-400",
    bg: "bg-green-600/10",
    border: "border-green-700/30",
    badge: "bg-green-600/20 text-green-400",
    bar: "bg-green-500",
    num: "text-green-500",
  },
};

function fmt(n: number) {
  return n.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function DurationCalculator() {
  const [minutes, setMinutes] = useState(5);
  const total = calcTotal(minutes);

  const phase1Cost = Math.min(minutes, 1) > 0 ? PHASE_1_COST : 0;
  const phase2Mins = Math.max(0, Math.min(minutes, 10) - 1);
  const phase2Cost = phase2Mins * PHASE_2_RATE;
  const phase3Mins = Math.max(0, minutes - 10);
  const phase3Cost = phase3Mins * PHASE_3_RATE;

  const pct = ((minutes - 1) / 19) * 100;
  const activePhase = minutes <= 1 ? "red" : minutes <= 10 ? "amber" : "green";
  const trackColor = activePhase === "red" ? "#ef4444" : activePhase === "amber" ? "#f59e0b" : "#22c55e";

  return (
    <div className="mt-8 bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden w-full">
      <div className="px-6 py-5 border-b border-gray-800 flex items-center justify-between">
        <div>
          <div className="text-white font-black text-base">Video Duration Calculator</div>
          <div className="text-gray-500 text-xs mt-0.5">Drag to estimate total production cost</div>
        </div>
        <div className="text-right">
          <div className="text-white font-black font-mono text-2xl leading-none">
            R {fmt(total)}
          </div>
          <div className="text-gray-500 text-xs mt-1">excl. VAT</div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div>
          <div className="flex items-end justify-between mb-3">
            <div>
              <span className="text-white font-black text-4xl font-mono leading-none">{minutes}</span>
              <span className="text-gray-400 text-sm ml-2">{minutes === 1 ? "minute" : "minutes"}</span>
            </div>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: activePhase === "red" ? "rgba(239,68,68,0.15)" : activePhase === "amber" ? "rgba(245,158,11,0.15)" : "rgba(34,197,94,0.15)",
                color: trackColor,
              }}
            >
              {activePhase === "red" ? "Phase 01 — Asset Development" : activePhase === "amber" ? "Phase 02 — Production & Editing" : "Phase 03 — Extended Content"}
            </span>
          </div>

          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full h-2 appearance-none cursor-pointer rounded-full"
            style={{
              background: `linear-gradient(to right, ${trackColor} ${pct}%, #1f2937 ${pct}%)`,
            }}
          />
          <div className="flex justify-between text-gray-600 text-xs mt-2 font-mono">
            <span>1</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
          </div>
        </div>

        <div className="space-y-2">
          {phase1Cost > 0 && (
            <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-red-600/8 border border-red-700/20">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-red-600/20 text-red-400 text-xs font-black flex items-center justify-center flex-shrink-0">01</span>
                <div>
                  <div className="text-gray-200 text-xs font-semibold">Minute 1</div>
                  <div className="text-gray-500 text-xs">Asset Development — flat fee</div>
                </div>
              </div>
              <div className="text-red-400 font-mono font-bold text-sm">R {fmt(phase1Cost)}</div>
            </div>
          )}

          {phase2Mins > 0 && (
            <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-amber-600/8 border border-amber-700/20">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-amber-600/20 text-amber-400 text-xs font-black flex items-center justify-center flex-shrink-0">02</span>
                <div>
                  <div className="text-gray-200 text-xs font-semibold">Minutes 2–{Math.min(minutes, 10)}</div>
                  <div className="text-gray-500 text-xs">{phase2Mins} min × R 11,636.55</div>
                </div>
              </div>
              <div className="text-amber-400 font-mono font-bold text-sm">R {fmt(phase2Cost)}</div>
            </div>
          )}

          {phase3Mins > 0 && (
            <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-green-600/8 border border-green-700/20">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded bg-green-600/20 text-green-400 text-xs font-black flex items-center justify-center flex-shrink-0">03</span>
                <div>
                  <div className="text-gray-200 text-xs font-semibold">Minutes 11–{minutes}</div>
                  <div className="text-gray-500 text-xs">{phase3Mins} min × R 10,690.70</div>
                </div>
              </div>
              <div className="text-green-400 font-mono font-bold text-sm">R {fmt(phase3Cost)}</div>
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-gray-800 mt-1">
            <div>
              <span className="text-gray-400 text-sm font-semibold">Total</span>
              <div className="text-gray-500 text-xs mt-0.5">
                avg <span className="text-gray-300 font-mono font-semibold">R {fmt(total / minutes)}</span> / min
              </div>
            </div>
            <span className="text-white font-black font-mono text-lg">R {fmt(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingModel() {
  return (
    <div>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-12 bg-red-500" />
          <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
            Pricing Model
          </span>
          <div className="h-px w-12 bg-red-500" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          How Our Pricing Works
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
          Our pricing is structured around three development phases. As duration increases, each additional
          minute becomes more cost-effective — because the resource-intensive setup work is already absorbed
          in the first minute.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3 space-y-4">
          {phases.map((phase) => {
            const c = colorMap[phase.color];
            return (
              <div
                key={phase.number}
                className={`${c.bg} border ${c.border} rounded-2xl p-6`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl font-black ${c.num} leading-none`}>
                      {phase.number}
                    </div>
                    <div>
                      <div className="text-white font-black text-base leading-tight">
                        {phase.label}
                      </div>
                      <div className={`text-xs font-semibold mt-1 ${c.accent}`}>
                        {phase.range}
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`font-black text-xl font-mono ${c.accent}`}>
                      {phase.rateLabel}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">{phase.rateSub}</div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {phase.description}
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full ${c.bar} rounded-full`} style={{ width: `${phase.barPct}%` }} />
                  </div>
                  <span className="text-gray-600 text-xs font-mono flex-shrink-0">
                    cost / min
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-2 space-y-5">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
            <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">
              Why This Model?
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: "◆",
                  title: "Front-loaded investment",
                  body: "3D asset creation, environment builds, and character rigging are done once — in minute one.",
                },
                {
                  icon: "◆",
                  title: "Economies of scale",
                  body: "Every additional minute reuses established assets, significantly reducing the per-minute rate.",
                },
                {
                  icon: "◆",
                  title: "Transparent & predictable",
                  body: "You always know exactly what each minute of content costs before production begins.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-red-500 text-xs mt-1 flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-white text-sm font-semibold">{item.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
            <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-5">
              Payment Milestones
            </div>
            <div className="space-y-4">
              {paymentMilestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-lg ${
                        i === 0
                          ? "bg-red-600/20 text-red-400"
                          : i === 1
                          ? "bg-orange-600/20 text-orange-400"
                          : "bg-green-600/20 text-green-400"
                      }`}
                    >
                      {m.percentage}%
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{m.detail}</div>
                    </div>
                  </div>
                  {i < paymentMilestones.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-gray-800 h-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DurationCalculator />
    </div>
  );
}
