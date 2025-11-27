import { Home, Search, MessageSquare, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Inicio", id: "home" },
  { icon: Search, label: "Buscar", id: "search" },
  { icon: MessageSquare, label: "Mensajes", id: "messages" },
  { icon: User, label: "Perfil", id: "profile" },
];

export const MobileNav = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""} transition-transform`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
