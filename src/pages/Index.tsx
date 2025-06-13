
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MapPin, Clock, Users, Star } from "lucide-react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Map from "@/components/Map";
import BookingForm from "@/components/BookingForm";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border/40 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Waterride</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("track")} className="text-sm font-medium hover:text-primary transition-colors">
                Track Boat
              </button>
              <button onClick={() => scrollToSection("book")} className="text-sm font-medium hover:text-primary transition-colors">
                Book Now
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Navigate through Waterride services
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <button onClick={() => scrollToSection("home")} className="text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                    Home
                  </button>
                  <button onClick={() => scrollToSection("services")} className="text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                    Services
                  </button>
                  <button onClick={() => scrollToSection("track")} className="text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                    Track Boat
                  </button>
                  <button onClick={() => scrollToSection("book")} className="text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                    Book Now
                  </button>
                  <button onClick={() => scrollToSection("about")} className="text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                    About
                  </button>
                  <button onClick={() => scrollToSection("contact")} className="text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                    Contact
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="track">
          <div className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Track Our Boat
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See the real-time location of our boat and plan your journey accordingly
                </p>
              </div>
              <Map />
            </div>
          </div>
        </section>
        
        <section id="book">
          <BookingForm />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-semibold">Waterride</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Premium boat taxi services in Bergen, operating from the historic Bryggen harbor.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Harbor Transfers</li>
                <li>City Tours</li>
                <li>Private Charters</li>
                <li>Airport Connections</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+47 123 45 678</li>
                <li>hello@waterride.no</li>
                <li>Bryggen, Bergen</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mon-Fri: 6:00 - 22:00</li>
                <li>Sat-Sun: 8:00 - 24:00</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Waterride. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
