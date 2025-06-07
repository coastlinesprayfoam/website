import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <>
      <SEOHead
        title="Spray Foam Insulation Services | Coastline Spray Foam Solutions"
        description="Professional spray foam insulation services for residential, commercial, and attic applications in Central Florida. Energy efficient solutions with expert installation."
        keywords="spray foam services, residential insulation, commercial insulation, attic insulation, crawl space insulation, energy efficiency services"
      />

      {/* Services Hero */}
      <section className="gradient-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional spray foam insulation services designed to maximize energy efficiency, comfort, and cost savings for your property.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Residential Services */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Residential Insulation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Transform your home into an energy-efficient haven with our residential spray foam insulation services. Perfect for new construction and retrofit applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Whole House Insulation</h4>
                      <p className="text-gray-600">Complete home thermal envelope sealing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Wall Cavity Insulation</h4>
                      <p className="text-gray-600">Interior and exterior wall applications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Basement Insulation</h4>
                      <p className="text-gray-600">Foundation and basement waterproofing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional spray foam installation in residential home" 
                  className="rounded-lg w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Commercial Services */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Commercial building insulation installation" 
                  className="rounded-lg w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Commercial Insulation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Reduce operating costs and improve comfort for your commercial property with our large-scale spray foam insulation solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Buildings</h4>
                      <p className="text-gray-600">Energy-efficient workplace environments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Warehouses</h4>
                      <p className="text-gray-600">Large-scale industrial insulation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Retail Spaces</h4>
                      <p className="text-gray-600">Customer comfort optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attic Insulation */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Attic Insulation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Stop energy loss through your roof with professional attic spray foam insulation. Perfect for Florida's hot climate conditions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Roof Deck Insulation</h4>
                      <p className="text-gray-600">Direct application to roof sheathing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Attic Floor Insulation</h4>
                      <p className="text-gray-600">Traditional attic floor applications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Air Sealing</h4>
                      <p className="text-gray-600">Complete thermal envelope sealing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Spray foam insulation installation in attic" 
                  className="rounded-lg w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Process Section */}
          <Card className="bg-gray-50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Installation Process</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inspection</h3>
                  <p className="text-gray-600">Thorough assessment of your property's insulation needs</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation</h3>
                  <p className="text-gray-600">Area preparation and safety setup for optimal application</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Application</h3>
                  <p className="text-gray-600">Professional spray foam installation using advanced equipment</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Check</h3>
                  <p className="text-gray-600">Final inspection and cleanup to ensure perfect results</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="primary-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your spray foam insulation project.
          </p>
          <Button asChild size="lg" className="bg-white text-[var(--dark-blue)] hover:bg-blue-50 font-semibold">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
