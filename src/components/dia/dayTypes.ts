export const DAYS: DaysProps[] = [
  {
    index: 1,
    name: "Lunes",
    te: "Té Negro",
    img: "/te-negro-dia.webp",
    handle: "lunes",
    collection: "te-negro",
    country: "China - India - Sri Lanka",
    preparation: {
      temperature: "100ºC",
      time: "3 a 5 minutos",
      quantity: "2g por taza"
    },
    properties: ["Antioxidante", "Detox", "Energía", "Reduce colesterol"],
    description: "El té negro, oxidado y de sabor fuerte, es rico en antioxidantes. Ayuda a mejorar la salud del corazón, aumentar la energía y mejorar la concentración. Su color oscuro y aroma robusto son visualmente atractivos. Proporciona una experiencia revitalizante y cálida, perfecta para cualquier momento del día."
  },
  {
    index: 2,
    name: "Martes",
    te: "Té Rojo",
    img: "/te-rojo-banner.webp",
    handle: "martes",
    collection: "te-rojo",
    country: "China",
    preparation: {
      temperature: "100ºC",
      time: "5 minutos",
      quantity: "2g por taza"
    },
    properties: ["Antioxidante", "Detox", "Quema grasa", "Reduce colesterol"],
    description: "El té rojo, también conocido como Pu-erh, es un té fermentado con propiedades digestivas, antioxidantes y de reducción de colesterol. Su color rojizo intenso y la presentación tradicional lo hacen visualmente atractivo. Proporciona una experiencia de calma y bienestar, tanto por sus beneficios como por su preparación ritual."
  },
  {
    index: 3,
    name: "Miércoles",
    te: "Té Blanco",
    img: "/te-blanco-dia.webp",
    handle: "miercoles",
    collection: "te-blanco",
    country: "China",
    preparation: {
      temperature: "80ºC",
      time: "3 a 5 minutos",
      quantity: "2g por taza"
    },
    properties: ["Antioxidante", "Detox", "Cuidado de piel", "Reduce problemas cardiacos"],
    description: "El té blanco, poco procesado y delicado, es rico en antioxidantes. Mejora la piel, refuerza el sistema inmunológico y promueve la salud cardiovascular. Su color claro y hojas enteras son visualmente atractivos. Proporciona una experiencia suave y refrescante, ideal para disfrutar en momentos de tranquilidad."
  },
  {
    index: 4,
    name: "Jueves",
    te: "Té Verde",
    img: "/te-verde-dia.webp",
    handle: "jueves",
    collection: "te-verde",
    country: "China - Japón",
    preparation: {
      temperature: "80ºC",
      time: "2 a 3 minutos",
      quantity: "2.5g por taza"
    },
    properties: ["Antioxidante", "Detox", "Energía", "Reduce colesterol"],
    description: "El té verde, poco oxidado y rico en antioxidantes, mejora la salud cerebral, promueve la pérdida de peso y reduce el riesgo de enfermedades cardíacas. Su color verde claro y aroma fresco son visualmente atractivos. Proporciona una experiencia revitalizante y saludable, perfecta para cualquier momento del día."
  },
  {
    index: 5,
    name: "Viernes",
    te: "Matcha",
    img: "/matcha-dia.webp",
    handle: "viernes",
    collection: "matcha",
    country: "Japón",
    preparation: {
      temperature: "100ºC",
      time: "5 minutos",
      quantity: "2g por taza"
    },
    properties: ["Antioxidante", "Detox", "Quema grasa", "Relax"],
    description: "El té matcha, un polvo de té verde japonés, es antioxidante y energizante. Mejora la concentración, promueve la pérdida de peso y desintoxica el cuerpo. Su vibrante color verde y textura cremosa lo hacen visualmente atractivo. Ofrece una experiencia rica y umami, ideal para disfrutar en cualquier momento."
  }
]

interface PreparationProp {
  temperature: string;
  time: string;
  quantity: string;
}

export interface DaysProps {
  index: number;
  name: string;
  te: string;
  img: string;
  handle: string;
  collection: string;
  preparation: PreparationProp;
  properties: string[];
  description: string;
  country: string;
}