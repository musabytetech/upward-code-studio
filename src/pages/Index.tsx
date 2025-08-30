import { ArrowRight, CheckCircle, Clock, Zap, Code, Palette, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import portfolio images
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioCreative from "@/assets/portfolio-creative.jpg";

const Index = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast",
      description: "Delivered in just 1 week with professional quality."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Modern Code",
      description: "Built with latest technologies and best practices."
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Custom Design",
      description: "Unique designs tailored to your brand identity."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/6 Support",
      description: "Always available when you need us most."
    }
  ];

  const portfolioItems = [
    {
      image: portfolioEcommerce,
      title: "E-commerce Platform",
      description: "Modern online store with product catalog and shopping features",
      category: "E-commerce"
    },
    {
      image: portfolioCorporate,
      title: "Corporate Website",
      description: "Professional business website with team showcase",
      category: "Corporate"
    },
    {
      image: portfolioCreative,
      title: "Creative Portfolio",
      description: "Stunning portfolio site for creative professionals",
      category: "Portfolio"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "1 Week", label: "Average Delivery" },
    { number: "24/6", label: "Availability" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 animate-float">
                Web Design Agency
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent leading-tight">
                Beautiful Websites
                <br />
                <span className="text-foreground">Built Fast</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                Professional web design starting from <span className="text-primary font-semibold">R600</span>. 
                Quick turnaround, modern designs, delivered in just one week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-gradient-brand hover:shadow-brand text-lg px-8">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-brand opacity-10 rounded-full blur-3xl animate-glow"></div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Why Choose Upward Studio?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine speed, quality, and expertise to deliver exceptional websites 
                that make your business stand out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-brand transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Recent Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Take a look at some of the beautiful websites we've created for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {portfolioItems.map((item, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-brand transition-all duration-300 group overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Professional Websites from R600
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get a complete 5-page website with modern design, mobile optimization, 
                and professional quality. Additional pages only R100 each.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  "Responsive Design",
                  "1 Week Delivery", 
                  "GitHub Transfer",
                  "24/6 Support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-card px-4 py-2 rounded-full border">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-brand hover:shadow-brand text-lg px-8">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-brand relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join our satisfied clients and get your professional website delivered in just one week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 text-lg px-8"
                >
                  <a href="mailto:upwardstudio.web@gmail.com">
                    Email Us Now
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
                >
                  <a href="https://wa.me/27678998480" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;