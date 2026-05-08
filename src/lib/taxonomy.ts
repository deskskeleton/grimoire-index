// Single source of truth for taxonomy facets.
// Every tag value used in content frontmatter must come from this module.

export const SYSTEMATIZATION = ['hard', 'rational', 'soft', 'aesthetic'] as const;

export const SOURCE_OF_POWER = [
  'innate-genetic',
  'learned-skill',
  'divine-granted',
  'contractual-pact',
  'artifact-bound',
  'environmental-ambient',
  'consumable-fuel',
  'emotional-psychological',
  'technological',
  'ritual-sacrificial',
  'location-bound',
  'ancestral-spirit',
] as const;

export const COST_STRUCTURE = [
  'physical-toll',
  'resource-expenditure',
  'moral-spiritual',
  'knowledge-preparation',
  'reciprocal-balance',
  'social',
  'temporal',
  'unpredictability-risk',
  'apparently-costless',
  'addiction-dependency',
  'sanity-madness',
  'attention-concentration',
] as const;

export const SCOPE_OF_EFFECT = [
  'elemental-manipulation',
  'transformation-transmutation',
  'mental-psychic',
  'healing-restoration',
  'necromancy-death',
  'divination-knowledge',
  'summoning-binding',
  'enhancement-augmentation',
  'spatial-dimensional',
  'creation-conjuration',
  'warding-protection',
  'communication',
  'time-manipulation',
  'soul-spirit',
  'weather-natural',
  'technology-interaction',
] as const;

export const NARRATIVE_FUNCTION = [
  'problem-solving-tool',
  'source-of-conflict',
  'wonder-atmosphere',
  'social-commentary',
  'power-scaling',
  'mystery-discovery',
  'worldbuilding-foundation',
] as const;

export const PRACTITIONER_DEMOGRAPHICS = [
  'universal',
  'hereditary-elite',
  'chosen-called',
  'trained-specialists',
  'everyone-varying-degrees',
  'singular-unique',
] as const;

// New facet: ACTIVATION / CONDUIT — how the magic is actually invoked.
// Distinct from Source of Power (where it comes from). This is the practical interface.
export const ACTIVATION_CONDUIT = [
  'spoken-word',
  'somatic-gesture',
  'martial-form',
  'written-symbol',
  'ritual-extended',
  'instrumental-focus',
  'ingestion',
  'sacrificial-offering',
  'mental-will',
] as const;

// New facet: REVERSIBILITY — what kinds of duration/permanence the system supports.
// Multi-valued: large systems usually span several modes.
export const REVERSIBILITY = [
  'instantaneous',
  'sustained-concentration',
  'temporary-fades',
  'persistent-reversible',
  'permanent-irreversible',
] as const;

// New facet: DETECTABILITY / WORLDVIEW — how magic relates to its setting at large.
export const DETECTABILITY = [
  'open-known',
  'regulated-licensed',
  'masquerade-hidden',
  'mythic-disputed',
  'ambient-unremarkable',
] as const;

// New facet: SCALE / RANGE — how big effects can reach.
export const SCALE_RANGE = [
  'personal',
  'touch',
  'short-range',
  'area',
  'regional',
  'continental',
  'planetary',
  'cosmic',
] as const;

export const MEDIUM = [
  'novel',
  'short-fiction',
  'ttrpg',
  'video-game',
  'film',
  'tv',
  'anime-manga',
  'comic',
  'audio-drama',
  'other',
] as const;

export const STATUS = ['active', 'complete', 'legacy'] as const;

export type Systematization = (typeof SYSTEMATIZATION)[number];
export type SourceOfPower = (typeof SOURCE_OF_POWER)[number];
export type CostStructure = (typeof COST_STRUCTURE)[number];
export type ScopeOfEffect = (typeof SCOPE_OF_EFFECT)[number];
export type NarrativeFunction = (typeof NARRATIVE_FUNCTION)[number];
export type PractitionerDemographics = (typeof PRACTITIONER_DEMOGRAPHICS)[number];
export type ActivationConduit = (typeof ACTIVATION_CONDUIT)[number];
export type Reversibility = (typeof REVERSIBILITY)[number];
export type Detectability = (typeof DETECTABILITY)[number];
export type ScaleRange = (typeof SCALE_RANGE)[number];
export type Medium = (typeof MEDIUM)[number];
export type Status = (typeof STATUS)[number];

export const LABELS: Record<string, string> = {
  // Systematization
  hard: 'Hard',
  rational: 'Rational',
  soft: 'Soft',
  aesthetic: 'Aesthetic',
  // Source of power
  'innate-genetic': 'Innate / Genetic',
  'learned-skill': 'Learned / Skill',
  'divine-granted': 'Divine / Granted',
  'contractual-pact': 'Contractual / Pact',
  'artifact-bound': 'Artifact-Bound',
  'environmental-ambient': 'Environmental / Ambient',
  'consumable-fuel': 'Consumable / Fuel',
  'emotional-psychological': 'Emotional / Psychological',
  technological: 'Technological',
  'ritual-sacrificial': 'Ritual / Sacrificial',
  'location-bound': 'Location-Bound',
  'ancestral-spirit': 'Ancestral / Spirit',
  // Cost structure
  'physical-toll': 'Physical Toll',
  'resource-expenditure': 'Resource Expenditure',
  'moral-spiritual': 'Moral / Spiritual',
  'knowledge-preparation': 'Knowledge / Preparation',
  'reciprocal-balance': 'Reciprocal / Balance',
  social: 'Social',
  temporal: 'Temporal',
  'unpredictability-risk': 'Unpredictability / Risk',
  'apparently-costless': 'Apparently Costless',
  'addiction-dependency': 'Addiction / Dependency',
  'sanity-madness': 'Sanity / Madness',
  'attention-concentration': 'Attention / Concentration',
  // Scope of effect
  'elemental-manipulation': 'Elemental Manipulation',
  'transformation-transmutation': 'Transformation / Transmutation',
  'mental-psychic': 'Mental / Psychic',
  'healing-restoration': 'Healing / Restoration',
  'necromancy-death': 'Necromancy / Death',
  'divination-knowledge': 'Divination / Knowledge',
  'summoning-binding': 'Summoning / Binding',
  'enhancement-augmentation': 'Enhancement / Augmentation',
  'spatial-dimensional': 'Spatial / Dimensional',
  'creation-conjuration': 'Creation / Conjuration',
  'warding-protection': 'Warding / Protection',
  communication: 'Communication',
  'time-manipulation': 'Time Manipulation',
  'soul-spirit': 'Soul / Spirit',
  'weather-natural': 'Weather / Natural Forces',
  'technology-interaction': 'Technology Interaction',
  // Narrative function
  'problem-solving-tool': 'Problem-Solving Tool',
  'source-of-conflict': 'Source of Conflict',
  'wonder-atmosphere': 'Wonder / Atmosphere',
  'social-commentary': 'Social Commentary',
  'power-scaling': 'Power Scaling',
  'mystery-discovery': 'Mystery / Discovery',
  'worldbuilding-foundation': 'Worldbuilding Foundation',
  // Practitioner demographics
  universal: 'Universal',
  'hereditary-elite': 'Hereditary Elite',
  'chosen-called': 'Chosen / Called',
  'trained-specialists': 'Trained Specialists',
  'everyone-varying-degrees': 'Everyone (Varying Degrees)',
  'singular-unique': 'Singular / Unique',
  // Activation / Conduit
  'spoken-word': 'Spoken Word',
  'somatic-gesture': 'Somatic / Gesture',
  'martial-form': 'Martial Form',
  'written-symbol': 'Written / Inscribed Symbol',
  'ritual-extended': 'Extended Ritual',
  'instrumental-focus': 'Instrumental / Focus',
  ingestion: 'Ingestion',
  'sacrificial-offering': 'Sacrificial Offering',
  'mental-will': 'Mental Will Alone',
  // Reversibility
  instantaneous: 'Instantaneous',
  'sustained-concentration': 'Sustained / Concentration',
  'temporary-fades': 'Temporary (fades)',
  'persistent-reversible': 'Persistent / Reversible',
  'permanent-irreversible': 'Permanent / Irreversible',
  // Detectability
  'open-known': 'Open / Known',
  'regulated-licensed': 'Regulated / Licensed',
  'masquerade-hidden': 'Masquerade / Hidden',
  'mythic-disputed': 'Mythic / Disputed',
  'ambient-unremarkable': 'Ambient / Unremarkable',
  // Scale / Range
  personal: 'Personal',
  touch: 'Touch',
  'short-range': 'Short Range',
  area: 'Area',
  regional: 'Regional',
  continental: 'Continental',
  planetary: 'Planetary',
  cosmic: 'Cosmic',
  // Medium
  novel: 'Novel',
  'short-fiction': 'Short Fiction',
  ttrpg: 'TTRPG',
  'video-game': 'Video Game',
  film: 'Film',
  tv: 'Television',
  'anime-manga': 'Anime / Manga',
  comic: 'Comic',
  'audio-drama': 'Audio Drama',
  other: 'Other',
  // Status
  active: 'Active',
  complete: 'Complete',
  legacy: 'Legacy',
};

export function label(slug: string): string {
  return LABELS[slug] ?? slug;
}

export const FACETS = {
  systematization: {
    key: 'systematization',
    name: 'Systematization',
    description: 'How well-defined the rules are for the audience.',
    values: SYSTEMATIZATION,
    multi: false,
  },
  sourceOfPower: {
    key: 'sourceOfPower',
    name: 'Source of Power',
    description: 'Where the magic comes from.',
    values: SOURCE_OF_POWER,
    multi: true,
  },
  activationConduit: {
    key: 'activationConduit',
    name: 'Activation / Conduit',
    description: 'How the magic is practically invoked — the interface between practitioner and effect.',
    values: ACTIVATION_CONDUIT,
    multi: true,
  },
  costStructure: {
    key: 'costStructure',
    name: 'Cost Structure',
    description: 'What using the magic costs.',
    values: COST_STRUCTURE,
    multi: true,
  },
  scopeOfEffect: {
    key: 'scopeOfEffect',
    name: 'Scope of Effect',
    description: 'What the magic can do.',
    values: SCOPE_OF_EFFECT,
    multi: true,
  },
  reversibility: {
    key: 'reversibility',
    name: 'Reversibility',
    description: 'What kinds of duration and permanence the system can produce.',
    values: REVERSIBILITY,
    multi: true,
  },
  scaleRange: {
    key: 'scaleRange',
    name: 'Scale / Range',
    description: 'How far effects can reach.',
    values: SCALE_RANGE,
    multi: true,
  },
  narrativeFunction: {
    key: 'narrativeFunction',
    name: 'Narrative Function',
    description: "The role the magic plays in the story's structure.",
    values: NARRATIVE_FUNCTION,
    multi: true,
  },
  practitionerDemographics: {
    key: 'practitionerDemographics',
    name: 'Practitioner Demographics',
    description: 'Who can use the magic within its world.',
    values: PRACTITIONER_DEMOGRAPHICS,
    multi: false,
  },
  detectability: {
    key: 'detectability',
    name: 'Detectability / Worldview',
    description: 'How magic relates to the broader setting — open, secret, regulated, mythic.',
    values: DETECTABILITY,
    multi: false,
  },
} as const;

export type FacetKey = keyof typeof FACETS;
export const FACET_KEYS = Object.keys(FACETS) as FacetKey[];
