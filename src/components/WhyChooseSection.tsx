import { Check } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const reasons = [
  "A truly comprehensive ERP solution tailored for schools and colleges",
  "Built using the latest and most reliable technologies",
  "Fully configurable to adapt to evolving institutional needs",
  "Transparent SaaS pricing with no hidden charges",
  "Cost-effective without compromising on quality",
  "Proven performance with leading educational institutions",
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>

      {/* Glowing top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up" delay={100}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-gradient">My Vidyon?</span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Experience the difference with our cutting-edge school ERP platform
              </p>
            </ScrollAnimation>
          </div>

          {/* Glassmorphism Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="group relative h-full">
                  {/* Glassmorphism Card */}
                  <div className="relative h-full p-6 rounded-2xl bg-background/60 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-[0_0_30px_rgba(250,177,47,0.3)] transition-all duration-500 overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Glowing orb effect */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

                    {/* Content */}
                    <div className="relative flex items-start gap-4">
                      {/* Icon with geometric animation */}
                      <div className="relative shrink-0">
                        <div className="absolute inset-0 bg-primary/10 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-primary/5 rounded-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Check className="w-6 h-6 text-primary relative z-10" />
                        </div>
                      </div>

                      {/* Text */}
                      <p className="text-foreground/90 leading-relaxed text-sm pt-1">
                        {reason}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Glowing bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm animate-pulse" />
    </section>
  );
};

export default WhyChooseSection;