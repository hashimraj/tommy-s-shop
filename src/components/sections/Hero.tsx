import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
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
            Elevate your everyday look with our carefully selected pieces designed to blend style and comfort effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* Shop Collection Button */}
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/20 group px-8 font-semibold rounded-xl"
              onClick={() =>
                document
                  .getElementById("shop-by-category")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* New Arrivals CTA */}
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary text-white hover:bg-primary/90 px-8 font-semibold rounded-xl"
              onClick={() => {
                window.location.href = "/new-arrivals";
              }}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              New Arrivals
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
