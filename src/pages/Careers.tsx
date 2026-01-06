import { Link } from "react-router-dom";
import {
    Search,
    Bookmark,
    FileText,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Briefcase,
    Users,
    TrendingUp,
    Heart,
    Award,
    Target,
    Zap,
    Globe,
    Clock,
    ArrowRight,
    GraduationCap,
    Rocket,
    Trophy,
    RefreshCw,
    Brain,
    Shield,
    Code,
    BarChart,
    Lightbulb
} from "lucide-react";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useState } from "react";

const careerAreas = [
    {
        icon: Code,
        title: "Engineering & Development",
        description: "Build scalable solutions for educational institutions using cutting-edge technologies like React, Node.js, and cloud platforms. Work on real-world problems that impact millions of students.",
        image: "/placeholder.svg"
    },
    {
        icon: Lightbulb,
        title: "Product & Design",
        description: "Create intuitive, beautiful interfaces that transform the education experience. Use design thinking and user research to build products that teachers and students love.",
        image: "/placeholder.svg"
    },
    {
        icon: Users,
        title: "Customer Success",
        description: "Help educational institutions succeed and grow with My Vidyon solutions. Build lasting relationships and ensure our clients achieve their goals.",
        image: "/placeholder.svg"
    },
    {
        icon: BarChart,
        title: "Sales & Marketing",
        description: "Drive growth and build relationships with schools and educational institutions. Tell our story and help more schools discover the power of My Vidyon.",
        image: "/placeholder.svg"
    },
    {
        icon: Brain,
        title: "AI & Analytics",
        description: "Use data and AI to create insights that help schools make better decisions. Work with cutting-edge machine learning and analytics technologies.",
        image: "/placeholder.svg"
    },
    {
        icon: Shield,
        title: "Security & Operations",
        description: "Ensure platform reliability, security, and seamless operations. Protect student data and maintain the trust schools place in us.",
        image: "/placeholder.svg"
    },
];

const careerStages = [
    {
        id: "students",
        icon: GraduationCap,
        title: "Students",
        description: "You'll join a great place to build your skills and launch your career. From summer internships to innovation-led opportunities, we welcome your curiosity and fresh perspectives.",
        details: [
            "Paid internship programs",
            "Mentorship from senior professionals",
            "Hands-on project experience",
            "Potential for full-time conversion"
        ],
        image: "/placeholder.svg"
    },
    {
        id: "early-career",
        icon: Rocket,
        title: "Early career professionals",
        description: "You're our future leaders. Bring your skills and passion to work with the latest technology to solve for some of education's biggest challenges.",
        details: [
            "Structured onboarding program",
            "Career development workshops",
            "Cross-functional collaboration",
            "Fast-track leadership opportunities"
        ],
        image: "/placeholder.svg"
    },
    {
        id: "experienced",
        icon: Trophy,
        title: "Experienced professionals",
        description: "You see around corners and create solutions. Join our global innovators to help transform education and change the world for the better.",
        details: [
            "Lead strategic initiatives",
            "Mentor junior team members",
            "Shape product direction",
            "Competitive compensation packages"
        ],
        image: "/placeholder.svg"
    },
    {
        id: "executive",
        icon: Target,
        title: "Executive leaders",
        description: "You see endless possibilities and embrace challenges—and change. See how to use your ingenuity and expertise to drive our mission forward.",
        details: [
            "C-suite and VP positions",
            "Strategic decision-making",
            "Company-wide impact",
            "Equity and performance bonuses"
        ],
        image: "/placeholder.svg"
    },
    {
        id: "returners",
        icon: RefreshCw,
        title: "Career Rebooters",
        description: "Discover how My Vidyon's Career Reboot Program is helping people on a career break restart their careers and thrive in the workforce.",
        details: [
            "Flexible return-to-work programs",
            "Skills refresher training",
            "Supportive team environment",
            "Part-time to full-time transition"
        ],
        image: "/placeholder.svg"
    },
];

const CareersPage = () => {
    const [currentCareerArea, setCurrentCareerArea] = useState(0);
    const [selectedCareerStage, setSelectedCareerStage] = useState(careerStages[0]);

    const nextCareerArea = () => {
        setCurrentCareerArea((prev) => (prev + 1) % careerAreas.length);
    };

    const prevCareerArea = () => {
        setCurrentCareerArea((prev) => (prev - 1 + careerAreas.length) % careerAreas.length);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Main Navigation Bar */}
            <nav className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="My Vidyon" className="h-10 w-auto" />
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
                                What We Think
                            </Link>
                        </div>

                        {/* Back to Main Site */}
                        <Link
                            to="/"
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="hidden sm:inline">Main Site</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Secondary Careers Navigation */}
            <div className="border-b border-background/10" style={{ backgroundColor: '#DD0303' }}>
                <div className="container-custom">
                    <div className="flex items-center justify-between h-14">
                        {/* Careers Text */}
                        <div className="font-heading font-bold text-lg text-background">
                            Careers
                        </div>

                        {/* Career Options */}
                        <div className="hidden md:flex items-center gap-6">
                            <a href="#jobs" className="text-background/90 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                                <Search className="w-4 h-4" />
                                Job Search
                            </a>
                            <a href="#saved" className="text-background/90 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                                <Bookmark className="w-4 h-4" />
                                Saved Jobs
                            </a>
                            <a href="#application" className="text-background/90 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Access Application
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-foreground">
                                Work at the heart of <span className="text-gradient">change</span>
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                This is a place to grow, learn and connect. Everything that makes you who you are is welcome here.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={200}>
                            <a
                                href="#jobs"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
                            >
                                Search open roles
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Career Areas Carousel - "Whatever you want to do" */}
            <section id="explore" className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                                Whatever You Want to <span className="text-gradient">Do</span>
                            </h2>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                From developers and designers to strategists and educators, there are endless opportunities for you to learn, grow and make a difference.
                            </p>
                        </ScrollAnimation>
                    </div>

                    {/* Carousel */}
                    <div className="max-w-5xl mx-auto">
                        <div className="card-elevated overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                                {/* Left Side - Description */}
                                <div className="flex flex-col justify-center">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                                        {(() => {
                                            const Icon = careerAreas[currentCareerArea].icon;
                                            return <Icon className="w-7 h-7 text-primary-foreground" />;
                                        })()}
                                    </div>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                                        {careerAreas[currentCareerArea].title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {careerAreas[currentCareerArea].description}
                                    </p>
                                    <a href="#jobs" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                        Explore opportunities
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>

                                {/* Right Side - Image */}
                                <div className="flex items-center justify-center">
                                    <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                        <div className="text-center p-6">
                                            {(() => {
                                                const Icon = careerAreas[currentCareerArea].icon;
                                                return <Icon className="w-20 h-20 text-primary mx-auto mb-3" />;
                                            })()}
                                            <p className="text-muted-foreground text-sm">Career Area Illustration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Carousel Controls */}
                            <div className="flex items-center justify-between p-4 border-t border-border">
                                <button
                                    onClick={prevCareerArea}
                                    className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                <div className="flex items-center gap-2">
                                    {careerAreas.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentCareerArea(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentCareerArea ? 'bg-primary w-8' : 'bg-border'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextCareerArea}
                                    className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Stages - "Wherever you are in your career" */}
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                                Wherever You Are in Your <span className="text-gradient">Career</span>
                            </h2>
                        </ScrollAnimation>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-6">
                            {/* Left Side - List */}
                            <div className="md:col-span-2 space-y-2">
                                {careerStages.map((stage) => (
                                    <button
                                        key={stage.id}
                                        onClick={() => setSelectedCareerStage(stage)}
                                        className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${selectedCareerStage.id === stage.id
                                            ? 'bg-primary text-primary-foreground shadow-lg'
                                            : 'bg-background hover:bg-muted border border-border'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <stage.icon className={`w-5 h-5 ${selectedCareerStage.id === stage.id ? 'text-primary-foreground' : 'text-primary'
                                                }`} />
                                            <span className="font-semibold">{stage.title}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Right Side - Image and Description */}
                            <div className="md:col-span-3">
                                <div className="card-elevated p-6 h-full">
                                    {/* Image */}
                                    <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                                        <div className="text-center p-6">
                                            {(() => {
                                                const Icon = selectedCareerStage.icon;
                                                return <Icon className="w-16 h-16 text-primary mx-auto mb-3" />;
                                            })()}
                                            <p className="text-muted-foreground text-sm">{selectedCareerStage.title} Illustration</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <h3 className="font-heading text-xl font-bold mb-3">{selectedCareerStage.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {selectedCareerStage.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-2">
                                        {selectedCareerStage.details.map((detail, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                                <span className="text-sm text-muted-foreground">{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4">
                                        <a href="#jobs" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                            View open positions
                                            <ArrowRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="jobs" className="py-16 md:py-24" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <ScrollAnimation animation="fade-up">
                            <div className="card-elevated p-8 text-center h-full flex flex-col justify-center">
                                <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                                    Join Us
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Explore open roles that match your interests and skills.
                                </p>
                                <Link to="/contact" className="btn-cta inline-flex items-center gap-2 mx-auto">
                                    Search Jobs
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <div className="card-elevated p-8 text-center h-full flex flex-col justify-center">
                                <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
                                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                                    Stay in Touch
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Get career tips and industry-leading insights from our team.
                                </p>
                                <Link to="/contact" className="btn-cta inline-flex items-center gap-2 mx-auto">
                                    Contact Us
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
