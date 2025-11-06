import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import cardiologyImage from "@/assets/cardiology.jpg";
import orthopedicsImage from "@/assets/orthopedics.jpg";
import oncologyImage from "@/assets/oncology.jpg";
import entImage from "@/assets/ent.jpg";
import neurologyImage from "@/assets/neurology.jpg";
import nephrologyImage from "@/assets/nephrology.jpg";
import dentistryImage from "@/assets/dentistry.jpg";
import vascularImage from "@/assets/vascular.jpg";
import plasticSurgeryImage from "@/assets/plastic-surgery.jpg";

const services = [
  {
    id: "cardiology",
    title: "Cardiology & CTVS",
    description: "Centre of excellence in cardiology and cardiothoracic vascular surgery with robotic-assisted procedures",
    image: cardiologyImage,
  },
  {
    id: "orthopedics",
    title: "Robotic Orthopedics",
    description: "Center of excellence in robotic-assisted orthopedic surgeries with advanced joint replacement",
    image: orthopedicsImage,
  },
  {
    id: "neurology",
    title: "Neurosciences",
    description: "Comprehensive neurology, interventional neurology, neurosurgery, brain & spine services",
    image: neurologyImage,
  },
  {
    id: "nephrology",
    title: "Nephrology & Urology",
    description: "Advanced kidney transplants, nephrology care, urology services with robotic-assisted surgeries",
    image: nephrologyImage,
  },
  {
    id: "oncology",
    title: "Oncology",
    description: "Comprehensive cancer care including chemotherapy, radiation therapy, and surgical oncology",
    image: oncologyImage,
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    description: "Advanced eye surgeries including LASIK, cataract surgery, retina services, and pediatric ophthalmology",
    image: orthopedicsImage,
  },
  {
    id: "ent",
    title: "ENT & Cochlear Implants",
    description: "World-class ENT care and cochlear implant services with advanced treatments",
    image: entImage,
  },
  {
    id: "dentistry",
    title: "Dentistry & Implantology",
    description: "Comprehensive dental care, implantology, and maxillofacial surgery",
    image: dentistryImage,
  },
  {
    id: "vascular",
    title: "Vascular Surgery",
    description: "Advanced care for arteries, veins & circulatory disorders with minimally invasive procedures",
    image: vascularImage,
  },
  {
    id: "plastic-surgery",
    title: "Plastic & Cosmetic Surgery",
    description: "World-class plastic and cosmetic surgery including reconstructive and aesthetic procedures",
    image: plasticSurgeryImage,
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Comprehensive internal medicine, endocrinology, infectious diseases & metabolic disorders",
    image: cardiologyImage,
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    description: "Digestive system care including liver transplant and advanced endoscopic procedures",
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
