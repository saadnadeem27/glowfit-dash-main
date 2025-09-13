import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-gradient text-white rounded-lg hover:shadow-glow transition-all duration-300 font-medium"
        >
          Return to Dashboard
        </a>
      </div>
    </div>
  );
};

export default NotFound;
