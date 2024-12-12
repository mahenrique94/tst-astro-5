import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load data from Markdown files on disk
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    draft: z.boolean(),
    date: z.date(),
  }),
});

export const collections = { blog };
