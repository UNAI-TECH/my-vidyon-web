import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import FloatingShapes from "./FloatingShapes";

export const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Light Overlay to match theme */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />

      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <ScrollAnimation animation="fade-up">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="My Vidyon" className="h-20 md:h-24 w-auto drop-shadow-lg opacity-90" />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 max-w-4xl mx-auto text-foreground">
            Transforming Education Management Through{" "}
            <span className="text-primary">Intelligent Digital Solutions</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-cta text-base">
              Request a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/erp-solutions" className="btn-outline text-base">
              Explore Solutions
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
