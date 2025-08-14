import { Car, Plane, Building, Truck, Wrench, Factory } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: "Engine blocks, transmission cases, brake components, and complex automotive castings."
    },
    {
      icon: Plane,
      title: "Aerospace",
      description: "Precision aircraft engine components, landing gear parts, and critical aerospace castings."
    },
    {
      icon: Building,
      title: "Construction",
      description: "Heavy machinery components, construction equipment parts, and structural castings."
    },
    {
      icon: Truck,
      title: "Heavy Engineering",
      description: "Mining equipment, heavy machinery, industrial pumps, and large-scale castings."
    },
    {
      icon: Wrench,
      title: "Machine Tools",
      description: "Precision tooling, machine beds, spindle housings, and high-accuracy components."
    },
    {
      icon: Factory,
      title: "General Engineering",
      description: "Custom castings, prototype development, and specialized engineering applications."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We <span className="text-gradient-secondary">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced core shooter machines and foundry equipment serve diverse industries worldwide, delivering precision and reliability for every application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group hover-lift"
            >
              <div className="flex items-start space-x-4">
                <div className="h-14 w-14 bg-gradient-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-medium">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
              <div className="text-sm text-muted-foreground">Across all industries served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">24/7</div>
              <div className="text-muted-foreground">Global Support</div>
              <div className="text-sm text-muted-foreground">Technical assistance worldwide</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">ISO</div>
              <div className="text-muted-foreground">Certified Quality</div>
              <div className="text-sm text-muted-foreground">International standards compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;