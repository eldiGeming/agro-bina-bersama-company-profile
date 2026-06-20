export default function VisionMission() {
  return (
    <section className="bg-[#07244D] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[4px] text-red-400 text-sm mb-4">
          Our Purpose
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Visi & Misi Perusahaan
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* VISI */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              👁️
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Visi Kami
            </h3>

            <p className="text-white/80 leading-relaxed">
              Menjadi produsen unggas broiler syariah terkemuka
              yang mengintegrasikan inovasi teknologi dengan
              nilai-nilai keadilan dan kesejahteraan umat.
            </p>
          </div>

          {/* MISI */}

          <div className="space-y-6">

            {[
              "Meningkatkan produktivitas peternakan melalui manajemen modern berbasis syariah.",
              "Menjaga efisiensi rantai pasok untuk memberikan harga yang adil.",
              "Menciptakan kesejahteraan bersama bagi anggota koperasi dan mitra.",
              "Mengembangkan ekosistem peternakan yang berkelanjutan."
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <p className="text-white/80">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}