import { cn } from "@/lib/utils";
import ScrollAnimation from "./ScrollAnimation";

const companies = [
    "Delhi Public School",
    "Ryan International",
    "Kendriya Vidyalaya",
    "St. Xavier's High School",
    "Vibgyor High",
    "Orchids International",
    "Podar International",
    "Army Public School",
    "DAV Public School",
    "Don Bosco School",
];

const TrustedBy = () => {
    return (
        <section className="py-10 bg-background border-b border-border/50 overflow-hidden">
            <div className="container-custom mb-6 text-center">
                <ScrollAnimation animation="fade-up">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                        Trusted by leading institutions across the country
                    </p>
                </ScrollAnimation>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
                    {companies.map((company, index) => (
                        <span
                            key={index}
                            className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default"
                        >
                            {company}
                        </span>
                    ))}
                    {companies.map((company, index) => (
                        <span
                            key={`dup-${index}`}
                            className="text-xl md:text-2xl font-heading font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default"
                        >
                            {company}
                        </span>
                    ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default TrustedBy;
