"use client"

// =============================================================
// RAMA: feature/servicios — DEV2: Juan Montezuma
// RAMA: feature/js-interactions — DEV3: Sebastian Camues
// =============================================================

import { useState } from "react"

const allCities = [
  { name: "Bogotá D.C.", count: 165 },
  { name: "Antioquia", count: 136 },
  { name: "Valle Del Cauca", count: 29 },
  { name: "Cundinamarca", count: 23 },
  { name: "Santander", count: 16 },
  { name: "Atlántico", count: 8 },
  { name: "Norte De Santander", count: 6 },
  { name: "Risaralda", count: 6 },
  { name: "Tolima", count: 6 },
]

interface SidebarProps {
  filterUsado: boolean
  onFilterUsado: (v: boolean) => void
  filterDuenioDirecto: boolean
  onFilterDuenioDirecto: (v: boolean) => void
  resultCount: number
}

// Toggle reutilizable — feature/js-interactions · DEV3
function Toggle({ active, onChange }: { active: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!active)}
      className={`w-10 h-5 rounded-full transition-colors duration-200 relative flex-shrink-0 ${active ? "bg-[#3483fa]" : "bg-[#ccc]"}`}
    >
      <span
        className={`absolute top-[2px] w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-200 ${active ? "left-[22px]" : "left-[2px]"}`}
      />
    </button>
  )
}

export default function Sidebar({
  filterUsado,
  onFilterUsado,
  filterDuenioDirecto,
  onFilterDuenioDirecto,
  resultCount,
}: SidebarProps) {
  const [showAllCities, setShowAllCities] = useState(false)
  const visibleCities = showAllCities ? allCities : allCities.slice(0, 5)

  return (
    <aside className="w-[220px] flex-shrink-0">
      <h2 className="text-2xl font-light text-[#333] mb-1">Videojuegos y Consolas</h2>
      <p className="text-sm text-[#666] mb-4">{resultCount} resultados</p>

      <a href="#" className="flex items-center gap-1 text-[#3483fa] text-sm mb-5 hover:underline">
        🔖 Guardar esta búsqueda
      </a>

      {/* Filtros activos */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="flex items-center gap-1 bg-[#ebebeb] text-[#333] text-xs px-2 py-1 rounded">
          Juegos <button className="ml-1 text-[#999] hover:text-[#333]">✕</button>
        </span>
        {filterUsado && (
          <span className="flex items-center gap-1 bg-[#ebebeb] text-[#333] text-xs px-2 py-1 rounded">
            Usado <button className="ml-1 text-[#999] hover:text-[#333]" onClick={() => onFilterUsado(false)}>✕</button>
          </span>
        )}
        {filterDuenioDirecto && (
          <span className="flex items-center gap-1 bg-[#ebebeb] text-[#333] text-xs px-2 py-1 rounded">
            Vendedor particular <button className="ml-1 text-[#999] hover:text-[#333]" onClick={() => onFilterDuenioDirecto(false)}>✕</button>
          </span>
        )}
      </div>

      <div className="space-y-0">
        {/* Toggle Usado */}
        <div className="flex items-center justify-between py-3 border-b border-[#ddd]">
          <span className="text-sm text-[#333]">Usado</span>
          <Toggle active={filterUsado} onChange={onFilterUsado} />
        </div>

        {/* Toggle Vendedor particular */}
        <div className="flex items-center justify-between py-3 border-b border-[#ddd]">
          <span className="text-sm text-[#333]">Vendedor particular</span>
          <Toggle active={filterDuenioDirecto} onChange={onFilterDuenioDirecto} />
        </div>

        {/* Tiendas oficiales */}
        <div className="py-3 border-b border-[#ddd]">
          <p className="text-sm font-semibold text-[#333] mb-2">Tiendas oficiales</p>
          <a href="#" className="text-sm text-[#3483fa] hover:underline">Solo tiendas oficiales (132)</a>
        </div>

        {/* Ubicación */}
        <div className="py-3 border-b border-[#ddd]">
          <p className="text-sm font-semibold text-[#333] mb-2">Ubicación</p>
          <ul className="space-y-1.5">
            {visibleCities.map((city) => (
              <li key={city.name}>
                <a href="#" className="text-sm text-[#3483fa] hover:underline">
                  {city.name} ({city.count})
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowAllCities(!showAllCities)}
            className="mt-2 text-sm text-[#3483fa] hover:underline font-medium"
          >
            {showAllCities ? "Mostrar menos" : "Mostrar más"}
          </button>
        </div>

        {/* Plataforma */}
        <div className="py-3">
          <p className="text-sm font-semibold text-[#333] mb-2">Plataforma</p>
        </div>
      </div>
    </aside>
  )
}
