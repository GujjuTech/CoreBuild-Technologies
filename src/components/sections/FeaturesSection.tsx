import { useState, useEffect, useRef } from "react";
import { Settings, Zap, Shield, Wrench, Globe2, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Precision Engineering",
      description:
        "Advanced CNC machining and quality control ensures consistent, high-precision components for optimal performance.",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description:
        "Optimized power consumption with smart controls and energy-saving technologies for sustainable operation.",
    },
    {
      icon: Shield,
      title: "ISO Certified Quality",
      description:
        "Comprehensive quality management system with ISO certification ensuring world-class manufacturing standards.",
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description:
        "User-friendly design with accessible components and comprehensive maintenance support for maximum uptime.",
    },
    {
      icon: Globe2,
      title: "Global Support",
      description:
        "Worldwide service network with local technicians and 24/7 remote support for uninterrupted operations.",
    },
    {
      icon: Award,
      title: "Proven Reliability",
      description:
        "Over 25 years of manufacturing excellence with thousands of successful installations across 50+ countries.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: 25 },
    { label: "Happy Clients", value: 500 },
    { label: "Countries Served", value: 50 },
    { label: "Machines Delivered", value: 1000 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasCounted]);

  useEffect(() => {
    if (!hasCounted) return;

    const intervals = stats.map((stat, index) => {
      let count = 0;
      const increment = Math.ceil(stat.value / 100);
      const interval = setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = count;
          return newCounts;
        });
      }, 20);
      return interval;
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, [hasCounted]);

  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Features Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="text-gradient-primary">Makewell Technomac</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering cutting-edge foundry solutions with unmatched quality,
            reliability, and performance that industry leaders trust worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="mt-20 bg-white rounded-2xl p-8 shadow-medium"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {counts[index] === stat.value
                    ? `${stat.value}+`
                    : counts[index]}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
