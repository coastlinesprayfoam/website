import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";

const galleryItems = [
  {
    id: 1,
    category: "residential",
    title: "Residential Wall Insulation",
    description: "Complete wall cavity foam application in Cocoa home",
    vectorIcon: "home",
  },
  {
    id: 2,
    category: "attic",
    title: "Attic Spray Foam Installation",
    description: "Professional attic insulation upgrade in Titusville",
    vectorIcon: "attic",
  },
  {
    id: 3,
    category: "commercial",
    title: "Commercial Building Project",
    description: "Large-scale warehouse insulation installation",
    vectorIcon: "building",
  },
  {
    id: 4,
    category: "attic",
    title: "Attic Roof Deck Sealing",
    description: "Complete thermal envelope sealing in Melbourne",
    vectorIcon: "roof",
  },
  {
    id: 5,
    category: "attic",
    title: "Attic Floor Insulation",
    description: "Professional attic floor spray foam in Rockledge",
    vectorIcon: "insulation",
  },
  {
    id: 6,
    category: "commercial",
    title: "Professional Equipment",
    description: "State-of-the-art spray foam application systems",
    vectorIcon: "equipment",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "attic", label: "Attic" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <>
      <SEOHead
        title="Project Gallery | Coastline Spray Foam Solutions"
        description="View our completed spray foam insulation projects in Central Florida. High-quality installations for residential, commercial, and attic insulation applications."
        keywords="spray foam gallery, insulation projects, Central Florida, residential insulation photos, commercial insulation gallery, attic insulation before after"
      />

      {/* Gallery Hero */}
      <section className="gradient-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See the quality and precision of our spray foam insulation installations across Central Florida.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Project Categories */}
          <div className="text-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id
                      ? "bg-white text-[var(--primary-blue)] shadow-sm"
                      : "text-gray-600 hover:text-[var(--primary-blue)]"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Statistics */}
          <Card className="mt-20 bg-gray-50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Project Results</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[var(--primary-blue)] mb-2">500+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[var(--primary-blue)] mb-2">50%</div>
                  <p className="text-gray-600">Average Energy Savings</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[var(--primary-blue)] mb-2">15+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[var(--primary-blue)] mb-2">100%</div>
                  <p className="text-gray-600">Customer Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
