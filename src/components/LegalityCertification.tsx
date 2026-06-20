import Image from "next/image";
import { FileText, BadgeCheck } from "lucide-react";

import { legalities, certifications } from "@/data/legality";

export default function LegalityCertification() {
  return (
    <section id="legality" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-red-600 text-sm font-medium">Trust & Compliance</p>

          <h2 className="text-5xl font-bold text-[#07244D] mt-3">Legalitas & Sertifikasi</h2>

          <p className="text-slate-500 mt-5 max-w-3xl mx-auto">ABB berkomitmen menjalankan usaha secara legal, transparan, dan memenuhi standar kompetensi serta prinsip syariah.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEGALITAS */}

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <FileText size={24} className="text-[#07244D]" />

              <h3 className="text-3xl font-bold text-[#07244D]">Legalitas Perusahaan</h3>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {legalities.map((item) => (
                <div
                  key={item.title}
                  className="
                    bg-white
                    border
                    rounded-2xl
                    p-8
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    hover:shadow-lg
                    transition
                    cursor-pointer
                  "
                >
                  <div className="text-4xl mb-4">{item.icon}</div>

                  <p className="font-medium text-[#07244D]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SERTIFIKASI */}

          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <BadgeCheck size={24} className="text-[#07244D]" />

              <h3 className="text-3xl font-bold text-[#07244D]">Sertifikasi Kompetensi</h3>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {certifications.map((item) => (
                <div key={item.title} className="group">
                  <div className="relative h-[220px] overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        transition-all
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
