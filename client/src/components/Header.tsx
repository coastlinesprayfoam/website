import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--dark-blue)] shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3 transition-transform group-hover:scale-105">
              <svg
                className="w-6 h-6 text-[var(--dark-blue)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7-7-7 7v11a2 2 0 002 2h3v-7h4v7h3a2 2 0 002-2V9z" />
                <path d="M9 22V12h6v10" />
              </svg>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">Coastline Spray Foam</h1>
              <p className="text-sm text-blue-200">Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white hover:text-blue-200 transition-colors duration-200 font-medium ${
                  isActive(item.href) ? "text-blue-200" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone Button - Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-white text-[var(--dark-blue)] hover:bg-blue-50 font-semibold"
            >
              <a href="tel:3216527465">
                <Phone className="w-4 h-4 mr-2" />
                (321) 652-7465
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-blue-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-600">
            <div className="space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-white hover:text-blue-200 py-2 font-medium ${
                    isActive(item.href) ? "text-blue-200" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-white text-[var(--dark-blue)] hover:bg-blue-50 mt-4"
              >
                <a href="tel:3216527465">
                  <Phone className="w-4 h-4 mr-2" />
                  (321) 652-7465
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
