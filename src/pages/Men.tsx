import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const Men = () => {
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  // ✅ Correct filtering: show men's + unisex products
  const menProducts = products.filter(
    (p) => p.gender === "men" || p.gender === "unisex"
  );

  const handleAddToCart = (productId: string) => {
    const product = menProducts.find((p) => p.id === productId);
    if (product) {
      addToCart({ ...product, size: product.sizes?.[0] || "M" }); // pick first available size
      toast({
        title: "Added to cart",
        description: `${product.name} added successfully.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={getTotalItems()} />
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="mb-4 flex items-center gap-2 hover:bg-accent/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">Men’s Collection</h1>
        <p className="text-muted-foreground mb-6">
          Explore the latest fashion and everyday essentials designed for men.
        </p>

        {menProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {menProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-8">
            No men’s products available right now.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Men;
