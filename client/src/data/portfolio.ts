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
const featuredTitles = ['Gangrena', 'Verte Encima', 'Registro DJ La Feria', 'Sesión de Fotos(5)', 'Equipo de Arte', 'Detrás de cámara _Verte Encima_'];

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
    "title": "Gangrena(1)",
    "alt": "Gangrena(1)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(1)_ef755613.jpg",
    "description": ""
  },
  {
    "id": 2,
    "title": "Gangrena(2)",
    "alt": "Gangrena(2)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(2)_be9623f6.jpg",
    "description": ""
  },
  {
    "id": 3,
    "title": "Gangrena(3)",
    "alt": "Gangrena(3)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(3)_a229d670.jpg",
    "description": ""
  },
  {
    "id": 4,
    "title": "Gangrena(4)",
    "alt": "Gangrena(4)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(4)_6786ed6f.jpg",
    "description": ""
  },
  {
    "id": 5,
    "title": "Gangrena(5)",
    "alt": "Gangrena(5)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(5)_20c60440.jpg",
    "description": ""
  },
  {
    "id": 6,
    "title": "Gangrena(6)",
    "alt": "Gangrena(6)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(6)_9e4267c1.jpg",
    "description": ""
  },
  {
    "id": 7,
    "title": "Gangrena(7)",
    "alt": "Gangrena(7)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(7)_b7a45a4d.jpg",
    "description": ""
  },
  {
    "id": 8,
    "title": "Gangrena(8)",
    "alt": "Gangrena(8)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(8)_3f896b8b.jpg",
    "description": ""
  },
  {
    "id": 9,
    "title": "Gangrena(9)",
    "alt": "Gangrena(9)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(9)_52ecd814.jpg",
    "description": ""
  },
  {
    "id": 10,
    "title": "Gangrena(10)",
    "alt": "Gangrena(10)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(10)_6e5374b7.jpg",
    "description": ""
  },
  {
    "id": 11,
    "title": "Gangrena(11)",
    "alt": "Gangrena(11)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(11)_e2560c1d.jpg",
    "description": ""
  },
  {
    "id": 12,
    "title": "Gangrena(12)",
    "alt": "Gangrena(12)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(12)_dd5a2066.jpg",
    "description": ""
  },
  {
    "id": 13,
    "title": "Gangrena(13)",
    "alt": "Gangrena(13)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(13)_e3b245df.jpg",
    "description": ""
  },
  {
    "id": 14,
    "title": "Verte Encima",
    "alt": "Verte Encima",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte%20Encima_47cb45a7.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 15,
    "title": "Verte Encima(1)",
    "alt": "Verte Encima(1)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte%20Encima(1)_a9e7ef9f.jpg",
    "description": ""
  },
  {
    "id": 16,
    "title": "Verte Encima(2)",
    "alt": "Verte Encima(2)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte%20Encima(2)_cbd6cd58.jpg",
    "description": ""
  },
  {
    "id": 17,
    "title": "Verte Encima(3)",
    "alt": "Verte Encima(3)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte%20Encima(3)_3fa5c18e.jpg",
    "description": ""
  },
  {
    "id": 18,
    "title": "Volver pa atras",
    "alt": "Volver pa atras",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver%20pa%20atras_6f00cbbf.jpg",
    "description": ""
  },
  {
    "id": 19,
    "title": "Volver pa atras(1)",
    "alt": "Volver pa atras(1)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver%20pa%20atras(1)_3ff13338.jpg",
    "description": ""
  },
  {
    "id": 20,
    "title": "Volver pa atras(2)",
    "alt": "Volver pa atras(2)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver%20pa%20atras(2)_dfcd4e75.jpg",
    "description": ""
  },
  {
    "id": 21,
    "title": "Volver pa atras(3)",
    "alt": "Volver pa atras(3)",
    "category": "stills",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver%20pa%20atras(3)_552cc71f.jpg",
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
    "title": "Paisajismo(1)",
    "alt": "Paisajismo(1)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Paisajismo(1)_03d856bb.jpg",
    "description": ""
  },
  {
    "id": 24,
    "title": "Registro DJ La Feria",
    "alt": "Registro DJ La Feria",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20DJ%20La%20Feria_2585c6f7.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 25,
    "title": "Registro DJ La Feria(1)",
    "alt": "Registro DJ La Feria(1)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20DJ%20La%20Feria(1)_27b4b97a.jpg",
    "description": ""
  },
  {
    "id": 26,
    "title": "Registro Paxlito en Vivo",
    "alt": "Registro Paxlito en Vivo",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Paxlito%20en%20Vivo_3fc3e3a5.jpg",
    "description": ""
  },
  {
    "id": 27,
    "title": "Registro Paxlito en Vivo(1)",
    "alt": "Registro Paxlito en Vivo(1)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Paxlito%20en%20Vivo(1)_3a2bfece.jpg",
    "description": ""
  },
  {
    "id": 28,
    "title": "Sesión de Fotos",
    "alt": "Sesión de Fotos",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos_14c70d1b.jpg",
    "description": ""
  },
  {
    "id": 29,
    "title": "Sesión de Fotos(1)",
    "alt": "Sesión de Fotos(1)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(1)_6273493a.jpg",
    "description": ""
  },
  {
    "id": 30,
    "title": "Sesión de Fotos(2)",
    "alt": "Sesión de Fotos(2)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(2)_eabc29ea.jpg",
    "description": ""
  },
  {
    "id": 31,
    "title": "Sesión de Fotos(3)",
    "alt": "Sesión de Fotos(3)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(3)_fb6442a2.jpg",
    "description": ""
  },
  {
    "id": 32,
    "title": "Sesión de Fotos(4)",
    "alt": "Sesión de Fotos(4)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(4)_a9e5f3e3.jpg",
    "description": ""
  },
  {
    "id": 33,
    "title": "Sesión de Fotos(5)",
    "alt": "Sesión de Fotos(5)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(5)_bbbd5ac2.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 34,
    "title": "Sesión de Fotos(6)",
    "alt": "Sesión de Fotos(6)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(6)_0009fa98.jpg",
    "description": ""
  },
  {
    "id": 35,
    "title": "Sesión de Fotos(7)",
    "alt": "Sesión de Fotos(7)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(7)_3a514a08.jpg",
    "description": ""
  },
  {
    "id": 36,
    "title": "Sesión de Fotos(8)",
    "alt": "Sesión de Fotos(8)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(8)_eb98c83a.jpg",
    "description": ""
  },
  {
    "id": 37,
    "title": "Sesión de Fotos(9)",
    "alt": "Sesión de Fotos(9)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(9)_78d4ca72.jpg",
    "description": ""
  },
  {
    "id": 38,
    "title": "Sesión de Fotos(10)",
    "alt": "Sesión de Fotos(10)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(10)_a9a9f2c5.jpg",
    "description": ""
  },
  {
    "id": 39,
    "title": "Sesión de Fotos(11)",
    "alt": "Sesión de Fotos(11)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(11)_8c3d4f7e.jpg",
    "description": ""
  },
  {
    "id": 40,
    "title": "Sesión de Fotos(12)",
    "alt": "Sesión de Fotos(12)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(12)_5c8b2e1a.jpg",
    "description": ""
  },
  {
    "id": 41,
    "title": "Sesión de Fotos(13)",
    "alt": "Sesión de Fotos(13)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(13)_9d7c5f3b.jpg",
    "description": ""
  },
  {
    "id": 42,
    "title": "Sesión de Fotos(14)",
    "alt": "Sesión de Fotos(14)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(14)_7a2e9c1d.jpg",
    "description": ""
  },
  {
    "id": 43,
    "title": "Sesión de Fotos(15)",
    "alt": "Sesión de Fotos(15)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(15)_6e1f8a2c.jpg",
    "description": ""
  },
  {
    "id": 44,
    "title": "Sesión de Fotos(16)",
    "alt": "Sesión de Fotos(16)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(16)_4c3b7e9a.jpg",
    "description": ""
  },
  {
    "id": 45,
    "title": "Sesión de Fotos(17)",
    "alt": "Sesión de Fotos(17)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(17)_2a5d6f1b.jpg",
    "description": ""
  },
  {
    "id": 46,
    "title": "Sesión de Fotos(18)",
    "alt": "Sesión de Fotos(18)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(18)_8f4c2e7d.jpg",
    "description": ""
  },
  {
    "id": 47,
    "title": "Sesión de Fotos(19)",
    "alt": "Sesión de Fotos(19)",
    "category": "fotografia",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos(19)_3c7a1e9f.jpg",
    "description": ""
  },
  {
    "id": 48,
    "title": "Detrás de cámara _Verte Encima_",
    "alt": "Detrás de cámara _Verte Encima_",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás%20de%20cámara%20_Verte%20Encima__b1145525.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 49,
    "title": "Detrás de cámara _Verte Encima_(1)",
    "alt": "Detrás de cámara _Verte Encima_(1)",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás%20de%20cámara%20_Verte%20Encima_(1)_35e679b6.jpg",
    "description": ""
  },
  {
    "id": 50,
    "title": "Equipo de Arte",
    "alt": "Equipo de Arte",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Equipo%20de%20Arte_a1cb4a15.jpg",
    "description": "",
    "featured": true
  },
  {
    "id": 51,
    "title": "Equipo iluminacion",
    "alt": "Equipo iluminacion",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Equipo%20iluminacion_6f8c6b83.jpg",
    "description": ""
  },
  {
    "id": 52,
    "title": "Nuestro equipo",
    "alt": "Nuestro equipo",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Nuestro%20equipo_57fbbd4f.jpg",
    "description": ""
  },
  {
    "id": 53,
    "title": "Operador de Camara _Voy y Vuelvo_",
    "alt": "Operador de Camara _Voy y Vuelvo_",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Operador%20de%20camara%20_Voy%20y%20Vuelvo__06a90e5d.jpg",
    "description": ""
  },
  {
    "id": 54,
    "title": "Operador de Camara _Voy y Vuelvo_(1)",
    "alt": "Operador de Camara _Voy y Vuelvo_(1)",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Operador%20de%20Camara%20_Voy%20y%20Vuelvo_(1)_e41ec5e5.jpg",
    "description": ""
  },
  {
    "id": 55,
    "title": "Prueba de Iluminacion",
    "alt": "Prueba de Iluminacion",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Prueba%20de%20Iluminacion_a8a131e4.jpg",
    "description": ""
  },
  {
    "id": 56,
    "title": "Prueba de Iluminacion(1)",
    "alt": "Prueba de Iluminacion(1)",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Prueba%20de%20Iluminacion(1)_0764c211.jpg",
    "description": ""
  },
  {
    "id": 57,
    "title": "Detrás de Cámara _Voy y Vuelvo_",
    "alt": "Detrás de Cámara _Voy y Vuelvo_",
    "category": "makeoff",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás%20de%20Cámara%20_Voy%20y%20Vuelvo__e362e07b.jpg",
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
