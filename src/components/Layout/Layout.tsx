import { Header } from "./Header";
import dashboardBg from "@/assets/dashboard-bg.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src={dashboardBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}