import { ActivityChart } from "@/components/Charts/ActivityChart";
import { StatsCard } from "@/components/StatsCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Activity, 
  Target, 
  Flame, 
  Clock,
  Heart,
  Zap,
  Calendar
} from "lucide-react";

const Analytics = () => {
  const monthlyGoals = [
    { name: "Workouts Completed", current: 18, target: 20, percentage: 90 },
    { name: "Calories Burned", current: 15420, target: 18000, percentage: 85.7 },
    { name: "Active Minutes", current: 1240, target: 1500, percentage: 82.7 },
    { name: "Steps Taken", current: 287000, target: 300000, percentage: 95.7 }
  ];

  const bodyMetrics = [
    { metric: "Weight", value: "75.2 kg", change: "-1.2 kg", trend: "down" },
    { metric: "Body Fat", value: "12.5%", change: "-0.8%", trend: "down" },
    { metric: "Muscle Mass", value: "65.8 kg", change: "+0.5 kg", trend: "up" },
    { metric: "BMI", value: "22.1", change: "-0.3", trend: "down" }
  ];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Detailed insights into your fitness journey</p>
        </div>
        <Badge variant="outline" className="bg-success-gradient text-white border-0">
          <TrendingUp className="h-3 w-3 mr-1" />
          Performance Up 12%
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Weekly Average"
          value="2,247"
          change="+15%"
          changeType="positive"
          icon={Flame}
          gradient="accent"
        />
        
        <StatsCard
          title="Active Days"
          value="26/30"
          change="+4 days"
          changeType="positive"
          icon={Activity}
          gradient="success"
        />
        
        <StatsCard
          title="Avg Heart Rate"
          value="142 bpm"
          change="+3 bpm"
          changeType="positive"
          icon={Heart}
          gradient="primary"
        />
        
        <StatsCard
          title="Recovery Score"
          value="87%"
          change="+5%"
          changeType="positive"
          icon={Zap}
          gradient="accent"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart type="calories" title="Calories Burned" />
        <ActivityChart type="workouts" title="Workout Frequency" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Goals Progress */}
        <div className="lg:col-span-2">
          <Card className="glass p-6 transition-glass hover:shadow-glow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Monthly Goals</h3>
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            
            <div className="space-y-6">
              {monthlyGoals.map((goal) => (
                <div key={goal.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{goal.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="relative">
                    <Progress value={goal.percentage} className="h-3" />
                    <div className="absolute inset-0 bg-primary-gradient rounded-full opacity-30" 
                         style={{ width: `${goal.percentage}%` }} />
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{goal.percentage.toFixed(1)}% Complete</span>
                    <span>{goal.target - goal.current > 0 ? `${goal.target - goal.current} to go` : 'Goal Achieved! 🎉'}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Body Metrics */}
        <Card className="glass p-6 transition-glass hover:shadow-glow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-foreground">Body Metrics</h3>
            <Target className="h-5 w-5 text-primary" />
          </div>
          
          <div className="space-y-4">
            {bodyMetrics.map((metric) => (
              <div key={metric.metric} className="flex items-center justify-between p-3 bg-glass-gradient rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{metric.metric}</p>
                  <p className="text-sm text-muted-foreground">{metric.value}</p>
                </div>
                
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change}
                  </p>
                  <p className="text-xs text-muted-foreground">This month</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Performance Summary */}
      <Card className="glass p-6 transition-glass hover:shadow-accent-glow">
        <h3 className="text-xl font-bold text-foreground mb-4">Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-glass-gradient rounded-lg">
            <div className="bg-success-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Consistency</h4>
            <p className="text-2xl font-bold text-green-400">Excellent</p>
            <p className="text-sm text-muted-foreground">26/30 active days</p>
          </div>
          
          <div className="text-center p-4 bg-glass-gradient rounded-lg">
            <div className="bg-primary-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Intensity</h4>
            <p className="text-2xl font-bold text-primary">High</p>
            <p className="text-sm text-muted-foreground">142 avg BPM</p>
          </div>
          
          <div className="text-center p-4 bg-glass-gradient rounded-lg">
            <div className="bg-accent-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Duration</h4>
            <p className="text-2xl font-bold text-accent">41.3 min</p>
            <p className="text-sm text-muted-foreground">Average session</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;