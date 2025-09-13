import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Target, 
  Plus, 
  Edit3, 
  CheckCircle2, 
  Calendar,
  Flame,
  Activity,
  Clock,
  TrendingUp,
  Trophy
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const currentGoals = [
  {
    id: 1,
    title: "Weekly Workouts",
    description: "Complete 5 workouts this week",
    current: 3,
    target: 5,
    unit: "workouts",
    deadline: "This Week",
    status: "in-progress",
    icon: Activity,
    color: "primary"
  },
  {
    id: 2,
    title: "Monthly Calories",
    description: "Burn 18,000 calories this month",
    current: 15420,
    target: 18000,
    unit: "calories",
    deadline: "Dec 31",
    status: "in-progress", 
    icon: Flame,
    color: "accent"
  },
  {
    id: 3,
    title: "Daily Steps",
    description: "Walk 10,000 steps daily",
    current: 8500,
    target: 10000,
    unit: "steps",
    deadline: "Today",
    status: "in-progress",
    icon: Activity,
    color: "success"
  },
  {
    id: 4,
    title: "Workout Streak",
    description: "Maintain 30-day workout streak",
    current: 18,
    target: 30,
    unit: "days",
    deadline: "Dec 30",
    status: "in-progress",
    icon: Target,
    color: "primary"
  }
];

const completedGoals = [
  {
    id: 5,
    title: "First 5K Run",
    description: "Complete first 5K run under 30 minutes", 
    target: "29:45",
    achieved: "28:32",
    completedDate: "Nov 15",
    icon: Trophy,
    reward: "+100 XP"
  },
  {
    id: 6,
    title: "Weight Loss",
    description: "Lose 5kg in 3 months",
    target: "5kg",
    achieved: "5.2kg", 
    completedDate: "Oct 28",
    icon: TrendingUp,
    reward: "+150 XP"
  }
];

const Goals = () => {
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-400";
      case "in-progress": return "text-blue-400";
      case "overdue": return "text-red-400";
      default: return "text-muted-foreground";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary-gradient";
      case "accent": return "bg-accent-gradient";  
      case "success": return "bg-success-gradient";
      default: return "bg-primary-gradient";
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Goals & Targets</h1>
          <p className="text-muted-foreground">Track your progress and achieve your fitness milestones</p>
        </div>
        
        <Dialog open={isAddingGoal} onOpenChange={setIsAddingGoal}>
          <DialogTrigger asChild>
            <Button className="bg-primary-gradient hover:shadow-glow">
              <Plus className="h-4 w-4 mr-2" />
              Add Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="glass border-glass-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Create New Goal</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Set a new fitness goal to track your progress.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="goal-title">Goal Title</Label>
                <Input id="goal-title" placeholder="e.g., Weekly Workouts" className="glass border-glass-border" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goal-target">Target Value</Label>
                <Input id="goal-target" placeholder="e.g., 5" type="number" className="glass border-glass-border" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goal-deadline">Deadline</Label>
                <Input id="goal-deadline" type="date" className="glass border-glass-border" />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingGoal(false)} className="glass border-glass-border">
                Cancel
              </Button>
              <Button className="bg-primary-gradient" onClick={() => setIsAddingGoal(false)}>
                Create Goal
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass p-6 text-center transition-glass hover:shadow-glow">
          <div className="bg-primary-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Target className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">4</h3>
          <p className="text-muted-foreground">Active Goals</p>
        </Card>
        
        <Card className="glass p-6 text-center transition-glass hover:shadow-glow">
          <div className="bg-success-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">12</h3>
          <p className="text-muted-foreground">Completed</p>
        </Card>
        
        <Card className="glass p-6 text-center transition-glass hover:shadow-glow">
          <div className="bg-accent-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">85%</h3>
          <p className="text-muted-foreground">Success Rate</p>
        </Card>
        
        <Card className="glass p-6 text-center transition-glass hover:shadow-glow">
          <div className="bg-primary-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">3</h3>
          <p className="text-muted-foreground">Due This Week</p>
        </Card>
      </div>

      {/* Active Goals */}
      <Card className="glass p-6 transition-glass hover:shadow-glow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Active Goals</h3>
          <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            {currentGoals.length} In Progress
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentGoals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            const Icon = goal.icon;
            
            return (
              <Card key={goal.id} className="glass p-6 transition-glass hover:shadow-accent-glow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg shadow-luxury ${getIconColor(goal.color)}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{goal.title}</h4>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="hover:bg-glass-gradient">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">
                      {goal.current.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}
                    </span>
                  </div>
                  
                  <Progress value={progress} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {progress.toFixed(0)}% Complete
                    </span>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {goal.deadline}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>

      {/* Completed Goals */}
      <Card className="glass p-6 transition-glass hover:shadow-glow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">Recently Completed</h3>
          <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
            <Trophy className="h-3 w-3 mr-1" />
            {completedGoals.length} Achieved
          </Badge>
        </div>
        
        <div className="space-y-4">
          {completedGoals.map((goal) => {
            const Icon = goal.icon;
            
            return (
              <div key={goal.id} className="flex items-center justify-between p-4 bg-glass-gradient rounded-lg border border-glass-border">
                <div className="flex items-center space-x-4">
                  <div className="bg-success-gradient p-3 rounded-lg shadow-luxury">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">{goal.title}</h4>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                    <p className="text-xs text-green-400">
                      Completed on {goal.completedDate} • Target: {goal.target} • Achieved: {goal.achieved}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <Badge className="bg-accent-gradient text-white border-0 mb-2">
                    {goal.reward}
                  </Badge>
                  <p className="text-xs text-muted-foreground">Reward Earned</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Goals;