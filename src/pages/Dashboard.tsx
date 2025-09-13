import { StatsCard } from "@/components/StatsCard";
import { UserProfile } from "@/components/UserProfile";
import { ProgressRing } from "@/components/ProgressRing";
import { RecentWorkouts } from "@/components/RecentWorkouts";
import { WeeklyProgress } from "@/components/WeeklyProgress";
import { QuickActions } from "@/components/QuickActions";
import { MotivationCard } from "@/components/MotivationCard";
import { LiveStats } from "@/components/LiveStats";
import { Flame, Activity, Target, Trophy, TrendingUp, Zap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8 animate-slide-up">
        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-aurora-gradient p-2 rounded-xl animate-float">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-5xl font-bold font-display bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Fitness Dashboard
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">Welcome back, Alex! You're crushing your goals today 🔥</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* User Profile */}
        <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <UserProfile />
        </div>
        
        {/* Quick Actions */}
        <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <QuickActions />
        </div>
        
        {/* Live Stats */}
        <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <LiveStats />
        </div>
        
        {/* Motivation Card */}
        <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <MotivationCard />
        </div>

        {/* Daily Goals Progress */}
        <div className="lg:col-span-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <Card className="glass p-6 transition-glass hover:shadow-glow hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Today's Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
              <div className="text-center">
                <ProgressRing progress={75} size={100}>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">75%</p>
                    <p className="text-xs text-muted-foreground">Calories</p>
                  </div>
                </ProgressRing>
                <p className="mt-3 text-sm text-muted-foreground">1,875 / 2,500</p>
              </div>
              
              <div className="text-center">
                <ProgressRing progress={90} size={100}>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">90%</p>
                    <p className="text-xs text-muted-foreground">Steps</p>
                  </div>
                </ProgressRing>
                <p className="mt-3 text-sm text-muted-foreground">9,000 / 10,000</p>
              </div>
              
              <div className="text-center">
                <ProgressRing progress={60} size={100}>
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">60%</p>
                    <p className="text-xs text-muted-foreground">Active</p>
                  </div>
                </ProgressRing>
                <p className="mt-3 text-sm text-muted-foreground">36 / 60 min</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="lg:col-span-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Calories Burned"
              value="1,875"
              change="+12%"
              changeType="positive"
              icon={Flame}
              gradient="accent"
            />
            
            <StatsCard
              title="Active Minutes"
              value="247"
              change="+8%"
              changeType="positive"
              icon={Activity}
              gradient="primary"
            />
            
            <StatsCard
              title="Workouts"
              value="18"
              change="+3"
              changeType="positive"
              icon={Target}
              gradient="success"
            />
            
            <StatsCard
              title="Performance"
              value="95%"
              change="+5%"
              changeType="positive"
              icon={TrendingUp}
              gradient="primary"
            />
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="lg:col-span-7 animate-slide-up" style={{ animationDelay: "0.7s" }}>
          <WeeklyProgress />
        </div>

        {/* Recent Workouts */}
        <div className="lg:col-span-5 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <RecentWorkouts />
        </div>

        {/* Achievement Card */}
        <div className="lg:col-span-12 animate-slide-up" style={{ animationDelay: "0.9s" }}>
          <Card className="glass p-6 transition-glass hover:shadow-accent-glow hover-lift">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-accent-gradient p-4 rounded-xl shadow-luxury">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Congratulations! 🎉</h3>
                  <p className="text-muted-foreground">You've reached your weekly goal of 5 workouts!</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center text-accent-gradient">
                  <Zap className="h-5 w-5 mr-2" />
                  <span className="font-bold">+50 XP</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;