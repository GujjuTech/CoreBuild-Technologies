import { Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import coreBuildTechnologiesLogo from "@/assets/coreBuildTechnologies-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={coreBuildTechnologiesLogo}
                alt="CoreBuild Technologies"
                className="h-10 w-auto filter brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">COREBUILD</span>
                <span className="text-sm opacity-80">TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Leading manufacturer and exporter of precision-engineered core
              shooter machines and foundry equipment, trusted worldwide for
              quality and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products#cold-box-core-shooters"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Cold Box Core Shooters
                </Link>
              </li>
              <li>
                <Link
                  to="/products#hot-box-core-shooters"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Hot Box Core Shooters
                </Link>
              </li>
              <li>
                <Link
                  to="/products#shell-core-machines"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Shell Core Machines
                </Link>
              </li>
              <li>
                <Link
                  to="/products#automatic-systems"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Automatic Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/products#semi-automatic-systems"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Semi-Automatic Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 opacity-60" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rajkot,Gujarat,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:underline"
                >
                  Rajkot, Gujarat, India
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-60" />
                <a
                  href="tel:+919979645392"
                  className="opacity-80 hover:underline"
                >
                  +91 9979645392
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-60" />
                <a
                  href="mailto:mj986903@gmail.com"
                  className="opacity-80 hover:underline"
                >
                  mj986903@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © This is a concept website I designed and developed for a client project that was not launched. The design and code are original and showcase my front-end and back-end skills.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
