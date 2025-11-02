import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Globe, Users, Target, Eye } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1999", title: "Company Founded", description: "Started manufacturing foundry equipment in Rajkot, Gujarat" },
    { year: "2005", title: "ISO Certification", description: "Achieved ISO 9001:2008 certification for quality management" },
    { year: "2010", title: "Global Expansion", description: "Started exporting to international markets" },
    { year: "2015", title: "Technology Upgrade", description: "Introduced advanced CNC machining and automation" },
    { year: "2020", title: "500th Installation", description: "Milestone achievement of 500+ successful installations" },
    { year: "2024", title: "50+ Countries", description: "Expanded presence to over 50 countries worldwide" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every product is engineered with meticulous attention to detail and accuracy."
    },
    {
      icon: Award,
      title: "Quality",
      description: "ISO certified processes ensure consistent, world-class manufacturing standards."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated support and customized solutions for every client's unique needs."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Continuous R&D investment to stay ahead of industry technological advances."
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">CoreBuild Technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over 25 years, we have been at the forefront of foundry equipment manufacturing, delivering precision-engineered solutions that power industries worldwide.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 1999 in Rajkot, Gujarat, CoreBuild Technologies began with a vision to revolutionize foundry equipment manufacturing in India. What started as a small engineering workshop has grown into a globally recognized manufacturer serving over 50 countries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our journey has been driven by relentless innovation, unwavering commitment to quality, and a deep understanding of our customers' evolving needs. Today, we stand as a trusted partner for foundries worldwide, delivering cutting-edge core shooter machines and comprehensive foundry solutions.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-primary-light rounded-lg">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-light rounded-lg">
                    <div className="text-2xl font-bold text-secondary">500+</div>
                    <div className="text-sm text-muted-foreground">Installations</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-medium">
                  <div className="flex items-center space-x-4 mb-6">
                    <Target className="h-12 w-12 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Our Mission</h3>
                      <p className="text-muted-foreground">Empowering foundries worldwide</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To design and manufacture world-class foundry equipment that enables our customers to achieve superior productivity, quality, and profitability while maintaining the highest standards of safety and environmental responsibility.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-medium">
                  <div className="flex items-center space-x-4 mb-6">
                    <Eye className="h-12 w-12 text-secondary" />
                    <div>
                      <h3 className="text-xl font-bold">Our Vision</h3>
                      <p className="text-muted-foreground">Leading global innovation</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the global leader in foundry equipment technology, recognized for innovation, reliability, and exceptional customer service in every market we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">Key milestones in our growth and expansion</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-6 bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                        <span className="text-sm text-muted-foreground">({milestone.year})</span>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                  <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Industry Leaders</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies who trust CoreBuild Technologies for their foundry equipment needs.
            </p>
            <Button className="bg-white text-primary border-2 border-white text-lg px-8 py-4 hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300">
              Start Your Journey
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;