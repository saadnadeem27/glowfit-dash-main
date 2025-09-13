import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Plus, Calendar, Camera, Timer, Heart } from "lucide-react";

export function QuickActions() {
  return (
    <Card className="glass p-6 transition-glass hover:shadow-glow animate-slide-up">
      <h3 className="text-xl font-bold text-foreground mb-6 font-display">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <Button className="bg-primary-gradient hover:opacity-90 text-white h-14 flex flex-col items-center justify-center space-y-1 hover-lift">
          <Play className="h-5 w-5" />
          <span className="text-xs font-medium">Start Workout</span>
        </Button>
        
        <Button variant="outline" className="border-accent/50 hover:bg-accent/10 h-14 flex flex-col items-center justify-center space-y-1 hover-lift">
          <Plus className="h-5 w-5" />
          <span className="text-xs font-medium">Add Exercise</span>
        </Button>
        
        <Button variant="outline" className="border-success/50 hover:bg-success/10 h-14 flex flex-col items-center justify-center space-y-1 hover-lift">
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-medium">Schedule</span>
        </Button>
        
        <Button variant="outline" className="border-primary/50 hover:bg-primary/10 h-14 flex flex-col items-center justify-center space-y-1 hover-lift">
          <Camera className="h-5 w-5" />
          <span className="text-xs font-medium">Progress Photo</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button variant="ghost" className="h-12 flex items-center justify-center space-x-2 hover:bg-glass-gradient">
          <Timer className="h-4 w-4" />
          <span className="text-sm">Quick Timer</span>
        </Button>
        
        <Button variant="ghost" className="h-12 flex items-center justify-center space-x-2 hover:bg-glass-gradient">
          <Heart className="h-4 w-4" />
          <span className="text-sm">Heart Rate</span>
        </Button>
      </div>
    </Card>
  );
}