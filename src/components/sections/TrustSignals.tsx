import { Star, Shield, Truck, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustSignals = [
  {
    icon: Star,
    title: "5,000+ Happy Customers",
    description: "Trusted by customers worldwide",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Premium materials and craftsmanship",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick and reliable delivery",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Dedicated support team",
  },
];

const TrustSignals = () => {
  return (
    <section className="py-16 px-4 bg-soft-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why Choose Bón Von?
          </h2>
          <p className="text-muted-foreground">
            Experience the difference with our commitment to quality and service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                    {signal.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {signal.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;