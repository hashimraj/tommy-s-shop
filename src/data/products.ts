// Hoodie images (local)
import hoodieWhitePremium from "@/assets/hoodie-white-premium.jpg";
import hoodieGreenModern from "@/assets/hoodie-green-modern.jpg";
import hoodieBlueAthletic from "@/assets/hoodie-blue-athletic.jpg";

// Sweatshirt images (local)
import sweatshirtBeigeMinimal from "@/assets/sweatshirt-beige-minimal.jpg";
import sweatshirtBlackNew from "@/assets/sweatshirt-black-new.jpg";

import jacketDenim from "@/assets/jacketDenim.jpg";
import jacketLeather from "@/assets/jacketLeather.jpg";

import tshirtMen from "@/assets/tshirtMen.jpg";
import blouseWomen from "@/assets/blouseWomen.jpg";

import jeansMen from "@/assets/jeansMen.jpg";
import jeansWomen from "@/assets/jeansWomen.jpg";

import dressSummer from "@/assets/dressSummer.jpg";
import dressEvening from "@/assets/dressEvening.jpg";

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

// ✅ Reliable product images (Unsplash + Pexels)
const backpackLeather =
  "https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=400";
const toteCanvas =
  "https://images.pexels.com/photos/4462785/pexels-photo-4462785.jpeg?auto=compress&cs=tinysrgb&w=400";
const shortsMen =
  "https://images.pexels.com/photos/7691360/pexels-photo-7691360.jpeg?auto=compress&cs=tinysrgb&w=400";
const shortsWomen =
  "https://images.pexels.com/photos/5723616/pexels-photo-5723616.jpeg?auto=compress&cs=tinysrgb&w=400";
const underwearWomen =
  "https://images.pexels.com/photos/6311575/pexels-photo-6311575.jpeg?auto=compress&cs=tinysrgb&w=400";
const underwearMen =
  "https://images.pexels.com/photos/4061552/pexels-photo-4061552.jpeg?auto=compress&cs=tinysrgb&w=400";
const sweatpantsAthletic =
  "https://images.pexels.com/photos/6311576/pexels-photo-6311576.jpeg?auto=compress&cs=tinysrgb&w=400";
const sweatpantsCasual =
  "https://images.pexels.com/photos/6311617/pexels-photo-6311617.jpeg?auto=compress&cs=tinysrgb&w=400";

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
    gender: "men",
    category: "sweatpants",
  },
];
