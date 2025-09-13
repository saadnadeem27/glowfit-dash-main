import { Card } from "@/components/ui/card";
import { Sparkles, Star, Zap } from "lucide-react";

export function MotivationCard() {
  return (
    <Card className="bg-aurora-gradient p-6 text-white relative overflow-hidden animate-pulse-glow">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-300 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 font-display">Daily Motivation</h3>
        <p className="text-white/90 text-sm mb-4">
          "Success isn't given. It's earned. On the track, on the field, in every choice you make."
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-medium">Keep pushing!</span>
          </div>
          <div className="text-sm font-medium">Day 18 💪</div>
        </div>
      </div>
    </Card>
  );
}