import { LucideIcon } from "lucide-react";

interface CategoryChipProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const CategoryChip = ({ icon: Icon, label, active = false, onClick }: CategoryChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all flex-shrink-0 w-20 ${
        active
          ? "bg-primary text-primary-foreground border-primary shadow-glow"
          : "bg-card border-border hover:border-primary/50"
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs font-medium text-center leading-tight">{label}</span>
    </button>
  );
};
