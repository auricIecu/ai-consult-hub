import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  featured?: boolean;
}

export const ServiceCard = ({ 
  title, 
  description, 
  price, 
  duration, 
  category,
  featured = false 
}: ServiceCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all hover:shadow-glow ${featured ? 'border-primary shadow-glow' : ''}`}>
      {featured && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground border-0">
            Popular
          </Badge>
        </div>
      )}
      <CardHeader>
        <Badge variant="secondary" className="w-fit mb-2">
          {category}
        </Badge>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span>{duration}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground">USD</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={featured ? "default" : "outline"}>
          Contratar Ahora
        </Button>
      </CardFooter>
    </Card>
  );
};
