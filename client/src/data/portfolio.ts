// Portfolio data with CDN URLs
export interface PortfolioItem {
  id: string;
  title: string;
  category: 'stills' | 'fotografia' | 'makeoff';
  image: string;
  alt: string;
  description?: string; // Description shown in modal
  rotation?: number; // Rotation in degrees (0, 90, 180, 270)
  featured?: boolean; // If true, item spans 2 columns
  aspectRatio?: 'horizontal' | 'vertical'; // For featured items: horizontal (2x1) or vertical (1x2)
}

export const portfolioItems: PortfolioItem[] = [
  // STILLS - Videoclips
  {
    id: 'still-1',
    title: 'VERTE ENCIMA 1',
    category: 'stills',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/VERTE ENCIMA 1_ec811bb6.webp',
    alt: 'Still from VERTE ENCIMA videoclip - Scene 1'
  },
  {
    id: 'still-2',
    title: 'VERTE ENCIMA 2',
    category: 'stills',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/VERTE ENCIMA 2_0e5c4b40.webp',
    alt: 'Still from VERTE ENCIMA videoclip - Scene 2'
  },
  {
    id: 'still-3',
    title: 'VERTE ENCIMA 3',
    category: 'stills',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/VERTE ENCIMA 3_1d21eb61.webp',
    alt: 'Still from VERTE ENCIMA videoclip - Scene 3',
    featured: true,
    aspectRatio: 'horizontal'
  },
  {
    id: 'still-4',
    title: 'VERTE ENCIMA 4',
    category: 'stills',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/VERTE ENCIMA 4_40b8287e.webp',
    alt: 'Still from VERTE ENCIMA videoclip - Scene 4'
  },
  {
    id: 'still-5',
    title: 'Volver pa atrás 1',
    category: 'stills',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver pa atras 1_04399d1f.webp',
    alt: 'Still from Volver pa atrás videoclip - Scene 1'
  },
  {
    id: 'still-6',
    title: 'Volver pa atrás 2',
    category: 'stills',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver pa atras 2_9bce6061.webp',
    alt: 'Still from Volver pa atrás videoclip - Scene 2'
  },
  {
    id: 'still-7',
    title: 'Volver pa atrás 3',
    category: 'stills',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver pa atras 3_b189b622.webp',
    alt: 'Still from Volver pa atrás videoclip - Scene 3'
  },
  {
    id: 'still-8',
    title: 'Volver pa atrás 4',
    category: 'stills',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Volver pa atras 4_3ef4a440.webp',
    alt: 'Still from Volver pa atrás videoclip - Scene 4'
  },
  // FOTOGRAFÍA - Photography
  {
    id: 'photo-1',
    title: 'DJ LA FERIA',
    category: 'fotografia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/DJ LA FERIA_ab8746ef.webp',
    alt: 'Photography session - DJ LA FERIA',
    featured: true,
    aspectRatio: 'horizontal'
  },
  {
    id: 'photo-2',
    title: 'DJ LA FERIA 2',
    category: 'fotografia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/DJ LA FERIA 2_e825276c.webp',
    alt: 'Photography session - DJ LA FERIA 2'
  },
  {
    id: 'photo-3',
    title: 'Paulito en vivo',
    category: 'fotografia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/paulito en vivo_ddb48c0e.webp',
    alt: 'Live photography - Paulito en vivo'
  },
  {
    id: 'photo-4',
    title: 'Paulito en vivo 2',
    category: 'fotografia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Paulito en vivo 2_0d8aaa1b.webp',
    alt: 'Live photography - Paulito en vivo 2'
  },
  {
    id: 'photo-5',
    title: 'Modelaje',
    category: 'fotografia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Modelaje_d00b8a52.webp',
    alt: 'Fashion photography - Modelaje',
    featured: true,
    aspectRatio: 'horizontal'
  },
  {
    id: 'photo-6',
    title: 'Negro tomando bebida',
    category: 'fotografia',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Negro tomando bebida_65b6ed5b.webp',
    alt: 'Portrait photography - Negro tomando bebida'
  },
  // MAKE OFF - Behind the scenes
  {
    id: 'makeoff-1',
    title: 'Joaco operando',
    category: 'makeoff',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Joaco operando_14adca45.webp',
    alt: 'Behind the scenes - Joaco operating camera'
  },
  {
    id: 'makeoff-2',
    title: 'Logo espalda',
    category: 'makeoff',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Logo espalda_cbcd1f3b.webp',
    alt: 'Behind the scenes - Team with logo',
    featured: true,
    aspectRatio: 'vertical'
  },
  {
    id: 'makeoff-3',
    title: 'Titi Russo',
    category: 'makeoff',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Titi Russo_d962d52e.webp',
    alt: 'Behind the scenes - Titi Russo'
  },
  {
    id: 'makeoff-4',
    title: 'Titi Russo naranja',
    category: 'makeoff',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Titi Russo naranja_b8939bd2.webp',
    alt: 'Behind the scenes - Titi Russo with orange lighting'
  },
  {
    id: 'makeoff-5',
    title: 'Tobar operando',
    category: 'makeoff',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/Tobar operando_fa76978a.webp',
    alt: 'Behind the scenes - Tobar operating equipment'
  },
  {
    id: 'makeoff-6',
    title: 'Set shot',
    category: 'makeoff',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/_DSC4097_70a7764b.webp',
    alt: 'Behind the scenes - Production set'
  }
];

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    stills: 'Stills',
    fotografia: 'Fotografía',
    makeoff: 'Make Off'
  };
  return labels[category] || category;
};
