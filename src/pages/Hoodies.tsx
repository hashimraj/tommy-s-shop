import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

// Import hoodie images
import hoodieWhitePremium from "@/assets/hoodie-white-premium.jpg";
import hoodieGreenModern from "@/assets/hoodie-green-modern.jpg";
import hoodieBlueAthletic from "@/assets/hoodie-blue-athletic.jpg";
import hoodieGrayNew from "@/assets/hoodie-gray-new.jpg";
import hoodieNavyNew from "@/assets/hoodie-navy-new.jpg";
import hoodieBlackNew from "@/assets/hoodie-black-new.jpg";

// Hoodies collection
const hoodieProducts = [
  {
    id: "hoodie-1",
    name: "Premium White Hoodie",
    price: 64.99,
    image: hoodieWhitePremium,
    sizes: ["S", "M", "L", "XL"],
    description: "Premium white hoodie with superior comfort and style."
  },
  {
    id: "hoodie-2", 
    name: "Modern Green Hoodie",
    price: 59.99,
    image: hoodieGreenModern,
    sizes: ["S", "M", "L", "XL"],
    description: "Modern green hoodie with contemporary design."
  },
  {
    id: "hoodie-3",
    name: "Athletic Blue Hoodie", 
    price: 69.99,
    image: hoodieBlueAthletic,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Athletic blue hoodie perfect for active lifestyles."
  },
  {
    id: "hoodie-4",
    name: "Classic Gray Hoodie",
    price: 49.99,
    image: hoodieGrayNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Classic gray hoodie for everyday comfort."
  },
  {
    id: "hoodie-5",
    name: "Navy Premium Hoodie",
    price: 54.99,
    image: hoodieNavyNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Premium navy hoodie with soft fleece lining."
  },
  {
    id: "hoodie-6",
    name: "Essential Black Hoodie",
    price: 59.99,
    image: hoodieBlackNew,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Essential black hoodie with reinforced stitching."
  },
  {
    id: "hoodie-7",
    name: "Comfort White Hoodie",
    price: 62.99,
    image: hoodieWhitePremium,
    sizes: ["S", "M", "L", "XL"],
    description: "Ultra-comfortable white hoodie for daily wear."
  },
  {
    id: "hoodie-8",
    name: "Athletic Green Hoodie",
    price: 67.99,
    image: hoodieGreenModern,
    sizes: ["S", "M", "L", "XL"],
    description: "Athletic green hoodie with modern performance features."
  }
];

const Hoodies = () => {
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (productId: string) => {
    const product = hoodieProducts.find(p => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: 'M' // Default size
      });
      toast({
        title: "Added to cart",
        description: "Hoodie has been added to your cart successfully.",
      });
    }
  };

  const handleProductClick = (productId: string) => {
    window.location.href = `/product/${productId}`;
  };

  const handleCartClick = () => {
    window.location.href = "/cart";
  };

  const handleMenuClick = () => {
    console.log("Mobile menu clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={handleCartClick}
        onMenuClick={handleMenuClick}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-4 flex items-center gap-2 hover:bg-accent/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hoodies Collection</h1>
          <p className="text-muted-foreground text-lg">
            Discover our premium collection of comfortable and stylish hoodies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hoodieProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={handleAddToCart}
              onProductClick={handleProductClick}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hoodies;