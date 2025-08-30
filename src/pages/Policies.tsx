import { Shield, Clock, CreditCard, GitBranch, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Policies = () => {
  const policies = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Service Hours",
      items: [
        "Available 24/6 (Monday to Saturday)",
        "Limited availability on Sundays",
        "Response time: Within 2-4 hours during business days",
        "Emergency support available via WhatsApp"
      ]
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      title: "Development Process",
      items: [
        "We build a demo website first",
        "Client reviews and approves the demo",
        "Payment is required before final delivery",
        "Complete website transferred via GitHub",
        "All source code included in delivery"
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Payment Terms",
      items: [
        "Payments accepted via PayShap only",
        "No deposit required - FREE demo first",
        "Payment only due after demo approval",
        "Secure payment processing",
        "Invoice provided for all transactions"
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Refund Policy",
      items: [
        "No refunds after successful delivery",
        "Full refund if work is not delivered as promised",
        "Refund processed within 5-7 business days",
        "Refunds only for non-delivery situations"
      ]
    }
  ];

  const deliveryTerms = [
    "Standard delivery time: 1 week from project start",
    "Rush delivery available for additional fee",
    "Client feedback incorporation included",
    "Final files delivered via GitHub repository",
    "Complete documentation provided"
  ];

  const qualityStandards = [
    "Responsive design tested on all major devices",
    "Cross-browser compatibility ensured",
    "SEO-optimized structure and content",
    "Fast loading speeds guaranteed",
    "Clean, maintainable code"
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
                Terms & Policies
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                How We Operate
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transparent policies and clear expectations for a smooth collaboration. 
                Everything you need to know about working with Upward Studio.
              </p>
            </div>
          </div>
        </section>

        {/* Main Policies */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {policies.map((policy, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-brand transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {policy.icon}
                      </div>
                      <CardTitle className="text-xl">{policy.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {policy.items.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Standards */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Delivery Standards
                </h2>
                <p className="text-xl text-muted-foreground">
                  What you can expect from our delivery process and timeline.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-card border-border shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2">
                      <Clock className="h-6 w-6 text-primary" />
                      <span>Delivery Terms</span>
                    </CardTitle>
                    <CardDescription>
                      Our commitment to timely and quality delivery.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {deliveryTerms.map((term, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{term}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2">
                      <Shield className="h-6 w-6 text-primary" />
                      <span>Quality Standards</span>
                    </CardTitle>
                    <CardDescription>
                      The quality benchmarks we maintain for every project.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {qualityStandards.map((standard, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{standard}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Important Notes
              </h2>

              <div className="space-y-6">
                <Card className="bg-amber-500/5 border-amber-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2 text-amber-600">
                      <AlertCircle className="h-5 w-5" />
                      <span>Business Operations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p>• We operate as a remote-first agency with no physical location</p>
                      <p>• All communication happens via email, WhatsApp, or phone</p>
                      <p>• Project files and deliverables are shared digitally</p>
                      <p>• We maintain professional standards throughout the process</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-500/5 border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2 text-blue-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>Client Responsibilities</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p>• Provide all necessary content and materials on time</p>
                      <p>• Respond to feedback requests within 48 hours</p>
                      <p>• Make payments as agreed upon in the timeline</p>
                      <p>• Communicate any changes or concerns promptly</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Policies;