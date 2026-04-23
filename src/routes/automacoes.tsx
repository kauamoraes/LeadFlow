import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plus, Zap, Clock, Flame, Bell } from "lucide-react";
import { automations as initial } from "@/lib/mock-data";
import { toast } from "sonner";

export const Route = createFileRoute("/automacoes")({
  component: AutomacoesPage,
  head: () => ({
    meta: [
      { title: "Automações — LeadFlow AI" },
      { name: "description", content: "Crie automações inteligentes para seus leads." },
    ],
  }),
});

const iconMap: Record<string, typeof Zap> = { zap: Zap, clock: Clock, flame: Flame, bell: Bell };

function AutomacoesPage() {
  const [items, setItems] = useState(initial);

  const toggle = (id: string) => {
    setItems((prev) => prev.map((a) => (a.id === id ? { ...a, active: !a.active } : a)));
    const a = items.find((x) => x.id === id);
    toast.success(`Automação "${a?.name}" ${a?.active ? "desativada" : "ativada"}`);
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-[1200px] space-y-6 p-8">
        <header className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Automações</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {items.filter((i) => i.active).length} de {items.length} automações ativas.
            </p>
          </div>
          <Button onClick={() => toast.info("Builder em breve!")}>
            <Plus className="h-4 w-4" /> Criar automações
          </Button>
        </header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {items.map((a) => {
            const Icon = iconMap[a.icon] ?? Zap;
            return (
              <Card key={a.id} className="transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-semibold">{a.name}</h3>
                          <p className="mt-1 text-xs text-muted-foreground">{a.description}</p>
                        </div>
                        <Switch checked={a.active} onCheckedChange={() => toggle(a.id)} />
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                        <div className="flex items-center gap-3 text-xs">
                          <span className="rounded-md bg-muted px-2 py-1 font-medium text-muted-foreground">
                            Quando: {a.trigger}
                          </span>
                          <span
                            className={
                              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium " +
                              (a.active
                                ? "bg-[color:var(--color-success)]/15 text-[color:var(--color-success)]"
                                : "bg-muted text-muted-foreground")
                            }
                          >
                            <span
                              className={
                                "h-1.5 w-1.5 rounded-full " +
                                (a.active
                                  ? "bg-[color:var(--color-success)]"
                                  : "bg-muted-foreground")
                              }
                            />
                            {a.active ? "Ativa" : "Pausada"}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground tabular-nums">
                          {a.executions.toLocaleString("pt-BR")} execuções
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
