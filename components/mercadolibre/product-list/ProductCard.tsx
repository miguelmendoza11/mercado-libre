// =============================================================
// RAMA: feature/product-list — DEV2: Juan Montezuma
// Componente: Tarjeta individual de producto (videojuego)
// =============================================================
// RAMA: feature/ui-styles — DEV3: Sebastian Camues
// Estilos visuales de la tarjeta (hover, colores, layout)
// =============================================================

interface ProductCardProps {
  image: string
  title: string
  seller?: string
  isVerified?: boolean
  price: string
  platform?: string
  genre?: string
  location?: string
}

export default function ProductCard({
  image,
  title,
  seller,
  isVerified,
  price,
  platform,
  genre,
  location,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      {/* Product Image — feature/ui-styles · DEV3: Sebastian Camues */}
      <div className="relative h-[200px] overflow-hidden bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info — feature/product-list · DEV2: Juan Montezuma */}
      <div className="p-4">
        {/* Seller */}
        {seller && (
          <p className="text-xs text-[#666] mb-1 flex items-center gap-1">
            {seller}
            {isVerified && (
              <span className="text-[#3483fa]">✔</span>
            )}
          </p>
        )}

        {/* Title */}
        <h3 className="text-sm text-[#1a0dab] line-clamp-2 mb-2">
          {title}
        </h3>

        {/* Price */}
        <p className="text-2xl text-[#333] mb-2">
          $ {price}
        </p>

        {/* Platform · Genre · Location */}
        {(platform || genre || location) && (
          <p className="text-xs text-[#666]">
            {[platform, genre, location]
              .filter(Boolean)
              .join(" | ")}
          </p>
        )}
      </div>
    </div>
  )
}
