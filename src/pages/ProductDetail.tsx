import { useState } from "react";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  const product = products.find((p) => p.id === productId);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart({ ...product!, size: selectedSize });

    toast({
      title: "Added to cart",
      description: `${product!.name} (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header cartItemsCount={getTotalItems()} />
        <main className="container mx-auto px-6 sm:px-8 py-6">
          <p className="text-center text-muted-foreground">Product not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartItemsCount={getTotalItems()} />

      <main className="container mx-auto px-6 sm:px-8 py-6 flex-1 max-w-6xl">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-1 text-xs sm:text-sm"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </Button>

        {/* Mobile: image left + details right | Desktop: unchanged */}
        <div className="grid grid-cols-[auto,1fr] md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-xl overflow-hidden shadow-md w-[120px] sm:w-[150px] md:w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[140px] sm:h-[180px] md:h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-5 md:pr-6">
            {/* Title & Price */}
            <div>
              <h1 className="text-sm sm:text-lg md:text-2xl font-bold">
                {product.name}
              </h1>
              <p className="text-xs sm:text-base md:text-xl font-semibold text-accent mt-1 sm:mt-2">
                ${product.price}
              </p>
            </div>

            {/* Description */}
            <p className="text-[11px] sm:text-sm md:text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Sizes */}
            <div>
              <h3 className="text-[11px] sm:text-sm md:text-base font-semibold mb-1 sm:mb-2">
                Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="rounded-full px-2 sm:px-3 py-1 text-[10px] sm:text-sm"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              size="sm"
              className="w-full md:w-auto flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
              Add to Cart
            </Button>

            {/* Features */}
            {product.features && (
              <Card className="bg-background/60 border border-muted shadow-sm">
                <CardContent className="p-2 sm:p-3 md:p-4">
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-2">
                    Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs md:text-sm"
                      >
                        <Badge
                          variant="secondary"
                          className="w-2 h-2 p-0 rounded-full"
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
