import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Foundry Operations?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Join over 500 companies worldwide who trust Makewell Technomac for their foundry equipment needs. Get expert consultation and customized solutions for your specific requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Phone className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-sm opacity-80">Expert technical advice tailored to your needs</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Mail className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <p className="text-sm opacity-80">Engineered specifically for your applications</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Download className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Complete Support</h3>
              <p className="text-sm opacity-80">From installation to maintenance and training</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8 py-4">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Download Catalog
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            ✓ ISO Certified Manufacturing  ✓ 25+ Years Experience  ✓ Global Shipping Available
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;