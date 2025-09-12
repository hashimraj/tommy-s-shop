// src/data/products.ts

// Hoodie images
import hoodieWhitePremium from "@/assets/hoodie-white-premium.jpg";
import hoodieGreenModern from "@/assets/hoodie-green-modern.jpg";
import hoodieBlueAthletic from "@/assets/hoodie-blue-athletic.jpg";
import hoodieGrayNew from "@/assets/hoodie-gray-new.jpg";
import hoodieNavyNew from "@/assets/hoodie-navy-new.jpg";
import hoodieBlackNew from "@/assets/hoodie-black-new.jpg";

// Sweatshirt images
import sweatshirtBeigeMinimal from "@/assets/sweatshirt-beige-minimal.jpg";
import sweatshirtBlackNew from "@/assets/sweatshirt-black-new.jpg";
import sweatshirtCreamNew from "@/assets/sweatshirt-cream-new.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  description: string;
  features?: string[];
  category: "hoodie" | "sweatshirt";
};

// Centralized product list
export const products: Product[] = [
  {
    id: "hoodie-1",
    name: "Premium White Hoodie",
    price: 64.99,
    image: hoodieWhitePremium,
    sizes: ["S", "M", "L", "XL"],
    description: "Premium white hoodie with superior comfort and style.",
    features: ["Cotton blend", "Adjustable hood", "Kangaroo pocket", "Durable stitching"],
    category: "hoodie",
  },
  {
    id: "hoodie-2",
    name: "Modern Green Hoodie",
    price: 59.99,
    image: hoodieGreenModern,
    sizes: ["S", "M", "L", "XL"],
    description: "Modern green hoodie with contemporary design.",
    features: ["Soft fleece lining", "Drawstring hood", "Breathable material"],
    category: "hoodie",
  },
  {
    id: "hoodie-3",
    name: "Athletic Blue Hoodie",
    price: 69.99,
    image: hoodieBlueAthletic,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Athletic blue hoodie perfect for active lifestyles.",
    features: ["Performance fabric", "Stretchable cuffs", "Active fit"],
    category: "hoodie",
  },
  {
    id: "hoodie-4",
    name: "Classic Gray Hoodie",
    price: 49.99,
    image: hoodieGrayNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Classic gray hoodie for everyday comfort.",
    features: ["Cotton blend", "Ribbed cuffs", "Casual fit"],
    category: "hoodie",
  },
  {
    id: "hoodie-5",
    name: "Navy Premium Hoodie",
    price: 54.99,
    image: hoodieNavyNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Premium navy hoodie with soft fleece lining.",
    features: ["Double-lined hood", "Premium cotton", "Durable hem"],
    category: "hoodie",
  },
  {
    id: "hoodie-6",
    name: "Essential Black Hoodie",
    price: 59.99,
    image: hoodieBlackNew,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Essential black hoodie with reinforced stitching.",
    features: ["Reinforced seams", "Soft interior", "Everyday essential"],
    category: "hoodie",
  },
  {
    id: "sweatshirt-1",
    name: "Minimal Beige Sweatshirt",
    price: 54.99,
    image: sweatshirtBeigeMinimal,
    sizes: ["S", "M", "L", "XL"],
    description: "Minimal beige sweatshirt with clean, modern design.",
    features: ["Crew neck", "Minimalist design", "Soft cotton"],
    category: "sweatshirt",
  },
  {
    id: "sweatshirt-2",
    name: "Classic Black Sweatshirt",
    price: 39.99,
    image: sweatshirtBlackNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Classic black sweatshirt perfect for casual wear.",
    features: ["100% cotton", "Ribbed cuffs", "Classic fit"],
    category: "sweatshirt",
  },
  {
    id: "sweatshirt-3",
    name: "Premium Cream Sweatshirt",
    price: 49.99,
    image: sweatshirtCreamNew,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium cream sweatshirt with superior comfort.",
    features: ["Premium fabric", "Crew neck", "Relaxed fit"],
    category: "sweatshirt",
  },
];
