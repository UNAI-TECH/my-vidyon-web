import {
  Sparkles,
  BellRing,
  TabletSmartphone,
  CloudCog,
  ScanEye,
  ShieldCheck
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const technologies = [
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms for predictive analytics and intelligent automation.",
  },
  {
    icon: BellRing,
    title: "Real-Time Notifications",
    description: "Instant alerts and updates via SMS, email, and push notifications.",
  },
  {
    icon: TabletSmartphone,
    title: "Mobile-First Design",
    description: "Responsive interface optimized for smartphones, tablets, and desktops.",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud hosting with 99.99% uptime guarantee.",
  },
  {
    icon: ScanEye,
    title: "Biometric Integration",
    description: "Advanced facial recognition and fingerprint scanning capabilities.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with global data protection standards.",
  },
];

export const TechStackSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Advanced Technology Stack
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Built for the{" "}
              <span className="text-gradient">Future of Education</span>
            </h2>
          </ScrollAnimation>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((feature, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
              <div className="group p-6 rounded-2xl border border-border/50 hover:border-primary/30 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;