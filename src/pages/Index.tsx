import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ConsultantCard } from "@/components/ConsultantCard";
import { CategoryChip } from "@/components/CategoryChip";
import { MobileNav } from "@/components/MobileNav";
import { Search, Brain, Code, LineChart, Sparkles, Zap, Database } from "lucide-react";
import { useState } from "react";
import consultant1 from "@/assets/consultant-1.jpg";
import consultant2 from "@/assets/consultant-2.jpg";
import consultant3 from "@/assets/consultant-3.jpg";

const categories = [
  { icon: Brain, label: "Machine Learning" },
  { icon: Code, label: "Desarrollo IA" },
  { icon: LineChart, label: "Data Science" },
  { icon: Sparkles, label: "GPT & LLMs" },
  { icon: Zap, label: "Automatización" },
  { icon: Database, label: "Big Data" },
];

const consultants = [
  {
    name: "Carlos Mendoza",
    title: "Experto en ML & Deep Learning",
    avatar: consultant1,
    rating: 4.9,
    reviews: 127,
    priceFrom: "150",
    location: "México",
    verified: true,
    tags: ["Machine Learning", "TensorFlow", "Python"],
  },
  {
    name: "Ana Rodríguez",
    title: "Especialista en NLP & ChatGPT",
    avatar: consultant2,
    rating: 5.0,
    reviews: 89,
    priceFrom: "200",
    location: "España",
    verified: true,
    tags: ["GPT", "NLP", "Chatbots"],
  },
  {
    name: "Miguel Torres",
    title: "Consultor de Automatización IA",
    avatar: consultant3,
    rating: 4.8,
    reviews: 156,
    priceFrom: "120",
    location: "Argentina",
    verified: true,
    tags: ["Automatización", "RPA", "APIs"],
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-card/95 backdrop-blur-lg border-b border-border z-40 px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Autologics
            </h1>
            <p className="text-xs text-muted-foreground">Encuentra tu experto en IA</p>
          </div>
          <Button size="sm" variant="outline" className="border-primary/50">
            <Sparkles className="w-4 h-4 mr-1" />
            Premium
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar consultores o servicios..."
            className="pl-10 bg-background"
          />
        </div>
      </header>

      {/* Categories */}
      <section className="px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Categorías</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <CategoryChip
              key={index}
              icon={category.icon}
              label={category.label}
              active={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            />
          ))}
        </div>
      </section>

      {/* Featured Badge */}
      <section className="px-4 mb-6">
        <div className="bg-gradient-tech rounded-xl p-4 border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">¡Nuevo en Autologics!</h3>
              <p className="text-sm text-muted-foreground">
                Obtén 20% off en tu primera consultoría
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants List */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Consultores Destacados</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            Ver todos
          </Button>
        </div>
        
        <div className="space-y-3">
          {consultants.map((consultant, index) => (
            <ConsultantCard key={index} {...consultant} />
          ))}
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="px-4 mt-8">
        <h2 className="text-lg font-semibold mb-4">Vistos Recientemente</h2>
        <div className="space-y-3">
          <ConsultantCard {...consultants[1]} />
        </div>
      </section>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
};

export default Index;
