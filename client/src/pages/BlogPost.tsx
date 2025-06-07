
import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/staticData";
import { Link } from "wouter";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || ''));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | Coastline Spray Foam Solutions`}
        description={post.excerpt}
        keywords={`${post.category}, spray foam insulation, energy efficiency, Florida insulation`}
      />

      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Blog */}
          <Link href="/blog">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="inline-block bg-[var(--primary-blue)] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 capitalize">
              {post.category.replace("-", " ")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            
            {/* Featured Image */}
            <div className="w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content?.replace(/\n/g, '<br/>') || post.excerpt }} />
          </div>

          {/* Call to Action */}
          <Card className="mt-16 primary-blue text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Home's Insulation?</h3>
              <p className="text-blue-100 mb-6">
                Contact Coastline Spray Foam Solutions for a free consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-[var(--dark-blue)] hover:bg-blue-50 font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--dark-blue)]">
                  <a href="tel:3216527465">(321) 652-7465</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                      <div className="h-48 bg-gray-100">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
