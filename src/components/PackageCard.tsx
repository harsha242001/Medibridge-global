import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PackageCardProps {
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PackageCard = ({ title, description, features, highlighted }: PackageCardProps) => {
  return (
    <Card className={`relative ${highlighted ? "border-primary shadow-lg scale-105" : "border-border"}`}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-accent/10 rounded-full p-1 mt-0.5">
              <Check className="h-4 w-4 text-accent" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="pt-6">
        <Link to="/contact" className="w-full">
          <Button className={`w-full ${highlighted ? "bg-primary hover:bg-primary/90" : ""}`}>
            Request Quote
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
