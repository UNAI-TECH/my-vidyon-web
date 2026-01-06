import {
  School,
  BookOpenText,
  Users,
  Building2
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const stakeholders = [
  {
    icon: School,
    title: "Students",
    description: "Easy access to academic information, coursework, and results.",
  },
  {
    icon: BookOpenText,
    title: "Teachers",
    description: "Complete teaching and classroom management tools in one platform.",
  },
  {
    icon: Users,
    title: "Parents",
    description: "Real-time visibility into attendance, academics, and institutional updates.",
  },
  {
    icon: Building2,
    title: "Administration",
    description: "Centralized system-wide control with complete operational oversight.",
  },
];

export const ERPSection = () => {
  return (
    <section className="section-padding bg-background text-foreground relative overflow-hidden">
      {/* Glowing Top Line with Enhanced Effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] z-20" />
      <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-1/2 h-[8px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-md z-10" />

      {/* Glowing Bottom Line with Pulse Animation */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent z-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] z-20" />
      <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1/2 h-[10px] bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-lg z-10 animate-pulse" />

      {/* Background Elements - Subtle */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              A Digital Transformation for Everyone
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              A Unified Educational <span className="text-gradient border-b-4 border-primary/10">Ecosystem</span>
            </h2>
          </ScrollAnimation>
        </div>

        {/* Stakeholders Flow - Containerless Design */}
        <div className="relative">


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stakeholders.map((stakeholder, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 150}>
                <div className="group relative flex flex-col items-center text-center">
                  {/* Floating Icon Bubble with Geometric Animation */}
                  <div className="relative mb-6 w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-out shadow-sm" />
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-12 group-hover:rotate-0 transition-transform duration-500 ease-out shadow-sm" />
                    <stakeholder.icon className="relative z-10 w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="font-heading font-bold text-2xl mb-3 tracking-wide">
                    {stakeholder.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm max-w-[200px] mx-auto">
                    {stakeholder.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSection;