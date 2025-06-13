
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
      title: "Booking Submitted!",
      description: "We'll contact you shortly to confirm your water taxi booking.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const popularDestinations = [
    "Bergen Airport (Flesland)",
    "Bergen Fish Market",
    "Troldhaugen",
    "Mount Fløyen",
    "Bergenhus Fortress",
    "Bergen University",
    "Custom Location"
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Book Your <span className="font-semibold">Waterride</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            Reserve your premium boat taxi experience. Fill out the form below and we'll 
            get back to you with confirmation and pricing details.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 sm:p-8 bg-background/60 backdrop-blur-sm border-border/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="+47 123 45 678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  rules={{ 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Journey Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pickup"
                    rules={{ required: "Pickup location is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Pickup Location
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Bryggen Harbor" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="destination"
                    rules={{ required: "Destination is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Destination
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Select destination" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Popular Destinations */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Popular Destinations</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {popularDestinations.map((dest) => (
                      <Button
                        key={dest}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => form.setValue("destination", dest)}
                        className="text-xs h-8 justify-start"
                      >
                        {dest}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    rules={{ required: "Date is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Date
                        </FormLabel>
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
                    rules={{ required: "Time is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Time
                        </FormLabel>
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
                      required: "Number of passengers is required",
                      min: { value: 1, message: "At least 1 passenger required" },
                      max: { value: 12, message: "Maximum 12 passengers" }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Passengers
                        </FormLabel>
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
                      <FormLabel>Additional Notes (Optional)</FormLabel>
                      <FormControl>
                        <textarea
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Any special requirements or notes..."
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
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg font-medium rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Your Waterride"}
                </Button>
              </form>
            </Form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Need immediate assistance?
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
