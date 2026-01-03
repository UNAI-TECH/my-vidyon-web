import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Camera, 
  Bell, 
  Fingerprint, 
  Smartphone,
  CheckCircle2,
  Clock
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  { icon: Camera, text: "AI-powered facial recognition" },
  { icon: Fingerprint, text: "Biometric integration support" },
  { icon: Bell, text: "Instant parent notifications" },
  { icon: Smartphone, text: "Mobile app for real-time access" },
  { icon: Clock, text: "Automated late arrival tracking" },
  { icon: CheckCircle2, text: "Comprehensive attendance reports" },
];

export const AttendanceSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-r from-primary/5 to-transparent rounded-r-full" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Dashboard Preview */}
          <ScrollAnimation animation="fade-right" className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="card-elevated p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-heading font-semibold text-lg">Attendance Dashboard</h4>
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: "2,847", label: "Present", color: "text-green-600" },
                    { value: "53", label: "Absent", color: "text-accent" },
                    { value: "12", label: "Late", color: "text-primary" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-muted/50">
                      <div className={`font-heading font-bold text-2xl ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Simulated Chart */}
                <div className="h-32 flex items-end justify-between gap-2 mb-4">
                  {[85, 92, 88, 95, 91, 97, 94].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div 
                        className="w-full bg-gradient-to-t from-primary to-primary/40 rounded-t-lg transition-all duration-500"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-[10px] text-muted-foreground">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground text-center">
                  Weekly attendance rate: <span className="text-primary font-semibold">94.2%</span>
                </div>
              </div>

              {/* Floating Notification Card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 card-elevated p-4 max-w-[200px] animate-float shadow-elevated">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">John arrived</p>
                    <p className="text-[10px] text-muted-foreground">Just now • Class 10A</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <ScrollAnimation animation="fade-left">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Flagship Product
              </span>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={100}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Smart Attendance{" "}
                <span className="text-gradient">Monitoring System</span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={200}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Revolutionize how your institution tracks attendance. Our AI-powered system 
                eliminates manual errors, provides instant insights, and keeps parents 
                informed in real-time. No more paperwork, no more guesswork.
              </p>
            </ScrollAnimation>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-left" delay={250 + index * 50}>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <feature.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation animation="fade-left" delay={500}>
              <Link to="/attendance-system" className="btn-cta">
                Discover the System
                <ChevronRight className="w-5 h-5" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceSection;
