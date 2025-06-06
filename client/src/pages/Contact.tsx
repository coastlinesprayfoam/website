import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us | Free Quote | Coastline Spray Foam Solutions"
        description="Get a free spray foam insulation quote in Central Florida. Contact Coastline Spray Foam Solutions for professional insulation services. Call (321) 652-7465."
        keywords="free insulation quote, contact spray foam contractor, Central Florida insulation, Cocoa insulation services, Titusville spray foam"
      />

      {/* Contact Hero */}
      <section className="gradient-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to improve your energy efficiency? Get a free quote or schedule a consultation with our spray foam experts.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone & Email */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[var(--light-blue)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <a href="tel:3216527465" className="text-[var(--light-blue)] hover:text-[var(--primary-blue)] text-lg font-semibold">
                          (321) 652-7465
                        </a>
                        <p className="text-gray-600 text-sm">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[var(--light-blue)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a href="mailto:info@coastlinesprayfoam.com" className="text-[var(--light-blue)] hover:text-[var(--primary-blue)]">
                          info@coastlinesprayfoam.com
                        </a>
                        <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[var(--light-blue)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                        <p className="text-gray-600">
                          Central Florida<br />
                          Cocoa, Titusville & Surrounding Areas
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-semibold text-red-900">Emergency Service</h3>
                  </div>
                  <p className="text-red-800 text-sm mb-3">
                    Need urgent insulation repair or emergency service?
                  </p>
                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <a href="tel:3216527465">
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency: (321) 652-7465
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas We Serve</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                    {[
                      "Cocoa",
                      "Titusville", 
                      "Melbourne",
                      "Rockledge",
                      "Merritt Island",
                      "Palm Bay"
                    ].map((area) => (
                      <div key={area} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Don't see your area? Call us to check availability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
