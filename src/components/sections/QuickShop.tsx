import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import productsCollection from "@/assets/products-collection.jpg";
import { Link } from "react-router-dom";

// ✅ Simple list of remaining categories (words only, includes Hoodies & Sweatshirts)
const otherCategories = [
  { name: "Jackets", path: "/jackets" },
  { name: "Shirts", path: "/shirts" },
  { name: "Shorts", path: "/shorts" },
  { name: "Underwear", path: "/underwear" },
  { name: "Sweatpants", path: "/sweatpants" },
  { name: "Bags", path: "/bags" },
  { name: "Hoodies", path: "/hoodies" },
  { name: "Sweatshirts", path: "/sweatshirts" },
];

const QuickShop = () => {
  return (
    <section id="shop-by-category" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={productsCollection}
                alt="Tommy Collection"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Discover our latest arrivals and timeless essentials —
                thoughtfully designed to bring comfort and confidence to
                your everyday wear.
              </p>
            </div>

            {/* Featured categories (Men & Women) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Men */}
              <Link to="/men">
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      Men
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Explore modern essentials for every man’s wardrobe
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Shop Men
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Women */}
              <Link to="/women">
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      Women
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Elegant and versatile styles for every occasion
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Shop Women
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Other categories (text links only) */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {otherCategories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors relative group"
                >
                  {cat.name}
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  <span className="block h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickShop;
