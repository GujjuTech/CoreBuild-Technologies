import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import makewellLogo from "@/assets/makewell-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={makewellLogo} 
                alt="Makewell Technomac" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Makewell</span>
                <span className="text-sm opacity-80">Technomac</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Leading manufacturer and exporter of precision-engineered core shooter machines and foundry equipment, trusted worldwide for quality and innovation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/products" className="opacity-80 hover:opacity-100 transition-opacity">Products</Link></li>
              <li><Link to="/industries" className="opacity-80 hover:opacity-100 transition-opacity">Industries</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">Cold Box Core Shooters</li>
              <li className="opacity-80">Hot Box Core Shooters</li>
              <li className="opacity-80">Shell Core Machines</li>
              <li className="opacity-80">Automatic Systems</li>
              <li className="opacity-80">Semi-Automatic Systems</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 opacity-60" />
                <span className="opacity-80">
                  Rajkot, Gujarat, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-60" />
                <span className="opacity-80">+91 90548 19197</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-60" />
                <span className="opacity-80">makewelltechnomac@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © 2024 Makewell Technomac. All rights reserved. | ISO Certified Manufacturing Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;