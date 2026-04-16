// =============================================================
// RAMA: feature/product-list — DEV2: Juan Montezuma
// =============================================================

import { videoGames, filterGames } from "./cars-data"
import ProductCard from "./ProductCard"

interface ProductGridProps {
  searchTerm?: string
  filterUsado?: boolean
  filterDuenioDirecto?: boolean
}

export default function ProductGrid({
  searchTerm = "",
  filterUsado = false,
  filterDuenioDirecto = false,
}: ProductGridProps) {
  const filtered = filterGames(videoGames, searchTerm, filterUsado, filterDuenioDirecto)

  if (filtered.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-center">
        <p className="text-4xl mb-4">🔍</p>
        <p className="text-lg font-medium text-[#333] mb-1">Sin resultados</p>
        <p className="text-sm text-[#666]">
          Intenta con otro término de búsqueda o cambia los filtros
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((game) => (
          <ProductCard
            key={game.id}
            image={game.image}
            title={game.title}
            seller={game.seller}
            isVerified={game.isVerified}
            price={game.price}
            platform={game.platform}
            genre={game.genre}
            location={game.location}
          />
        ))}
      </div>
    </div>
  )
}
