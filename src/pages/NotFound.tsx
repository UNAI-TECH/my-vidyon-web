import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="hero-orb hero-orb-primary w-[400px] h-[400px] top-[-10%] right-[-10%] animate-pulse-glow" />
      
      <div className="container-custom relative text-center">
        <div className="font-heading text-[150px] md:text-[200px] font-bold text-gradient leading-none mb-4">
          404
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5" />
            Go to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline">
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
