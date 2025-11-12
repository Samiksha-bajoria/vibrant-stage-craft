import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Languages } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Languages className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Multilingual AI Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Students Through{" "}
              <span className="gradient-text">AI-Driven Education</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Breaking language barriers and simplifying exam, scholarship, and admission processes 
              for students across India with intelligent multilingual support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg group"
                onClick={() => scrollToSection("features")}
              >
                Explore Features
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg"
                onClick={() => scrollToSection("how-it-works")}
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                How It Works
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Languages Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">7</div>
                <div className="text-sm text-muted-foreground">Key Features</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">AI Assistance</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Students using EDUC-A-THON platform for learning"
              className="relative rounded-3xl shadow-2xl w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
