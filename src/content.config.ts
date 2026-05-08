import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import {
  SYSTEMATIZATION,
  SOURCE_OF_POWER,
  COST_STRUCTURE,
  SCOPE_OF_EFFECT,
  NARRATIVE_FUNCTION,
  PRACTITIONER_DEMOGRAPHICS,
  ACTIVATION_CONDUIT,
  REVERSIBILITY,
  DETECTABILITY,
  SCALE_RANGE,
  MEDIUM,
  STATUS,
} from './lib/taxonomy';

const systems = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/systems' }),
  schema: z.object({
    name: z.string(),
    aliases: z.array(z.string()).default([]),
    sourceWorks: z.array(z.string()),
    creator: z.string(),
    medium: z.array(z.enum(MEDIUM)),
    yearIntroduced: z.number().int(),
    status: z.enum(STATUS),
    summary: z.string(),
    notablePractitioners: z.array(z.string()).default([]),
    designersNotes: z.string().optional(),

    // Original six facets
    systematization: z.enum(SYSTEMATIZATION),
    sourceOfPower: z.array(z.enum(SOURCE_OF_POWER)).min(1),
    costStructure: z.array(z.enum(COST_STRUCTURE)).min(1),
    scopeOfEffect: z.array(z.enum(SCOPE_OF_EFFECT)).min(1),
    narrativeFunction: z.array(z.enum(NARRATIVE_FUNCTION)).min(1),
    practitionerDemographics: z.enum(PRACTITIONER_DEMOGRAPHICS),

    // Four new facets
    activationConduit: z.array(z.enum(ACTIVATION_CONDUIT)).min(1),
    reversibility: z.array(z.enum(REVERSIBILITY)).min(1),
    detectability: z.enum(DETECTABILITY),
    scaleRange: z.array(z.enum(SCALE_RANGE)).min(1),

    universe: z.string().optional(),
    parentSystem: z.string().optional(),
    siblingSystems: z.array(z.string()).default([]),
    similarSystems: z.array(z.string()).default([]),

    featured: z.boolean().default(false),
  }),
});

const universes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/universes' }),
  schema: z.object({
    name: z.string(),
    creator: z.string(),
    description: z.string(),
  }),
});

export const collections = { systems, universes };
