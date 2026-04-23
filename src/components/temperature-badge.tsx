import { Flame, CloudSun, Snowflake } from "lucide-react";
import type { LeadTemperature } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const config: Record<LeadTemperature, { label: string; icon: typeof Flame; cls: string }> = {
  quente: {
    label: "Quente",
    icon: Flame,
    cls: "bg-[color:var(--color-hot)]/10 text-[color:var(--color-hot)] border-[color:var(--color-hot)]/20",
  },
  morno: {
    label: "Morno",
    icon: CloudSun,
    cls: "bg-[color:var(--color-warm)]/10 text-[color:var(--color-warm)] border-[color:var(--color-warm)]/20",
  },
  frio: {
    label: "Frio",
    icon: Snowflake,
    cls: "bg-[color:var(--color-cold)]/10 text-[color:var(--color-cold)] border-[color:var(--color-cold)]/20",
  },
};

export function TemperatureBadge({
  value,
  className,
}: {
  value: LeadTemperature;
  className?: string;
}) {
  const c = config[value];
  const Icon = c.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium",
        c.cls,
        className,
      )}
    >
      <Icon className="h-3 w-3" />
      {c.label}
    </span>
  );
}
