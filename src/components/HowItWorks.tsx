import { MessageSquare, Calendar, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Elige tu servicio",
    description: "Selecciona el servicio de consultoría de IA que mejor se adapte a tus necesidades"
  },
  {
    icon: Calendar,
    title: "2. Agenda tu sesión",
    description: "Programa una videollamada en el horario que más te convenga"
  },
  {
    icon: Sparkles,
    title: "3. Transforma tu negocio",
    description: "Obtén soluciones personalizadas y comienza a implementar IA"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Tres simples pasos para comenzar tu transformación con IA
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card border border-border hover:border-primary transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-tech flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
