import { organization } from "@/data/organization";
import { Users, ShieldCheck, BriefcaseBusiness } from "lucide-react";

export default function OrganizationStructure() {
  return (
    <section id="organization" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-red-600 text-sm font-medium">Organisasi</p>

          <h2 className="text-5xl font-bold text-[#07244D] mt-3">Struktur Organisasi</h2>

          <p className="text-slate-500 mt-4">Kepengurusan dan unit usaha Kopsyah Agro Bina Bersama</p>
        </div>

        {/* RAPAT ANGGOTA */}

        <div className="flex justify-center mb-16">
          <div className="bg-[#07244D] text-white px-12 py-6 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3">
              <Users size={28} />

              <div>
                <p className="text-white/70 text-sm">Organ Tertinggi</p>

                <h3 className="text-2xl font-bold">{organization.rapatAnggota}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* PENGAWAS & PENGURUS */}

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* PENGAWAS */}

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="bg-[#07244D] text-white px-6 py-4">
              <div className="flex items-center gap-3">
                <ShieldCheck size={22} />
                <h3 className="font-bold text-xl">Pengawas</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <p className="text-sm text-slate-500">Ketua</p>

                <p className="font-semibold text-lg text-[#07244D]">{organization.pengawas.ketua}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-3">Anggota</p>

                <ul className="space-y-2">
                  {organization.pengawas.anggota.map((member) => (
                    <li key={member} className="bg-slate-50 rounded-xl px-4 py-3">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PENGURUS */}

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-4">
              <div className="flex items-center gap-3">
                <Users size={22} />

                <h3 className="font-bold text-xl">Pengurus</h3>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-slate-500">Ketua</p>

                <p className="font-semibold text-[#07244D]">{organization.pengurus.ketua}</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-slate-500">Sekretaris</p>

                <p className="font-semibold text-[#07244D]">{organization.pengurus.sekretaris}</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-sm text-slate-500">Bendahara</p>

                <p className="font-semibold text-[#07244D]">{organization.pengurus.bendahara}</p>
              </div>
            </div>
          </div>
        </div>

        {/* UNIT USAHA */}

        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-[#07244D]">Unit Usaha ABB</h3>

            <p className="text-slate-500 mt-2">Bidang usaha yang dikelola oleh koperasi</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {organization.units.map((unit) => (
              <div
                key={unit.title}
                className="
                  bg-white
                  rounded-3xl
                  border
                  border-slate-200
                  p-6
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-[#07244D]/10 flex items-center justify-center mb-5">
                  <BriefcaseBusiness className="text-[#07244D]" />
                </div>

                <h4 className="font-bold text-lg text-[#07244D]">{unit.title}</h4>

                <div className="mt-5 pt-5 border-t">
                  <p className="text-sm text-slate-500">Kepala Unit</p>

                  <p className="font-semibold mt-1">{unit.head}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
