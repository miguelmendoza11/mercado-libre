import Image from "next/image"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  { title: "Full Stack Development", desc: "Desarrollo completo de aplicaciones web, desde el backend hasta el frontend, con tecnologías modernas." },
  { title: "Frontend Development", desc: "Interfaces modernas, responsivas y accesibles con React, Next.js y Tailwind CSS." },
  { title: "UI/UX Design", desc: "Diseño de experiencias de usuario intuitivas y atractivas con Figma y principios de diseño visual." },
]

const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Figma", "Tailwind CSS", "PostgreSQL", "Git"]

export default function PortafolioMiguelMendoza() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">

      {/* ── Hero ── */}
      <div className="bg-gradient-to-br from-[#dbeafe] via-[#e0d9f7] to-[#d1fae5] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[#3483fa] text-sm mb-10 hover:text-[#2d3277] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg flex-shrink-0">
              <Image
                src="/images/miguel-mendoza.jpg"
                alt="Miguel Mendoza"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[#3483fa] text-xs font-bold uppercase tracking-widest mb-1">Portafolio</p>
              <h1 className="text-3xl font-bold text-[#2d3277] mb-1">Miguel Mendoza</h1>
              <p className="text-[#3483fa] text-base mb-2">Fullstack · Frontend · UI/UX Developer</p>
              <p className="text-[#888] text-sm">Pasto, Nariño — Colombia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* ── Descripción ── */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#dbeafe]">
          <h2 className="text-[#3483fa] text-xs font-bold uppercase tracking-widest mb-3">Sobre mí</h2>
          <p className="text-[#555] text-sm leading-relaxed">
            Soy desarrollador integral con experiencia en el ciclo completo de desarrollo de software.
            Me apasiona construir productos digitales de calidad, combinando una sólida base de backend
            con interfaces de usuario atractivas y funcionales. Siempre busco la mejor experiencia tanto
            para el usuario final como para el equipo de desarrollo.
          </p>
        </section>

        {/* ── Servicios ── */}
        <section>
          <h2 className="text-[#3483fa] text-xs font-bold uppercase tracking-widest mb-4">Servicios ofrecidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm border border-[#dbeafe]">
                <div className="w-8 h-8 bg-[#dbeafe] rounded-lg mb-3" />
                <h3 className="text-[#2d3277] font-semibold text-sm mb-1">{s.title}</h3>
                <p className="text-[#888] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tecnologías ── */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#dbeafe]">
          <h2 className="text-[#3483fa] text-xs font-bold uppercase tracking-widest mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((t) => (
              <span
                key={t}
                className="bg-[#dbeafe] text-[#2d3277] text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ── GitHub ── */}
        <section className="bg-[#2d3277] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/70 text-xs mb-1">Encuéntrame en GitHub</p>
            <p className="text-white font-semibold text-sm">github.com/miguelmendoza11</p>
          </div>
          <a
            href="https://github.com/miguelmendoza11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#2d3277] text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#f0f4ff] transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            Ver perfil
          </a>
        </section>

      </div>
    </div>
  )
}
