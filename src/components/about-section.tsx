import { Badge } from "@/components/ui/badge";
import { CheckCircle2, GraduationCap, Briefcase } from "lucide-react";
import aboutImage from "@assets/WhatsApp_Image_2025-12-07_at_22.46.18_da3a83a5_1765176723313.jpg";

const highlights = [
  "Bachelor's in Commerce & Accounting",
  "Certified Tax Professional",
  "GST Practitioner Certification",
  "5+ Years Industry Experience",
];

const stats = [
  { value: "5+", label: "Years Experience", id: "years-experience" },
  { value: "24/7", label: "Support Available", id: "support-available" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-primary mb-3" data-testid="text-about-label">About Me</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-name">
              Soham Patel
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-intro">
              As a dedicated accounting professional based in Surat, I bring years of 
              experience in providing comprehensive financial services to individuals and businesses. 
              My commitment to accuracy, transparency, and client satisfaction has helped me build 
              lasting relationships with clients across various industries.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description">
              I specialize in simplifying complex tax matters and ensuring full compliance with 
              the latest regulations. Whether you're a small business owner or an individual 
              taxpayer, I provide personalized attention to help you achieve your financial goals.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((item, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="py-1.5 px-3"
                  data-testid={`badge-about-highlight-${index}`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-primary" />
                  {item}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-muted/50"
                  data-testid={`stat-about-${stat.id}`}
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center" data-testid="about-image-container">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-bl from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl bg-muted/50 border border-border overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="Soham Patel at work" 
                  className="w-full h-full object-cover object-center"
                  data-testid="img-about-profile"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg" data-testid="badge-about-certified">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Certified</p>
                    <p className="text-xs text-muted-foreground">Tax Professional</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg" data-testid="badge-about-firm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">S.V. Patel</p>
                    <p className="text-xs text-muted-foreground">Accounting Firm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
