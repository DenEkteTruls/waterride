
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+47 123 45 678",
      description: "Available 24/7 for bookings and emergencies",
      action: "tel:+4712345678"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@waterride.no",
      description: "We'll respond within 24 hours",
      action: "mailto:hello@waterride.no"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Bryggen Harbor, Bergen",
      description: "Our base station and ticket office",
      action: "https://maps.google.com/?q=Bryggen,Bergen,Norway"
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "06:00 - 22:00" },
    { day: "Saturday - Sunday", hours: "08:00 - 24:00" },
    { day: "Emergency Service", hours: "24/7" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Get in <span className="font-semibold">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Ready to experience Bergen from the water? Contact us for bookings, 
            information, or any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="p-6 text-center bg-background/60 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <div className="text-lg font-medium mb-2">{method.details}</div>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                
                <Button 
                  variant="outline" 
                  onClick={() => window.open(method.action, '_blank')}
                  className="w-full"
                >
                  Contact Now
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Operating Hours */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 bg-background/60 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">Operating Hours</h3>
            </div>
            
            <div className="space-y-4">
              {operatingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <p className="text-sm text-center text-blue-700 dark:text-blue-300">
                <strong>Note:</strong> Weather conditions may affect service availability. 
                We'll always notify customers of any changes in advance.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
