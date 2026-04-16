"use client"

// =============================================================
// RAMA: feature/dev-portfolio
//   ├── feature/dev-portfolio-1 — DEV1: Juan Gallardo
//   ├── feature/dev-portfolio-2 — DEV2: Juan Montezuma
//   └── feature/dev-portfolio-3 — DEV3: Juan Camues
// RAMA: feature/js-interactions — DEV3: Juan Camues
// =============================================================

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronUp, ExternalLink, ChevronDown } from "lucide-react"

// ── Datos del desarrollador ───────────────────────────────────
const developers = [
  {
    name: "Miguel Mendoza",
    role: "Fullstack · Frontend · UI/UX Developer",
    description: "Desarrollador integral con dominio del ciclo completo: desde el diseño de interfaces atractivas hasta la implementación de APIs y bases de datos robustas.",
    services: ["Full Stack Development", "Frontend Development", "UI/UX Design"],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Figma", "Tailwind CSS"],
    github: "https://github.com/miguelmendoza11",
    photo: "/images/miguel-mendoza.jpg",
    portfolio: "/portafolio/miguel-mendoza",
  },
]

// ── Tarjeta de portafolio con hover (todas en azul ML) ───────
function DeveloperCard({ dev }: { dev: typeof developers[0] }) {
  return (
    <Link href={dev.portfolio} className="group relative h-[250px] w-full bg-white rounded-xl overflow-hidden shadow-[0_8px_16px_-8px_rgba(0,0,0,0.4)] cursor-pointer block">

      {/* Sección izquierda azul que se expande al hacer hover */}
      <div className="absolute inset-y-0 left-0 w-[150px] group-hover:w-full bg-gradient-to-br from-[#2d3277] to-[#3483fa] transition-all duration-500 overflow-hidden z-10 flex">

        {/* Columna fija con foto — siempre 150px */}
        <div className="w-[150px] flex-shrink-0 h-full flex flex-col items-center justify-center gap-3 px-3">
          <span className="text-white text-[9px] font-bold bg-black/20 px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">
            {dev.role.split(" ").slice(0, 2).join(" ")}
          </span>
          <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white/50 shadow-lg">
            <Image
              src={dev.photo}
              alt={dev.name}
              width={72}
              height={72}
              className="w-full h-full object-cover"
            />
          </div>
          <a
            href={dev.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white text-[9px] font-bold bg-black/20 hover:bg-black/35 px-2.5 py-0.5 rounded-full transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-2.5 h-2.5" />
            GitHub
          </a>
        </div>

        {/* Info expandida — fade in con delay */}
        <div className="flex-1 h-full px-5 py-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-200 overflow-y-auto min-w-0">
          <h2 className="text-white text-lg font-bold mb-0.5 truncate">{dev.name}</h2>
          <p className="text-white/60 text-xs mb-3">{dev.role}</p>
          <p className="text-white/85 text-xs leading-relaxed mb-4">{dev.description}</p>

          <div className="mb-3">
            <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest mb-1.5">Servicios</p>
            {dev.services.map((s) => (
              <p key={s} className="text-white/90 text-xs">• {s}</p>
            ))}
          </div>

          <div className="mb-3">
            <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest mb-1.5">Tecnologías</p>
            <div className="flex flex-wrap gap-1">
              {dev.technologies.map((t) => (
                <span key={t} className="bg-white/20 text-white text-[9px] px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <a
            href={dev.portfolio}
            className="inline-flex items-center gap-1 text-white/90 text-xs hover:underline mt-1"
          >
            <ExternalLink className="w-3 h-3" />
            Ver portafolio completo
          </a>
        </div>
      </div>

      {/* Sección derecha blanca — visible por defecto */}
      <div className="absolute inset-y-0 right-0 w-[calc(100%-150px)] p-6 z-[1] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#333] mb-1">{dev.name}</h2>
          <p className="text-sm text-[#888] mb-3">{dev.role}</p>
          <p className="text-sm text-[#555] leading-relaxed">{dev.description}</p>
        </div>
        <p className="text-xs text-[#bbb] italic self-end">Hover para ver portafolio →</p>
      </div>
    </Link>
  )
}

// ── Footer principal ─────────────────────────────────────────
export default function Footer() {
  // feature/js-interactions — DEV3
  const [showPortfolios, setShowPortfolios] = useState(false)
  const [showInfo, setShowInfo] = useState(true)

  return (
    <footer className="bg-[#ebebeb] mt-8">

      {/* ── Botón "Ver portafolios" sobre fondo amarillo ── */}
      <div className="bg-[#ffe600] py-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#2d3277] font-semibold text-sm uppercase tracking-widest">
              Equipo de desarrollo
            </p>
            <button
              onClick={() => setShowPortfolios(!showPortfolios)}
              className="flex items-center gap-2 bg-[#2d3277] hover:bg-[#1e2260] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow-md"
            >
              {showPortfolios ? "Ocultar portafolio" : "Ver portafolio del desarrollador"}
              {showPortfolios
                ? <ChevronUp className="w-4 h-4" />
                : <ChevronDown className="w-4 h-4" />
              }
            </button>
          </div>

          {/* Cards — se revelan al hacer clic en el botón */}
          {showPortfolios && (
            <div className="mt-6 max-w-lg mx-auto">
              {developers.map((dev) => (
                <DeveloperCard key={dev.name} dev={dev} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Toggle "Más información" ── feature/js-interactions · DEV3 ── */}
      <div className="flex justify-center py-3">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="flex items-center gap-1 text-[#333] text-sm border border-[#ccc] bg-white px-4 py-1.5 rounded hover:bg-gray-50 transition-colors"
        >
          Más información
          <ChevronUp className={`w-4 h-4 transition-transform duration-200 ${showInfo ? "" : "rotate-180"}`} />
        </button>
      </div>

      {showInfo && (
        <>
          <div className="border-t border-[#ddd] bg-white">
            <div className="max-w-[1200px] mx-auto px-4 py-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#666] mb-2">
                <a href="#" className="hover:text-[#3483fa]">Trabaja con nosotros</a>
                <a href="#" className="hover:text-[#3483fa]">Términos y condiciones</a>
                <a href="#" className="hover:text-[#3483fa]">Promociones</a>
                <a href="#" className="hover:text-[#3483fa]">Cómo cuidamos tu privacidad</a>
                <a href="#" className="hover:text-[#3483fa]">Accesibilidad</a>
                <a href="#" className="hover:text-[#3483fa]">Ayuda / PQR</a>
                <a href="#" className="hover:text-[#3483fa]">Navidad</a>
                <a href="#" className="text-[#3483fa] hover:underline">www.sic.gov.co</a>
              </div>
              <p className="text-xs text-[#999]">Copyright © 1999-2026 MercadoLibre Colombia LTDA.</p>
              <p className="text-xs text-[#999]">Calle 100 #7-33, Torre I, Piso 16, Bogotá D.C., Colombia</p>
            </div>
          </div>

          <div className="border-t border-[#ddd] bg-white">
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center gap-8">
              <Image
                src="/images/sic-logo.png"
                alt="Superintendencia de Industria y Comercio"
                width={120}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
              <Image
                src="/images/precio-unidad.png"
                alt="Precio por unidad de medida"
                width={160}
                height={40}
                style={{ width: "auto", height: "40px" }}
              />
            </div>
          </div>
        </>
      )}
    </footer>
  )
}
