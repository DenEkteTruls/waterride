
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Ring oss",
      details: "+47 123 45 678",
      action: "tel:+4712345678"
    },
    {
      icon: Mail,
      title: "Send e-post",
      details: "hello@waterride.no",
      action: "mailto:hello@waterride.no"
    },
    {
      icon: MapPin,
      title: "Besøk oss",
      details: "Bryggen, Bergen",
      action: "https://maps.google.com/?q=Bryggen,Bergen,Norway"
    }
  ];

  const operatingHours = [
    { day: "Mandag - Fredag", hours: "06:00 - 22:00" },
    { day: "Lørdag - Søndag", hours: "08:00 - 24:00" },
    { day: "Nødtjeneste", hours: "24/7" }
  ];

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Ta <span className="font-semibold">kontakt</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Klar for en båttur? Kontakt oss for bestilling eller spørsmål.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="p-4 text-center bg-background/60 backdrop-blur-sm border-border/50">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{method.title}</h3>
                <div className="text-sm font-medium mb-3">{method.details}</div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(method.action, '_blank')}
                  className="w-full"
                >
                  Kontakt
                </Button>
              </Card>
            );
          })}

          {/* Operating Hours */}
          <Card className="p-4 bg-background/60 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-semibold">Åpningstider</h3>
            </div>
            <div className="space-y-2">
              {operatingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
