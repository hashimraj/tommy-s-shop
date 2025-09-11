import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

// Sample product data (in real app this would come from API)
const products = {
  "hoodie-1": {
    id: "hoodie-1",
    name: "Classic Gray Hoodie",
    price: 49.99,
    image: "/src/assets/hoodie-gray-new.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "Comfortable cotton blend hoodie perfect for everyday wear. Made with 80% cotton and 20% polyester for ultimate comfort and durability.",
    features: ["Cotton blend fabric", "Adjustable drawstring hood", "Kangaroo pocket", "Ribbed cuffs and hem"]
  },
  "hoodie-2": {
    id: "hoodie-2", 
    name: "Navy Blue Hoodie",
    price: 54.99,
    image: "/src/assets/hoodie-navy-new.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "Premium navy hoodie with soft fleece lining for extra warmth and comfort.",
    features: ["Fleece lined interior", "Premium cotton construction", "Double-lined hood", "Front kangaroo pocket"]
  },
  "sweatshirt-1": {
    id: "sweatshirt-1",
    name: "Black Classic Sweatshirt",
    price: 44.99,
    image: "/src/assets/sweatshirt-black-new.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "Classic black sweatshirt with ribbed cuffs and hem. Perfect for casual wear.",
    features: ["100% cotton", "Crew neck design", "Ribbed cuffs and hem", "Classic fit"]
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  const product = productId ? products[productId as keyof typeof products] : null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart.",
        variant: "destructive"
      });
      return;
    }

    addToCart({
      id: product!.id,
      name: product!.name,
      price: product!.price,
      image: product!.image,
      size: selectedSize
    });
    
    toast({
      title: "Added to cart",
      description: `${product!.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

  const handleCartClick = () => {
    window.location.href = "/cart";
  };

  const handleMenuClick = () => {
    console.log("Mobile menu clicked");
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          cartItemsCount={getTotalItems()}
          onCartClick={handleCartClick}
          onMenuClick={handleMenuClick}
        />
        <main className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Product not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={handleCartClick}
        onMenuClick={handleMenuClick}
      />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="mb-6 flex items-center gap-2 hover:bg-accent/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-card"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-accent">
                ${product.price}
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[60px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full md:w-auto"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            {/* Product Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;