import { ArrowRight, Mail, Phone, Globe } from "lucide-react";
import BoilerRoomLogo from "./BoilerRoomLogo";

export default function Conclusion() {
  return (
    <section id="contact" className="bg-gray-950 py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1600)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/90 to-gray-950/70" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-500" />
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Conclusion
            </span>
            <div className="h-px w-12 bg-red-500" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Protecting Your People
            <br />
            <span className="text-red-500">Through Compelling Safety</span>
            <br />
            Training
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            This proposal gives your organisation a modern, engaging safety
            video that helps employees truly understand, remember, and apply
            critical safety behaviours in their daily work.
          </p>
          <p className="text-gray-400 leading-relaxed mb-10">
            By combining real workplace footage with clear animated demonstrations,
            the video makes complex procedures easy to follow — reducing incident
            risk and reinforcing a culture of safety across your operations.
            We look forward to collaborating with you to deliver a training
            resource your workforce will actually watch, understand, and act on.
          </p>

          <a
            href="#investment"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-red-900/40 text-sm tracking-wide"
          >
            Review Investment Proposal
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <a
            href="mailto:stephan@boilerroom.co.za"
            className="group bg-gray-900 border border-gray-800 hover:border-red-800/50 rounded-xl p-5 text-center transition-all"
          >
            <Mail size={20} className="text-red-400 mx-auto mb-3" />
            <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Email</div>
            <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
              stephan@boilerroom.co.za
            </div>
          </a>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <Phone size={20} className="text-red-400 mx-auto mb-3" />
            <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</div>
            <div className="text-gray-300 text-sm">011 326 2619</div>
          </div>
          <a
            href="https://www.boilerroom.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900 border border-gray-800 hover:border-red-800/50 rounded-xl p-5 text-center transition-all"
          >
            <Globe size={20} className="text-red-400 mx-auto mb-3" />
            <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Website</div>
            <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
              www.boilerroom.co.za
            </div>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <BoilerRoomLogo size="sm" showTagline={true} />
            <div className="text-gray-500 text-xs pl-11">Reg# 2018/480786/07 | VAT# 4020284578</div>
          </div>
          <div className="text-gray-600 text-xs text-center sm:text-right">
            154 Bram Fisher Drive, First Floor Polifin House, Randburg 2194
            <br />
            Submitted: 20th April 2026 | Confidential
          </div>
        </div>
      </div>
    </section>
  );
}
