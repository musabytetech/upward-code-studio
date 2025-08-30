import { Mail, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Us",
      description: "Send us a detailed message about your project",
      action: "upwardstudio.web@gmail.com",
      href: "mailto:upwardstudio.web@gmail.com",
      buttonText: "Send Email"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "WhatsApp",
      description: "Quick chat for immediate questions",
      action: "+27 67 899 8480",
      href: "https://wa.me/27678998480",
      buttonText: "Chat on WhatsApp"
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Phone Call",
      description: "Direct call for detailed discussions",
      action: "+27 67 899 8480",
      href: "tel:+27678998480",
      buttonText: "Call Now"
    }
  ];

  const availability = [
    { day: "Monday - Saturday", hours: "24 Hours", status: "fully-available" },
    { day: "Sunday", hours: "Limited Hours", status: "limited" }
  ];

  const projectInfo = [
    "Project requirements and goals",
    "Preferred design style or examples",
    "Number of pages needed",
    "Timeline expectations",
    "Budget considerations",
    "Any specific functionality needed"
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
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Let's Build Your Website
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ready to take your business online? Contact us today and let's discuss how we can 
                create the perfect website for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-brand transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {method.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription className="text-base">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-medium text-foreground">{method.action}</p>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-brand hover:shadow-brand"
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.buttonText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="py-16 px-4 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Our Availability
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                We're here when you need us, almost around the clock.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availability.map((item, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-primary" />
                            <span>{item.day}</span>
                          </h3>
                          <p className="text-muted-foreground mt-1">{item.hours}</p>
                        </div>
                        <Badge 
                          variant={item.status === "fully-available" ? "default" : "secondary"}
                          className={item.status === "fully-available" ? "bg-green-500/10 text-green-500 border-green-500/20" : ""}
                        >
                          {item.status === "fully-available" ? "24/7" : "Limited"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Information */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What to Include in Your Message
                </h2>
                <p className="text-xl text-muted-foreground">
                  Help us understand your project better by including these details.
                </p>
              </div>

              <Card className="bg-card border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span>Project Information Checklist</span>
                  </CardTitle>
                  <CardDescription>
                    The more details you provide, the better we can tailor our solution to your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{info}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-brand">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Contact us today and let's bring your vision to life. Quick turnaround, professional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  variant="secondary" 
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <a href="mailto:upwardstudio.web@gmail.com">
                    Send Email Now
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <a href="https://wa.me/27678998480" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;