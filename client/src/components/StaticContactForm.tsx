
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

export function StaticContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Static form handling - integrate with Netlify Forms, Formspree, or similar
    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      formBody.append(key, value);
    });

    // For demonstration - in production, integrate with form service
    toast({
      title: "Quote Request Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="py-20" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to improve your home's energy efficiency? Contact us for a free
              consultation and personalized quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Request Your Free Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(321) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Insulation</option>
                        <option value="commercial">Commercial Insulation</option>
                        <option value="attic">Attic Insulation</option>
                        <option value="crawlspace">Crawl Space Sealing</option>
                        <option value="energy-audit">Energy Audit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your project, home size, and any specific concerns..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--dark-blue)] hover:bg-[var(--primary-blue)] text-white font-semibold py-3"
                  >
                    Get Free Quote
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We typically respond within 2-4 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-8 h-8 text-[var(--primary-blue)] mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Call Us Today</h3>
                      <a
                        href="tel:3216527465"
                        className="text-2xl font-bold text-[var(--dark-blue)] hover:text-[var(--primary-blue)]"
                      >
                        (321) 652-7465
                      </a>
                      <p className="text-sm text-gray-600">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Mail className="w-8 h-8 text-[var(--primary-blue)] mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                      <a
                        href="mailto:info@coastlinesprayfoam.com"
                        className="text-lg text-[var(--dark-blue)] hover:text-[var(--primary-blue)]"
                      >
                        info@coastlinesprayfoam.com
                      </a>
                      <p className="text-sm text-gray-600">We respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-8 h-8 text-[var(--primary-blue)] mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                      <p className="text-gray-600">
                        Central Florida<br />
                        Cocoa, Melbourne, Titusville,<br />
                        Rockledge, Merritt Island & Surrounding Areas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
