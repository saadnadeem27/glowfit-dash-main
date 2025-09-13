import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Medal, 
  Star, 
  Crown, 
  Flame, 
  Activity,
  Target,
  Clock,
  Zap,
  Heart,
  TrendingUp,
  Calendar
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first workout",
    icon: Trophy,
    rarity: "Common",
    xp: 50,
    unlocked: true,
    unlockedDate: "Nov 1, 2024"
  },
  {
    id: 2,
    title: "Week Warrior", 
    description: "Complete 5 workouts in one week",
    icon: Medal,
    rarity: "Uncommon", 
    xp: 100,
    unlocked: true,
    unlockedDate: "Nov 8, 2024"
  },
  {
    id: 3,
    title: "Calorie Crusher",
    description: "Burn 1000 calories in a single day",
    icon: Flame,
    rarity: "Rare",
    xp: 150,
    unlocked: true,
    unlockedDate: "Nov 15, 2024"
  },
  {
    id: 4,
    title: "Consistency King",
    description: "Maintain a 30-day workout streak",
    icon: Crown,
    rarity: "Epic",
    xp: 300,
    unlocked: false,
    progress: 18,
    target: 30
  },
  {
    id: 5,
    title: "Speed Demon",
    description: "Complete a workout in under 20 minutes",
    icon: Zap,
    rarity: "Uncommon",
    xp: 100,
    unlocked: true,
    unlockedDate: "Nov 12, 2024"
  },
  {
    id: 6,
    title: "Heart Champion",
    description: "Reach target heart rate in 50 workouts",
    icon: Heart,
    rarity: "Rare",
    xp: 200,
    unlocked: false,
    progress: 32,
    target: 50
  },
  {
    id: 7,
    title: "Month Milestone", 
    description: "Complete 20 workouts in one month",
    icon: Star,
    rarity: "Rare",
    xp: 200,
    unlocked: false,
    progress: 18,
    target: 20
  },
  {
    id: 8,
    title: "Perfect Week",
    description: "Hit all daily goals for 7 consecutive days", 
    icon: Target,
    rarity: "Epic",
    xp: 250,
    unlocked: false,
    progress: 4,
    target: 7
  }
];

const rarityColors = {
  Common: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  Uncommon: "bg-green-500/20 text-green-400 border-green-500/30", 
  Rare: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Epic: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Legendary: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
};

const Achievements = () => {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalXP = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.xp, 0);

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Achievements</h1>
        <p className="text-muted-foreground">Your fitness milestones and accomplishments</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass p-6 text-center transition-glass hover:shadow-glow">
          <div className="bg-primary-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{unlockedCount}</h3>
          <p className="text-muted-foreground">Achievements</p>
          <p className="text-xs text-primary mt-1">of {achievements.length} total</p>
        </Card>
        
        <Card className="glass p-6 text-center transition-glass hover:shadow-glow">
          <div className="bg-accent-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Star className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{totalXP}</h3>
          <p className="text-muted-foreground">Total XP</p>
        </Card>
        
        <Card className="glass p-6 text-center transition-glass hover:shadow-glow">
          <div className="bg-success-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <Crown className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">12</h3>
          <p className="text-muted-foreground">Current Level</p>
        </Card>
        
        <Card className="glass p-6 text-center transition-glass hover:shadow-glow">
          <div className="bg-primary-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">85%</h3>
          <p className="text-muted-foreground">Completion</p>
        </Card>
      </div>

      {/* Level Progress */}
      <Card className="glass p-6 transition-glass hover:shadow-glow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground">Level Progress</h3>
          <Badge className="bg-primary-gradient text-white border-0">Level 12</Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">XP Progress</span>
            <span className="font-medium text-foreground">2,840 / 3,200 XP</span>
          </div>
          
          <Progress value={88.75} className="h-3" />
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-primary">88.75% to Level 13</span>
            <span className="text-muted-foreground">360 XP to go</span>
          </div>
        </div>
      </Card>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          const progress = achievement.progress && achievement.target 
            ? (achievement.progress / achievement.target) * 100 
            : 0;
          
          return (
            <Card 
              key={achievement.id} 
              className={`glass p-6 transition-glass ${
                achievement.unlocked 
                  ? 'hover:shadow-glow border-primary/30' 
                  : 'hover:shadow-accent-glow opacity-75'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg shadow-luxury ${
                  achievement.unlocked 
                    ? 'bg-primary-gradient' 
                    : 'bg-muted/30'
                }`}>
                  <Icon className={`h-6 w-6 ${
                    achievement.unlocked ? 'text-white' : 'text-muted-foreground'
                  }`} />
                </div>
                
                <div className="text-right">
                  <Badge variant="outline" className={rarityColors[achievement.rarity as keyof typeof rarityColors]}>
                    {achievement.rarity}
                  </Badge>
                  {achievement.unlocked && (
                    <div className="mt-2">
                      <Badge className="bg-accent-gradient text-white border-0 text-xs">
                        +{achievement.xp} XP
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className={`font-bold ${
                    achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
                
                {achievement.unlocked ? (
                  <div className="flex items-center text-sm text-green-400">
                    <Trophy className="h-4 w-4 mr-2" />
                    <span>Unlocked {achievement.unlockedDate}</span>
                  </div>
                ) : achievement.progress !== undefined ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">
                        {achievement.progress} / {achievement.target}
                      </span>
                    </div>
                    
                    <Progress value={progress} className="h-2" />
                    
                    <div className="text-xs text-primary">
                      {progress.toFixed(0)}% Complete
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Not yet unlocked
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Achievements */}
      <Card className="glass p-6 transition-glass hover:shadow-glow">
        <h3 className="text-xl font-bold text-foreground mb-6">Recent Achievements</h3>
        
        <div className="space-y-4">
          {achievements.filter(a => a.unlocked).slice(-3).map((achievement) => {
            const Icon = achievement.icon;
            
            return (
              <div key={achievement.id} className="flex items-center justify-between p-4 bg-glass-gradient rounded-lg border border-glass-border">
                <div className="flex items-center space-x-4">
                  <div className="bg-success-gradient p-3 rounded-lg shadow-luxury">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-green-400">
                      Unlocked {achievement.unlockedDate}
                    </p>
                  </div>
                </div>
                
                <Badge className="bg-accent-gradient text-white border-0">
                  +{achievement.xp} XP
                </Badge>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Achievements;