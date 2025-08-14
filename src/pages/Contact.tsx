import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 90548 19197", "+91 9033253576"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["makewelltechnomac@gmail.com", "info@makewelltechnomac.com"],
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Rajkot, Gujarat", "India - 360001"],
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      action: "Schedule Visit",
    },
  ];

  const offices = [
    {
      region: "Head Office",
      location: "Rajkot, Gujarat, India",
      phone: "+91 90548 19197",
      email: "makewelltechnomac@gmail.com",
      description: "Manufacturing facility and headquarters",
    },
    {
      region: "Export Division",
      location: "Rajkot, Gujarat, India",
      phone: "+91 9033253576",
      email: "export@makewelltechnomac.com",
      description: "International sales and support",
    },
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your foundry equipment needs? Our expert team is
              here to provide customized solutions and technical support.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="professional-card hover-lift cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="btn-outline-primary"
                    >
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div id="quote-form" className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                  <p className="text-muted-foreground text-lg">
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Equipment Inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements, including equipment type, capacity, and timeline..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button className="w-full btn-hero text-lg py-4">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>

                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    * Required fields. By submitting this form, you agree to our
                    privacy policy and terms of service.
                  </p>
                </div>
              </div>

              {/* Office Information & Map */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
                  <p className="text-muted-foreground text-lg">
                    Visit our facilities or contact our regional offices for
                    personalized support.
                  </p>
                </div>

                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="professional-card">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {office.region}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {office.description}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{office.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <span>{office.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Google Map Placeholder */}
                <Card className="professional-card">
                  <CardContent className="p-0">
                    <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                        <p className="text-muted-foreground">
                          Interactive map would be embedded here
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <div className="grid grid-cols-2 gap-4">
                  <Button className="btn-hero h-16 flex-col">
                    <Phone className="h-6 w-6 mb-1" />
                    <span className="text-sm">Call Now</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="btn-outline-primary h-16 flex-col"
                  >
                    <MessageSquare className="h-6 w-6 mb-1" />
                    <span className="text-sm">WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common inquiries
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What is your typical delivery time?",
                  answer:
                    "Standard equipment delivery is 8-12 weeks. Custom solutions may require 12-16 weeks depending on specifications.",
                },
                {
                  question: "Do you provide installation and training?",
                  answer:
                    "Yes, we provide complete installation services and comprehensive operator training at your facility.",
                },
                {
                  question: "What warranty do you offer?",
                  answer:
                    "We offer 12-month comprehensive warranty with optional extended warranty plans available.",
                },
                {
                  question: "Do you have international support?",
                  answer:
                    "Yes, we have service partners in 50+ countries and provide 24/7 remote technical support.",
                },
              ].map((faq, index) => (
                <Card key={index} className="professional-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;