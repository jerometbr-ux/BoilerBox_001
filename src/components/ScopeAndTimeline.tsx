import { Camera, Layers, CheckCircle } from "lucide-react";
import { scopeDeliverables, timeline, assumptions } from "../data/frcp";

export default function ScopeAndTimeline() {
  return (
    <>
      <section id="scope" className="bg-gray-900 pt-10 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-red-500" />
              <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
                Scope of Work
              </span>
              <div className="h-px w-12 bg-red-500" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              What You Receive
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              One core deliverable with an optional on-site film shoot to
              maximise authenticity and workforce relatability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {scopeDeliverables.map((d) => {
              const Icon = d.ref === "A" ? Camera : Layers;
              return (
                <div
                  key={d.ref}
                  className="bg-gray-950 border border-gray-800 hover:border-red-800/40 rounded-2xl p-8 transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-red-400 text-xs font-bold tracking-widest uppercase">
                          Deliverable {d.ref}
                        </div>
                        {"optional" in d && d.optional && (
                          <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-2 py-0.5 rounded border border-amber-500/30">
                            Optional
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-bold text-xl">{d.title}</h3>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {d.activities.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-gray-400 text-sm">
                        <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-800 pt-5">
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Output</div>
                    <div className="text-gray-300 text-sm font-medium">{d.output}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="timeline" className="bg-gray-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-red-500" />
                <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
                  Development Process
                </span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4">
                4-Week Timeline
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                A focused 4-week production schedule ensures quality at every
                stage, with clear milestones and client review points built in.
              </p>

              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-800" />
                <div className="space-y-2">
                  {timeline.map((t, i) => (
                    <div key={i} className="relative flex gap-6 items-start pl-12">
                      <div className={`absolute left-3.5 w-3 h-3 rounded-full border-2 border-gray-950 mt-4 ${t.color}`} />
                      <div
                        className={`flex-1 rounded-xl px-5 py-4 border ${
                          i === 0
                            ? "bg-red-950/20 border-red-900/40"
                            : i === 5
                            ? "bg-green-950/20 border-green-900/40"
                            : "bg-gray-900 border-gray-800"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-white font-semibold text-sm">{t.phase}</div>
                            <div className="text-gray-400 text-xs mt-1">{t.milestone}</div>
                          </div>
                          <div className="bg-gray-950 border border-gray-700 rounded px-2 py-1 flex-shrink-0">
                            <span className="text-gray-400 text-xs font-mono">{t.week}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-red-500" />
                <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
                  Assumptions & Exclusions
                </span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4">
                Key Assumptions
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                The following conditions form the basis of this proposal. Any
                significant changes may require revised scoping.
              </p>
              <div className="space-y-3">
                {assumptions.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl px-5 py-4"
                  >
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-400 text-xs font-mono">{i + 1}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">
                  Feedback Cycles
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Rounds per Deliverable", value: "1" },
                    { label: "Total Feedback Cycles", value: "2" },
                    { label: "Languages", value: "English" },
                    { label: "Video Format", value: "MP4 1080p" },
                  ].map((m) => (
                    <div key={m.label} className="bg-gray-950 rounded-lg p-3">
                      <div className="text-white font-bold text-lg">{m.value}</div>
                      <div className="text-gray-500 text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
