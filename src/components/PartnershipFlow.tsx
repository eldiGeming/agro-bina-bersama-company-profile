import { partnershipSteps } from "@/data/partnershipSteps";
import { ArrowRight } from "lucide-react";

export default function PartnershipFlow() {
  return (
    <section id="partnership" className="py-28 bg-[#1D3557]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E63946] mt-4">Alur Kemitraan ABB</h2>

          <p className="max-w-3xl mx-auto mt-6 text-[#E63946] text-lg">Proses kemitraan peternakan ayam broiler yang transparan, profesional, dan berlandaskan prinsip syariah.</p>
        </div>

        {/* Flow */}
        <div className="grid lg:grid-cols-3 gap-8">
          {partnershipSteps.map((step, index) => (
            <div key={step.number} className="group relative bg-white rounded-3xl border border-slate-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              {/* Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#07244D] to-[#0E3A73] text-white flex items-center justify-center text-xl font-bold shadow-lg">{step.number}</div>

                {index !== partnershipSteps.length - 1 && <ArrowRight size={24} className="text-[#E63946] opacity-40 group-hover:opacity-100 transition" />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#07244D] leading-snug mb-3">{step.title}</h3>

              {/* Decoration */}
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#E63946] to-[#07244D]" />

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-50/0 via-red-50/0 to-blue-50/0 group-hover:from-red-50 group-hover:to-blue-50 transition-all duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
