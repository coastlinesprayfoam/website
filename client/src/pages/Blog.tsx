import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SEOHead } from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/staticData";

// Extended blog posts for static site
const extendedBlogPosts = [
  ...blogPosts,
  {
    id: 4,
    category: "maintenance",
    title: "Annual Insulation Maintenance Checklist",
    excerpt: "Keep your spray foam insulation performing at its best with this comprehensive maintenance guide.",
    date: "November 20, 2023",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
  },
  {
    id: 5,
    category: "energy-saving",
    title: "ROI Calculator: When Insulation Pays for Itself",
    excerpt: "Calculate the return on investment for your spray foam insulation project and see how quickly it pays for itself.",
    date: "November 15, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
  },
  {
    id: 6,
    category: "benefits",
    title: "The Sound of Silence: Noise Reduction Benefits",
    excerpt: "Discover how spray foam insulation can significantly reduce noise pollution and create a more peaceful home environment.",
    date: "November 8, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
  },
];

const categories = [
  { id: "all", label: "All Articles" },
  { id: "energy-saving", label: "Energy Saving" },
  { id: "maintenance", label: "Maintenance" },
  { id: "benefits", label: "Benefits" },
  { id: "florida", label: "Florida Climate" },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const filteredPosts = extendedBlogPosts.filter(
    (post) => activeCategory === "all" || post.category === activeCategory
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Static form handling - could integrate with Netlify Forms, Formspree, etc.
      toast({
        title: "Thank you for subscribing!",
        description: "We'll send you the latest insulation tips and energy-saving advice.",
      });
      setEmail("");
    }
  };

  return (
    <>
      <SEOHead
        title="Insulation Blog | Energy Saving Tips | Coastline Spray Foam Solutions"
        description="Expert spray foam insulation tips, energy saving advice, and Florida climate insights from Coastline Spray Foam Solutions. Learn about insulation benefits and maintenance."
        keywords="insulation blog, energy saving tips, spray foam benefits, Florida insulation advice, home energy efficiency, insulation maintenance"
      />

      {/* Blog Hero */}
      <section className="gradient-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insulation Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert tips, industry insights, and energy-saving advice from your trusted spray foam professionals.
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Featured Article */}
          <Card className="mb-16 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-block bg-[var(--primary-blue)] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Article
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How Spray Foam Insulation Can Cut Your Energy Bills in Half
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover the science behind spray foam insulation and learn how it creates an airtight seal that dramatically reduces energy consumption in Florida homes.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>December 15, 2023</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5 min read</span>
                </div>
                <Button className="bg-[var(--dark-blue)] hover:bg-[var(--primary-blue)] font-semibold">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Energy efficient home showcasing insulation benefits" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Card>

          {/* Blog Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={
                    activeCategory === category.id
                      ? "bg-[var(--dark-blue)] hover:bg-[var(--primary-blue)] font-semibold"
                      : "hover:bg-gray-100"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-[var(--primary-blue)] text-sm font-semibold mb-2 capitalize">
                    {post.category.replace("-", " ")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <a href={`/blog/${post.id}`} className="hover:text-[var(--primary-blue)] transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-20 primary-blue text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Energy-Saving Tips</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insulation tips, energy-saving advice, and special offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-r-none text-gray-900"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-[var(--dark-blue)] hover:bg-blue-50 rounded-l-none font-semibold"
                >
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
