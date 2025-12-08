import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, Users, Headphones } from "lucide-react";

const valueProps = [
  {
    icon: Shield,
    title: "Maximum Refund Guarantee",
    description: "We ensure you receive every deduction and credit you're entitled to, maximizing your tax refund with our thorough review process.",
    highlight: "100% Accuracy Guaranteed",
    id: "max-refund",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. We provide upfront, clear pricing so you know exactly what to expect before we begin.",
    highlight: "No Hidden Fees",
    id: "transparent-pricing",
  },
  {
    icon: Users,
    title: "Expert Tax Professionals",
    description: "Our team consists of certified and experienced professionals who stay updated with the latest tax laws and regulations.",
    highlight: "Certified Experts",
    id: "expert-professionals",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Get personalized attention and support throughout the year, not just during tax season. We're here whenever you need us.",
    highlight: "Year-Round Assistance",
    id: "dedicated-support",
  },
];

export function ValuePropsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/30" data-testid="section-why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3" data-testid="text-whyus-label">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-whyus-heading">
            Your Success is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-whyus-description">
            We're committed to providing exceptional service and delivering results that 
            exceed your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {valueProps.map((prop, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
              data-testid={`card-value-${prop.id}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                      <prop.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold" data-testid={`text-value-title-${prop.id}`}>{prop.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-3" data-testid={`text-value-desc-${prop.id}`}>
                      {prop.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary" data-testid={`text-value-highlight-${prop.id}`}>
                      {prop.highlight}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
