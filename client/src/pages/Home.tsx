import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Phone, Leaf, VolumeX, Shield, Home as HomeIcon, Building, Warehouse, Wrench } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Coastline Spray Foam Solutions - Professional Insulation Services in Central Florida"
        description="Professional spray foam insulation services in Central Florida. Energy efficient solutions for residential and commercial properties. Serving Cocoa, Titusville & surrounding areas. Free quotes available."
        keywords="spray foam insulation, Central Florida, Cocoa, Titusville, energy efficiency, residential insulation, commercial insulation, attic insulation"
      />

      {/* Hero Section */}
      <section className="gradient-blue hero-pattern text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Professional Spray Foam Insulation in Central Florida
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Maximize energy efficiency, reduce noise, and improve comfort with our expert spray foam insulation services. Serving Cocoa, Titusville, and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-[var(--dark-blue)] hover:bg-blue-50 font-semibold">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--dark-blue)]">
                  <a href="tel:3216527465">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: (321) 652-7465
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Vector illustration for fast loading */}
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.4 4.4 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Energy Efficient Homes</h3>
                  <p className="text-blue-100">Up to 50% reduction in energy costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Spray Foam Insulation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the superior benefits that make spray foam the smart choice for your insulation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Energy Efficiency</h3>
                <p className="text-gray-600">
                  Reduce energy costs by up to 50% with superior air sealing and thermal performance that outperforms traditional insulation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mb-6">
                  <VolumeX className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Noise Reduction</h3>
                <p className="text-gray-600">
                  Create a quieter, more peaceful environment with excellent sound dampening properties for better comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Air Quality</h3>
                <p className="text-gray-600">
                  Improve indoor air quality by creating an effective barrier against allergens, pollutants, and moisture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive spray foam insulation solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <HomeIcon className="w-8 h-8 text-[var(--light-blue)] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential</h3>
                <p className="text-gray-600 text-sm">Complete home insulation solutions</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Building className="w-8 h-8 text-[var(--light-blue)] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial</h3>
                <p className="text-gray-600 text-sm">Large-scale building insulation</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Warehouse className="w-8 h-8 text-[var(--light-blue)] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Attic Insulation</h3>
                <p className="text-gray-600 text-sm">Specialized attic applications</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Wrench className="w-8 h-8 text-[var(--light-blue)] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Crawl Space</h3>
                <p className="text-gray-600 text-sm">Foundation and crawl space sealing</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[var(--primary-blue)] hover:bg-[var(--dark-blue)]">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="primary-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Energy Efficiency?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your spray foam insulation project. Our experts are ready to help you save money and increase comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[var(--primary-blue)] hover:bg-blue-50">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--primary-blue)]">
              <a href="tel:3216527465">
                <Phone className="w-4 h-4 mr-2" />
                Call: (321) 652-7465
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
