import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import heroImage from "@/assets/hero-medical.jpg";
import cardiologyImage from "@/assets/cardiology.jpg";
import orthopedicsImage from "@/assets/orthopedics.jpg";
import oncologyImage from "@/assets/oncology.jpg";

const services = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Advanced heart care with state-of-the-art facilities and experienced cardiologists",
    image: cardiologyImage,
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Comprehensive joint replacement and orthopedic surgery solutions",
    image: orthopedicsImage,
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "World-class cancer treatment with cutting-edge technology",
    image: oncologyImage,
  },
];

const stats = [
  { icon: Users, value: "5000+", label: "Patients Served" },
  { icon: Award, value: "JCI", label: "Accredited Hospitals" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: CheckCircle2, value: "98%", label: "Success Rate" },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center mt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Medical facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl text-background">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              World-Class Medical Care in India
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-background/90">
              Your Bridge to Better Health - Comprehensive treatment and accommodation packages for patients from South Africa and Zimbabwe
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-background/10 hover:bg-background/20 text-background border-background/30">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Medical Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert care across multiple specialties with internationally accredited hospitals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a personalized treatment plan and quote today
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Request Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
