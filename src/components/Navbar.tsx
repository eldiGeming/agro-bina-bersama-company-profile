"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setIsOpen(false);
    }
  };

  const menus = [
    { label: "Profile", id: "profile" },
    { label: "Products", id: "products" },
    { label: "Legality", id: "legality" },
    { label: "Partnership", id: "partnership" },
    { label: "Gallery", id: "gallery" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src="/images/logo.png" alt="ABB" width={48} height={48} />

            <div>
              <h1 className={`font-bold text-lg transition-colors ${isScrolled ? "text-[#002B5B]" : "text-white"}`}>AGRO BINA BERSAMA</h1>

              <p className={`text-xs transition-colors ${isScrolled ? "text-gray-500" : "text-gray-300"}`}>Koperasi Produsen Syariah</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menus.map((menu) => (
              <button key={menu.id} onClick={() => scrollToSection(menu.id)} className={`font-medium transition-all duration-300 hover:text-[#E63946] ${isScrolled ? "text-gray-700" : "text-white"}`}>
                {menu.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
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

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${isScrolled ? "text-[#002B5B]" : "text-white"}`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
          <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col gap-4">
            {menus.map((menu) => (
              <button key={menu.id} onClick={() => scrollToSection(menu.id)} className="text-left text-gray-700 hover:text-[#E63946]">
                {menu.label}
              </button>
            ))}

            <a href="https://wa.me/628xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="mt-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl text-center font-semibold">
              WhatsApp Hub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
