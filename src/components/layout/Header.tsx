import { ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

interface HeaderProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
  onMenuClick?: () => void;
}

const Header = ({ cartItemsCount = 0, onCartClick, onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => window.location.href = "/"}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src={logo} 
              alt="TOMMY Logo" 
              className="h-12 w-auto font-bold filter drop-shadow-md"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => {
              window.location.href = "/hoodies";
            }}
          >
            Hoodies
          </button>
          <button 
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => {
              window.location.href = "/sweatshirts";
            }}
          >
            Sweatshirts
          </button>
          <button 
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => {
              window.location.href = "/offers";
            }}
          >
            Offers
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex"
            onClick={() => {
              window.location.href = "/account";
            }}
          >
            <User className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative"
            onClick={() => window.location.href = "/cart"}
          >
            <ShoppingCart className="h-4 w-4" />
            {cartItemsCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemsCount}
              </Badge>
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;