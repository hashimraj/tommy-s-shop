import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Star, ShoppingCart, Heart } from "lucide-react";
import heroHoodie from "@/assets/heroHoodie.jpg";
import productsCollection from "@/assets/productsCollection.jpg";
import graphicTee from "@/assets/graphicTee.jpg";
import slimFitChinos from "@/assets/slimFitChinos.jpg";

const NewArrivals = () => {
  const { addToCart, getTotalItems } = useCart();

  // ✅ Keep prices as numbers
  const arrivals = [
    {
      id: 1,
      title: "Classic Fit Hoodie",
      description: "Fresh drop in premium cotton blend.",
      price: 59,
      image: heroHoodie,
      featured: true,
    },
    {
      id: 2,
      title: "Denim Jacket",
      description: "Vintage wash with modern tailoring.",
      price: 120,
      image: productsCollection,
      featured: false,
    },
    {
      id: 3,
      title: "Graphic Tee",
      description: "Minimal print on soft organic cotton.",
      price: 35,
      image: graphicTee,
      featured: false,
    },
    {
      id: 4,
      title: "Slim Fit Chinos",
      description: "Versatile pants in lightweight stretch fabric.",
      price: 70,
      image: slimFitChinos,
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={getTotalItems()} />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            New Arrivals
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest drops in premium quality and timeless style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {arrivals.map((product) => (
            <Card
              key={product.id}
              className={`relative overflow-hidden transition hover:shadow-xl ${
                product.featured ? "border-primary" : ""
              }`}
            >
              {/* Featured Badge */}
              {product.featured && (
                <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}

              {/* Product Image */}
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {product.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                {/* ✅ Format price with $ */}
                <span className="text-lg font-bold">${product.price}</span>
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewArrivals;

