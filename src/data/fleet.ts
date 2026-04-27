import pullman from "@/assets/pullman.jpg";
import hiace from "@/assets/hiace.jpg";
import prado from "@/assets/prado.jpg";
import coaster from "@/assets/coaster.jpg";
import interior from "@/assets/interior.jpg";

export interface Vehicle {
  id: string;
  name: string;
  capacity: number;
  cover: string;
  gallery: string[];
  description: { es: string; en: string; pt: string };
  features: { es: string[]; en: string[]; pt: string[] };
}

// Note: gallery uses placeholders by reusing cover + interior. Replace with real photos later.
const buildGallery = (cover: string) => [cover, interior, cover, interior, cover];

export const fleet: Vehicle[] = [
  {
    id: "pullman",
    name: "Pullman",
    capacity: 50,
    cover: pullman,
    gallery: buildGallery(pullman),
    description: {
      es: "Nuestro autocar de mayor capacidad. Ideal para grupos grandes, excursiones de larga distancia y servicios corporativos masivos. Confort total con asientos reclinables y amplio espacio para equipaje.",
      en: "Our highest-capacity coach. Ideal for large groups, long-distance excursions and large corporate services. Total comfort with reclining seats and ample luggage space.",
      pt: "Nosso ônibus de maior capacidade. Ideal para grupos grandes, excursões de longa distância e serviços corporativos massivos. Conforto total com poltronas reclináveis e amplo espaço para bagagem.",
    },
    features: {
      es: ["Aire acondicionado", "Asientos reclinables", "Bodega amplia", "WiFi a bordo", "Sistema de audio/video"],
      en: ["Air conditioning", "Reclining seats", "Large luggage hold", "Onboard WiFi", "Audio/video system"],
      pt: ["Ar condicionado", "Poltronas reclináveis", "Porta-malas amplo", "WiFi a bordo", "Sistema de áudio/vídeo"],
    },
  },
  {
    id: "coaster",
    name: "Coaster",
    capacity: 28,
    cover: coaster,
    gallery: buildGallery(coaster),
    description: {
      es: "Mini bus premium para grupos medianos. Equilibrio perfecto entre capacidad y agilidad para excursiones turísticas y traslados grupales ejecutivos.",
      en: "Premium minibus for medium groups. Perfect balance between capacity and agility for tourist excursions and executive group transfers.",
      pt: "Minibus premium para grupos médios. Equilíbrio perfeito entre capacidade e agilidade para excursões turísticas e transferências em grupo executivas.",
    },
    features: {
      es: ["Aire acondicionado", "Asientos individuales", "Equipaje en bodega", "Acceso panorámico", "Cinturones de seguridad"],
      en: ["Air conditioning", "Individual seats", "Luggage hold", "Panoramic windows", "Safety belts"],
      pt: ["Ar condicionado", "Poltronas individuais", "Porta-malas", "Janelas panorâmicas", "Cintos de segurança"],
    },
  },
  {
    id: "hiace",
    name: "Hiace",
    capacity: 14,
    cover: hiace,
    gallery: buildGallery(hiace),
    description: {
      es: "Van ejecutiva ideal para grupos pequeños, traslados al aeropuerto y servicios corporativos. Discreta, ágil y elegante.",
      en: "Executive van ideal for small groups, airport transfers and corporate services. Discreet, agile and elegant.",
      pt: "Van executiva ideal para grupos pequenos, transferências do aeroporto e serviços corporativos. Discreta, ágil e elegante.",
    },
    features: {
      es: ["Aire acondicionado", "Asientos cómodos", "Espacio para equipaje", "Conducción suave", "Acceso fácil"],
      en: ["Air conditioning", "Comfortable seats", "Luggage space", "Smooth driving", "Easy access"],
      pt: ["Ar condicionado", "Assentos confortáveis", "Espaço para bagagem", "Direção suave", "Fácil acesso"],
    },
  },
  {
    id: "prado",
    name: "Prado",
    capacity: 6,
    cover: prado,
    gallery: buildGallery(prado),
    description: {
      es: "SUV de lujo para servicios privados, ejecutivos VIP y traslados exclusivos. La opción más refinada de nuestra flota.",
      en: "Luxury SUV for private services, VIP executives and exclusive transfers. The most refined choice in our fleet.",
      pt: "SUV de luxo para serviços privados, executivos VIP e transferências exclusivas. A opção mais refinada da nossa frota.",
    },
    features: {
      es: ["Cuero premium", "Climatización dual", "4x4 todo terreno", "Privacidad total", "Conducción premium"],
      en: ["Premium leather", "Dual climate control", "4x4 all-terrain", "Total privacy", "Premium drive"],
      pt: ["Couro premium", "Climatização dual", "4x4 todo terreno", "Privacidade total", "Direção premium"],
    },
  },
];