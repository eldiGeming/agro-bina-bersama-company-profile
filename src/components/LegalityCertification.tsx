import Image from "next/image";
import { FileText, BadgeCheck } from "lucide-react";

import { legalities, certifications } from "@/data/legality";

export default function LegalityCertification() {
  return (
    <section id="legality" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1D3557] mt-3">Legalitas & Sertifikasi</h2>

          <p className="text-[#1D3557] mt-5 max-w-3xl mx-auto">ABB berkomitmen menjalankan usaha secara legal, transparan, dan memenuhi standar kompetensi serta prinsip syariah.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEGALITAS */}

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#07244D]/10 flex items-center justify-center">
                <FileText size={24} className="text-[#07244D]" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#07244D]">Legalitas Perusahaan</h3>
                <p className="text-slate-500">Dokumen legal resmi Koperasi ABB</p>
              </div>
            </div>

            <div className="space-y-4">
              {legalities.map((item) => (
                <div
                  key={item.title}
                  className="
          rounded-2xl
          border
          border-slate-200
          p-5
          hover:border-[#07244D]
          hover:shadow-md
          transition-all
        "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <BadgeCheck size={22} className="text-green-600" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#07244D]">{item.title}</h4>

                        <p className="text-sm text-slate-500 mt-1">Nomor Dokumen</p>

                        <p className="font-mono text-sm font-semibold text-slate-700 mt-1 break-all">{item.number}</p>
                      </div>
                    </div>

                    <span
                      className="
              px-3
              py-1
              rounded-full
              bg-green-100
              text-green-700
              text-xs
              font-semibold
            "
                    >
                      Valid
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SERTIFIKASI */}

          <div className="bg-[#1D3557] rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <BadgeCheck size={24} />

              <h3 className="text-3xl font-bold">Kompetensi & Sertifikasi</h3>
            </div>

            <p className="text-slate-300 mb-8 relative z-10">ABB terus meningkatkan kualitas SDM melalui berbagai program pelatihan dan proses sertifikasi untuk mendukung operasional yang profesional, aman, dan sesuai prinsip syariah.</p>

            <div className="space-y-4 relative z-10">
              {certifications.map((item) => (
                <div
                  key={item.title}
                  className="
          bg-white/10
          backdrop-blur-sm
          border border-white/10
          rounded-2xl
          p-5
          hover:bg-white/15
          transition-all
        "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>

                      <p className="text-slate-300 text-sm mt-2">Program peningkatan kompetensi dan sertifikasi yang sedang dipersiapkan untuk mendukung standar operasional ABB.</p>
                    </div>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1
                        whitespace-nowrap
                        px-3
                        py-1
                        rounded-full
                        bg-green-500/20
                        text-green-300
                        text-xs
                        font-medium
                        border border-green-500/20
                      "
                    >
                      <BadgeCheck size={14} />
                      Terverifikasi
                    </span>
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
