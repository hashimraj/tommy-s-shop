import { useState } from "react";
import { ShoppingCart, Menu, ChevronDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo1.png";

interface HeaderProps {
  cartItemsCount?: number;
}

const Header = ({ cartItemsCount = 0 }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Bags", href: "/bags" },
    { name: "New Arrivals", href: "/new-arrivals" },
  ];

  const wearCategories = [
    { name: "Hoodies", href: "/hoodies" },
    { name: "Sweatshirts", href: "/sweatshirts" },
    { name: "Jackets", href: "/jackets" },
    { name: "Shirts", href: "/shirts" },
    { name: "Shorts", href: "/shorts" },
    { name: "Underwear", href: "/underwear" },
    { name: "Sweatpants", href: "/sweatpants" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254758905603", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => (window.location.href = "/")}
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
          {navigation.map((item) => (
            <button
              key={item.name}
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => (window.location.href = item.href)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* WhatsApp Button (Desktop only) */}
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex gap-2"
            onClick={handleWhatsAppClick}
          >
            <MessageSquare className="h-4 w-4" />
            WhatsApp
          </Button>

          {/* Cart */}
          <Button
            variant="ghost"
            size="sm"
            className="relative"
            onClick={() => (window.location.href = "/cart")}
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

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] sm:w-[320px] p-0">
              {/* Scrollable Menu */}
              <div className="flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                <nav className="flex flex-col space-y-2 mt-4 px-4">
                  {/* Main Nav */}
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        window.location.href = item.href;
                        setIsOpen(false);
                      }}
                      className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
                    >
                      {item.name}
                    </button>
                  ))}

                  {/* Wear Categories */}
                  <div className="pt-3 border-t">
                    <h4 className="flex items-center text-foreground font-semibold mb-2">
                      Shop by Wear Category{" "}
                      <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
                    </h4>
                    <div className="flex flex-col space-y-1">
                      {wearCategories.map((cat) => (
                        <button
                          key={cat.name}
                          onClick={() => {
                            window.location.href = cat.href;
                            setIsOpen(false);
                          }}
                          className="text-foreground/70 hover:text-primary transition-colors text-sm text-left py-1 pl-6"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Button (Mobile) */}
                  <div className="pt-3 border-t mb-4">
                    <Button
                      className="w-full gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90"
                      onClick={() => {
                        setIsOpen(false);
                        handleWhatsAppClick();
                      }}
                    >
                      <MessageSquare className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
