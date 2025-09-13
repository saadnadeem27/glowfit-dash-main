import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Dumbbell, 
  Clock, 
  Flame, 
  Play, 
  Heart,
  Search,
  Filter,
  Star,
  TrendingUp
} from "lucide-react";

const workoutPlans = [
  {
    id: 1,
    name: "HIIT Cardio Blast",
    duration: "30 min",
    difficulty: "High",
    calories: 350,
    type: "Cardio",
    rating: 4.8,
    exercises: 8,
    description: "High-intensity interval training to boost metabolism",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300"
  },
  {
    id: 2,
    name: "Upper Body Strength",
    duration: "45 min", 
    difficulty: "Medium",
    calories: 280,
    type: "Strength",
    rating: 4.9,
    exercises: 12,
    description: "Build lean muscle with targeted upper body exercises",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300"
  },
  {
    id: 3,
    name: "Core Power",
    duration: "20 min",
    difficulty: "Medium", 
    calories: 180,
    type: "Core",
    rating: 4.7,
    exercises: 10,
    description: "Strengthen your core with dynamic movements",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300"
  },
  {
    id: 4,
    name: "Full Body Circuit",
    duration: "50 min",
    difficulty: "High",
    calories: 420,
    type: "Circuit",
    rating: 4.9,
    exercises: 15,
    description: "Complete workout targeting all major muscle groups",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300"
  },
  {
    id: 5,
    name: "Yoga Flow",
    duration: "35 min",
    difficulty: "Low",
    calories: 150,
    type: "Flexibility",
    rating: 4.6,
    exercises: 12,
    description: "Improve flexibility and mindfulness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300"
  },
  {
    id: 6,
    name: "Lower Body Power",
    duration: "40 min",
    difficulty: "High", 
    calories: 380,
    type: "Strength",
    rating: 4.8,
    exercises: 10,
    description: "Build explosive power in legs and glutes",
    image: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=300"
  }
];

const difficultyColors = {
  Low: "bg-green-500/20 text-green-400 border-green-500/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  High: "bg-red-500/20 text-red-400 border-red-500/30"
};

const typeColors = {
  Cardio: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Strength: "bg-blue-500/20 text-blue-400 border-blue-500/30", 
  Core: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Circuit: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  Flexibility: "bg-teal-500/20 text-teal-400 border-teal-500/30"
};

const Workouts = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = ["All", "Cardio", "Strength", "Core", "Circuit", "Flexibility"];

  const filteredWorkouts = workoutPlans.filter(workout => {
    const matchesFilter = selectedFilter === "All" || workout.type === selectedFilter;
    const matchesSearch = workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Workout Library</h1>
        <p className="text-muted-foreground">Discover and track your favorite workouts</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search workouts..." 
              className="pl-10 glass border-glass-border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Button variant="outline" className="glass border-glass-border hover:bg-glass-gradient">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              className={`${
                selectedFilter === filter 
                  ? "bg-primary-gradient text-white shadow-glow border-0" 
                  : "glass border-glass-border hover:bg-glass-gradient"
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="library" className="space-y-6">
        <TabsList className="glass">
          <TabsTrigger value="library">Workout Library</TabsTrigger>
          <TabsTrigger value="favorites">My Favorites</TabsTrigger>
          <TabsTrigger value="history">Recent History</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="space-y-6">
          {/* Workout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map((workout) => (
              <Card key={workout.id} className="glass transition-glass hover:shadow-glow overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img 
                    src={workout.image} 
                    alt={workout.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className={difficultyColors[workout.difficulty as keyof typeof difficultyColors]}>
                      {workout.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className={typeColors[workout.type as keyof typeof typeColors]}>
                      {workout.type}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {workout.name}
                    </h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{workout.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{workout.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {workout.duration}
                    </div>
                    <div className="flex items-center">
                      <Flame className="h-4 w-4 mr-1 text-orange-400" />
                      {workout.calories} cal
                    </div>
                    <div className="flex items-center">
                      <Dumbbell className="h-4 w-4 mr-1" />
                      {workout.exercises} exercises
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary-gradient hover:shadow-glow transition-all duration-300">
                      <Play className="h-4 w-4 mr-2" />
                      Start Workout
                    </Button>
                    <Button variant="outline" size="icon" className="glass border-glass-border hover:bg-glass-gradient">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-6">
          <Card className="glass p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold text-foreground mb-2">No Favorites Yet</h3>
            <p className="text-muted-foreground mb-4">Start adding workouts to your favorites to see them here</p>
            <Button className="bg-primary-gradient">
              Browse Workouts
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <div className="space-y-4">
            {[1,2,3].map((i) => (
              <Card key={i} className="glass p-6 transition-glass hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-success-gradient p-3 rounded-lg">
                      <Dumbbell className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">HIIT Cardio Blast</h3>
                      <p className="text-sm text-muted-foreground">Completed yesterday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="font-medium text-foreground">420 cal</p>
                      <p className="text-muted-foreground">Burned</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-foreground">30 min</p>
                      <p className="text-muted-foreground">Duration</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-green-400">Excellent</p>
                      <p className="text-muted-foreground">Performance</p>
                    </div>
                    <Button variant="outline" size="sm" className="glass border-glass-border">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Workouts;