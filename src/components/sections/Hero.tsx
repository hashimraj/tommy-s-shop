import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hoodie.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium Tommy Hoodie"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Comfort
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of premium hoodies and sweatshirts, 
            crafted for ultimate comfort and style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            {/* Scroll to Shop by Category */}
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-hero group px-8"
              onClick={() => {
                document.getElementById("shop-by-category")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* Offers Button */}
            <Button 
              variant="outline" 
              size="lg"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 font-semibold"
              onClick={() => {
                window.location.href = "/offers";
              }}
            >
              View Offers
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
