import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Award,
  Users,
  Download,
} from "lucide-react";
import heroMachine from "@/assets/hero-machine.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const highlights = [
    { icon: CheckCircle, text: "ISO Certified" },
    { icon: Globe, text: "Global Export" },
    { icon: Award, text: "25+ Years Experience" },
    { icon: Users, text: "500+ Satisfied Clients" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Precision Engineered
                <span className="block text-secondary">
                  Core Shooter Machines
                </span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                Trusted Worldwide for Manufacturing Excellence
              </p>
              <p className="text-lg opacity-80 max-w-2xl">
                Leading manufacturer and exporter of advanced foundry equipment
                including cold box, hot box, and shell core shooter machines.
                Built for precision, reliability, and global performance
                standards.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                >
                  <highlight.icon className="h-8 w-8 text-secondary" />
                  <span className="text-sm font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate("/products")}
                className="bg-white text-primary border-2 border-white text-lg px-8 py-4 hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="/brochure.pdf"
                download="Makewell-Technomac-Brochure.pdf"
              >
                <Button
                  variant="outline"
                  className="bg-white text-primary border-2 border-white text-lg px-8 py-4 hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300"
                >
                  Download Brochure
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-right">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroMachine}
                alt="Professional Core Shooter Machine"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-strong max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Countries Served
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;