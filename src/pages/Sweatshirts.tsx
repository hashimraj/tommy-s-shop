import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

// Import sweatshirt images
import sweatshirtBeigeMinimal from "@/assets/sweatshirt-beige-minimal.jpg";
import sweatshirtBlackNew from "@/assets/sweatshirt-black-new.jpg";
import sweatshirtCreamNew from "@/assets/sweatshirt-cream-new.jpg";

// Sweatshirts collection
const sweatshirtProducts = [
  {
    id: "sweatshirt-1",
    name: "Minimal Beige Sweatshirt",
    price: 54.99,
    image: sweatshirtBeigeMinimal,
    sizes: ["S", "M", "L", "XL"],
    description: "Minimal beige sweatshirt with clean, modern design."
  },
  {
    id: "sweatshirt-2",
    name: "Classic Black Sweatshirt", 
    price: 39.99,
    image: sweatshirtBlackNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Classic black sweatshirt perfect for casual wear."
  },
  {
    id: "sweatshirt-3",
    name: "Premium Cream Sweatshirt",
    price: 49.99,
    image: sweatshirtCreamNew,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium cream sweatshirt with superior comfort."
  },
  {
    id: "sweatshirt-4",
    name: "Essential Beige Sweatshirt",
    price: 52.99,
    image: sweatshirtBeigeMinimal,
    sizes: ["S", "M", "L", "XL"],
    description: "Essential beige sweatshirt for everyday style."
  },
  {
    id: "sweatshirt-5",
    name: "Modern Black Sweatshirt",
    price: 41.99,
    image: sweatshirtBlackNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Modern black sweatshirt with contemporary design."
  },
  {
    id: "sweatshirt-6",
    name: "Comfort Cream Sweatshirt",
    price: 46.99,
    image: sweatshirtCreamNew,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Ultra-comfortable cream sweatshirt for all-day wear."
  },
  {
    id: "sweatshirt-7",
    name: "Urban Beige Sweatshirt",
    price: 56.99,
    image: sweatshirtBeigeMinimal,
    sizes: ["S", "M", "L", "XL"],
    description: "Urban beige sweatshirt with minimalist styling."
  },
  {
    id: "sweatshirt-8",
    name: "Elite Black Sweatshirt",
    price: 48.99,
    image: sweatshirtBlackNew,
    sizes: ["S", "M", "L", "XL"],
    description: "Elite black sweatshirt with luxury finish."
  }
];

const Sweatshirts = () => {
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (productId: string) => {
    const product = sweatshirtProducts.find(p => p.id === productId);
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
        description: "Sweatshirt has been added to your cart successfully.",
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sweatshirts Collection</h1>
          <p className="text-muted-foreground text-lg">
            Explore our cozy and comfortable sweatshirt collection.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sweatshirtProducts.map((product) => (
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

export default Sweatshirts;