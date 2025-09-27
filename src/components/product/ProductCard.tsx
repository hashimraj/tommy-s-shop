import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: (productId: string) => void;
}

const ProductCard = ({ id, name, price, image, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="group relative overflow-hidden rounded-xl border border-white/10 
                 bg-gradient-to-br from-background/80 to-background/40 
                 backdrop-blur-md shadow-md transition-all duration-300 
                 hover:scale-[1.02] hover:shadow-xl hover:border-primary/50 cursor-pointer
                 w-full max-w-xs sm:max-w-sm md:max-w-md"
    >
      {/* Image with overlay */}
      <div className="relative w-full h-44 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onClick={() => navigate(`/product/${id}`)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

        {/* Quick View text on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full px-3 py-1 text-[10px] sm:text-xs md:text-sm font-medium shadow-md"
            onClick={() => navigate(`/product/${id}`)}
          >
            Quick View
          </Button>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-wide group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-base sm:text-lg md:text-xl font-bold text-accent">
          ${price}
        </p>

        <Button
          size="sm"
          className="w-full flex items-center justify-center gap-2 rounded-full font-medium 
                     bg-primary hover:bg-primary/90 text-primary-foreground shadow-md text-xs sm:text-sm md:text-base"
          onClick={() => onAddToCart(id)}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

