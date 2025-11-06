import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import accommodationImage from "@/assets/accommodation.jpg";

const packages = [
  {
    title: "Essential Care",
    description: "Perfect for straightforward procedures",
    features: [
      "3-star hotel accommodation",
      "7 nights stay",
      "Airport pickup and drop-off",
      "Hospital transfers",
      "Basic meals included",
      "24/7 phone support",
    ],
  },
  {
    title: "Comfort Plus",
    description: "Enhanced comfort and support",
    features: [
      "4-star hotel accommodation",
      "14 nights stay",
      "Airport pickup and drop-off",
      "All hospital transfers",
      "All meals included",
      "Dedicated care coordinator",
      "Local SIM card",
      "24/7 emergency support",
    ],
    highlighted: true,
  },
  {
    title: "Premium Recovery",
    description: "Ultimate care and luxury",
    features: [
      "5-star hotel accommodation",
      "21 nights stay",
      "VIP airport services",
      "Private vehicle transfers",
      "Gourmet meals included",
      "Personal care attendant",
      "Medical translator",
      "Post-discharge home visits",
      "Travel companion support",
      "24/7 concierge service",
    ],
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Accommodation Packages
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comfortable, recovery-focused accommodation packages designed specifically for international medical patients
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <img
              src={accommodationImage}
              alt="Patient accommodation"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              All Packages Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Medical Support</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pre-treatment consultation</li>
                  <li>• Post-operative care coordination</li>
                  <li>• Medical records management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Travel Assistance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Visa documentation support</li>
                  <li>• Flight booking assistance</li>
                  <li>• Travel insurance guidance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Local Support</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• English-speaking staff</li>
                  <li>• Local currency exchange</li>
                  <li>• Tourist information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
