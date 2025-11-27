import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle2 } from "lucide-react";

interface ConsultantCardProps {
  name: string;
  title: string;
  avatar: string;
  rating: number;
  reviews: number;
  priceFrom: string;
  location: string;
  verified?: boolean;
  tags: string[];
}

export const ConsultantCard = ({
  name,
  title,
  avatar,
  rating,
  reviews,
  priceFrom,
  location,
  verified = false,
  tags,
}: ConsultantCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-glow transition-all cursor-pointer active:scale-98">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="w-14 h-14 border-2 border-primary/20">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-1">
              <h3 className="font-semibold truncate">{name}</h3>
              {verified && (
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
              )}
            </div>
            
            <p className="text-sm text-muted-foreground truncate mb-2">{title}</p>
            
            <div className="flex items-center gap-3 text-xs mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-primary text-primary" />
                <span className="font-semibold">{rating}</span>
                <span className="text-muted-foreground">({reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.slice(0, 2).map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-xs px-2 py-0">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-muted-foreground">Desde</span>
              <span className="text-lg font-bold text-primary">${priceFrom}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
