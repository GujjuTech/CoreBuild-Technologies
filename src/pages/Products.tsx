import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Settings, Zap, Cog, Wrench } from "lucide-react";
import coldBoxMachine from "@/assets/cold-box-machine.jpg";
import hotBoxMachine from "@/assets/hot-box-machine.jpg";
import shellCoreMachine from "@/assets/shell-core-machine.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Cold Box Core Shooters",
      image: coldBoxMachine,
      icon: Settings,
      description: "High-precision cold box core shooter machines designed for complex sand cores with exceptional dimensional accuracy and superior surface finish quality.",
      features: [
        "Automatic PLC-based operation",
        "Digital temperature control",
        "Energy-efficient design",
        "Low maintenance requirements",
        "Safety interlocking systems",
        "Remote monitoring capability"
      ],
      specifications: {
        "Capacity Range": "50-500 tons",
        "Core Box Size": "Up to 1000mm x 800mm",
        "Cycle Time": "30-120 seconds",
        "Power Rating": "5-25 kW",
        "Air Pressure": "6-8 bar",
        "Accuracy": "±0.1mm"
      },
      applications: ["Automotive engine blocks", "Transmission cases", "Complex geometries", "High-volume production"]
    },
    {
      title: "Hot Box Core Shooters",
      image: hotBoxMachine,
      icon: Zap,
      description: "Advanced hot box core shooting technology enabling rapid core production with superior strength characteristics and excellent dimensional stability.",
      features: [
        "Rapid heating technology",
        "Uniform temperature distribution",
        "Digital control systems",
        "Safety monitoring",
        "Automated handling",
        "Quality tracking systems"
      ],
      specifications: {
        "Temperature Range": "200-300°C",
        "Heating Time": "5-15 seconds",
        "Core Size": "Up to 800mm x 600mm",
        "Production Rate": "60-180 cores/hour",
        "Power Rating": "10-50 kW",
        "Control System": "PLC with HMI"
      },
      applications: ["High-strength cores", "Aerospace components", "Heavy machinery", "Precision castings"]
    },
    {
      title: "Shell Core Machines",
      image: shellCoreMachine,
      icon: Cog,
      description: "Precision shell core machines engineered for high-volume production environments with consistent quality output and automated handling systems.",
      features: [
        "Fully automated operation",
        "Real-time quality monitoring",
        "Flexible tooling systems",
        "Remote diagnostics",
        "Energy optimization",
        "Integrated handling systems"
      ],
      specifications: {
        "Production Rate": "100-1000 cores/hour",
        "Shell Thickness": "3-15mm",
        "Core Weight": "0.1-50 kg",
        "Temperature Range": "180-250°C",
        "Automation Level": "Fully automatic",
        "Quality Control": "Integrated inspection"
      },
      applications: ["Mass production", "Automotive industry", "Complex shapes", "Consistent quality requirements"]
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-secondary">Product Range</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive foundry equipment solutions engineered for precision, efficiency, and reliability in the most demanding industrial environments.
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {productCategories.map((category, index) => (
              <div key={index} className="mb-20 last:mb-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="h-16 w-16 bg-primary rounded-xl flex items-center justify-center">
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">{category.title}</h2>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-secondary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-secondary-light text-secondary">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="btn-hero">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="btn-outline-primary">
                        <Download className="mr-2 h-4 w-4" />
                        Download Specs
                      </Button>
                    </div>
                  </div>

                  {/* Image and Specifications */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-strong">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Specifications Table */}
                    <div className="bg-white rounded-xl p-6 shadow-medium">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Wrench className="mr-2 h-5 w-5 text-primary" />
                        Technical Specifications
                      </h3>
                      <div className="space-y-3">
                        {Object.entries(category.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                            <span className="font-medium text-muted-foreground">{key}</span>
                            <span className="font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Complete Solutions & Services</h2>
              <p className="text-xl text-muted-foreground">Beyond equipment, we provide comprehensive support for your success</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Custom Engineering",
                  description: "Tailored solutions designed specifically for your unique requirements"
                },
                {
                  title: "Installation & Training",
                  description: "Complete setup with comprehensive operator training programs"
                },
                {
                  title: "Maintenance Support",
                  description: "Preventive maintenance and 24/7 technical support worldwide"
                },
                {
                  title: "Spare Parts",
                  description: "Genuine parts inventory with fast global shipping"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Foundry?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get expert consultation and customized solutions for your specific foundry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Request Consultation
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Download Full Catalog
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;