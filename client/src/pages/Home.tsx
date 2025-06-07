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
      <section className="bg-white text-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
                Professional Spray Foam Insulation in Central Florida
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                Maximize energy efficiency, reduce noise, and improve comfort with our expert spray foam insulation services. Serving Cocoa, Titusville, and surrounding areas.
              </p>
              <div className="flex justify-start">
                <Button asChild size="lg" className="bg-[var(--dark-blue)] text-white hover:bg-[var(--primary-blue)] font-semibold">
                  <Link href="/contact">Get Your Free Quote Today</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Vector illustration for fast loading */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[var(--light-blue)] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7-7-7 7v11a2 2 0 002 2h3v-7h4v7h3a2 2 0 002-2V9z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Home Insulation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[var(--light-blue)] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Energy Savings</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[var(--light-blue)] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Quality Work</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-[var(--light-blue)] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">Fast Service</p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional Results</h3>
                  <p className="text-gray-600 text-sm">Up to 50% energy cost reduction</p>
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
            <Button asChild size="lg" className="bg-[var(--dark-blue)] hover:bg-[var(--primary-blue)] font-semibold">
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
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-[var(--dark-blue)] hover:bg-blue-50 font-semibold">
              <Link href="/contact">Get Your Free Quote Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Small phone reference at bottom */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Questions? Call us at <a href="tel:3216527465" className="text-[var(--dark-blue)] hover:underline">(321) 652-7465</a>
          </p>
        </div>
      </section>
    </>
  );
}
