"use client"

// =============================================================
// RAMA: feature/navbar — DEV1: Juan Gallardo
// RAMA: feature/product-search — DEV1: Juan Gallardo
// =============================================================

import { Search, ChevronDown, MapPin, Bell, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  searchTerm?: string
  onSearchChange?: (term: string) => void
}

export default function Header({ searchTerm = "", onSearchChange }: HeaderProps) {
  return (
    <header className="bg-[#ffe600] w-full">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* ── TOP ROW: Logo | Buscador | (vacío) ── */}
        <div className="flex items-center gap-6 pt-3 pb-3">

          {/* Logo */}
          <a href="#" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <Image
              src="/images/mercadolibre-logo.png"
              alt="Mercado Libre Logo"
              width={134}
              height={34}
              style={{ width: "134px", height: "34px", objectFit: "contain" }}
              priority
            />
          </a>

          {/* ── SEARCH BAR ── feature/product-search · DEV1: Juan Gallardo ── */}
          <div className="flex-1 max-w-[620px]">
            <div className="flex shadow-sm">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Buscar productos, marcas y más..."
                className="flex-1 px-4 py-2.5 rounded-l-sm text-sm bg-white border-none outline-none"
              />
              <div className="flex items-center px-3 bg-white border-l border-[#e0e0e0]">
                <span className="text-sm text-[#666]">en todo Mercado Libre</span>
                <ChevronDown className="w-4 h-4 ml-1 text-[#666]" />
              </div>
              <button className="bg-white px-4 rounded-r-sm border-l border-[#e0e0e0] hover:bg-[#f5f5f5]">
                <Search className="w-5 h-5 text-[#666]" />
              </button>
            </div>
          </div>

          {/* Espacio derecho vacío */}
          <div className="flex items-center gap-4 text-sm flex-shrink-0">
            <a href="#" className="text-[#333] hover:text-[#2d3277]">Crea tu cuenta</a>
            <a href="#" className="text-[#333] hover:text-[#2d3277]">Ingresa</a>
            <a href="#" className="text-[#333] hover:text-[#2d3277]">Mis compras</a>
            <div className="relative cursor-pointer">
              <Bell className="w-5 h-5 text-[#333]" />
              <span className="absolute -top-1 -right-1 bg-[#e74c3c] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-[#333]" />
              <span className="absolute -top-1 -right-1 text-[10px] font-bold text-[#333]">+9</span>
            </div>
          </div>
        </div>

        {/* ── NAV ROW ── feature/navbar · DEV1: Juan Gallardo ── */}
        <div className="flex items-center justify-between pb-3 border-t border-[#f0d000] pt-2 text-sm">
          <div className="flex items-center gap-6">
            {/* Ubicación a la izquierda de Categorías */}
            <div className="flex items-center gap-1 text-[#333] cursor-pointer hover:underline">
              <MapPin className="w-3.5 h-3.5 text-[#555]" />
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-[#555]">Ingresa tu</span>
                <span className="text-[11px] font-semibold">ubicación</span>
              </div>
            </div>

            <nav className="flex items-center gap-5">
              <button className="flex items-center gap-1 text-[#333] hover:text-[#2d3277] font-medium">
                Categorías <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Ofertas</a>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Cupones</a>
              <a href="#" className="text-[#333] hover:text-[#2d3277] flex items-center gap-1">
                Supermercado
                <span className="bg-[#00a650] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NUEVO</span>
              </a>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Moda</a>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Vender</a>
              <a href="#" className="text-[#333] hover:text-[#2d3277]">Ayuda / PQR</a>
            </nav>
          </div>
        </div>

      </div>
    </header>
  )
}