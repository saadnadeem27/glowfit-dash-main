import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  gradient?: "primary" | "accent" | "success";
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  gradient = "primary",
  className
}: StatsCardProps) {
  const gradientClass = {
    primary: "bg-primary-gradient",
    accent: "bg-accent-gradient",
    success: "bg-success-gradient"
  }[gradient];

  const changeColor = {
    positive: "text-green-400",
    negative: "text-red-400",
    neutral: "text-muted-foreground"
  }[changeType];

  return (
    <Card className={cn(
      "glass transition-glass hover:shadow-glow p-6 group cursor-pointer hover-lift animate-scale-in",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "p-3 rounded-xl shadow-luxury group-hover:scale-110 transition-transform duration-300",
          gradientClass
        )}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        {change && (
          <span className={cn("text-sm font-medium", changeColor)}>
            {change}
          </span>
        )}
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </Card>
  );
}