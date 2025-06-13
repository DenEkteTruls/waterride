
import { Card } from "@/components/ui/card";
import { MapPin, Box, House } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Båt-taxi",
      description: "Transport fra ett sted til et annet med båt.",
      features: ["Direkte ruter", "Pålitelig transport", "Lokalkunnskap"]
    },
    {
      icon: Box,
      title: "Transport av varer",
      description: "Frakt av varer og utstyr til øyer og utilgjengelige steder.",
      features: ["Sikker transport", "Ulike størrelser", "Fleksible løsninger"]
    },
    {
      icon: House,
      title: "Hytteservice",
      description: "Tilsyn av eiendom og vedlikehold av hytter og anlegg.",
      features: ["Regelmessig tilsyn", "Vedlikehold", "Rapportering"]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Våre <span className="font-semibold">Tjenester</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Vi tilbyr praktiske transportløsninger på vannet i Bergen-området.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
