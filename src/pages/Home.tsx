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
import hoodieNavy from "@/assets/hoodieGreenModern.jpg";
import sweatshirtBlack from "@/assets/sweatshirt-black.jpg";
import toteCanvas from "@/assets/toteCanvas.jpg";
import shortsWomen from "@/assets/shortsWomen.jpg";
import jacketDenim from "@/assets/jacketDenim.jpg";
import sweatpantsCasual from "@/assets/sweatpantsCasual.jpg";

// Product data (simplified for featured section)
const products = [
  { id: "1", name: "Modern Green Hoodie", image: hoodieNavy, category: "Hoodies" },
  { id: "2", name: "Classic Black Sweatshirt", image: sweatshirtBlack, category: "Sweatshirts" },
  { id: "3", name: "Canvas Tote Bag", image: toteCanvas, category: "Bags" },
  { id: "4", name: "Casual Grey Sweatpants", image: sweatpantsCasual, category: "Sweatpants" },
  { id: "5", name: "Classic Denim Jacket", image: jacketDenim, category: "Jackets" },
  { id: "6", name: "Women’s Denim Shorts", image: shortsWomen, category: "Shorts" },
  { id: "7", name: "Modern Green Hoodie", image: hoodieNavy, category: "Hoodies" },
  { id: "8", name: "Classic Black Sweatshirt", image: sweatshirtBlack, category: "Sweatshirts" },
  { id: "9", name: "Canvas Tote Bag", image: toteCanvas, category: "Bags" },
  { id: "10", name: "Casual Grey Sweatpants", image: sweatpantsCasual, category: "Sweatpants" },
  { id: "11", name: "Classic Denim Jacket", image: jacketDenim, category: "Jackets" },
  { id: "12", name: "Women’s Denim Shorts", image: shortsWomen, category: "Shorts" },
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
