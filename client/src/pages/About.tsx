import { Card, CardContent } from "../components/ui/card";
import { SEOHead } from "../components/SEOHead";
import { Award, Handshake, Leaf, IdCard, GraduationCap, Wrench, Star, MapPin, Phone, Navigation } from "lucide-react";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us | Coastline Spray Foam Solutions"
        description="Learn about Coastline Spray Foam Solutions, Central Florida's trusted spray foam insulation experts since 2008. Licensed, insured, and factory-trained professionals."
        keywords="about Coastline Spray Foam, Central Florida insulation company, licensed insulation contractor, spray foam experts, family business"
      />

      {/* About Hero */}
      <section className="gradient-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Coastline Spray Foam</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner for professional spray foam insulation solutions in Central Florida for over 15 years.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, Coastline Spray Foam Solutions has been serving Central Florida communities with professional insulation services that make homes and businesses more energy-efficient, comfortable, and cost-effective.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small family business has grown into one of the region's most trusted insulation contractors, completing over 500 successful projects across Cocoa, Titusville, and surrounding areas.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to quality, customer satisfaction, and using the latest spray foam technology has earned us a reputation for excellence in the industry.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional insulation team at work" 
                className="rounded-lg w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing superior insulation solutions that improve lives and protect the environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Excellence</h3>
                <p className="text-gray-600">
                  We use only the highest quality materials and latest application techniques to ensure superior results that last.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mb-6">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  Every project is approached with dedication to exceeding customer expectations and delivering exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--light-blue)] rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Environmental Responsibility</h3>
                <p className="text-gray-600">
                  Our insulation solutions help reduce energy consumption and environmental impact while saving costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience You Can Trust
            </h2>
            <p className="text-xl text-gray-600">
              Certified professionals with the expertise to handle any insulation project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <IdCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your protection</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Factory Trained</h3>
              <p className="text-gray-600">Trained by leading spray foam manufacturers</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Equipment</h3>
              <p className="text-gray-600">State-of-the-art application equipment</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Reviews</h3>
              <p className="text-gray-600">Consistently rated 5 stars by customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Proudly serving Central Florida communities with professional spray foam insulation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-[var(--light-blue)] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Primary Service Areas</h3>
                <p className="text-gray-600">Cocoa, Titusville, Melbourne, Rockledge, Merritt Island</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Navigation className="w-8 h-8 text-[var(--light-blue)] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Extended Areas</h3>
                <p className="text-gray-600">Palm Bay, Viera, Port St. John, Mims, Oak Hill</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-[var(--light-blue)] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Areas</h3>
                <p className="text-gray-600">Call us for service availability in your specific location</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
