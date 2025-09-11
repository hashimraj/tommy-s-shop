import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Clock, Tag, Gift, Star } from "lucide-react";
import heroHoodie from "@/assets/hero-hoodie.jpg";
import productsCollection from "@/assets/products-collection.jpg";

const Offers = () => {
  const { getTotalItems } = useCart();

  const handleCartClick = () => {
    window.location.href = "/cart";
  };

  const handleMenuClick = () => {
    console.log("Mobile menu clicked");
  };

  const offers = [
    {
      id: 1,
      title: "Buy 2 Get 1 Free",
      description: "Mix and match any hoodies or sweatshirts",
      discount: "Save up to $50",
      validUntil: "Dec 31, 2024",
      image: heroHoodie,
      code: "BUY2GET1",
      featured: true
    },
    {
      id: 2,
      title: "Student Discount",
      description: "20% off for students with valid ID",
      discount: "20% OFF",
      validUntil: "Ongoing",
      image: productsCollection,
      code: "STUDENT20",
      featured: false
    },
    {
      id: 3,
      title: "First Time Buyer",
      description: "Special discount for new customers",
      discount: "15% OFF",
      validUntil: "Jan 15, 2025",
      image: heroHoodie,
      code: "WELCOME15",
      featured: false
    },
    {
      id: 4,
      title: "Free Shipping Weekend",
      description: "Free shipping on all orders above $50",
      discount: "Free Shipping",
      validUntil: "Every Weekend",
      image: productsCollection,
      code: "FREESHIP",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={handleCartClick}
        onMenuClick={handleMenuClick}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Special Offers
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our exclusive deals and limited-time offers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {offers.map((offer) => (
            <Card key={offer.id} className={`relative overflow-hidden ${offer.featured ? 'border-primary shadow-lg' : ''}`}>
              {offer.featured && (
                <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{offer.title}</h3>
                  <p className="text-white/90">{offer.description}</p>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {offer.discount}
                  </CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {offer.validUntil}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="font-mono font-semibold">{offer.code}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="ml-auto"
                    onClick={() => {
                      navigator.clipboard.writeText(offer.code);
                      alert(`Code ${offer.code} copied to clipboard!`);
                    }}
                  >
                    Copy
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1"
                    onClick={() => window.location.href = "/hoodies"}
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    Shop Now
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const message = `I'm interested in the ${offer.title} offer (${offer.code})`;
                      window.open(`https://wa.me/254758905603?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Gift className="w-5 h-5" />
                Subscribe for More Offers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get notified about exclusive deals and early access to sales
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Offers;