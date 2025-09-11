import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import product images properly
import hoodieNavy from "@/assets/hoodie-navy-new.jpg";
import sweatshirtBlack from "@/assets/sweatshirt-black-new.jpg";
import hoodieGray from "@/assets/hoodie-gray-new.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Essential Navy Hoodie",
    price: 89,
    image: hoodieNavy,
    category: "Hoodies",
    isNew: true,
  },
  {
    id: "2", 
    name: "Classic Black Sweatshirt",
    price: 79,
    image: sweatshirtBlack,
    category: "Sweatshirts",
    isNew: false,
  },
  {
    id: "3",
    name: "Premium Gray Hoodie",
    price: 94,
    image: hoodieGray,
    category: "Hoodies",
    isNew: true,
  },
  {
    id: "4",
    name: "Essential Navy Hoodie",
    price: 89,
    image: hoodieNavy,
    category: "Hoodies",
    isNew: false,
  },
  {
    id: "5",
    name: "Classic Black Sweatshirt",
    price: 79,
    image: sweatshirtBlack,
    category: "Sweatshirts",
    isNew: false,
  },
  {
    id: "6",
    name: "Premium Gray Hoodie",
    price: 94,
    image: hoodieGray,
    category: "Hoodies",
    isNew: false,
  },
];

interface FeaturedProductsProps {
  onAddToCart?: (productId: string) => void;
  onProductClick?: (productId: string) => void;
}

const FeaturedProducts = ({ onAddToCart, onProductClick }: FeaturedProductsProps) => {
  return (
    <section id="featured-products" className="py-16 px-4 bg-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked styles that combine comfort, quality, and contemporary design
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
              onClick={onProductClick}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="group"
            onClick={() => {
              window.location.href = "/hoodies";
            }}
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;