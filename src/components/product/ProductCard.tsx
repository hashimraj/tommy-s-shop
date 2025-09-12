import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <Card className="overflow-hidden shadow-card hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
        onClick={() => navigate(`/product/${id}`)}
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-accent font-medium mb-3">${price}</p>
        <Button size="sm" onClick={() => onAddToCart(id)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
