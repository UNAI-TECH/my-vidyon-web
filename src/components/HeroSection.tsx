import { Link } from "react-router-dom";
import { ChevronRight, Play, Sparkles, Users, BarChart3, Shield } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const floatingElements = [
  { icon: Users, label: "10K+ Students", className: "top-[20%] left-[5%] lg:left-[10%]" },
  { icon: BarChart3, label: "99.9% Uptime", className: "top-[60%] right-[5%] lg:right-[8%]" },
  { icon: Shield, label: "Secure", className: "bottom-[15%] left-[10%] lg:left-[15%]" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated Orbs */}
      <div className="hero-orb hero-orb-primary w-[500px] h-[500px] top-[-10%] right-[-10%] animate-pulse-glow" />
      <div className="hero-orb hero-orb-secondary w-[400px] h-[400px] bottom-[-5%] left-[-5%] animate-pulse-glow" style={{ animationDelay: "-2s" }} />
      <div className="hero-orb hero-orb-primary w-[300px] h-[300px] top-[40%] left-[50%] animate-pulse-glow" style={{ animationDelay: "-4s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/80 backdrop-blur-sm shadow-card border border-border/50 ${element.className} ${
            index % 2 === 0 ? "animate-float" : "animate-float-reverse"
          }`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <element.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="font-heading font-semibold text-sm">{element.label}</span>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <ScrollAnimation animation="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Trusted by 500+ Educational Institutions
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 max-w-5xl mx-auto">
            Transforming Education with{" "}
            <span className="text-gradient">Intelligent ERP</span>{" "}
            Solutions
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Streamline your institution's operations with our comprehensive ERP platform. 
            From automated attendance tracking to seamless administration — 
            we've got your entire ecosystem covered.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-cta text-base">
              Request a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/attendance-system" className="btn-outline text-base group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Attendance System
            </Link>
          </div>
        </ScrollAnimation>

        {/* Stats */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Institutions" },
              { value: "50K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
