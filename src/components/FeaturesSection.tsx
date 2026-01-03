import { 
  Zap, 
  Lock, 
  Cloud, 
  Headphones, 
  RefreshCw, 
  Settings,
  ArrowRight
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensuring instant response times across all modules.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "End-to-end encryption and role-based access control for complete data protection.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native",
    description: "Access your data anywhere, anytime with our secure cloud infrastructure.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team available round the clock for immediate assistance.",
  },
  {
    icon: RefreshCw,
    title: "Auto Updates",
    description: "Continuous improvements and new features delivered seamlessly without downtime.",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Tailor every aspect of the system to match your institution's unique workflow.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Built for{" "}
              <span className="text-gradient">Modern Education</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Experience the difference with features designed by educators, 
              for educators. Every capability purposefully crafted to enhance 
              your institution's efficiency.
            </p>
          </ScrollAnimation>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
              <div className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
