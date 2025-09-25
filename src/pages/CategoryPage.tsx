import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  // Get products for this category
  const categoryProducts = products.filter((p) => p.category === category);

  const handleAddToCart = (productId: string) => {
    const product = categoryProducts.find((p) => p.id === productId);
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

        <h1 className="text-3xl md:text-4xl font-bold mb-2 capitalize">
          {category} Collection
        </h1>
        <p className="text-muted-foreground mb-6">
          Discover our premium collection of {category}.
        </p>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryProducts.map((product) => (
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
          <p className="text-center text-muted-foreground mt-10">
            No products found in this category.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
