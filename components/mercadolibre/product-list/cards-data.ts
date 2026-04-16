// =============================================================
// RAMA: feature/product-list — DEV2: Juan Montezuma
// Datos de videojuegos: fuente única compartida entre ProductGrid y page.tsx
// isUsed: true = producto de segunda   |   isDuenioDirecto: true = vendedor particular
// =============================================================

export interface VideoGame {
  id: number
  image: string
  title: string
  seller?: string
  isVerified?: boolean
  price: string
  platform: string
  genre: string
  location: string
  isUsed: boolean
  isDuenioDirecto: boolean
}

export const videoGames: VideoGame[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=600&h=400&fit=crop",
    title: "God of War Ragnarök",
    price: "220.000",
    platform: "PS5",
    genre: "Acción / Aventura",
    location: "Bogotá D.C.",
    isUsed: false,
    isDuenioDirecto: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&h=400&fit=crop",
    title: "The Legend of Zelda: Tears of the Kingdom",
    seller: "GamePlanet",
    isVerified: true,
    price: "280.000",
    platform: "Nintendo Switch",
    genre: "Aventura",
    location: "Medellín - Antioquia",
    isUsed: false,
    isDuenioDirecto: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop",
    title: "Elden Ring",
    price: "180.000",
    platform: "PS5",
    genre: "RPG",
    location: "Medellín - Antioquia",
    isUsed: true,
    isDuenioDirecto: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop",
    title: "EA Sports FC 25",
    seller: "LevelUp Store",
    isVerified: true,
    price: "250.000",
    platform: "PS5",
    genre: "Deportes",
    location: "Medellín - Antioquia",
    isUsed: false,
    isDuenioDirecto: false,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1569698388743-7a6de7c3f7b4?w=600&h=400&fit=crop",
    title: "Red Dead Redemption 2",
    price: "150.000",
    platform: "Xbox Series X",
    genre: "Acción",
    location: "Cali - Valle Del Cauca",
    isUsed: true,
    isDuenioDirecto: true,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    title: "Call of Duty: Modern Warfare III",
    seller: "PlayZone",
    isVerified: true,
    price: "200.000",
    platform: "PC",
    genre: "FPS",
    location: "Bogotá D.C.",
    isUsed: false,
    isDuenioDirecto: false,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    title: "Marvel's Spider-Man 2",
    price: "260.000",
    platform: "PS5",
    genre: "Acción / Aventura",
    location: "Bogotá D.C.",
    isUsed: false,
    isDuenioDirecto: true,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1510788036894-e7d5dc71da35?w=600&h=400&fit=crop",
    title: "Hogwarts Legacy",
    price: "190.000",
    platform: "Nintendo Switch",
    genre: "RPG",
    location: "Bogotá D.C.",
    isUsed: true,
    isDuenioDirecto: false,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=600&h=400&fit=crop",
    title: "Forza Horizon 5",
    price: "170.000",
    platform: "Xbox Series X",
    genre: "Carreras",
    location: "Medellín - Antioquia",
    isUsed: false,
    isDuenioDirecto: true,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
    title: "The Last of Us Part I",
    price: "230.000",
    platform: "PS5",
    genre: "Aventura",
    location: "Cali - Valle Del Cauca",
    isUsed: true,
    isDuenioDirecto: true,
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=600&h=400&fit=crop",
    title: "Minecraft",
    seller: "GamePlanet",
    isVerified: true,
    price: "120.000",
    platform: "Nintendo Switch",
    genre: "Sandbox",
    location: "Medellín - Antioquia",
    isUsed: false,
    isDuenioDirecto: false,
  },
]

export function filterGames(
  data: VideoGame[],
  searchTerm: string,
  filterUsado: boolean,
  filterDuenioDirecto: boolean
): VideoGame[] {
  return data.filter((game) => {
    if (searchTerm && !game.title.toLowerCase().includes(searchTerm.toLowerCase())) return false
    if (filterUsado && !game.isUsed) return false
    if (filterDuenioDirecto && !game.isDuenioDirecto) return false
    return true
  })
}
