import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Jan', calories: 2400, workouts: 12, steps: 8500 },
  { name: 'Feb', calories: 2210, workouts: 15, steps: 9200 },
  { name: 'Mar', calories: 2290, workouts: 18, steps: 9800 },
  { name: 'Apr', calories: 2000, workouts: 14, steps: 8900 },
  { name: 'May', calories: 2181, workouts: 20, steps: 10200 },
  { name: 'Jun', calories: 2500, workouts: 22, steps: 11000 },
  { name: 'Jul', calories: 2100, workouts: 19, steps: 9500 },
];

interface ActivityChartProps {
  type?: "calories" | "workouts" | "steps";
  title?: string;
}

export function ActivityChart({ type = "calories", title }: ActivityChartProps) {
  const getDataKey = () => {
    switch (type) {
      case "workouts": return "workouts";
      case "steps": return "steps";
      default: return "calories";
    }
  };

  const getGradientId = () => `gradient-${type}`;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass p-3 rounded-lg border border-glass-border">
          <p className="text-foreground font-medium">{`${label}`}</p>
          <p className="text-primary">
            {`${payload[0].dataKey}: ${payload[0].value.toLocaleString()}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="glass p-6 transition-glass hover:shadow-glow">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground">{title || `${type.charAt(0).toUpperCase() + type.slice(1)} Analytics`}</h3>
        <p className="text-muted-foreground text-sm">Last 7 months performance</p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={getGradientId()} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(263, 70%, 50%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(263, 70%, 50%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey={getDataKey()}
              stroke="hsl(263, 70%, 50%)"
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#${getGradientId()})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}