import { FileText, Calendar, Plane, Heart } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Records",
    description: "Share your medical reports and let us review your case",
  },
  {
    icon: Calendar,
    title: "Get Your Plan",
    description: "Receive a personalized treatment and travel plan",
  },
  {
    icon: Plane,
    title: "Travel & Stay",
    description: "We arrange everything from flights to accommodation",
  },
  {
    icon: Heart,
    title: "Treatment & Recovery",
    description: "Receive world-class care and comprehensive support",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your journey to better health in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10 hidden lg:block last:hidden" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
