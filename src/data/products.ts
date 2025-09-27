// Hoodie images (local)
import hoodieWhitePremium from "@/assets/hoodie-white-premium.jpg";
import hoodieGreenModern from "@/assets/hoodieGreenModern.jpg";
import hoodieBlueAthletic from "@/assets/hoodie-blue-athletic.jpg";

// Sweatshirt images (local)
import sweatshirtBeigeMinimal from "@/assets/sweatshirtBeigeMinimal.jpg";
import sweatshirtBlackNew from "@/assets/sweatshirtBlackNew.jpg";

import jacketDenim from "@/assets/jacketDenim.jpg";
import jacketLeather from "@/assets/jacketLeather.jpg";

import tshirtMen from "@/assets/tshirtMen.jpg";
import blouseWomen from "@/assets/blouseWomen.jpg";

import jeansMen from "@/assets/jeansMen.jpg";
import jeansWomen from "@/assets/jeansWomen.jpg";

import dressSummer from "@/assets/dressSummer.jpg";
import dressEvening from "@/assets/dressEvening.jpg";

import backpackLeather from "@/assets/backpackLeather.jpg";
import toteCanvas from "@/assets/toteCanvas.jpg";

import shortsMen from "@/assets/shortsMen.jpg";
import shortsWomen from "@/assets/shortsWomen.jpg";

import underwearWomen from "@/assets/underwearWomen.jpg";
import underwearMen from "@/assets/underwearMen.jpg";

import sweatpantsAthletic from "@/assets/sweatpantsAthletic.jpg";
import sweatpantsCasual from "@/assets/sweatpantsCasual.jpg";


export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  description: string;
  features?: string[];
  gender: "men" | "women" | "unisex";
  category:
  | "hoodie"
  | "sweatshirt"
  | "jackets"
  | "shirts"
  | "jeans"
  | "dress"
  | "bag"
  | "shorts"
  | "underwear"
  | "sweatpants";
};

export const products: Product[] = [
  // --- Hoodies (local) ---
  {
    id: "hoodie-1",
    name: "Premium White Hoodie",
    price: 64.99,
    image: hoodieWhitePremium,
    sizes: ["S", "M", "L", "XL"],
    description: "Premium white hoodie with superior comfort and style.",
    features: ["Cotton blend", "Adjustable hood", "Kangaroo pocket"],
    gender: "unisex",
    category: "hoodie",
  },
  {
    id: "hoodie-2",
    name: "Modern Green Hoodie",
    price: 59.99,
    image: hoodieGreenModern,
    sizes: ["S", "M", "L", "XL"],
    description: "Modern green hoodie with contemporary design.",
    features: ["Breathable fabric", "Soft inner lining", "Front pocket"],
    gender: "men",
    category: "hoodie",
  },
  {
    id: "hoodie-3",
    name: "Athletic Blue Hoodie",
    price: 69.99,
    image: hoodieBlueAthletic,
    sizes: ["M", "L", "XL", "XXL"],
    description: "Athletic blue hoodie perfect for active lifestyles.",
    features: ["Moisture-wicking", "Stretchable fit", "Durable zipper"],
    gender: "unisex",
    category: "hoodie",
  },

  // --- Sweatshirts (local) ---
  {
    id: "sweatshirt-1",
    name: "Minimal Beige Sweatshirt",
    price: 54.99,
    image: sweatshirtBeigeMinimal,
    sizes: ["S", "M", "L", "XL"],
    description: "Minimal beige sweatshirt with clean, modern design.",
    features: ["Lightweight fabric", "Crew neck", "Soft cotton blend"],
    gender: "women",
    category: "sweatshirt",
  },
  {
    id: "sweatshirt-2",
    name: "Classic Black Sweatshirt",
    price: 39.99,
    image: sweatshirtBlackNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Classic black sweatshirt perfect for casual wear.",
    features: ["Durable stitching", "Ribbed cuffs", "Easy to wash"],
    gender: "men",
    category: "sweatshirt",
  },

  // --- Jackets ---
  {
    id: "jacket-1",
    name: "Classic Denim Jacket",
    price: 89.99,
    image: jacketDenim,
    sizes: ["S", "M", "L", "XL"],
    description: "Classic blue denim jacket for timeless casual style.",
    features: ["100% denim", "Button closure", "Multiple pockets"],
    gender: "unisex",
    category: "jackets",
  },
  {
    id: "jacket-2",
    name: "Leather Biker Jacket",
    price: 129.99,
    image: jacketLeather,
    sizes: ["M", "L", "XL"],
    description: "Premium leather biker jacket with edgy style.",
    features: ["Genuine leather", "Zipper closure", "Slim fit"],
    gender: "men",
    category: "jackets",
  },

  // --- Shirts ---
  {
    id: "shirt-1",
    name: "Men’s White T-Shirt",
    price: 24.99,
    image: tshirtMen,
    sizes: ["S", "M", "L", "XL"],
    description: "Classic men’s white cotton T-shirt.",
    features: ["100% cotton", "Breathable fabric", "Regular fit"],
    gender: "men",
    category: "shirts",
  },
  {
    id: "shirt-2",
    name: "Women’s Casual Blouse",
    price: 34.99,
    image: blouseWomen,
    sizes: ["S", "M", "L"],
    description: "Light, casual blouse perfect for warm days.",
    features: ["Lightweight", "Button-up front", "Relaxed fit"],
    gender: "women",
    category: "shirts",
  },

  // --- Jeans ---
  {
    id: "jeans-1",
    name: "Slim Fit Men’s Jeans",
    price: 49.99,
    image: jeansMen,
    sizes: ["S", "M", "L", "XL"],
    description: "Stylish slim-fit jeans suitable for all occasions.",
    features: ["Stretch denim", "Slim fit", "Classic 5-pocket design"],
    gender: "men",
    category: "jeans",
  },
  {
    id: "jeans-2",
    name: "High-Waist Women’s Jeans",
    price: 54.99,
    image: jeansWomen,
    sizes: ["S", "M", "L"],
    description: "Trendy high-waist jeans with comfortable fit.",
    features: ["High-rise waist", "Straight leg", "Durable fabric"],
    gender: "women",
    category: "jeans",
  },

  // --- Dresses ---
  {
    id: "dress-1",
    name: "Women’s Summer Dress",
    price: 59.99,
    image: dressSummer,
    sizes: ["S", "M", "L"],
    description: "Light and airy summer dress with floral design.",
    features: ["Floral print", "Breathable fabric", "Sleeveless design"],
    gender: "women",
    category: "dress",
  },
  {
    id: "dress-2",
    name: "Elegant Evening Dress",
    price: 119.99,
    image: dressEvening,
    sizes: ["S", "M", "L"],
    description: "Elegant evening gown for special occasions.",
    features: ["Maxi length", "Elegant neckline", "Flowing fabric"],
    gender: "women",
    category: "dress",
  },

  // --- Bags ---
  {
    id: "bag-1",
    name: "Leather Backpack",
    price: 79.99,
    image: backpackLeather,
    sizes: [],
    description: "Durable leather backpack for daily use.",
    features: ["Adjustable straps", "Spacious interior", "Zipper closure"],
    gender: "unisex",
    category: "bag",
  },
  {
    id: "bag-2",
    name: "Canvas Tote Bag",
    price: 29.99,
    image: toteCanvas,
    sizes: [],
    description: "Eco-friendly canvas tote bag for casual use.",
    features: ["Lightweight", "Reinforced handles", "Washable material"],
    gender: "women",
    category: "bag",
  },

  // --- Shorts ---
  {
    id: "shorts-1",
    name: "Casual Men’s Shorts",
    price: 34.99,
    image: shortsMen,
    sizes: ["S", "M", "L", "XL"],
    description: "Lightweight cotton shorts for summer comfort.",
    features: ["Breathable fabric", "Elastic waistband", "Side pockets"],
    gender: "men",
    category: "shorts",
  },
  {
    id: "shorts-2",
    name: "Women’s Denim Shorts",
    price: 29.99,
    image: shortsWomen,
    sizes: ["S", "M", "L"],
    description: "Trendy women’s denim shorts with a relaxed fit.",
    features: ["Classic denim", "Rolled hem", "Button & zipper closure"],
    gender: "women",
    category: "shorts",
  },

  // --- Underwear ---
  {
    id: "underwear-1",
    name: "Women’s Comfort Underwear",
    price: 24.99,
    image: underwearWomen,
    sizes: ["S", "M", "L"],
    description: "Soft cotton underwear for all-day comfort.",
    features: ["Soft cotton", "Elastic waistband", "Breathable fabric"],
    gender: "women",
    category: "underwear",
  },
  {
    id: "underwear-2",
    name: "Men’s Boxer Pack",
    price: 27.99,
    image: underwearMen,
    sizes: ["M", "L", "XL"],
    description: "Pack of 3 men’s cotton boxers.",
    features: ["3-pack", "Stretchable fabric", "Comfort fit"],
    gender: "men",
    category: "underwear",
  },

  // --- Sweatpants ---
  {
    id: "sweatpants-1",
    name: "Athletic Sweatpants",
    price: 44.99,
    image: sweatpantsAthletic,
    sizes: ["S", "M", "L", "XL"],
    description: "Performance sweatpants designed for training.",
    features: ["Moisture control", "Elastic cuffs", "Drawstring waist"],
    gender: "unisex",
    category: "sweatpants",
  },
  {
    id: "sweatpants-2",
    name: "Casual Grey Sweatpants",
    price: 39.99,
    image: sweatpantsCasual,
    sizes: ["S", "M", "L"],
    description: "Soft grey sweatpants perfect for lounging.",
    features: ["Soft fleece lining", "Elastic waistband", "Relaxed fit"],
    gender: "men",
    category: "sweatpants",
  },
];
