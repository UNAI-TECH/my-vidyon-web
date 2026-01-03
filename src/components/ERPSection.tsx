import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  GraduationCap, 
  ClipboardList, 
  Users2, 
  BarChart3, 
  CreditCard, 
  MessageSquare 
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const modules = [
  {
    icon: GraduationCap,
    title: "Academic Management",
    description: "Complete curriculum planning, scheduling, and grade management in one unified system.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ClipboardList,
    title: "Attendance Tracking",
    description: "Automated biometric and camera-based attendance with real-time parent notifications.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Users2,
    title: "Student Information",
    description: "Centralized student database with complete academic history and documentation.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Comprehensive dashboards with actionable insights for informed decision-making.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Streamlined billing, payment tracking, and automated receipt generation.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Seamless messaging between teachers, students, and parents with notifications.",
    color: "bg-accent/10 text-accent",
  },
];

export const ERPSection = () => {
  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              ERP Solutions
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Complete Educational{" "}
              <span className="text-primary">Ecosystem</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-background/70 text-lg leading-relaxed">
              Our modular ERP platform seamlessly integrates every aspect of educational 
              institution management into one powerful, intuitive system.
            </p>
          </ScrollAnimation>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module, index) => (
            <ScrollAnimation key={index} animation="scale" delay={index * 80}>
              <div className="group p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all duration-500 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl ${module.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <module.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-background mb-3">
                  {module.title}
                </h3>
                <p className="text-background/60 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center">
            <Link to="/erp-solutions" className="btn-primary">
              Explore All Solutions
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ERPSection;
