
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users, Star, Waves, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Harbor Transfers",
      description: "Quick and comfortable transfers between Bergen's harbors and key locations.",
      features: ["Direct routes", "Weather protected", "Luggage space"]
    },
    {
      icon: Clock,
      title: "Scheduled Services",
      description: "Regular scheduled departures throughout the day for popular destinations.",
      features: ["Reliable timing", "Multiple stops", "Real-time updates"]
    },
    {
      icon: Users,
      title: "Private Charters",
      description: "Exclusive boat charters for special occasions, business events, or sightseeing.",
      features: ["Custom routes", "Onboard catering", "Professional crew"]
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Luxury service with comfortable seating, weather protection, and scenic routes.",
      features: ["Heated cabins", "Panoramic views", "Refreshments"]
    },
    {
      icon: Waves,
      title: "Sightseeing Tours",
      description: "Discover Bergen's coastline and fjords with our guided sightseeing tours.",
      features: ["Expert guides", "Photo opportunities", "Local insights"]
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All our boats meet the highest safety standards with certified crew members.",
      features: ["Life jackets", "Emergency equipment", "Insurance covered"]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            From quick harbor transfers to luxury charters, we provide comprehensive 
            water transportation solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border-border/50 bg-background/60 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
