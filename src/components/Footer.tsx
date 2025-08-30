import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/518f2707-7397-4ee1-a174-459e10b5b127.png" 
              alt="Upward Studio Logo" 
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional web design agency delivering high-quality, custom websites. 
              Available 24/6 with quick turnaround times.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/services" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
              <Link 
                to="/policies" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Policies
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold">Contact Info</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:upwardstudio.web@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>upwardstudio.web@gmail.com</span>
              </a>
              <a 
                href="tel:+27678998480"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>+27 67 899 8480</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Upward Studio. All rights reserved.</p>
            <span className="hidden md:block">•</span>
            <p>Available 24/6 • Quick delivery in 1 week</p>
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="text-xs">Back to Top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;