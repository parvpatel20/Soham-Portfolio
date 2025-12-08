import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Loader2
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const services = [
  "Accounting & Bookkeeping",
  "GST Returns",
  "Income Tax Filing",
  "Business Registration",
  "Loan Assistance",
  "PAN Card Services",
  "Other",
];

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

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3" data-testid="text-contact-label">Our Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-heading">
            Let's Discuss Your Needs
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-description">
            Have questions? Ready to get started? Reach out and we'll respond 
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                data-testid="input-contact-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                                data-testid="input-contact-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+91 98765 43210"
                                {...field}
                                data-testid="input-contact-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Interested In</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-contact-service">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service} data-testid={`select-option-${service.toLowerCase().replace(/\s+/g, "-")}`}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your requirements..."
                              rows={5}
                              {...field}
                              data-testid="textarea-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={mutation.isPending}
                      data-testid="button-contact-submit"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
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
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.label === "Address" ? "_blank" : undefined}
                      rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                      className="font-medium hover:text-primary transition-colors"
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
              <p className="text-sm text-muted-foreground mb-4">Connect on WhatsApp</p>
              <Button
                variant="outline"
                className="gap-2 w-full"
                asChild
              >
                <a
                  href="https://wa.me/919016980875"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-whatsapp"
                >
                  <SiWhatsapp className="w-4 h-4 text-green-600" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            <Card className="border-border/50 bg-primary/5">
              <CardContent className="p-6">
                <p className="font-semibold mb-2" data-testid="text-response-guarantee-title">Quick Response Guarantee</p>
                <p className="text-sm text-muted-foreground" data-testid="text-response-guarantee-description">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
