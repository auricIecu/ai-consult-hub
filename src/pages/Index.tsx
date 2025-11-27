import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { HowItWorks } from "@/components/HowItWorks";
import { Sparkles, Bot, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const services = [
  {
    title: "Consultoría IA Básica",
    description: "Identifica oportunidades de IA en tu negocio y crea un plan de acción",
    price: "$299",
    duration: "1 hora",
    category: "Inicial",
  },
  {
    title: "Implementación IA",
    description: "Desarrolla y despliega soluciones de IA personalizadas para tu empresa",
    price: "$1,299",
    duration: "4 sesiones",
    category: "Avanzado",
    featured: true,
  },
  {
    title: "Automatización con IA",
    description: "Automatiza procesos clave usando inteligencia artificial",
    price: "$899",
    duration: "2 sesiones",
    category: "Intermedio",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-primary/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Expertos en Inteligencia Artificial</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforma tu negocio con
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Consultoría de IA
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conecta con expertos certificados que te guiarán en cada paso de tu transformación digital con inteligencia artificial
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg shadow-glow">
              <Bot className="w-5 h-5 mr-2" />
              Ver Servicios
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-primary/50 hover:bg-primary/10">
              <TrendingUp className="w-5 h-5 mr-2" />
              Saber más
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Elige el plan perfecto para comenzar tu transformación con IA
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-card border border-primary/20 rounded-2xl p-8 md:p-12 shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Agenda tu primera consultoría hoy y descubre cómo la IA puede revolucionar tu negocio
          </p>
          <Button size="lg" className="text-lg shadow-glow">
            <Sparkles className="w-5 h-5 mr-2" />
            Contactar Ahora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 IA Consultores. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
