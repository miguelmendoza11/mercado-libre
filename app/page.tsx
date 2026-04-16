"use client"


import { useState } from "react"
import Header from "@/components/mercadolibre/navbar/Header"
import Breadcrumb from "@/components/mercadolibre/servicios/Breadcrumb"
import Sidebar from "@/components/mercadolibre/servicios/Sidebar"
import ProductGrid from "@/components/mercadolibre/product-list/ProductGrid"
import Footer from "@/components/mercadolibre/footer/Footer"
import { videoGames, filterGames } from "@/components/mercadolibre/product-list/cars-data"

export default function Home() {
  // ── Estado compartido de búsqueda y filtros ──────────────────
  const [searchTerm, setSearchTerm] = useState("")
  const [filterUsado, setFilterUsado] = useState(false)
  const [filterDuenioDirecto, setFilterDuenioDirecto] = useState(false)

  // Conteo dinámico para el sidebar
  const resultCount = filterGames(videoGames, searchTerm, filterUsado, filterDuenioDirecto).length

  return (
    <div className="min-h-screen bg-[#ebebeb]">
      {/* feature/navbar + feature/product-search — DEV1: Juan Gallardo */}
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="max-w-[1200px] mx-auto px-4 py-6">
        {/* feature/servicios — DEV2: Juan Montezuma */}
        <Breadcrumb />

        <div className="flex gap-6">
          {/* feature/servicios + feature/js-interactions */}
          <Sidebar
            filterUsado={filterUsado}
            onFilterUsado={setFilterUsado}
            filterDuenioDirecto={filterDuenioDirecto}
            onFilterDuenioDirecto={setFilterDuenioDirecto}
            resultCount={resultCount}
          />

          {/* feature/product-list — DEV2: Juan Montezuma */}
          <ProductGrid
            searchTerm={searchTerm}
            filterUsado={filterUsado}
            filterDuenioDirecto={filterDuenioDirecto}
          />
        </div>
      </main>

      {/* feature/dev-portfolio + feature/js-interactions */}
      <Footer />
    </div>
  )
}