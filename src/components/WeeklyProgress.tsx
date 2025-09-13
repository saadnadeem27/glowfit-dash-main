import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const weeklyData = [
  { day: 'Mon', calories: 420, workouts: 1 },
  { day: 'Tue', calories: 380, workouts: 1 },
  { day: 'Wed', calories: 500, workouts: 2 },
  { day: 'Thu', calories: 320, workouts: 1 },
  { day: 'Fri', calories: 450, workouts: 1 },
  { day: 'Sat', calories: 600, workouts: 2 },
  { day: 'Sun', calories: 280, workouts: 1 }
];

export function WeeklyProgress() {
  const maxCalories = Math.max(...weeklyData.map(d => d.calories));
  
  return (
    <Card className="glass p-6 transition-glass hover:shadow-glow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Weekly Progress</h3>
        <div className="flex items-center text-green-400">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">+12%</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {weeklyData.map((day, index) => {
          const heightPercentage = (day.calories / maxCalories) * 100;
          
          return (
            <div key={day.day} className="flex items-center space-x-4">
              <div className="w-8 text-sm text-muted-foreground font-medium">
                {day.day}
              </div>
              
              <div className="flex-1 bg-muted/30 rounded-full h-8 relative overflow-hidden">
                <div 
                  className="bg-primary-gradient h-full rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${heightPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <span className="text-xs font-medium text-white mix-blend-difference">
                    {day.calories} cal
                  </span>
                  <span className="text-xs font-medium text-white mix-blend-difference">
                    {day.workouts} workout{day.workouts !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}