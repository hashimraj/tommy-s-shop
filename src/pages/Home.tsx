import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import QuickShop from "@/components/sections/QuickShop";
import TrustSignals from "@/components/sections/TrustSignals";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

// Import product images properly
import hoodieNavy from "@/assets/hoodie-navy-new.jpg";
import sweatshirtBlack from "@/assets/sweatshirt-black-new.jpg";
import hoodieGray from "@/assets/hoodie-gray-new.jpg";

// Product data (simplified for featured section)
const products = [
  { id: "1", name: "Essential Navy Hoodie", image: hoodieNavy, category: "Hoodies" },
  { id: "2", name: "Classic Black Sweatshirt", image: sweatshirtBlack, category: "Sweatshirts" },
  { id: "3", name: "Premium Gray Hoodie", image: hoodieGray, category: "Hoodies" },
  { id: "4", name: "Essential Navy Hoodie", image: hoodieNavy, category: "Hoodies" },
  { id: "5", name: "Classic Black Sweatshirt", image: sweatshirtBlack, category: "Sweatshirts" },
  { id: "6", name: "Premium Gray Hoodie", image: hoodieGray, category: "Hoodies" },
];

const Home = () => {
  const { getTotalItems } = useCart();
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCartClick = () => {
    window.location.href = "/cart";
  };

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={handleCartClick}
        onMenuClick={handleMenuClick}
        menuOpen={menuOpen} // pass to Header for toggle logic
      />
      
      <main>
        <Hero />
        <FeaturedProducts products={products} />
        <QuickShop />
        <TrustSignals />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
