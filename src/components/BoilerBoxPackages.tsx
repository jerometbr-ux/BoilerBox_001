import { CheckCircle, Package, Tablet, Layers, Crown, Star } from "lucide-react";
import { boilerboxPackages } from "../data/boilerbox";

const iconMap = {
  Package,
  Tablet,
  Layers,
  Crown,
  Star,
};

function fmt(n: number | string) {
  if (typeof n === "string") return n;
  return "R" + n.toLocaleString("en-ZA");
}

export default function BoilerBoxPackages() {
  const packages = Object.values(boilerboxPackages);

  return (
    <section id="packages" className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Flexible Pricing
            </span>
            <div className="h-px w-12 bg-red-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Choose Your Solution
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From standalone to enterprise deployment with optional tablet packages.
            All prices exclude VAT and delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg) => {
            const Icon = iconMap[pkg.icon as keyof typeof iconMap];
            const colorClasses: Record<string, any> = {
              red: {
                border: "border-red-700/40",
                bg: "bg-red-950/20",
                badge: "bg-red-600/20 text-red-400",
                accent: "text-red-400",
                ring: "ring-red-600/40",
              },
              amber: {
                border: "border-amber-700/40",
                bg: "bg-amber-950/20",
                badge: "bg-amber-600/20 text-amber-400",
                accent: "text-amber-400",
                ring: "ring-amber-600/40",
              },
              blue: {
                border: "border-blue-700/40",
                bg: "bg-blue-950/20",
                badge: "bg-blue-600/20 text-blue-400",
                accent: "text-blue-400",
                ring: "ring-blue-600/40",
              },
              green: {
                border: "border-green-700/40",
                bg: "bg-green-950/20",
                badge: "bg-green-600/20 text-green-400",
                accent: "text-green-400",
                ring: "ring-green-600/40",
              },
              purple: {
                border: "border-purple-700/40",
                bg: "bg-purple-950/20",
                badge: "bg-purple-600/20 text-purple-400",
                accent: "text-purple-400",
                ring: "ring-purple-600/40",
              },
            };

            const c = colorClasses[pkg.color];

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col rounded-2xl border ${c.border} ${c.bg} p-6 hover:border-opacity-60 transition-all group overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity" />

                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${c.badge}`}>
                  <Icon size={20} />
                </div>

                <div className="mb-4">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">
                    {pkg.name}
                  </h3>
                  <p className={`text-xs font-semibold tracking-widest ${c.accent}`}>
                    {pkg.tagline}
                  </p>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-1">
                  {pkg.description}
                </p>

                <div className="mb-6 pb-6 border-t border-gray-800">
                  <div className="text-gray-500 text-xs mb-1">Total Investment</div>
                  <div className={`text-3xl font-black ${c.accent} font-mono`}>
                    {fmt(pkg.total)}
                  </div>
                  {pkg.devices > 1 && (
                    <div className="text-gray-600 text-xs mt-1">
                      {pkg.devices} devices · {pkg.learners} learners
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.includes.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={14} className={`${c.accent} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-300 text-xs leading-tight">{item}</span>
                    </div>
                  ))}
                  {pkg.includes.length > 4 && (
                    <div className="text-gray-500 text-xs italic pt-1">
                      + {pkg.includes.length - 4} more included
                    </div>
                  )}
                </div>

                <a
                  href="#contact"
                  className={`w-full text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    pkg.color === "red"
                      ? "bg-red-600 hover:bg-red-500 text-white"
                      : `bg-gray-800 hover:bg-gray-700 text-gray-200`
                  }`}
                >
                  Request Quote
                </a>
              </div>
            );
          })}
        </div>

        {/* Comparison */}
        <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-900/50">
                  <th className="text-left px-6 py-4 text-gray-300 font-semibold">Feature</th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="text-center px-4 py-4 text-gray-300 font-semibold whitespace-nowrap">
                      <div className="text-xs">{pkg.name.split(" - ")[0]}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { label: "Micro Computer", values: [1, 1, 1, 1, 1] },
                  { label: "Tablets Included", values: ["0", "10", "10", "20", "20"] },
                  { label: "Tablet Type", values: ["N/A", "Packard Bell", "Lenovo", "Packard Bell", "Lenovo"] },
                  { label: "Simultaneous Learners", values: [20, 20, 20, 20, 20] },
                  { label: "Moodle LMS", values: ["Yes", "Yes", "Yes", "Yes", "Yes"] },
                  { label: "Configuration & Setup", values: ["Yes", "Yes", "Yes", "Yes", "Yes"] },
                  { label: "Training Materials", values: ["Yes", "Yes", "Yes", "Yes", "Yes"] },
                  { label: "Offline Capable", values: ["Yes", "Yes", "Yes", "Yes", "Yes"] },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-900/30 transition-colors">
                    <td className="px-6 py-3 text-gray-300 font-medium">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="text-center px-4 py-3 text-gray-400">
                        {val === "Yes" ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-600/20">
                            <span className="text-green-400 text-xs">✓</span>
                          </span>
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-950/40 to-gray-900 border border-red-900/30 rounded-xl p-8 text-center">
          <div className="text-red-400 text-sm font-bold uppercase tracking-widest mb-3">
            Optional Add-ons
          </div>
          <p className="text-white text-lg font-semibold mb-4">
            Additional course uploads, custom branding, and extended support available
          </p>
          <p className="text-gray-400">
            Contact us for a tailored package that meets your specific training needs.
          </p>
        </div>
      </div>
    </section>
  );
}
