import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, MessageCircle, BarChart, Download } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Start Onboarding",
    description: "Select your preferred language and education level to personalize your experience",
    step: "01",
  },
  {
    icon: MessageCircle,
    title: "Guided Assistance",
    description: "Interact with our AI chatbot by typing queries or selecting from pre-defined options",
    step: "02",
  },
  {
    icon: BarChart,
    title: "Progress Tracking",
    description: "Monitor your application status, deadlines, and receive actionable updates",
    step: "03",
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Download content for offline use, ensuring learning never stops",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in four simple steps and unlock personalized educational guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-20" />
              )}
              
              <Card className="relative card-hover border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold mb-2">Conversational AI</h4>
              <p className="text-sm text-muted-foreground">
                "Explain Like I'm 5" option available in any language
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/5 border-secondary/20">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold mb-2">Real-time Translation</h4>
              <p className="text-sm text-muted-foreground">
                AI engine translates and simplifies information instantly
              </p>
            </CardContent>
          </Card>
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-6 text-center">
              <h4 className="font-semibold mb-2">Contextual Help</h4>
              <p className="text-sm text-muted-foreground">
                Sample essays, templates, and personalized support
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
