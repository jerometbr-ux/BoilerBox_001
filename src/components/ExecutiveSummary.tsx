import { Target, Users, Film, Award } from "lucide-react";
import BoilerRoomLogo from "./BoilerRoomLogo";

const goals = [
  {
    icon: Target,
    title: "Reduce Workplace Incidents",
    description:
      "Embed best-practice safety awareness into daily workforce behaviour through compelling, visually-driven content.",
  },
  {
    icon: Film,
    title: "Communicate Procedures Clearly",
    description:
      "Blend real operational footage with 3D animation to demonstrate correct behaviours, controls, and hazard identification.",
  },
  {
    icon: Users,
    title: "Improve Workforce Understanding",
    description:
      "Enhance worker comprehension of safety risks through character-driven storytelling and visual demonstrations that resonate.",
  },
  {
    icon: Award,
    title: "Support Training & Campaigns",
    description:
      "Deliver content adaptable for induction, refresher training, and broader health and safety campaigns across operations.",
  },
];

export default function ExecutiveSummary() {
  return (
    <section id="summary" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-red-500" />
              <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
                Executive Summary
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-8">
              An Animated Safety
              <br />
              <span className="text-red-500">Communication</span> Solution
            </h2>
            <div className="bg-gradient-to-r from-red-950/40 to-gray-900 border border-red-900/30 rounded-xl p-6 mb-4">
              <div className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-2">
                Why 5-Minute Videos?
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                This format sits in the sweet spot — long enough to be
                informative and in-depth, yet short enough to maintain full
                viewer engagement. The same core content can also be adapted
                into 23-minute SOP training or condensed into 30–60 second
                safety campaign snippets.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-0">
              <div className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Prepared By
              </div>
              <div className="flex flex-col gap-2">
                <BoilerRoomLogo size="md" showTagline={true} />
                <div className="text-gray-500 text-xs pl-13 mt-1">
                  Consulting — Est. 1999 | 154 Bram Fisher Drive, Randburg 2194 | 011 326 2619
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <div
                  key={goal.title}
                  className="bg-gray-900 border border-gray-800 hover:border-red-800/50 rounded-xl p-6 transition-all group"
                >
                  <div className="w-10 h-10 bg-red-600/10 group-hover:bg-red-600/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <Icon size={20} className="text-red-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{goal.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
