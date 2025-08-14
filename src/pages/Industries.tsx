import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Car, Plane, Building, Truck, Wrench, Factory, Zap, Shield } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Car,
      title: "Automotive Industry",
      description: "Precision casting solutions for the automotive sector, delivering components that meet the highest safety and performance standards.",
      applications: [
        "Engine blocks and cylinder heads",
        "Transmission housings",
        "Brake components and calipers", 
        "Suspension system parts",
        "Exhaust manifolds",
        "Turbocharger housings"
      ],
      benefits: [
        "Lightweight yet durable components",
        "Superior surface finish quality",
        "Tight dimensional tolerances",
        "High-volume production capability"
      ],
      caseStudy: "Enabled a leading automotive manufacturer to reduce component weight by 25% while maintaining structural integrity, resulting in improved fuel efficiency across their vehicle lineup."
    },
    {
      icon: Plane,
      title: "Aerospace & Defense",
      description: "Critical components for aerospace applications requiring the highest levels of precision, reliability, and safety certification.",
      applications: [
        "Aircraft engine components",
        "Landing gear assemblies",
        "Structural airframe parts",
        "Turbine blade cores",
        "Fuel system components",
        "Defense equipment housings"
      ],
      benefits: [
        "Aerospace-grade quality standards",
        "Complex geometry capability",
        "Material traceability",
        "Zero-defect production"
      ],
      caseStudy: "Delivered specialized core shooter systems for aerospace engine manufacturer, achieving 99.8% first-pass quality rate for critical turbine components."
    },
    {
      icon: Building,
      title: "Construction Equipment",
      description: "Heavy-duty casting solutions for construction machinery that operates in the most demanding environments.",
      applications: [
        "Excavator hydraulic components",
        "Bulldozer track systems",
        "Crane counterweights",
        "Concrete mixer drums",
        "Road construction equipment",
        "Mining machinery parts"
      ],
      benefits: [
        "Extreme durability and wear resistance",
        "Large-scale casting capability",
        "Cost-effective production",
        "Rapid prototype development"
      ],
      caseStudy: "Partnered with construction equipment OEM to develop innovative hollow casting technique, reducing component weight by 30% while maintaining strength requirements."
    },
    {
      icon: Truck,
      title: "Heavy Engineering",
      description: "Robust foundry solutions for heavy industrial applications where reliability and performance are non-negotiable.",
      applications: [
        "Mining equipment components",
        "Industrial pump housings",
        "Compressor cylinder blocks",
        "Heavy machinery frames",
        "Power generation equipment",
        "Oil & gas industry parts"
      ],
      benefits: [
        "High-strength alloy compatibility",
        "Large component capability",
        "Corrosion resistance options",
        "Extended service life"
      ],
      caseStudy: "Implemented custom core shooting solution for mining equipment manufacturer, extending component service life by 40% in harsh underground conditions."
    },
    {
      icon: Wrench,
      title: "Machine Tools",
      description: "Precision tooling and machinery components that demand exceptional accuracy and surface finish quality.",
      applications: [
        "Machine tool beds and frames",
        "Spindle housings",
        "Precision tooling components",
        "CNC machine parts",
        "Measuring equipment",
        "Assembly fixtures"
      ],
      benefits: [
        "Micron-level precision",
        "Excellent surface finish",
        "Dimensional stability",
        "Vibration dampening properties"
      ],
      caseStudy: "Developed ultra-precision core shooting process for machine tool manufacturer, achieving ±0.05mm tolerance consistently across all production runs."
    },
    {
      icon: Factory,
      title: "General Engineering",
      description: "Versatile casting solutions for diverse engineering applications across multiple industrial sectors.",
      applications: [
        "Custom prototype development",
        "Specialized engineering components",
        "Research & development projects",
        "Small batch production",
        "Artistic and decorative castings",
        "Educational institution projects"
      ],
      benefits: [
        "Flexible production capability",
        "Rapid prototyping support",
        "Material experimentation",
        "Cost-effective small runs"
      ],
      caseStudy: "Supported university research project in developing new casting alloy, providing specialized equipment for experimental core production processes."
    }
  ];

  const globalPresence = [
    { region: "North America", countries: 8, installations: 120 },
    { region: "Europe", countries: 15, installations: 200 },
    { region: "Asia-Pacific", countries: 12, installations: 180 },
    { region: "Middle East & Africa", countries: 10, installations: 85 },
    { region: "South America", countries: 8, installations: 65 }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="text-secondary">Serve</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Powering diverse industries worldwide with precision-engineered foundry solutions that meet the unique demands of each sector.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {industries.map((industry, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Industry Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-gradient-secondary rounded-xl flex items-center justify-center">
                        <industry.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">{industry.title}</h2>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Applications */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Wrench className="mr-2 h-5 w-5 text-primary" />
                        Key Applications
                      </h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {industry.applications.map((app, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-secondary rounded-full"></div>
                            <span className="text-muted-foreground">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="btn-hero">
                      Get Industry-Specific Quote
                    </Button>
                  </div>

                  {/* Benefits & Case Study */}
                  <div className="space-y-6">
                    {/* Benefits Card */}
                    <div className="bg-white rounded-xl p-6 shadow-medium">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-success" />
                        Industry Benefits
                      </h3>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="h-1.5 w-1.5 bg-success rounded-full"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Case Study Card */}
                    <div className="bg-primary-light rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                        <Zap className="mr-2 h-5 w-5" />
                        Success Story
                      </h3>
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{industry.caseStudy}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Global Industrial Presence</h2>
              <p className="text-xl text-muted-foreground">Serving industries across all continents with localized support</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {globalPresence.map((region, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover-lift">
                  <h3 className="text-lg font-semibold mb-4">{region.region}</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-primary">{region.countries}</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">{region.installations}</div>
                      <div className="text-sm text-muted-foreground">Installations</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics Summary */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-medium">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">650+</div>
                  <div className="text-muted-foreground">Total Installations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-muted-foreground">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Industry Experts</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whatever your industry, we have the expertise and solutions to help you achieve manufacturing excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Discuss Your Requirements
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Download Industry Brochures
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Industries;