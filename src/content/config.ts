import { defineCollection, z } from 'astro:content';

const actualitesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
    auteur: z.string().default('ACSM Chavagnes'),
    publie: z.boolean().default(true),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    hero: z.object({
      image: z.string().optional(),
      titre: z.string().optional(),
      soustitre: z.string().optional(),
    }).optional(),
    galerie: z.object({
      afficher: z.boolean().default(false),
      titre: z.string().optional(),
      description: z.string().optional(),
      photos: z.array(z.object({
        src: z.string(),
        alt: z.string(),
        titre: z.string().optional(),
      })).optional(),
    }).optional(),
  }),
});

export const collections = {
  'actualites': actualitesCollection,
  'pages': pagesCollection,
};
