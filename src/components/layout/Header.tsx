import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import coreBuildTechnologiesLogo from "@/assets/coreBuildTechnologies-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top contact bar */}
      <div className="border-b border-border bg-primary-light/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+919979645392" className="hover:underline">
                +91 9979645392
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:mj986903@gmail.com"
                className="hover:underline"
              >
                mj986903@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={coreBuildTechnologiesLogo}
              alt="CoreBuild Technologies"
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">COREBUILD</span>
              <span className="text-sm text-muted-foreground">TECHNOLOGIES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-medium transition-colors 
                    ${
                      isActive
                        ? "text-primary after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary after:rounded-full"
                        : "text-foreground hover:text-primary"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="btn-hero"
              onClick={() => {
                navigate("/contact#quote-form");
                setIsMenuOpen(false);
              }}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-2 text-sm font-medium transition-colors 
                      ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-foreground hover:text-primary"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button className="w-full btn-hero">Get Quote</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
