import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator, 
  FileText, 
  Receipt, 
  Building2, 
  CreditCard, 
  Landmark
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "Comprehensive financial record-keeping, ledger management, and accurate bookkeeping services for businesses of all sizes.",
    id: "accounting-bookkeeping",
  },
  {
    icon: Receipt,
    title: "GST Returns",
    description: "Timely and accurate GST return filing including GSTR-1, GSTR-3B, and annual returns with full compliance support.",
    id: "gst-returns",
  },
  {
    icon: FileText,
    title: "Income Tax Filing",
    description: "Expert income tax preparation and filing for individuals and businesses, ensuring maximum deductions and compliance.",
    id: "income-tax",
  },
  {
    icon: Building2,
    title: "Business Registration",
    description: "Complete GST registration, Udhyam Aadhar enrollment, and company incorporation services with documentation support.",
    id: "business-registration",
  },
  {
    icon: Landmark,
    title: "Loan Assistance",
    description: "Professional guidance for business and personal loans with documentation preparation and application support.",
    id: "loan-assistance",
  },
  {
    icon: CreditCard,
    title: "PAN Card Services",
    description: "New PAN card applications, corrections, and linking services with quick processing and doorstep delivery.",
    id: "pan-card",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3" data-testid="text-services-label">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-services-heading">
            Comprehensive Accounting Solutions
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-services-description">
            From tax filing to business registration, we provide end-to-end financial services 
            tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-elevate transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
              data-testid={`card-service-${service.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl mt-4" data-testid={`text-service-title-${service.id}`}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-desc-${service.id}`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
