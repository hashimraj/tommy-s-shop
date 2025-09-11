import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  isNew?: boolean;
  onAddToCart?: (productId: string) => void;
  onClick?: (productId: string) => void;
  onProductClick?: (productId: string) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  category = "",
  isNew = false,
  onAddToCart,
  onClick,
  onProductClick,
}: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-card border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 rounded-xl">
      <div className="relative" onClick={() => (onClick || onProductClick)?.(id)}>
        <div className="aspect-square bg-muted overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        {isNew && (
          <Badge 
            className="absolute top-3 left-3 bg-accent text-accent-foreground font-medium px-2 py-1 text-xs shadow-sm"
          >
            NEW
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
            {category}
          </p>
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300 text-sm leading-tight">
            {name}
          </h3>
        </div>
        
        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-foreground">
            ${price}
          </span>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(id);
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 h-8 text-xs transition-all duration-300 hover:scale-105 shadow-sm"
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;