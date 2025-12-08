import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "9016980875",
    href: "tel:9016980875",
  },
  {
    icon: Mail,
    label: "Email",
    value: "psoham1056@gmail.com",
    href: "mailto:psoham1056@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "209, Blue Ski Commerce Square, Beside Bhatiya Complex, Bamroli Road, Surat - 395002",
    href: "https://maps.google.com/?q=Blue+Ski+Commerce+Square+Bamroli+Road+Surat",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 10:00 AM - 7:00 PM",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3" data-testid="text-contact-label">Contact Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-description">
            Have questions? Ready to get started? Reach out to us through phone, email, or WhatsApp.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                    data-testid={`contact-info-${info.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.label === "Address" ? "_blank" : undefined}
                          rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                          className="font-medium hover:text-primary transition-colors break-words"
                          data-testid={`link-contact-${info.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium" data-testid={`text-contact-${info.label.toLowerCase().replace(/\s+/g, "-")}`}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-border">
                  <Button
                    size="lg"
                    className="gap-2 w-full"
                    asChild
                  >
                    <a
                      href="https://wa.me/919016980875"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-contact-whatsapp"
                    >
                      <SiWhatsapp className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-primary/5 mt-6">
            <CardContent className="p-6 text-center">
              <p className="font-semibold mb-2" data-testid="text-response-guarantee-title">Quick Response Guarantee</p>
              <p className="text-sm text-muted-foreground" data-testid="text-response-guarantee-description">
                We respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
