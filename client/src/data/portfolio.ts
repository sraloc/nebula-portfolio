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
  {"id": 0, "title": "Gangrena", "alt": "Gangrena", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena_caacdf96.jpg", "description": "", "featured": true},
  {"id": 1, "title": "Gangrena(1)", "alt": "Gangrena(1)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(1)_ef755613.jpg", "description": ""},
  {"id": 2, "title": "Gangrena(2)", "alt": "Gangrena(2)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(2)_be9623f6.jpg", "description": ""},
  {"id": 3, "title": "Gangrena(3)", "alt": "Gangrena(3)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(3)_a229d670.jpg", "description": ""},
  {"id": 4, "title": "Gangrena(4)", "alt": "Gangrena(4)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(4)_6786ed6f.jpg", "description": ""},
  {"id": 5, "title": "Gangrena(5)", "alt": "Gangrena(5)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(5)_20c60440.jpg", "description": ""},
  {"id": 6, "title": "Gangrena(6)", "alt": "Gangrena(6)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(6)_9e4267c1.jpg", "description": ""},
  {"id": 7, "title": "Gangrena(7)", "alt": "Gangrena(7)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(7)_b7a45a4d.jpg", "description": ""},
  {"id": 8, "title": "Gangrena(8)", "alt": "Gangrena(8)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(8)_3f896b8b.jpg", "description": ""},
  {"id": 9, "title": "Gangrena(9)", "alt": "Gangrena(9)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(9)_52ecd814.jpg", "description": ""},
  {"id": 10, "title": "Gangrena(10)", "alt": "Gangrena(10)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(10)_6e5374b7.jpg", "description": ""},
  {"id": 11, "title": "Gangrena(11)", "alt": "Gangrena(11)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(11)_e2560c1d.jpg", "description": ""},
  {"id": 12, "title": "Gangrena(12)", "alt": "Gangrena(12)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(12)_dd5a2066.jpg", "description": ""},
  {"id": 13, "title": "Gangrena(13)", "alt": "Gangrena(13)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Gangrena(13)_e3b245df.jpg", "description": ""},
  {"id": 14, "title": "Verte Encima", "alt": "Verte Encima", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte%20Encima_47cb45a7.jpg", "description": "", "featured": true},
  {"id": 15, "title": "Verte Encima(1)", "alt": "Verte Encima(1)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte%20Encima(1)_a9e7ef9f.jpg", "description": ""},
  {"id": 16, "title": "Verte Encima(2)", "alt": "Verte Encima(2)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte%20Encima(2)_cbd6cd58.jpg", "description": ""},
  {"id": 17, "title": "Verte Encima(3)", "alt": "Verte Encima(3)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Verte%20Encima(3)_3fa5c18e.jpg", "description": ""},
  {"id": 18, "title": "Volver pa atras", "alt": "Volver pa atras", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver%20pa%20atras_6f00cbbf.jpg", "description": ""},
  {"id": 19, "title": "Volver pa atras(1)", "alt": "Volver pa atras(1)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver%20pa%20atras(1)_3ff13338.jpg", "description": ""},
  {"id": 20, "title": "Volver pa atras(2)", "alt": "Volver pa atras(2)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver%20pa%20atras(2)_dfcd4e75.jpg", "description": ""},
  {"id": 21, "title": "Volver pa atras(3)", "alt": "Volver pa atras(3)", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver%20pa%20atras(3)_552cc71f.jpg", "description": ""},
  {"id": 22, "title": "Voy y Vuelvo", "alt": "Voy y Vuelvo", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Voy%20y%20Vuelvo%201_2ba4edbd.JPG", "description": ""},
  {"id": 23, "title": "Voy y Vuelvo", "alt": "Voy y Vuelvo", "category": "stills", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Voy%20y%20Vuelvo%201_2ba4edbd.JPG", "description": ""},
  {"id": 24, "title": "Paisajismo", "alt": "Paisajismo", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Paisajismo%201_d8c0ffdd.JPG", "description": ""},
  {"id": 25, "title": "Paisajismo", "alt": "Paisajismo", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Paisajismo%202_a8dff5dd.JPG", "description": ""},
  {"id": 26, "title": "Registro DJ La Feria", "alt": "Registro DJ La Feria", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20DJ%20La%20Feria%201_f9c6df28.jpg", "description": "", "featured": true},
  {"id": 27, "title": "Registro DJ La Feria", "alt": "Registro DJ La Feria", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20DJ%20La%20Feria%202_3fcba11a.jpg", "description": ""},
  {"id": 28, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%201_e9c39d9f.jpg", "description": ""},
  {"id": 29, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%202_350eb124.jpg", "description": ""},
  {"id": 30, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%203_64305828.jpg", "description": "", "featured": true},
  {"id": 31, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%204_9a8ec583.jpg", "description": ""},
  {"id": 32, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%205_7ad16c07.jpg", "description": ""},
  {"id": 33, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%206_719f14d9.jpg", "description": ""},
  {"id": 34, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%207_872275db.jpg", "description": "", "featured": true},
  {"id": 35, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%208_16acfa02.jpg", "description": ""},
  {"id": 36, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%209_07b08b20.jpg", "description": ""},
  {"id": 37, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%2010_5c1bc7e4.jpg", "description": ""},
  {"id": 38, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%2011_0fa2785f.jpg", "description": "", "featured": true},
  {"id": 39, "title": "Registro Festival", "alt": "Registro Festival", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Festival%2012_5fada948.jpg", "description": ""},
  {"id": 40, "title": "Registro Paxlito en Vivo", "alt": "Registro Paxlito en Vivo", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Paxlito%20en%20Vivo%201_02480c09.jpg", "description": ""},
  {"id": 41, "title": "Registro Paxlito en Vivo", "alt": "Registro Paxlito en Vivo", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Registro%20Paxlito%20en%20Vivo%202_ceb48075.jpg", "description": ""},
  {"id": 42, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%201_c64b12ed.jpg", "description": "", "featured": true},
  {"id": 43, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%202_daae8b8c.JPG", "description": ""},
  {"id": 44, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%203_0c214a08.JPG", "description": ""},
  {"id": 45, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%204_644ee5f5.jpg", "description": ""},
  {"id": 46, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%205_8df5b601.JPG", "description": "", "featured": true},
  {"id": 47, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%206_6f1cb6c5.jpg", "description": ""},
  {"id": 48, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%207_dc48957d.JPG", "description": ""},
  {"id": 49, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%208_966378d5.JPG", "description": ""},
  {"id": 50, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%209_cf4a1bc9.JPG", "description": "", "featured": true},
  {"id": 51, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%2010_82a88d58.JPG", "description": ""},
  {"id": 52, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%2011_8ec5fa28.jpg", "description": ""},
  {"id": 53, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%2012_135c7aef.JPG", "description": ""},
  {"id": 54, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%2013_aa59363d.JPG", "description": "", "featured": true},
  {"id": 55, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%2014_9d2ba23c.JPG", "description": ""},
  {"id": 56, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%2015_51ed7a53.JPG", "description": ""},
  {"id": 57, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%2016_209af7be.jpg", "description": ""},
  {"id": 58, "title": "Sesión de Fotos", "alt": "Sesión de Fotos", "category": "fotografia", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Sesión%20de%20Fotos%2017_26504d73.jpg", "description": ""},
  {"id": 59, "title": "Detrás de cámara _Verte Encima_", "alt": "Detrás de cámara _Verte Encima_", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás%20de%20cámara%20_Verte%20Encima__b1145525.jpg", "description": "", "featured": true},
  {"id": 60, "title": "Detrás de cámara _Verte Encima_(1)", "alt": "Detrás de cámara _Verte Encima_(1)", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás%20de%20cámara%20_Verte%20Encima_(1)_35e679b6.jpg", "description": ""},
  {"id": 61, "title": "Equipo de Arte", "alt": "Equipo de Arte", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Equipo%20de%20Arte_a1cb4a15.jpg", "description": "", "featured": true},
  {"id": 62, "title": "Equipo iluminacion", "alt": "Equipo iluminacion", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Equipo%20iluminacion_6f8c6b83.jpg", "description": ""},
  {"id": 63, "title": "Nuestro equipo", "alt": "Nuestro equipo", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Nuestro%20equipo_57fbbd4f.jpg", "description": ""},
  {"id": 64, "title": "Operador de Camara _Voy y Vuelvo_", "alt": "Operador de Camara _Voy y Vuelvo_", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Operador%20de%20camara%20_Voy%20y%20Vuelvo__06a90e5d.jpg", "description": ""},
  {"id": 65, "title": "Operador de Camara _Voy y Vuelvo_(1)", "alt": "Operador de Camara _Voy y Vuelvo_(1)", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Operador%20de%20Camara%20_Voy%20y%20Vuelvo_(1)_e41ec5e5.jpg", "description": ""},
  {"id": 66, "title": "Prueba de Iluminacion", "alt": "Prueba de Iluminacion", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Prueba%20de%20Iluminacion_a8a131e4.jpg", "description": ""},
  {"id": 67, "title": "Prueba de Iluminacion(1)", "alt": "Prueba de Iluminacion(1)", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Prueba%20de%20Iluminacion(1)_0764c211.jpg", "description": ""},
  {"id": 68, "title": "Detrás de Cámara _Voy y Vuelvo_", "alt": "Detrás de Cámara _Voy y Vuelvo_", "category": "makeoff", "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Detrás%20de%20Cámara%20_Voy%20y%20Vuelvo__e362e07b.jpg", "description": ""}
];

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    stills: 'Stills',
    fotografia: 'Fotografía',
    makeoff: 'Make Off'
  };
  return labels[category] || category;
}
