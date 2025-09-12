import { Card, CardContent } from "@/components/ui/card";

interface FeaturedProductsProps {
  products: { id: string; name: string; image: string; category: string }[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section className="py-12 bg-background">
      <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>

      {/* Marquee Effect */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee space-x-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="min-w-[200px] bg-card border-border/50 shadow-sm rounded-lg"
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-40 h-40 object-cover rounded-md mb-3"
                />
                <p className="text-sm text-muted-foreground uppercase">{product.category}</p>
                <h3 className="font-semibold text-foreground text-base">{product.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
