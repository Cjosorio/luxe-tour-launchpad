import pullman from "@/assets/pullman.jpg";
import pullmanPremium from "@/assets/pullman-premium.jpg";
import pullmanExpress from "@/assets/pullman-express.jpg";
import hiace from "@/assets/hiace.jpg";
import hiaceNew from "@/assets/hiace-new.jpg";
import prado from "@/assets/prado.jpg";
import coaster from "@/assets/coaster.jpg";
import coasterNew from "@/assets/coaster-new.jpg";
import interior from "@/assets/interior.jpg";

export interface Vehicle {
  id: string;
  name: string;
  capacity: number;
  capacityLabel?: { es: string; en: string; pt: string };
  cover: string;
  gallery: string[];
  description: { es: string; en: string; pt: string };
  features: { es: string[]; en: string[]; pt: string[] };
  ideal: { es: string; en: string; pt: string };
  badge?: { es: string; en: string; pt: string };
}

const buildGallery = (cover: string) => [cover, interior, cover, interior, cover];

export const fleet: Vehicle[] = [
  {
    id: "pullman-premium",
    name: "Pullman Premium",
    capacity: 50,
    cover: pullmanPremium,
    gallery: buildGallery(pullmanPremium),
    badge: { es: "Top de gama", en: "Top tier", pt: "Top de linha" },
    description: {
      es: "Nuestro autocar insignia con sanitario a bordo. Ideal para viajes largos internacionales y grupos exigentes que buscan máximo confort.",
      en: "Our flagship coach with onboard restroom. Ideal for long international trips and demanding groups seeking maximum comfort.",
      pt: "Nosso ônibus principal com sanitário a bordo. Ideal para viagens longas internacionais e grupos exigentes.",
    },
    features: {
      es: ["Sanitario a bordo", "Televisión", "Aire acondicionado", "Cargadores USB", "Seguro de daños a terceros"],
      en: ["Onboard restroom", "Television", "Air conditioning", "USB chargers", "Third-party insurance"],
      pt: ["Sanitário a bordo", "Televisão", "Ar condicionado", "Carregadores USB", "Seguro de danos a terceiros"],
    },
    ideal: {
      es: "Viajes largos internacionales",
      en: "Long international trips",
      pt: "Viagens longas internacionais",
    },
  },
  {
    id: "pullman-express",
    name: "Pullman Express",
    capacity: 49,
    cover: pullmanExpress,
    gallery: buildGallery(pullmanExpress),
    description: {
      es: "Autocar versátil para excursiones y eventos masivos. La opción perfecta cuando necesitas mover grupos grandes con eficiencia.",
      en: "Versatile coach for excursions and massive events. The perfect choice when you need to move large groups efficiently.",
      pt: "Ônibus versátil para excursões e eventos massivos. A opção perfeita para mover grupos grandes com eficiência.",
    },
    features: {
      es: ["Televisión", "Aire acondicionado", "Cargadores USB", "Seguro de daños a terceros", "Bodega amplia"],
      en: ["Television", "Air conditioning", "USB chargers", "Third-party insurance", "Large luggage hold"],
      pt: ["Televisão", "Ar condicionado", "Carregadores USB", "Seguro de danos a terceiros", "Porta-malas amplo"],
    },
    ideal: {
      es: "Excursiones y eventos masivos",
      en: "Excursions and large events",
      pt: "Excursões e eventos massivos",
    },
  },
  {
    id: "coaster",
    name: "Coaster",
    capacity: 26,
    cover: coasterNew,
    gallery: buildGallery(coasterNew),
    description: {
      es: "Mini bus premium con parrilla para equipaje. Equilibrio perfecto entre capacidad y agilidad para grupos medianos y turismo interno.",
      en: "Premium minibus with luggage rack. Perfect balance between capacity and agility for medium groups and domestic tourism.",
      pt: "Minibus premium com bagageiro. Equilíbrio perfeito entre capacidade e agilidade para grupos médios.",
    },
    features: {
      es: ["Parrilla para equipaje", "Aire acondicionado", "Cargadores USB", "Asientos individuales", "Cinturones de seguridad"],
      en: ["Luggage rack", "Air conditioning", "USB chargers", "Individual seats", "Safety belts"],
      pt: ["Bagageiro", "Ar condicionado", "Carregadores USB", "Poltronas individuais", "Cintos de segurança"],
    },
    ideal: {
      es: "Grupos medianos y turismo interno",
      en: "Medium groups and domestic tourism",
      pt: "Grupos médios e turismo interno",
    },
  },
  {
    id: "hiace",
    name: "Hiace",
    capacity: 14,
    cover: hiaceNew,
    gallery: buildGallery(hiaceNew),
    description: {
      es: "Van ejecutiva ágil y elegante. Perfecta para traslados ejecutivos, familias y grupos pequeños que valoran la discreción.",
      en: "Agile and elegant executive van. Perfect for executive transfers, families and small groups that value discretion.",
      pt: "Van executiva ágil e elegante. Perfeita para transferências executivas, famílias e grupos pequenos.",
    },
    features: {
      es: ["Aire acondicionado", "Cargadores USB", "Asientos cómodos", "Conducción ágil", "Acceso fácil"],
      en: ["Air conditioning", "USB chargers", "Comfortable seats", "Agile driving", "Easy access"],
      pt: ["Ar condicionado", "Carregadores USB", "Assentos confortáveis", "Direção ágil", "Fácil acesso"],
    },
    ideal: {
      es: "Traslados ejecutivos y familias",
      en: "Executive transfers and families",
      pt: "Transferências executivas e famílias",
    },
  },
  {
    id: "luxury-vip",
    name: "Luxury VIP",
    capacity: 6,
    capacityLabel: {
      es: "Land Cruiser Prado",
      en: "Land Cruiser Prado",
      pt: "Land Cruiser Prado",
    },
    cover: prado,
    gallery: buildGallery(prado),
    badge: { es: "Exclusivo", en: "Exclusive", pt: "Exclusivo" },
    description: {
      es: "Land Cruiser Prado de lujo. Privacidad, confort total y la presencia que diplomáticos y traslados de alto nivel demandan.",
      en: "Luxury Land Cruiser Prado. Privacy, total comfort and the presence demanded by diplomats and high-level transfers.",
      pt: "Land Cruiser Prado de luxo. Privacidade, conforto total e a presença exigida por diplomatas e transferências de alto nível.",
    },
    features: {
      es: ["Lujo total", "Privacidad absoluta", "Confort premium", "Cuero de alta gama", "Climatización dual"],
      en: ["Total luxury", "Absolute privacy", "Premium comfort", "Top-grade leather", "Dual climate control"],
      pt: ["Luxo total", "Privacidade absoluta", "Conforto premium", "Couro premium", "Climatização dual"],
    },
    ideal: {
      es: "Diplomáticos y traslados de alto nivel",
      en: "Diplomats and high-level transfers",
      pt: "Diplomatas e transferências de alto nível",
    },
  },
];
