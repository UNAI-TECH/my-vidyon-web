import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart, Award, Users, Building2, GraduationCap, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower educational institutions with cutting-edge technology that simplifies administration, enhances learning outcomes, and connects communities.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the global standard for educational ERP solutions, driving digital transformation across institutions of all sizes.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, innovation, and impact guide everything we do. We believe technology should serve people, not the other way around.",
  },
];

const stats = [
  { icon: Building2, value: "500+", label: "Institutions Served" },
  { icon: Users, value: "50,000+", label: "Active Daily Users" },
  { icon: GraduationCap, value: "1M+", label: "Students Managed" },
  { icon: Globe, value: "15+", label: "Countries" },
];

const milestones = [
  { year: "2018", title: "Founded", description: "My Vidyon was born from a vision to transform educational management." },
  { year: "2019", title: "First Product", description: "Launched our flagship Attendance Monitoring System." },
  { year: "2020", title: "Rapid Growth", description: "Expanded to 100+ institutions across 5 countries." },
  { year: "2022", title: "Full ERP Suite", description: "Released comprehensive ERP platform with 12 integrated modules." },
  { year: "2024", title: "AI Integration", description: "Introduced AI-powered analytics and facial recognition features." },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden py-12 mt-16 md:mt-0">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <ScrollAnimation animation="fade-right">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  About Us
                </span>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={100}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                  Transforming Education Through{" "}
                  <span className="text-gradient">Intelligent Technology</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={200}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  We're not just building software — we're shaping the future of educational
                  management. Our solutions connect administrators, teachers, students, and
                  parents in one seamless ecosystem.
                </p>
              </ScrollAnimation>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <ScrollAnimation animation="fade-left" delay={300}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-50 animate-pulse-subtle" />
                  <img
                    src="/about-hero.png"
                    alt="Transforming Education"
                    className="relative w-full max-w-md lg:max-w-lg h-auto object-contain z-10 drop-shadow-2xl"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="card-elevated p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>



      {/* Timeline */}


      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollAnimation animation="fade-right">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">
                  Why Institutions <span className="text-gradient">Choose Us</span>
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={100}>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  We understand that every institution is unique. That's why our solutions
                  are built to be flexible, scalable, and intuitive. Our team consists of
                  education specialists who have walked in your shoes.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={200}>
                <ul className="space-y-3">
                  {[
                    "Deep understanding of educational workflows",
                    "Dedicated implementation and training support",
                    "Continuous innovation based on user feedback",
                    "Transparent pricing with no hidden costs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fade-left">
              <div className="card-elevated p-6">
                <blockquote className="text-base italic text-muted-foreground leading-relaxed mb-5">
                  "My Vidyon transformed how we manage our school. What used to take hours
                  now takes minutes. The attendance system alone has saved us countless
                  headaches and improved parent communication significantly."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-primary text-sm">RS</span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm">Dr. Rajesh Sharma</div>
                    <div className="text-xs text-muted-foreground">Principal, Delhi Public School</div>
                  </div>
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

export default About;
