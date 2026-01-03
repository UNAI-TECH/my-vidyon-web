import { Link } from "react-router-dom";
import { ChevronRight, Target, Lightbulb, Users } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Committed to revolutionizing educational management through technology that works.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Constantly evolving our solutions to meet the changing needs of modern education.",
  },
  {
    icon: Users,
    title: "Student-Centric",
    description: "Every feature designed with student success and institutional growth in mind.",
  },
];

export const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollAnimation animation="fade-right">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                About My Vidyon
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-right" delay={100}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Empowering Institutions to{" "}
                <span className="text-gradient">Achieve Excellence</span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-right" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded with a vision to bridge the gap between traditional education management 
                and modern technology, My Vidyon delivers enterprise-grade ERP solutions 
                specifically designed for educational institutions.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-right" delay={300}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of education specialists and technology experts work hand-in-hand 
                to create solutions that address real-world challenges faced by schools, 
                colleges, and universities. From attendance tracking to comprehensive 
                administrative tools — we're your partner in educational transformation.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-right" delay={400}>
              <Link to="/about" className="btn-primary">
                Learn More About Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </ScrollAnimation>
          </div>

          {/* Values Grid */}
          <div className="grid gap-6">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="fade-left" delay={index * 100}>
                <div className="card-elevated p-6 flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
