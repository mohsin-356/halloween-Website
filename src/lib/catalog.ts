import { HALLOWEEN } from "./halloween-assets";

export type CategorySlug =
  | "costumes"
  | "decorations"
  | "animatronics"
  | "lighting"
  | "props"
  | "party"
  | "accessories"
  | "collectibles";

export type ThemeSlug =
  | "classic-horror"
  | "gothic-elegance"
  | "haunted-mansion"
  | "witchcraft"
  | "graveyard"
  | "family-friendly";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  subcategory: string;
  theme: ThemeSlug;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  badges: string[];
  stock: number;
  scareLevel: 1 | 2 | 3 | 4 | 5;
  ages: "kids" | "teens" | "adults" | "all";
  sizes?: string[];
  colors?: string[];
  shortDescription: string;
  description: string;
  features: string[];
  materials: string;
  dimensions: string;
  care: string;
  bestseller?: boolean;
  newArrival?: boolean;
  bundleIds?: string[];
}

export const CATEGORIES: {
  slug: CategorySlug;
  name: string;
  tagline: string;
  image: string;
  subcategories: string[];
}[] = [
  {
    slug: "costumes",
    name: "Costumes",
    tagline: "Screen-accurate silhouettes, wearable all night",
    image: HALLOWEEN.characters.scarecrow,
    subcategories: ["Adults", "Kids", "Couples", "Pets", "Plus Size"],
  },
  {
    slug: "decorations",
    name: "Decor",
    tagline: "Indoor styling that reads as design, not clutter",
    image: HALLOWEEN.structures.hauntedHouse,
    subcategories: ["Indoor", "Outdoor", "Table", "Wall", "Window"],
  },
  {
    slug: "animatronics",
    name: "Animatronics",
    tagline: "Motion, sound and sensors for the real scare",
    image: HALLOWEEN.characters.ghost,
    subcategories: ["Standing", "Jump Scare", "Sound Reactive"],
  },
  {
    slug: "lighting",
    name: "Lighting",
    tagline: "Ember glow, projection and flicker systems",
    image: HALLOWEEN.pumpkins.lights,
    subcategories: ["String Lights", "Projectors", "Flicker Bulbs", "Fog Lit"],
  },
  {
    slug: "props",
    name: "Props",
    tagline: "Sculpted centerpieces built to be photographed",
    image: HALLOWEEN.props.cauldron,
    subcategories: ["Tombstones", "Cauldrons", "Skeletons", "Yard"],
  },
  {
    slug: "party",
    name: "Party",
    tagline: "Tablescapes, serveware and invitations",
    image: HALLOWEEN.props.candles,
    subcategories: ["Tableware", "Balloons", "Invites", "Serving"],
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "Masks, FX makeup and finishing details",
    image: HALLOWEEN.pumpkins.witchHat,
    subcategories: ["Masks", "Makeup", "Wigs", "Jewelry", "Hats"],
  },
  {
    slug: "collectibles",
    name: "Collectibles",
    tagline: "Limited runs for the year-round haunt",
    image: HALLOWEEN.characters.owl,
    subcategories: ["Limited", "Artist Series", "Vintage"],
  },
];

export const THEMES: { slug: ThemeSlug; name: string; blurb: string; image: string }[] = [
  {
    slug: "classic-horror",
    name: "Classic Horror",
    blurb: "Slasher silhouettes, grain and fog",
    image: HALLOWEEN.characters.scarecrow,
  },
  {
    slug: "gothic-elegance",
    name: "Gothic Elegance",
    blurb: "Candlelight, brass and black lace",
    image: HALLOWEEN.props.candles,
  },
  {
    slug: "haunted-mansion",
    name: "Haunted Mansion",
    blurb: "Grand halls, cobwebs and portraits",
    image: HALLOWEEN.structures.hauntedHouse,
  },
  {
    slug: "witchcraft",
    name: "Witchcraft",
    blurb: "Cauldrons, brooms and green fire",
    image: HALLOWEEN.props.cauldron,
  },
  {
    slug: "graveyard",
    name: "Graveyard",
    blurb: "Tombstones, mist and lantern light",
    image: HALLOWEEN.structures.graveyard,
  },
  {
    slug: "family-friendly",
    name: "Family Friendly",
    blurb: "Grinning pumpkins, zero nightmares",
    image: HALLOWEEN.pumpkins.lights,
  },
];

const APPAREL = ["XS", "S", "M", "L", "XL", "2XL"];

type Seed = [
  name: string,
  category: CategorySlug,
  subcategory: string,
  theme: ThemeSlug,
  price: number,
  image: string,
  scare: 1 | 2 | 3 | 4 | 5,
  ages: Product["ages"],
];

const SEEDS: Seed[] = [
  ["Hollow King Scarecrow Costume", "costumes", "Adults", "classic-horror", 189, HALLOWEEN.characters.scarecrow, 5, "adults"],
  ["Emberlight Witch Robe", "costumes", "Adults", "witchcraft", 149, HALLOWEEN.props.broom, 3, "adults"],
  ["Little Lantern Pumpkin Suit", "costumes", "Kids", "family-friendly", 59, HALLOWEEN.pumpkins.witchHat, 1, "kids"],
  ["Graveyard Bride & Groom Set", "costumes", "Couples", "gothic-elegance", 239, HALLOWEEN.structures.crosses ?? HALLOWEEN.structures.tombstones, 3, "adults"],
  ["Midnight Cat Pet Cape", "costumes", "Pets", "family-friendly", 34, HALLOWEEN.characters.cat, 1, "all"],
  ["Veiled Widow Gown", "costumes", "Adults", "gothic-elegance", 219, HALLOWEEN.characters.ghost, 3, "adults"],
  ["Crowfeather Plague Doctor", "costumes", "Adults", "classic-horror", 199, HALLOWEEN.characters.owl, 4, "adults"],
  ["Hollow Hill Reaper Cloak", "costumes", "Plus Size", "haunted-mansion", 165, HALLOWEEN.characters.ghost, 4, "adults"],
  ["Pumpkin Patch Toddler Set", "costumes", "Kids", "family-friendly", 44, HALLOWEEN.pumpkins.glowing, 1, "kids"],
  ["Sisters of Smoke Coven Trio", "costumes", "Couples", "witchcraft", 289, HALLOWEEN.props.cauldron, 3, "adults"],

  ["Ashfall Haunted Manor Centerpiece", "decorations", "Indoor", "haunted-mansion", 129, HALLOWEEN.structures.hauntedHouse, 2, "all"],
  ["Cobweb Archway Drape", "decorations", "Wall", "haunted-mansion", 39, HALLOWEEN.webs.a, 2, "all"],
  ["Silk Web Corner Set (12)", "decorations", "Wall", "haunted-mansion", 24, HALLOWEEN.webs.b, 1, "all"],
  ["Blood Moon Window Cling", "decorations", "Window", "classic-horror", 29, HALLOWEEN.hero.moonHouse, 2, "all"],
  ["Withered Oak Table Tree", "decorations", "Table", "graveyard", 89, HALLOWEEN.structures.tree, 2, "all"],
  ["Autumn Rot Leaf Garland", "decorations", "Indoor", "family-friendly", 32, HALLOWEEN.props.leaves, 1, "all"],
  ["Bat Swarm Wall Decals (36)", "decorations", "Wall", "classic-horror", 22, HALLOWEEN.bats, 1, "all"],
  ["Cemetery Gate Yard Kit", "decorations", "Outdoor", "graveyard", 179, HALLOWEEN.structures.graveyardRow, 3, "all"],
  ["Hollow Lane Pathway Markers", "decorations", "Outdoor", "graveyard", 74, HALLOWEEN.structures.crosses ?? HALLOWEEN.structures.tombstones, 2, "all"],
  ["Spectral Curtain Panels", "decorations", "Window", "gothic-elegance", 58, HALLOWEEN.characters.ghost, 2, "all"],

  ["Wailing Wraith Animatronic", "animatronics", "Standing", "haunted-mansion", 349, HALLOWEEN.characters.ghost, 5, "teens"],
  ["Jump-Scare Scarecrow 6ft", "animatronics", "Jump Scare", "classic-horror", 429, HALLOWEEN.characters.scarecrow, 5, "adults"],
  ["Whispering Owl Sentinel", "animatronics", "Sound Reactive", "graveyard", 189, HALLOWEEN.characters.owl, 3, "all"],
  ["Prowling Black Cat Motion Prop", "animatronics", "Sound Reactive", "witchcraft", 159, HALLOWEEN.characters.cat, 3, "all"],
  ["Cauldron Keeper Animatronic", "animatronics", "Standing", "witchcraft", 379, HALLOWEEN.props.cauldron, 4, "teens"],
  ["Rising Grave Riser", "animatronics", "Jump Scare", "graveyard", 299, HALLOWEEN.structures.graveyard, 5, "adults"],

  ["Ember Pumpkin String Lights 20ft", "lighting", "String Lights", "family-friendly", 49, HALLOWEEN.pumpkins.lights, 1, "all"],
  ["Blood Moon Projector", "lighting", "Projectors", "classic-horror", 119, HALLOWEEN.hero.moonHouse, 3, "all"],
  ["Flicker Flame Bulbs (4)", "lighting", "Flicker Bulbs", "gothic-elegance", 34, HALLOWEEN.props.candles, 1, "all"],
  ["Iron Ember Lantern", "lighting", "Fog Lit", "gothic-elegance", 68, HALLOWEEN.props.lantern, 2, "all"],
  ["Cathedral Candle Cluster", "lighting", "Flicker Bulbs", "gothic-elegance", 56, HALLOWEEN.props.candles, 1, "all"],
  ["Hollow Glow Pumpkin Lamp", "lighting", "Fog Lit", "family-friendly", 79, HALLOWEEN.pumpkins.glowing, 1, "all"],
  ["Fogline Ground Illuminator", "lighting", "Fog Lit", "graveyard", 94, HALLOWEEN.structures.graveyard, 2, "all"],

  ["Weathered Tombstone Trio", "props", "Tombstones", "graveyard", 109, HALLOWEEN.structures.tombstones, 2, "all"],
  ["Bubbling Coven Cauldron 22in", "props", "Cauldrons", "witchcraft", 139, HALLOWEEN.props.cauldron, 2, "all"],
  ["Hexwood Broom", "props", "Cauldrons", "witchcraft", 42, HALLOWEEN.props.broom, 1, "all"],
  ["Bone Orchard Skeleton 5ft", "props", "Skeletons", "graveyard", 199, HALLOWEEN.structures.crosses ?? HALLOWEEN.structures.tombstones, 4, "teens"],
  ["Hollow Hill Yard Scene Kit", "props", "Yard", "haunted-mansion", 289, HALLOWEEN.structures.hauntedHouse, 3, "all"],
  ["Dead Grove Branch Set", "props", "Yard", "graveyard", 76, HALLOWEEN.structures.tree, 2, "all"],
  ["Grinning Hollow Jack-o'-Lantern", "props", "Yard", "family-friendly", 64, HALLOWEEN.pumpkins.glowing, 1, "all"],

  ["Midnight Feast Tableware Set (24)", "party", "Tableware", "gothic-elegance", 44, HALLOWEEN.props.candles, 1, "all"],
  ["Ember Balloon Arch Kit", "party", "Balloons", "family-friendly", 38, HALLOWEEN.pumpkins.lights, 1, "all"],
  ["Hollow Invitation Suite (20)", "party", "Invites", "gothic-elegance", 28, HALLOWEEN.buttons.ornate, 1, "all"],
  ["Cauldron Punch Serving Set", "party", "Serving", "witchcraft", 72, HALLOWEEN.props.cauldron, 1, "all"],
  ["Blackened Brass Candelabra", "party", "Serving", "gothic-elegance", 96, HALLOWEEN.props.candles, 1, "all"],
  ["Bat Confetti & Table Scatter", "party", "Tableware", "classic-horror", 16, HALLOWEEN.bats, 1, "all"],

  ["Hollow King Latex Mask", "accessories", "Masks", "classic-horror", 89, HALLOWEEN.pumpkins.witchHat, 5, "adults"],
  ["Wraith Silicone Half-Mask", "accessories", "Masks", "haunted-mansion", 74, HALLOWEEN.characters.ghost, 4, "teens"],
  ["Ashen Skin FX Palette", "accessories", "Makeup", "classic-horror", 46, HALLOWEEN.buttons.web, 3, "teens"],
  ["Bloodline Liquid FX Kit", "accessories", "Makeup", "classic-horror", 32, HALLOWEEN.buttons.web, 4, "teens"],
  ["Raven Braid Wig", "accessories", "Wigs", "witchcraft", 58, HALLOWEEN.characters.cat, 2, "all"],
  ["Tattered Witch Hat", "accessories", "Hats", "witchcraft", 39, HALLOWEEN.pumpkins.witchHat, 2, "all"],
  ["Ember Amulet Necklace", "accessories", "Jewelry", "gothic-elegance", 52, HALLOWEEN.props.lantern, 1, "all"],
  ["Cobweb Lace Gloves", "accessories", "Jewelry", "gothic-elegance", 26, HALLOWEEN.webs.b, 1, "all"],

  ["Artist Series: Hollow Hill Print", "collectibles", "Artist Series", "haunted-mansion", 129, HALLOWEEN.structures.hauntedHouse, 1, "all"],
  ["Limited Ember Pumpkin Sculpture", "collectibles", "Limited", "family-friendly", 249, HALLOWEEN.pumpkins.glowing, 1, "all"],
  ["Vintage Blood Moon Poster 1974", "collectibles", "Vintage", "classic-horror", 89, HALLOWEEN.hero.moonHouse, 2, "all"],
  ["Coven Owl Bronze Figure", "collectibles", "Limited", "witchcraft", 179, HALLOWEEN.characters.owl, 1, "all"],
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const DESCRIPTION_TAIL: Record<CategorySlug, string> = {
  costumes:
    "Cut and constructed for a full night of wear — reinforced seams, breathable lining and hardware that survives the walk between parties.",
  decorations:
    "Styled like interior decor first and Halloween second, so it reads intentional in daylight photos and cinematic after dark.",
  animatronics:
    "Sensor-triggered motion with adjustable volume, timing and a quiet standby mode for early-evening trick-or-treaters.",
  lighting:
    "Warm ember temperature tuned to 2100K so pumpkins glow instead of turning yellow on camera.",
  props:
    "Hand-finished weathering, UV-stable paint and internal ballast so the piece holds its pose through wind and rain.",
  party:
    "Tablescape-ready in one box, with a palette that photographs cleanly against black linen.",
  accessories:
    "Skin-safe, comfortable for hours, and detailed enough to hold up in close-up photos.",
  collectibles:
    "Numbered limited run with archival packaging, made to live on the shelf year-round.",
};

export const PRODUCTS: Product[] = SEEDS.map((seed, index) => {
  const [name, category, subcategory, theme, price, image, scareLevel, ages] = seed;
  const r1 = pseudoRandom(index + 1);
  const r2 = pseudoRandom(index + 7);
  const r3 = pseudoRandom(index + 13);
  const onSale = r1 > 0.62;
  const badges: string[] = [];
  const bestseller = r2 > 0.7;
  const newArrival = r3 > 0.75;
  if (onSale) badges.push("Sale");
  if (bestseller) badges.push("Bestseller");
  if (newArrival) badges.push("New");
  if (category === "collectibles") badges.push("Limited");
  const stock = Math.round(2 + r3 * 40);
  if (stock < 8) badges.push("Low Stock");

  const product: Product = {
    id: `HH-${String(index + 1).padStart(3, "0")}`,
    slug: slugify(name),
    name,
    category,
    subcategory,
    theme,
    price,
    rating: Math.round((4.1 + r2 * 0.85) * 10) / 10,
    reviewCount: 18 + Math.round(r1 * 460),
    image,
    gallery: [image, HALLOWEEN.clouds.ember, HALLOWEEN.hero.moonHouse],
    badges,
    stock,
    scareLevel,
    ages,
    shortDescription: `${name} — ${THEMES.find((t) => t.slug === theme)?.blurb ?? "Hollow Hill original"}.`,
    description: `${name} is part of the Hollow Hill core collection. ${DESCRIPTION_TAIL[category]}`,
    features: [
      "Designed in-house, produced in limited seasonal runs",
      "Photo-tested under low light and fog",
      "Ships flat-packed in recyclable, unbranded cartons",
      "Free returns within 30 days, no restocking fee",
    ],
    materials:
      category === "costumes"
        ? "Brushed cotton twill, aged linen overlay, recycled poly lining"
        : "Cast resin, powder-coated steel, hand-applied patina",
    dimensions:
      category === "costumes" ? "See size chart — true to US sizing" : 'Approx. 18" W x 24" H x 12" D',
    care:
      category === "costumes"
        ? "Cold hand wash, hang dry, do not bleach"
        : "Wipe clean with a dry cloth; store indoors off-season",
  };
  if (onSale) product.compareAt = Math.round(price * 1.35);
  if (bestseller) product.bestseller = true;
  if (newArrival) product.newArrival = true;
  if (category === "costumes") product.sizes = APPAREL;
  if (category === "costumes" || category === "accessories")
    product.colors = ["Ember", "Ash", "Midnight"];
  return product;
});

export const PRODUCT_BY_SLUG = new Map(PRODUCTS.map((p) => [p.slug, p]));

export function getProduct(slug: string) {
  return PRODUCT_BY_SLUG.get(slug);
}

export function relatedProducts(product: Product, limit = 4) {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && (p.theme === product.theme || p.category === product.category),
  ).slice(0, limit);
}

export function bundleFor(product: Product) {
  return PRODUCTS.filter((p) => p.id !== product.id && p.theme === product.theme).slice(0, 2);
}

export const PRICE_BOUNDS = {
  min: Math.min(...PRODUCTS.map((p) => p.price)),
  max: Math.max(...PRODUCTS.map((p) => p.price)),
};

export function formatPrice(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents % 1 === 0 ? 0 : 2,
  }).format(cents);
}
