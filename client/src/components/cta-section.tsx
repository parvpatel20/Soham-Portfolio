import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden" data-testid="section-cta">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" data-testid="text-cta-heading">
          Ready to Simplify Your Finances?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto" data-testid="text-cta-description">
          Get started today and discover how we can help you 
          save time, reduce stress, and maximize your returns.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2"
            asChild
          >
            <a href="tel:9016980875" data-testid="link-cta-call">
              <Phone className="w-4 h-4" />
              Call Now: 9016980875
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a
              href="https://wa.me/919016980875"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-cta-whatsapp"
            >
              <SiWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
