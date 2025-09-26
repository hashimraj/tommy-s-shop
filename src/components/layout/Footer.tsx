import { Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">Bón Von</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium apparel crafted for comfort and style, designed to elevate
              everyday wear with exceptional quality.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/men"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/women"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/bags"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support (no links) */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Contact Us</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Email: hello@tommy.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Sun 9AM-6PM</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 font-semibold"
              onClick={() => {
                const message =
                  "Hi! I'm interested in your products. Can you help me?";
                window.open(
                  `https://wa.me/254758905603?text=${encodeURIComponent(
                    message
                  )}`,
                  "_blank"
                );
              }}
            >
              WhatsApp Chat
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Bón Von. All rights reserved. Crafted with care for premium
            comfort.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
