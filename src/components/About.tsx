
import { Card } from "@/components/ui/card";
import { Award, Shield, Leaf, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality water taxi services in Bergen."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Your safety is our top priority with certified crew and modern equipment."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "100% electric fleet contributing to a cleaner Bergen environment."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Proudly serving Bergen's residents and visitors with local expertise."
    }
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
              About <span className="font-semibold">Waterride</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Born from Bergen's rich maritime heritage, Waterride represents the future 
                of urban water transportation. Operating from the historic Bryggen harbor, 
                we connect Bergen's waterways with modern, sustainable boat taxi services.
              </p>
              
              <p>
                Our fleet of electric boats provides a silent, emission-free way to travel 
                across Bergen's beautiful fjords and harbors. Whether you're heading to 
                the airport, exploring the city, or need a quick transfer between locations, 
                Waterride offers a premium alternative to traditional transportation.
              </p>
              
              <p>
                With our experienced local crew and state-of-the-art vessels, we ensure 
                every journey is safe, comfortable, and memorable. Experience Bergen from 
                the water – the way it was meant to be seen.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 bg-background/60 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                5000+
              </div>
              <div className="text-sm text-muted-foreground">Trips Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Emergency Service</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Electric Fleet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
