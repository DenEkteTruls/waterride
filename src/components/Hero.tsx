
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("book");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950 dark:via-cyan-950 dark:to-blue-900" />
      
      {/* Animated water waves */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200 to-transparent animate-pulse" />
        <div className="absolute bottom-8 left-0 w-full h-24 bg-gradient-to-t from-cyan-200 to-transparent animate-pulse delay-75" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with Apple-like typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            <span className="font-extralight">Experience</span>
            <br />
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Waterride
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium boat taxi services connecting you to Bergen's most beautiful destinations. 
            From the historic Bryggen to anywhere you need to go.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Ride
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 px-8 py-6 text-lg font-medium rounded-2xl hover:bg-muted/50 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="text-2xl font-semibold mb-2">5min</div>
              <div className="text-sm text-muted-foreground">Average pickup time</div>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="text-2xl font-semibold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency service</div>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="text-2xl font-semibold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Eco-friendly fleet</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
