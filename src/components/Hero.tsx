import { MapPin, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="profile"
      className="scroll-mt-24 relative min-h-screen flex items-center pt-24"
      style={{
        backgroundImage: "url('/images/farm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#1D3557]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title / Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-5 tracking-tight">
          <span className="text-[#F8F9FA] font-light block text-2xl md:text-3xl tracking-wide mb-2">Kopsyah</span>
          <span className="block text-[#E63946] drop-shadow-lg">AGRO BINA BERSAMA</span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* LEFT */}
          <Reveal>
            <div className="text-white max-w-2xl font-sans antialiased tracking-normal">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                <span className="text-xs md:text-sm font-medium tracking-wider text-gray-300 uppercase">Koperasi Produsen Syariah</span>
              </div>

              {/* Premium Gradient Accent Line */}
              <div className="w-32 h-[3px] bg-gradient-to-r from-red-500 via-rose-400 to-transparent rounded-full mb-10"></div>

              {/* Premium Quote & About Box */}
              <div className="relative bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 mb-8 shadow-2xl overflow-hidden group">
                {/* Decorative Light Glow inside Box */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Elegant Quote Marks */}
                <div className="absolute top-4 left-6 text-8xl text-red-400/10 font-serif pointer-events-none select-none leading-none">“</div>

                <div className="relative z-10 space-y-5">
                  <p className="text-base md:text-lg text-gray-200/90 leading-relaxed font-light">
                    Koperasi Produsen Syariah <span className="font-semibold text-white">Agro Bina Bersama (ABB)</span> adalah badan usaha berbasis anggota yang bergerak di sektor peternakan ayam ras pedaging (broiler) dengan menerapkan
                    prinsip-prinsip syariah dalam seluruh kegiatan usahanya.
                  </p>

                  <p className="text-base md:text-lg text-gray-200/90 leading-relaxed font-light">
                    Didirikan dengan semangat pemberdayaan ekonomi umat, koperasi ini menjadi wadah kolaborasi dalam meningkatkan produktivitas, efisiensi usaha, serta kesejahteraan anggota secara berkelanjutan.
                  </p>
                </div>

                <div className="absolute bottom-[-2rem] right-6 text-8xl text-red-400/10 font-serif pointer-events-none select-none leading-none">”</div>
              </div>

              <div className="flex flex-wrap items-center gap-16 mt-2">
                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <MapPin size={16} className="text-red-400" />
                  </div>

                  <span className="text-sm font-medium text-gray-100">Kabupaten Bekasi, Jawa Barat</span>
                </div>

                <a
                  href="https://wa.me/6285218560313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle size={18} />
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
          {/* RIGHT */}
          <Reveal delay={0.3}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image src="/images/kandang-ayam.jpg" alt="Peternakan Ayam ABB" width={800} height={600} className="w-full h-[500px] object-cover" priority />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
