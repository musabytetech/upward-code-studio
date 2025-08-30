import { CheckCircle, Globe, Smartphone, Zap, Code, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Custom Web Design",
      description: "Professionally designed websites tailored to your brand and business needs.",
      features: ["Responsive Design", "Modern UI/UX", "Brand Integration", "SEO Optimized"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile-First Development",
      description: "Websites that look perfect and function flawlessly on all devices.",
      features: ["Mobile Optimized", "Touch-Friendly", "Fast Loading", "Cross-Browser"]
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Clean, efficient code using the latest web technologies and best practices.",
      features: ["React/HTML5", "Modern CSS", "JavaScript", "Performance Focused"]
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
      features: ["User-Centered", "Conversion Focused", "Accessibility", "Brand Consistent"]
    }
  ];

  const pricingFeatures = [
    "5 Professional Pages",
    "Responsive Design", 
    "Contact Forms",
    "Social Media Integration",
    "SEO Basic Setup",
    "1 Week Delivery",
    "GitHub Transfer",
    "Mobile Optimized"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                Frontend Web Design Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Professional Web Design Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We specialize in creating stunning, responsive websites that capture your brand's essence 
                and deliver exceptional user experiences across all devices.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-brand transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Professional websites starting from just R600. No hidden fees, no surprises.
              </p>

              <Card className="bg-card border-2 border-primary shadow-brand max-w-md mx-auto">
                <CardHeader className="text-center pb-8">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">Standard Package</CardTitle>
                  </div>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-primary">R600</span>
                    <span className="text-muted-foreground">for 5 pages</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    R100 per additional page
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-left">{feature}</span>
                    </div>
                  ))}
                  <div className="pt-6">
                    <Button asChild className="w-full bg-gradient-brand hover:shadow-brand">
                      <Link to="/contact">Get Started Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Simple Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From concept to delivery in just one week. Here's how we make it happen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: "01", title: "Consultation", desc: "We discuss your vision and requirements" },
                { step: "02", title: "Design Demo", desc: "We create a demo of your website" },
                { step: "03", title: "Payment", desc: "Secure payment via PayShap" },
                { step: "04", title: "Delivery", desc: "Complete website delivered via GitHub" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;