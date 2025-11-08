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
  }),
});

export const collections = {
  'actualites': actualitesCollection,
  'pages': pagesCollection,
};
