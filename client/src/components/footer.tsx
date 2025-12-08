import { Calculator, Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp, SiLinkedin } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Accounting & Bookkeeping", href: "#services", id: "accounting" },
  { label: "GST Returns", href: "#services", id: "gst" },
  { label: "Income Tax Filing", href: "#services", id: "income-tax" },
  { label: "Business Registration", href: "#services", id: "business-reg" },
  { label: "Loan Assistance", href: "#services", id: "loan" },
  { label: "PAN Card Services", href: "#services", id: "pan" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-2 mb-4"
              data-testid="link-footer-logo"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary">
                <Calculator className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">S.V. Patel</span>
                <span className="text-xs text-muted-foreground -mt-1">Accounting</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6" data-testid="text-footer-description">
              Professional accounting services with over 15 years of experience. 
              Trusted by 500+ clients for tax filing, GST returns, and financial planning.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919016980875"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-muted hover-elevate"
                aria-label="WhatsApp"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-muted hover-elevate"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:psoham1056@gmail.com"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-muted hover-elevate"
                aria-label="Email"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-quicklinks-title">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`button-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-services-title">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`button-footer-service-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" data-testid="text-footer-contact-title">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:9016980875"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  9016980875
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:psoham1056@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                  data-testid="link-footer-email-address"
                >
                  psoham1056@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-address">
                  209, Blue Ski Commerce Square, Bamroli Road, Surat - 395002
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left" data-testid="text-footer-copyright">
            {currentYear} S.V. Patel Accounting. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-footer-credentials">
            Certified Tax Professional | GST Practitioner
          </p>
        </div>
      </div>
    </footer>
  );
}
