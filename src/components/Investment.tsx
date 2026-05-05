import { scopeDeliverables } from "../data/frcp";
import PricingModel from "./PricingModel";

const ergonomicsVideo = scopeDeliverables.find((d) => d.ref === "B")!;
const filmShoot = scopeDeliverables.find((d) => d.ref === "A")!;
const grandTotal = filmShoot.cost + ergonomicsVideo.cost;

const PHASE_1_COST = 99848;
const PHASE_2_RATE = 11636.55;
const phase2Mins = 4;
const phase2Total = phase2Mins * PHASE_2_RATE;

function fmt(n: number) {
  return n.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Investment() {
  return (
    <section id="investment" className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <PricingModel />

        {/* Transparent Pricing — hidden, preserved for future use
        <div className="mt-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-red-500" />
              <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
                Investment Proposal
              </span>
              <div className="h-px w-12 bg-red-500" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              A complete breakdown of every deliverable. All costs are exclusive
              of VAT.
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[auto_1fr_auto] px-6 py-3 bg-gray-900 border-b border-gray-800 gap-4">
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-widest w-10">Ref</div>
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Deliverable</div>
                <div className="text-gray-500 text-xs font-semibold uppercase tracking-widest text-right">Total Cost</div>
              </div>

              <div className="divide-y divide-gray-800/50">
                <div className="grid grid-cols-[auto_1fr_auto] px-6 py-4 hover:bg-gray-900/50 transition-colors gap-4 items-center">
                  <div className="flex items-center w-10">
                    <span className="w-6 h-6 bg-red-600/20 rounded text-red-400 text-xs font-bold flex items-center justify-center">A</span>
                  </div>
                  <div className="text-gray-300 text-sm">{filmShoot.title}</div>
                  <div className="text-gray-300 text-sm text-right font-mono">
                    R {filmShoot.cost.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-[auto_1fr_auto] px-6 py-5 hover:bg-gray-900/50 transition-colors gap-4 group">
                  <div className="flex items-start pt-0.5 w-10">
                    <span className="w-6 h-6 bg-gray-800 group-hover:bg-red-600/20 rounded text-gray-500 group-hover:text-red-400 text-xs font-bold flex items-center justify-center transition-colors flex-shrink-0">B</span>
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm mb-3">{ergonomicsVideo.title}</div>
                    <div className="space-y-2 pl-1 border-l border-gray-800">
                      <div className="flex items-center justify-between gap-4 pl-3">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded bg-red-600/20 text-red-400 text-[9px] font-black flex items-center justify-center flex-shrink-0">1</span>
                          <span className="text-gray-500 text-xs">Minute 1 — flat fee</span>
                        </div>
                        <span className="text-red-400 font-mono text-xs font-semibold">R {fmt(PHASE_1_COST)}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4 pl-3">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded bg-amber-600/20 text-amber-400 text-[9px] font-black flex items-center justify-center flex-shrink-0">2</span>
                          <span className="text-gray-500 text-xs">Minutes 2–5 × R 11,636.55</span>
                        </div>
                        <span className="text-amber-400 font-mono text-xs font-semibold">R {fmt(phase2Total)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm text-right font-mono pt-0.5">
                    R {ergonomicsVideo.cost.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="px-6 py-5 bg-gray-900 border-t border-gray-700 flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-sm">Total Investment</div>
                  <div className="text-gray-500 text-xs mt-0.5">Exclusive of VAT</div>
                </div>
                <div className="text-right">
                  <div className="text-red-400 text-3xl font-black">
                    R {grandTotal.toLocaleString()}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    1 video + 1-day shoot (optional)
                  </div>
                </div>
              </div>
            </div>
        </div>
        End Transparent Pricing */}

      </div>
    </section>
  );
}
