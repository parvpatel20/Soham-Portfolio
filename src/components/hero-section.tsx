import { Button } from "@/components/ui/button";
import { Phone, Clock, Headphones } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/Screenshot_2025-12-08_122855-removebg-preview_1765177220077.png";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10 dark:from-primary/10 dark:via-background dark:to-accent/5" />
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-heading">
              <span className="text-foreground">Expert</span>{" "}
              <span className="text-primary">Accounting</span>{" "}
              <span className="text-foreground">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8" data-testid="text-hero-description">
              Professional tax filing, GST returns, and comprehensive accounting services. 
              We help you stay compliant while maximizing your returns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                asChild
                data-testid="button-hero-call"
                className="gap-2"
              >
                <a href="tel:9016980875">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-hero-whatsapp"
                className="gap-2"
              >
                <a
                  href="https://wa.me/919016980875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8">
              <div className="flex items-center gap-2" data-testid="stat-hero-experience">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">2+ Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-2" data-testid="stat-hero-support">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10">
                  <Headphones className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-testid="hero-image-container">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl flex items-center justify-center p-6">
                <img 
                  src={logoImage} 
                  alt="S.V. Patel Accounting Logo" 
                  className="w-full h-full object-contain"
                  data-testid="img-hero-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
