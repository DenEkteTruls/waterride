
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Calendar, Clock, Users, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: number;
  notes?: string;
}

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<BookingFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pickup: "",
      destination: "",
      date: "",
      time: "",
      passengers: 1,
      notes: ""
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Booking submitted:", data);
    
    toast({
      title: "Bestilling sendt!",
      description: "Vi kontakter deg snart for å bekrefte båtturen.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const popularDestinations = [
    "Askøy",
    "Holsnøy", 
    "Radøy",
    "Osterøy",
    "Sotra",
    "Tysnesøy",
    "Stord",
    "Lindås"
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Bestill <span className="font-semibold">båttur</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Fyll ut skjemaet så kontakter vi deg med bekreftelse og pris.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 bg-background/60 backdrop-blur-sm border-border/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Navn er påkrevd" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Navn</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt navn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "Telefon er påkrevd" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="+47 123 45 678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "E-post er påkrevd",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Ugyldig e-postadresse"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-post</FormLabel>
                        <FormControl>
                          <Input placeholder="din@epost.no" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Journey Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pickup"
                    rules={{ required: "Hentested er påkrevd" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fra</FormLabel>
                        <FormControl>
                          <Input placeholder="Bryggen" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="destination"
                    rules={{ required: "Destinasjon er påkrevd" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Til</FormLabel>
                        <FormControl>
                          <Input placeholder="Velg destinasjon" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Popular Destinations */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Populære destinasjoner</label>
                  <div className="grid grid-cols-4 gap-2">
                    {popularDestinations.map((dest) => (
                      <Button
                        key={dest}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => form.setValue("destination", dest)}
                        className="text-xs h-8"
                      >
                        {dest}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Date, Time and Passengers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    rules={{ required: "Dato er påkrevd" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dato</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    rules={{ required: "Tid er påkrevd" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tid</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="passengers"
                    rules={{ 
                      required: "Antall passasjerer er påkrevd",
                      min: { value: 1, message: "Minst 1 passasjer" },
                      max: { value: 12, message: "Maks 12 passasjerer" }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Passasjerer</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="1" 
                            max="12" 
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Notes */}
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tilleggsnotater (valgfritt)</FormLabel>
                      <FormControl>
                        <textarea
                          className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Spesielle behov eller notater..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 text-lg font-medium rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sender..." : "Bestill båttur"}
                </Button>
              </form>
            </Form>

            {/* Contact Info */}
            <div className="mt-6 pt-4 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Trenger hjelp umiddelbart?
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <a href="tel:+4712345678" className="flex items-center hover:text-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  +47 123 45 678
                </a>
                <a href="mailto:hello@waterride.no" className="flex items-center hover:text-primary">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@waterride.no
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
