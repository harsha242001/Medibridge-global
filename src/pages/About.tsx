import { Award, Users, Globe, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Your health and comfort are our top priorities throughout your medical journey",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We partner only with JCI-accredited hospitals and experienced medical professionals",
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "World-class medical care meeting and exceeding international healthcare standards",
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    description: "From initial consultation to post-treatment follow-up, we're with you every step",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About MediBridge Global
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Your trusted partner for medical tourism from South Africa and Zimbabwe to India
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                MediBridge Global connects patients from South Africa and Zimbabwe to world-class medical care in India. 
                We believe that everyone deserves access to high-quality, affordable healthcare, and we're committed to 
                making that a reality.
              </p>
              <p className="text-lg text-muted-foreground">
                With our comprehensive packages that include both medical treatment and accommodation, we handle every 
                aspect of your medical journey so you can focus on what matters most - your recovery.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose India for Medical Treatment?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">60-80%</div>
                <div className="text-primary-foreground/90">Cost Savings Compared to Western Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">45+</div>
                <div className="text-primary-foreground/90">JCI Accredited Hospitals</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">#1</div>
                <div className="text-primary-foreground/90">Medical Tourism Destination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
