import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Zap, Cog } from "lucide-react";
import coldBoxMachine from "@/assets/cold-box-machine.jpg";
import hotBoxMachine from "@/assets/hot-box-machine.jpg";
import shellCoreMachine from "@/assets/shell-core-machine.jpg";

const ProductsSection = () => {
  const products = [
    {
      title: "Cold Box Core Shooter",
      image: coldBoxMachine,
      icon: Settings,
      description: "High-precision cold box core shooter machines for complex sand cores with excellent dimensional accuracy and surface finish.",
      features: ["Automatic operation", "PLC control system", "Energy efficient", "Low maintenance"],
      specs: "Capacity: 50-500 tons"
    },
    {
      title: "Hot Box Core Shooter",
      image: hotBoxMachine,
      icon: Zap,
      description: "Advanced hot box core shooting technology for rapid core production with superior strength and dimensional stability.",
      features: ["Fast cycle times", "Uniform heating", "Digital controls", "Safety systems"],
      specs: "Temperature: 200-300°C"
    },
    {
      title: "Shell Core Machine",
      image: shellCoreMachine,
      icon: Cog,
      description: "Precision shell core machines for high-volume production with consistent quality and automated handling systems.",
      features: ["Fully automatic", "Quality monitoring", "Flexible tooling", "Remote diagnostics"],
      specs: "Production: 100-1000 cores/hr"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-primary">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive foundry equipment solutions designed for precision, efficiency, and reliability in demanding industrial environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="professional-card overflow-hidden group hover-lift"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specifications */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-sm font-medium text-primary mb-1">Key Specification</div>
                  <div className="text-sm text-muted-foreground">{product.specs}</div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Key Features:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="h-1.5 w-1.5 bg-secondary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button className="w-full btn-outline-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Button className="btn-hero text-lg px-8 py-4">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;