import { Users, Files as Subtitles, Globe, BookOpen, Monitor, Package, Layers } from "lucide-react";

const addons = [
  { icon: Users,     title: "Custom Character & Mascot",   description: "Fully modelled, rigged 3D character representing your workforce — reusable across all future modules." },
  { icon: Subtitles, title: "Subtitles & Closed Captions",  description: "Accurately timed SRT/VTT files for every video — accessibility compliance and noisy-environment comprehension." },
  { icon: Globe,     title: "Multi-Language Translation",   description: "Script translation, native-speaker voiceover, and re-timed subtitles in isiZulu, Sesotho, Afrikaans, French, Portuguese and more." },
  { icon: BookOpen,  title: "Facilitator Guides",           description: "PDF guides with learning objectives, discussion prompts, quiz questions, and post-viewing activities — aligned to each module." },
  { icon: Monitor,   title: "Branded Presentation Decks",   description: "PowerPoint / Google Slides decks matched to each video — built for toolbox talks and supervisor-led sessions." },
  { icon: Layers,    title: "LMS-Ready Packaging",          description: "SCORM 1.2 / xAPI with knowledge checks and completion tracking. Compatible with Moodle, Cornerstone, SAP SuccessFactors and more." },
  { icon: Package,   title: "Physical Training Kits",       description: "Printed guides, laminated quick-reference cards, Boilerbox and tablet drives — for sites with limited connectivity." },
];

export default function Addons() {
  return (
    <section id="addons" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Optional Enhancements
            </span>
            <div className="h-px w-12 bg-red-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Add-Ons Worth Considering
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Extend any module with targeted enhancements — each quoted separately
            and combined to suit your programme.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {addons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-3 bg-gray-950 border border-gray-800 hover:border-red-700/50 hover:bg-gray-900 px-5 py-5 transition-all duration-200"
            >
              <div className="shrink-0 w-9 h-9 bg-red-600/10 group-hover:bg-red-600/20 flex items-center justify-center transition-colors">
                <Icon size={16} className="text-red-400" />
              </div>
              <div>
                <p className="text-gray-200 text-sm font-semibold leading-snug mb-1.5">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
              </div>
            </div>
          ))}

          {/* CTA tile */}
          <div className="group flex flex-col items-start justify-between bg-red-600/10 border border-red-700/30 hover:border-red-500/60 hover:bg-red-600/15 px-5 py-5 transition-all duration-200">
            <p className="text-gray-300 text-sm font-semibold leading-snug mb-3">
              Not sure what you need?
            </p>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              We'll scope a custom combination that fits your budget and delivery requirements.
            </p>
            <a
              href="#contact"
              className="text-red-400 group-hover:text-red-300 text-xs font-bold tracking-wide uppercase transition-colors"
            >
              Get in Touch →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
