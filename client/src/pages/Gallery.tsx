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

function getVectorIcon(iconType: string) {
  const iconProps = { className: "w-16 h-16 text-[var(--primary-blue)]" };
  
  switch (iconType) {
    case "home":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7-7-7 7v11a2 2 0 002 2h3v-7h4v7h3a2 2 0 002-2V9z" />
        </svg>
      );
    case "attic":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l8-11-8-11v22zM16 21v-11l8 11H16z" />
        </svg>
      );
    case "building":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "roof":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15l9-9 9 9M12 6v3m0 3v6" />
        </svg>
      );
    case "insulation":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "equipment":
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
  }
}

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

          {/* Gallery Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-50 h-64 flex items-center justify-center">
                  {getVectorIcon(item.vectorIcon)}
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
