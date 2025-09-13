import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Crown, Trophy, Target } from "lucide-react";

export function UserProfile() {
  return (
    <Card className="glass p-6 transition-glass hover:shadow-glow hover-lift animate-scale-in">
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <Avatar className="h-16 w-16 ring-4 ring-primary/30">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
            <AvatarFallback className="bg-primary-gradient text-white text-lg font-bold">
              AJ
            </AvatarFallback>
          </Avatar>
          <div className="absolute -top-1 -right-1 bg-accent-gradient p-1.5 rounded-full shadow-accent-glow">
            <Crown className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-xl font-bold text-foreground font-display">Alex Johnson</h2>
          <p className="text-muted-foreground font-medium">Premium Member ⭐</p>
          
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary" className="bg-success-gradient text-white border-0">
              <Trophy className="h-3 w-3 mr-1" />
              Level 12
            </Badge>
            <Badge variant="outline" className="border-primary/50">
              <Target className="h-3 w-3 mr-1" />
              Goal Crusher
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-foreground">247</p>
          <p className="text-xs text-muted-foreground">Workouts</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">18</p>
          <p className="text-xs text-muted-foreground">Streak Days</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">85%</p>
          <p className="text-xs text-muted-foreground">Goals Met</p>
        </div>
      </div>
    </Card>
  );
}