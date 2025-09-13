import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Timer, Flame, Activity } from "lucide-react";

const workouts = [
  {
    id: 1,
    name: "HIIT Cardio Blast",
    duration: "45 min",
    calories: 420,
    type: "Cardio",
    intensity: "High",
    date: "Today"
  },
  {
    id: 2,
    name: "Upper Body Strength",
    duration: "60 min", 
    calories: 380,
    type: "Strength",
    intensity: "Medium",
    date: "Yesterday"
  },
  {
    id: 3,
    name: "Yoga Flow",
    duration: "30 min",
    calories: 180,
    type: "Flexibility", 
    intensity: "Low",
    date: "2 days ago"
  }
];

const intensityColors = {
  High: "bg-red-500/20 text-red-400 border-red-500/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", 
  Low: "bg-green-500/20 text-green-400 border-green-500/30"
};

export function RecentWorkouts() {
  return (
    <Card className="glass p-6 transition-glass hover:shadow-glow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Recent Workouts</h3>
        <Activity className="h-5 w-5 text-primary" />
      </div>
      
      <div className="space-y-4">
        {workouts.map((workout) => (
          <div key={workout.id} className="flex items-center justify-between p-4 rounded-lg bg-glass-gradient hover:bg-primary/5 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="bg-primary-gradient p-2 rounded-lg shadow-luxury">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground">{workout.name}</h4>
                <p className="text-sm text-muted-foreground">{workout.date}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-right">
              <div className="flex items-center space-x-2">
                <Timer className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-foreground">{workout.duration}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Flame className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-foreground">{workout.calories}</span>
              </div>
              
              <Badge variant="outline" className={intensityColors[workout.intensity as keyof typeof intensityColors]}>
                {workout.intensity}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}