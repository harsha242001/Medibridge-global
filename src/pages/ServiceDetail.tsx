import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cardiologyImage from "@/assets/cardiology.jpg";
import orthopedicsImage from "@/assets/orthopedics.jpg";
import oncologyImage from "@/assets/oncology.jpg";

const serviceData: Record<string, any> = {
  cardiology: {
    title: "Cardiology",
    image: cardiologyImage,
    description: "Our cardiology department offers comprehensive heart care with the latest technology and experienced specialists.",
    treatments: [
      "Coronary Artery Bypass Grafting (CABG)",
      "Heart Valve Replacement",
      "Angioplasty and Stenting",
      "Pacemaker Implantation",
      "Cardiac Rehabilitation",
    ],
    whyChoose: [
      "JCI accredited cardiac centers",
      "Success rate of 98% for major procedures",
      "Latest minimally invasive techniques",
      "Experienced international cardiologists",
      "Comprehensive pre and post-operative care",
    ],
  },
  orthopedics: {
    title: "Orthopedics",
    image: orthopedicsImage,
    description: "Advanced orthopedic care including joint replacements and sports medicine with minimally invasive surgical techniques.",
    treatments: [
      "Total Hip Replacement",
      "Total Knee Replacement",
      "Spine Surgery",
      "Sports Injury Treatment",
      "Arthroscopic Surgery",
    ],
    whyChoose: [
      "Specialist orthopedic surgeons",
      "Advanced robotic-assisted surgery",
      "Comprehensive rehabilitation programs",
      "Fast recovery protocols",
      "International standard implants",
    ],
  },
  oncology: {
    title: "Oncology",
    image: oncologyImage,
    description: "World-class cancer treatment with cutting-edge technology and multidisciplinary care teams.",
    treatments: [
      "Chemotherapy",
      "Radiation Therapy",
      "Immunotherapy",
      "Targeted Therapy",
      "Surgical Oncology",
    ],
    whyChoose: [
      "Multidisciplinary tumor boards",
      "Latest cancer treatment protocols",
      "Advanced radiation therapy equipment",
      "Personalized treatment plans",
      "Psychosocial support services",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId || ""] || serviceData.cardiology;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/services">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request Quote for {service.title}
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Treatments Offered</h2>
              <ul className="space-y-3">
                {service.treatments.map((treatment: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us</h2>
              <ul className="space-y-3">
                {service.whyChoose.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-secondary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Submit your medical records and get a personalized treatment plan
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
