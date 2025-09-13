import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Bell, 
  Settings, 
  User, 
  LogOut, 
  Dumbbell,
  BarChart3,
  Target,
  Trophy,
  Calendar,
  Menu
} from "lucide-react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Workouts', href: '/workouts', icon: Dumbbell },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Goals', href: '/goals', icon: Target },
    { name: 'Achievements', href: '/achievements', icon: Trophy },
  ];

  return (
    <header className="glass border-b border-glass-border sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary-gradient p-2 rounded-xl shadow-luxury group-hover:scale-110 transition-transform duration-300">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-violet-400 hover:to-cyan-300 transition-all duration-500 cursor-pointer">
              FitDash
            </h1>
              <p className="text-xs text-muted-foreground">Premium Fitness</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-gradient text-white shadow-glow'
                      : 'text-muted-foreground hover:text-foreground hover:bg-glass-gradient'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent-gradient text-white border-0 text-xs">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-card/95 backdrop-blur-xl border-glass-border">
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">Notifications</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-success-gradient/10 rounded-lg border border-green-500/20">
                      <p className="text-sm font-medium text-foreground">Workout Complete! 🎉</p>
                      <p className="text-xs text-muted-foreground">Great job on your HIIT session</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm font-medium text-foreground">New Achievement Unlocked</p>
                      <p className="text-xs text-muted-foreground">7-day workout streak</p>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                      <p className="text-sm font-medium text-foreground">Weekly Goal Update</p>
                      <p className="text-xs text-muted-foreground">You're 80% to your weekly target</p>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 p-2">
                  <Avatar className="h-8 w-8 ring-2 ring-primary/30">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
                    <AvatarFallback className="bg-primary-gradient text-white text-sm font-bold">
                      AJ
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-foreground">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">Premium Member</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card/95 backdrop-blur-xl border-glass-border">
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-glass-gradient">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-glass-gradient">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-glass-gradient">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-glass-border" />
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-destructive/10 text-destructive">
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 p-4 bg-glass-gradient rounded-lg border border-glass-border">
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-gradient text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-glass-gradient'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}