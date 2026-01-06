import { Link } from "react-router-dom";
import { ChevronRight, ScanFace, LayoutGrid, Wallet, TrendingUp } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import FeatureSpotlight from "./FeatureSpotlight";

const features = [
  {
    icon: ScanFace,
    title: "Smart Attendance Monitoring",
    description: "AI-powered, camera-based attendance that captures accurate, real-time student presence and keeps parents informed instantly.",
  },
  {
    icon: LayoutGrid,
    title: "Comprehensive Dashboards",
    description: "Role-based school dashboards designed for administrators, teachers, parents, and students—clear data, zero confusion.",
  },
  {
    icon: Wallet,
    title: "Secure Fee Management",
    description: "End-to-end school fee management with safe online payments, automated tracking, and complete financial transparency.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Data-driven academic analytics that turn student performance into clear, actionable insights for better outcomes.",
  },
];

export const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About My Vidyon
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Smart ERP Software for <span className="text-gradient">Modern Schools</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              My Vidyon is a powerful, all in one school ERP platform built to simplify academic and
              administrative management. Designed for modern schools, it brings students, teachers, parents,
              and administrators onto one secure digital system.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="text-muted-foreground leading-relaxed">
              From AI powered attendance and online fee management to student performance analytics, My
              Vidyon helps schools operate efficiently, communicate better, and make data driven decisions with
              confidence.
            </p>
          </ScrollAnimation>
        </div>

        {/* Key Features Label */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="text-center mb-8">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
              Key Features
            </span>
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={450 + index * 100}>
              <FeatureSpotlight className="group p-6 text-center h-full border-2 border-primary/30 hover:border-primary/60 shadow-[0_0_15px_rgba(250,177,47,0.3)] hover:shadow-[0_0_25px_rgba(250,177,47,0.5)] transition-all duration-300">
                {/* Icon with animated background */}
                <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-12 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                  <feature.icon className="relative z-10 w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="font-heading font-bold text-lg mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </FeatureSpotlight>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimation animation="fade-up" delay={800}>
          <div className="text-center mt-10">
            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutSection;