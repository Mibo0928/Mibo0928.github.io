import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 房間裡可以放的物件。每件作品從這裡選一個，同一個物件只會放一件作品。
export const roomObjects = ['computer', 'poster', 'bookshelf', 'notebook', 'camera', 'console'] as const;

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tech: z.array(z.string()).default([]),
    roomObject: z.enum(roomObjects).optional(),
    demo: z.string().url().optional(),
    repo: z.string().url().optional(),
    placeholder: z.boolean().default(false),
  }),
});

const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { works, diary };
