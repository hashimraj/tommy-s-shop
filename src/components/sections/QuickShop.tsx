import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import productsCollection from "@/assets/products-collection.jpg";

const QuickShop = () => {
  return (
    <section id="shop-by-category" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <img
                src={productsCollection}
                alt="Tommy Collection"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choose from our carefully curated selection of premium hoodies and sweatshirts. 
                Each piece is designed with attention to detail and crafted for lasting comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card 
                className="group cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                onClick={() => {
                  window.location.href = "/hoodies";
                }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Hoodies
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Cozy and stylish hoodies for every occasion
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Shop Hoodies
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="group cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                onClick={() => {
                  window.location.href = "/sweatshirts";
                }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Sweatshirts
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Classic sweatshirts with modern appeal
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Shop Sweatshirts
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => {
                  console.log("View All Products from QuickShop clicked");
                  document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickShop;