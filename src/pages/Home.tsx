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

// Product data that matches FeaturedProducts
const products = {
  "1": {
    id: "1",
    name: "Essential Navy Hoodie",
    price: 89,
    image: hoodieNavy,
    category: "Hoodies",
  },
  "2": { 
    id: "2",
    name: "Classic Black Sweatshirt",
    price: 79,
    image: sweatshirtBlack,
    category: "Sweatshirts",
  },
  "3": {
    id: "3",
    name: "Premium Gray Hoodie",
    price: 94,
    image: hoodieGray,
    category: "Hoodies",
  },
  "4": {
    id: "4",
    name: "Essential Navy Hoodie",
    price: 89,
    image: hoodieNavy,
    category: "Hoodies",
  },
  "5": {
    id: "5",
    name: "Classic Black Sweatshirt",
    price: 79,
    image: sweatshirtBlack,
    category: "Sweatshirts",
  },
  "6": {
    id: "6",
    name: "Premium Gray Hoodie",
    price: 94,
    image: hoodieGray,
    category: "Hoodies",
  },
};

const Home = () => {
  const { addToCart, getTotalItems } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (productId: string) => {
    // Get actual product data
    const product = products[productId as keyof typeof products];
    if (!product) return;
    
    const productData = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: 'M' // Default size
    };
    
    addToCart(productData);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart successfully.`,
    });
  };

  const handleProductClick = (productId: string) => {
    window.location.href = `/product/${productId}`;
  };

  const handleCartClick = () => {
    window.location.href = "/cart";
  };

  const handleMenuClick = () => {
    console.log("Mobile menu clicked");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={handleCartClick}
        onMenuClick={handleMenuClick}
      />
      
      <main>
        <Hero />
        <FeaturedProducts 
          onAddToCart={handleAddToCart}
          onProductClick={handleProductClick}
        />
        <QuickShop />
        <TrustSignals />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;