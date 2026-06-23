import Image from "next/image";
import { galleryItems } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#1D3557] mt-3">Galeri Kopsyah ABB</h2>

          <p className="text-[#1D3557] mt-4 max-w-2xl mx-auto">Fasilitas modern dengan standar higienis, operasional profesional, dan penerapan prinsip syariah dalam setiap proses produksi.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-3xl shadow-md bg-white">
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
