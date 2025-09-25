import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";

const Bags = () => {
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  const bagProducts = products.filter((p) => p.category === "bag");

  const handleAddToCart = (productId: string) => {
    const product = bagProducts.find((p) => p.id === productId);
    if (product) {
      addToCart({ ...product, size: "M" });
      toast({ title: "Added to cart", description: `${product.name} added successfully.` });
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Bags Collection</h1>
        <p className="text-muted-foreground mb-6">
          Shop from our stylish and durable bag collection.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bagProducts.map((product) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default Bags;
