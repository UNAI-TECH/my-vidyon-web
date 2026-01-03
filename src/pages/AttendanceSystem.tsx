import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Camera,
  Fingerprint,
  Bell,
  Smartphone,
  Clock,
  BarChart3,
  Users,
  Shield,
  CheckCircle2,
  Play
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Facial Recognition",
    description: "Advanced machine learning algorithms identify students in milliseconds, even with masks or accessories.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Integration",
    description: "Support for fingerprint and RFID card readers for multi-factor attendance verification.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Parents receive real-time SMS and app notifications when their child enters or leaves campus.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Dedicated apps for teachers, students, and parents with attendance history and analytics.",
  },
  {
    icon: Clock,
    title: "Late Arrival Tracking",
    description: "Automatic flagging of late arrivals with configurable grace periods and escalation rules.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Reports",
    description: "Detailed analytics with trend analysis, absence patterns, and exportable reports.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Capture",
    description: "Cameras or biometric devices capture student identity as they enter the premises.",
  },
  {
    step: "02",
    title: "Verify",
    description: "AI algorithms verify identity against the database in under 500 milliseconds.",
  },
  {
    step: "03",
    title: "Record",
    description: "Attendance is automatically logged with timestamp, location, and verification method.",
  },
  {
    step: "04",
    title: "Notify",
    description: "Parents and administrators receive instant notifications based on configured rules.",
  },
];

const benefits = [
  "Eliminate proxy attendance completely",
  "Save 30+ hours per month on manual work",
  "Improve parent engagement by 85%",
  "Reduce late arrivals by 40%",
  "100% accurate attendance records",
  "Seamless integration with ERP",
];

const AttendanceSystem = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[50vh] pt-24 pb-12 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollAnimation animation="fade-right">
                <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full mb-4">
                  Flagship Product
                </span>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={100}>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
                  Smart Attendance{" "}
                  <span className="text-gradient">Monitoring System</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The most advanced AI-powered attendance solution for educational institutions.
                  Eliminate manual errors, reduce administrative burden, and keep parents
                  informed in real-time.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-cta">
                    Request Demo
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <button className="btn-outline group">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Video
                  </button>
                </div>
              </ScrollAnimation>
            </div>

            {/* Dashboard Preview */}
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-background transition-transform duration-500">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover scale-[1.35]"
                >
                  <source src="/videos/attendance.mp4" type="video/mp4" />
                </video>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-[rgb(221,3,3)] text-background">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              How It <span className="text-primary">Works</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-background/70 text-center max-w-2xl mx-auto mb-10">
              From capture to notification in under 2 seconds. Here's the seamless flow.
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="relative text-center">
                  <div className="text-5xl font-heading font-bold text-primary/20 mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-background mb-2">
                    {item.title}
                  </h3>
                  <p className="text-background/60 text-sm">
                    {item.description}
                  </p>

                  {/* Connector Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-3 w-6 h-px bg-background/20" />
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Powerful <span className="text-gradient">Features</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Everything you need for foolproof attendance management, all in one system.
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 80}>
                <div className="card-elevated p-5 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollAnimation animation="fade-right">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">
                  Why Schools <span className="text-gradient">Love It</span>
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={100}>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Join 500+ institutions that have transformed their attendance management.
                  See measurable results from day one.
                </p>
              </ScrollAnimation>

              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <ScrollAnimation key={index} animation="fade-right" delay={150 + index * 50}>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            <ScrollAnimation animation="fade-left">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4 mb-5">
                  <Shield className="w-10 h-10 text-primary" />
                  <div>
                    <div className="font-heading font-bold text-2xl">99.9%</div>
                    <div className="text-muted-foreground text-sm">Accuracy Rate</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm">
                  "The accuracy is remarkable. We've virtually eliminated proxy attendance
                  and parents appreciate the instant notifications. It's been a game-changer
                  for our school."
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-heading font-semibold text-sm">Mrs. Priya Patel</div>
                  <div className="text-xs text-muted-foreground">Vice Principal, St. Mary's School</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default AttendanceSystem;
