import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#07244D] text-white">
      {/* CTA Section */}

      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="bg-gradient-to-r from-[#E63946] to-[#BB152C] rounded-3xl p-12 text-center">
          <span className="text-#F8F9FA uppercase tracking-[4px] text-sm font-medium">Fresh Chicken Supplier</span>

          <h2 className="text-5xl font-bold mt-4">Ayam Segar, Halal, dan Berkualitas</h2>

          <p className="mt-5 text-#F8F9FA max-w-3xl mx-auto text-lg">Diproses dengan standar higienis dan prinsip syariah untuk memastikan kualitas terbaik sampai ke tangan pelanggan.</p>
          <a
            href="https://wa.me/6285218560313"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={18} />
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company */}

          <div>
            <h3 className="text-2xl font-bold">AGRO BINA BERSAMA</h3>

            <p className="mt-4 text-slate-300 leading-relaxed">Koperasi Syariah yang bergerak di bidang peternakan broiler modern dengan prinsip halal, profesional, dan berkelanjutan.</p>
          </div>

          {/* Navigation */}

          {/* <div>
            <h4 className="font-semibold text-lg mb-4">Navigasi</h4>

            <ul className="space-y-3 text-slate-300">
              <li>Profil</li>
              <li>Produk</li>
              <li>Kemitraan</li>
              <li>Legalitas</li>
              <li>Galeri</li>
            </ul>
          </div> */}

          {/* Contact */}

          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={18} />
                <span>085218560313</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>kopsyahabb@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Desa Suka Tenang, Kecamatan Sukawangi, Kabupaten Bekasi</span>
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h4 className="font-semibold text-lg mb-4">Ikuti Kami</h4>

            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Halal</span>

              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Syariah</span>

              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Kemitraan</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-slate-400">© 2026 Kopsyah AGRO BINA BERSAMA. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
