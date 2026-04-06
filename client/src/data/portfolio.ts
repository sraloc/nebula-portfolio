export interface PortfolioItem {
  id: number;
  title: string;
  alt: string;
  category: 'stills' | 'fotografia' | 'makeoff';
  image: string;
  description?: string;
  featured?: boolean;
}

// Imágenes destacadas que ocuparán 2 columnas
const featuredTitles = ['Gangrena', 'Verte Encima', 'Registro DJ La Feria', 'Sesión de Fotos', 'Equipo de Arte', 'Detrás de cámara _Verte Encima_'];

export const portfolioItems: PortfolioItem[] = [
  {
    "id": 0,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_caacdf96.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 1,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_ef755613.jpg",
    "description": ""
  },
  {
    "id": 2,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_be9623f6.jpg",
    "description": ""
  },
  {
    "id": 3,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_a229d670.jpg",
    "description": ""
  },
  {
    "id": 4,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_6786ed6f.jpg",
    "description": ""
  },
  {
    "id": 5,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_20c60440.jpg",
    "description": ""
  },
  {
    "id": 6,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_9e4267c1.jpg",
    "description": ""
  },
  {
    "id": 7,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_b7a45a4d.jpg",
    "description": ""
  },
  {
    "id": 8,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_3f896b8b.jpg",
    "description": ""
  },
  {
    "id": 9,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_52ecd814.jpg",
    "description": ""
  },
  {
    "id": 10,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_6e5374b7.jpg",
    "description": ""
  },
  {
    "id": 11,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_e2560c1d.jpg",
    "description": ""
  },
  {
    "id": 12,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_dd5a2066.jpg",
    "description": ""
  },
  {
    "id": 13,
    "title": "Gangrena",
    "alt": "Gangrena",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_e3b245df.jpg",
    "description": ""
  },
  {
    "id": 14,
    "title": "Verte Encima",
    "alt": "Verte Encima",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte Encima_47cb45a7.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 15,
    "title": "Verte Encima",
    "alt": "Verte Encima",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte Encima_a9e7ef9f.jpg",
    "description": ""
  },
  {
    "id": 16,
    "title": "Verte Encima",
    "alt": "Verte Encima",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte Encima_cbd6cd58.jpg",
    "description": ""
  },
  {
    "id": 17,
    "title": "Verte Encima",
    "alt": "Verte Encima",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte Encima_3fa5c18e.jpg",
    "description": ""
  },
  {
    "id": 18,
    "title": "Volver pa atras",
    "alt": "Volver pa atras",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver pa atras_6f00cbbf.jpg",
    "description": ""
  },
  {
    "id": 19,
    "title": "Volver pa atras",
    "alt": "Volver pa atras",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver pa atras_3ff13338.jpg",
    "description": ""
  },
  {
    "id": 20,
    "title": "Volver pa atras",
    "alt": "Volver pa atras",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver pa atras_dfcd4e75.jpg",
    "description": ""
  },
  {
    "id": 21,
    "title": "Volver pa atras",
    "alt": "Volver pa atras",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver pa atras_552cc71f.jpg",
    "description": ""
  },
  {
    "id": 22,
    "title": "Paisajismo",
    "alt": "Paisajismo",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Paisajismo_e8a5abd7.jpg",
    "description": ""
  },
  {
    "id": 23,
    "title": "Paisajismo",
    "alt": "Paisajismo",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Paisajismo_03d856bb.jpg",
    "description": ""
  },
  {
    "id": 24,
    "title": "Registro DJ La Feria",
    "alt": "Registro DJ La Feria",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro DJ La Feria_2585c6f7.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 25,
    "title": "Registro DJ La Feria",
    "alt": "Registro DJ La Feria",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro DJ La Feria_27b4b97a.jpg",
    "description": ""
  },
  {
    "id": 26,
    "title": "Registro Paxlito en Vivo",
    "alt": "Registro Paxlito en Vivo",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro Paxlito en Vivo_3fc3e3a5.jpg",
    "description": ""
  },
  {
    "id": 27,
    "title": "Registro Paxlito en Vivo",
    "alt": "Registro Paxlito en Vivo",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro Paxlito en Vivo_3a2bfece.jpg",
    "description": ""
  },
  {
    "id": 28,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_14c70d1b.jpg",
    "description": ""
  },
  {
    "id": 29,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_6273493a.jpg",
    "description": ""
  },
  {
    "id": 30,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_eabc29ea.jpg",
    "description": ""
  },
  {
    "id": 31,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_fb6442a2.jpg",
    "description": ""
  },
  {
    "id": 32,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_a9e5f3e3.jpg",
    "description": ""
  },
  {
    "id": 33,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_bbbd5ac2.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 34,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_0009fa98.jpg",
    "description": ""
  },
  {
    "id": 35,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_3a514a08.jpg",
    "description": ""
  },
  {
    "id": 36,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_eb98c83a.jpg",
    "description": ""
  },
  {
    "id": 37,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_78d4ca72.jpg",
    "description": ""
  },
  {
    "id": 38,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_a9a9f2c5.jpg",
    "description": ""
  },
  {
    "id": 39,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_8c3d4f7e.jpg",
    "description": ""
  },
  {
    "id": 40,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_5c8b2e1a.jpg",
    "description": ""
  },
  {
    "id": 41,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_9d7c5f3b.jpg",
    "description": ""
  },
  {
    "id": 42,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_7a2e9c1d.jpg",
    "description": ""
  },
  {
    "id": 43,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_6e1f8a2c.jpg",
    "description": ""
  },
  {
    "id": 44,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_4c3b7e9a.jpg",
    "description": ""
  },
  {
    "id": 45,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_2a5d6f1b.jpg",
    "description": ""
  },
  {
    "id": 46,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_8f4c2e7d.jpg",
    "description": ""
  },
  {
    "id": 47,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión de Fotos_3c7a1e9f.jpg",
    "description": ""
  },
  {
    "id": 48,
    "title": "Detrás de cámara _Verte Encima_",
    "alt": "Detrás de cámara _Verte Encima_",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás de cámara _Verte Encima__b1145525.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 49,
    "title": "Detrás de cámara _Verte Encima_",
    "alt": "Detrás de cámara _Verte Encima_",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás de cámara _Verte Encima__35e679b6.jpg",
    "description": ""
  },
  {
    "id": 50,
    "title": "Equipo de Arte",
    "alt": "Equipo de Arte",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Equipo de Arte_a1cb4a15.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 51,
    "title": "Equipo iluminacion",
    "alt": "Equipo iluminacion",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Equipo iluminacion_6f8c6b83.jpg",
    "description": ""
  },
  {
    "id": 52,
    "title": "Nuestro equipo",
    "alt": "Nuestro equipo",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Nuestro equipo_57fbbd4f.jpg",
    "description": ""
  },
  {
    "id": 53,
    "title": "Operador de Camara _Voy y Vuelvo_",
    "alt": "Operador de Camara _Voy y Vuelvo_",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Operador de camara _Voy y Vuelvo__06a90e5d.jpg",
    "description": ""
  },
  {
    "id": 54,
    "title": "Operador de Camara _Voy y Vuelvo_",
    "alt": "Operador de Camara _Voy y Vuelvo_",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Operador de Camara _Voy y Vuelvo__e41ec5e5.jpg",
    "description": ""
  },
  {
    "id": 55,
    "title": "Prueba de Iluminacion",
    "alt": "Prueba de Iluminacion",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Prueba de Iluminacion_a8a131e4.jpg",
    "description": ""
  },
  {
    "id": 56,
    "title": "Prueba de Iluminacion",
    "alt": "Prueba de Iluminacion",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Prueba de Iluminacion_0764c211.jpg",
    "description": ""
  },
  {
    "id": 57,
    "title": "Detrás de Cámara _Voy y Vuelvo_",
    "alt": "Detrás de Cámara _Voy y Vuelvo_",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás de Cámara _Voy y Vuelvo__e362e07b.jpg",
    "description": ""
  }
];

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    stills: 'STILLS',
    fotografia: 'FOTOGRAFÍA',
    makeoff: 'MAKE OFF'
  };
  return labels[category] || category;
};
