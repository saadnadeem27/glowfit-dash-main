import { Card } from "@/components/ui/card";
import { Activity, Droplets, Thermometer, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function LiveStats() {
  const [heartRate, setHeartRate] = useState(68);
  const [hydration, setHydration] = useState(85);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => prev + Math.floor(Math.random() * 6) - 3);
      setHydration(prev => Math.max(0, Math.min(100, prev + Math.floor(Math.random() * 4) - 2)));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="glass p-6 transition-glass hover:shadow-glow animate-scale-in">
      <h3 className="text-xl font-bold text-foreground mb-6 font-display">Live Stats</h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-red-500/20 p-2 rounded-lg">
              <Activity className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Heart Rate</p>
              <p className="text-lg font-bold text-foreground">{heartRate} BPM</p>
            </div>
          </div>
          <div className="w-12 h-12 relative">
            <div className="w-full h-full rounded-full bg-red-500/20 animate-ping absolute"></div>
            <div className="w-full h-full rounded-full bg-red-500/40 animate-pulse"></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Droplets className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Hydration</p>
              <p className="text-lg font-bold text-foreground">{hydration}%</p>
            </div>
          </div>
          <div className="w-16 bg-muted/30 rounded-full h-2">
            <div 
              className="bg-blue-gradient h-full rounded-full transition-all duration-500"
              style={{ width: `${hydration}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-500/20 p-2 rounded-lg">
              <Thermometer className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Body Temp</p>
              <p className="text-lg font-bold text-foreground">98.6°F</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Session Time</p>
              <p className="text-lg font-bold text-foreground">23:45</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}