import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import cardiologyImage from "@/assets/cardiology.jpg";
import orthopedicsImage from "@/assets/orthopedics.jpg";
import oncologyImage from "@/assets/oncology.jpg";

const services = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Advanced heart care including bypass surgery, valve replacement, and angioplasty with world-class cardiologists",
    image: cardiologyImage,
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Joint replacement, spine surgery, and sports medicine with minimally invasive techniques",
    image: orthopedicsImage,
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Comprehensive cancer care including chemotherapy, radiation, and immunotherapy",
    image: oncologyImage,
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Expert treatment for brain and nervous system disorders with advanced neuroimaging",
    image: cardiologyImage,
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "Complete eye care from LASIK to cataract surgery and retinal treatments",
    image: orthopedicsImage,
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Digestive system care including liver transplant and endoscopic procedures",
    image: oncologyImage,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Medical Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              World-class treatment across multiple specialties with internationally accredited hospitals and experienced medical professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
