import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    company: "Sharma Textiles",
    content: "Soham has been handling our GST returns and income tax for 5 years. His attention to detail and timely filing has saved us from penalties multiple times. Highly recommended!",
    rating: 5,
    initials: "RS",
    id: "rajesh-sharma",
  },
  {
    name: "Priya Mehta",
    role: "Freelance Consultant",
    company: "Self Employed",
    content: "As a freelancer, tax filing was always confusing for me. Soham explained everything clearly and ensured I claimed all eligible deductions. My refund was much higher than expected!",
    rating: 5,
    initials: "PM",
    id: "priya-mehta",
  },
  {
    name: "Amit Patel",
    role: "Restaurant Owner",
    company: "Spice Garden",
    content: "Professional, reliable, and always available when needed. Soham helped us with GST registration and has been managing our accounts flawlessly. Truly excellent service.",
    rating: 5,
    initials: "AP",
    id: "amit-patel",
  },
];

function StarRating({ rating, id }: { rating: number; id: string }) {
  return (
    <div className="flex gap-0.5" data-testid={`rating-${id}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3" data-testid="text-testimonials-label">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-testimonials-heading">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-testimonials-description">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm h-full"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <StarRating rating={testimonial.rating} id={testimonial.id} />
                
                <p className="text-muted-foreground leading-relaxed mt-4 flex-1" data-testid={`text-testimonial-content-${testimonial.id}`}>
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                  <Avatar data-testid={`avatar-testimonial-${testimonial.id}`}>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm" data-testid={`text-testimonial-name-${testimonial.id}`}>{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground" data-testid={`text-testimonial-role-${testimonial.id}`}>
                      {testimonial.role} at {testimonial.company}
                    </p>
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
